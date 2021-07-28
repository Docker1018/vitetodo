import type { RouteRecordRaw } from "vue-router"

interface RouteInfo {
  childs: Childs;
  pathPoint: Array<string>;
  name: string;
  componentPath: string;
}

interface Childs {
  [key: string]: RouteInfo;
}

const viewFile = import.meta.globEager('../views/**/*.vue');
const routesObj: RouteInfo = { childs: {}, pathPoint: [], name: "", componentPath: ""};

// create deep child finder
for(const filePath of Object.keys(viewFile)) {
  // get file names 
  const pathPoint = filePath.replace("../", "").replace("views/", "").replace(".vue", "").split("/");
  console.log(pathPoint, 111); 
  let _obj = routesObj;
  for(const pathKey of pathPoint) {
    const name = pathPoint.join("");
    if(!_obj.childs[pathKey]) {
      _obj.childs[pathKey] = {
        childs: {},
        pathPoint,
        name,
        componentPath: `/${pathPoint.join("/")}`
      };
    }
    _obj = _obj.childs[pathKey];
  }
}

// create routes uri
const CreateRoutes = (_childs: Childs) => {
  const currentRoute: Array<RouteRecordRaw> = [];
  for (const key in _childs) {
    let childRoute: Array<RouteRecordRaw> = [];
    const { pathPoint, componentPath, name, childs }: RouteInfo = _childs[key];
    // 如果有child
    if (Object.keys(childs).length > 0) {
      childRoute = CreateRoutes(childs);
    }
    // 處理變數 ex _id 轉 :id?
    for (let i = 0; i < pathPoint.length; i++) {
      if (pathPoint[i].indexOf("_") === 0) {
        pathPoint[i] = `:${pathPoint[i].replace("_", "")}?`;
      }
    }
    // 加入 routers
    currentRoute.push({
      path: `/${pathPoint.join("/")}`.replace("/views", "").toLowerCase(),
      name,
      component: () => import(`../views${componentPath}.vue`),
      children: childRoute
    });
  }
  // console.log(currentRoute)
  return currentRoute;
};

const routes: Array<RouteRecordRaw> = CreateRoutes(routesObj.childs);
export default routes;
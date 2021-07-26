import { get } from "../../api/instance";
const router = {
  TEST: "/api/adsf"
}

export const apiTest = () => {
  // return router.TEST;
  return get(router.TEST);
}
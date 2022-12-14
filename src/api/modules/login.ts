import { Login } from "@/api/interface/index";
import { PORT1 } from "@/api/config/config";

import http from "@/api";

/**
 * @name 登录模块
 */
// * 用户登录接口
export const loginApi = (params: Login.ReqLoginForm) => {
  return http.post<Login.ResLogin>(PORT1 + `/login`, params);
};

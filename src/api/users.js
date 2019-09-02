import http from "@utils/https"

// 登录
export const loginApi = (username, password) => http.post("/users/login", { username, password })
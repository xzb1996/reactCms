import http from "@utils/https"

// 获取书籍
export const hotBooksApi = () => http.get("/users/list")
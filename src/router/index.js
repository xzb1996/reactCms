import {
    Login,
    UserAuth,
    UserInfo,
    HotBooks,
    PublicArticle,
    AddBooks,
    Home
} from "@pages"


export const layoutRouter = [
    {
        path: "/home",
        component: Home,
        icon: "home",
        key: "/home",
        name: "首页",
        meta: {
            auth: true
        }
    },
    {
        path: '/books',
        icon: "read",
        key: "/books",
        name: "书籍管理",
        children: [
            {
                path: '/books/addbooks',
                component: AddBooks,
                icon: "user",
                key: "/books/addbooks",
                name: "添加书籍",
                meta: {
                    auth: true
                }
            },
            {
                path: '/books/hotbooks',
                component: HotBooks,
                icon: "user",
                key: "/books/hotbooks",
                name: "热门书籍",
                meta: {
                    auth: true
                }
            },
            {
                path: '/books/publicarticle',
                component: PublicArticle,
                icon: "user",
                key: "/books/publicarticle",
                name: "发布书籍",
                meta: {
                    auth: true
                }
            }
        ]
    },
    {
        path: '/user',
        icon: "user",
        key: "/user",
        name: "用户管理",
        children: [
            {
                path: '/user/userauth',
                component: UserAuth,
                icon: "user",
                key: "/user/userauth",
                name: "权限管理",
                meta: {
                    auth: true
                }
            },
            {
                path: '/user/userinfo',
                component: UserInfo,
                icon: "user",
                key: "/user/userinfo",
                name: "个人信息",
                meta: {
                    auth: true
                }
            }
        ]
    },

]


export const nolayoutRouter = [
    {
        path: '/login',
        component: Login,
        key: "/login",
        name: "登录",
        meta: {
            auth: false
        }
    },
]


export const baseConfig = layoutRouter.concat(nolayoutRouter);
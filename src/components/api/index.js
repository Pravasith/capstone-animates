export const DOMAIN =
    process.env.NODE_ENV === "production"
        ? "api-animates-007.herokuapp.com"
        : "localhost:8000"

export const BASE = DOMAIN + "/api/v1"

export const BASE_URLS = {
    HOME: BASE + "/",
    POSTS: BASE + "/posts",
    USERS: BASE + "/users",
}

export const API_URLS = {
    REGISTER_USER: BASE_URLS.USERS + "/register",
    LOGIN: BASE_URLS.USERS + "/login",
}

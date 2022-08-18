export const DOMAIN =
    process.env.NODE_ENV === "production"
        ? "https://api-animates-007.herokuapp.com"
        : "http://localhost:8000"

export const BASE = DOMAIN + "/api/v1"

export const BASE_URLS = {
    HOME: BASE + "/",
    POSTS: BASE + "/posts",
    USERS: BASE + "/users",
}

export const API_URLS = {
    REGISTER_USER: BASE_URLS.USERS + "/register",
    LOGIN: BASE_URLS.USERS + "/login",

    NEW_POST: BASE_URLS.POSTS,
    ALL_POSTS: BASE_URLS.POSTS + "/all",
}

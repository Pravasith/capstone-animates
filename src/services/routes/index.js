export const DOMAIN =
    process.env.NODE_ENV === "production"
        ? "https://api-animates.herokuapp.com"
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

    UPDATE_USER: BASE_URLS.USERS + "?user_id=",

    NEW_POST: BASE_URLS.POSTS,
    DELETE_POST: BASE_URLS.POSTS + "?user_id=userId&post_id=postId",
    ALL_POSTS: BASE_URLS.POSTS + "/all",
    POSTS_BY_USER: BASE_URLS.POSTS + "?user_id=",
}

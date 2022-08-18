import Axios from "axios"

const requestData = {
    headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": "application/json",
    },
    // withCredentials: true // for cookie Auth
}

const GET = url => {
    return new Promise((resolve, reject) => {
        let data

        Axios.get(url, requestData)
            .then(res => {
                data = res.data
                resolve(data)
            })
            .catch(e => {
                console.error(e)
                reject(e)
            })
    })
}

const POST = (url, data) => {
    return new Promise((resolve, reject) => {
        let responseData

        Axios.post(url, data, requestData)
            .then(res => {
                responseData = res.data
                resolve(responseData)
            })
            .catch(e => {
                console.error(e)
                reject(e)
            })
    })
}

const PUT = (url, data) => {
    return new Promise((resolve, reject) => {
        let responseData

        Axios.put(url, data, requestData)
            .then(res => {
                responseData = res.data
                resolve(responseData)
            })
            .catch(e => {
                console.error(e)
                reject(e)
            })
    })
}

const DELETE = (url, data) => {
    return new Promise((resolve, reject) => {
        let responseData

        Axios.delete(url, requestData)
            .then(res => {
                responseData = res.data
                resolve(responseData)
            })
            .catch(e => {
                console.error(e)
                reject(e)
            })
    })
}

const api = {
    GET,
    POST,
    PUT,
    DELETE,
}

export default api

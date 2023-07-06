import axios from "axios"

export const APIUrl = (endpoint: string) => {
    return `http://localhost:5000/${endpoint}`
}

export const APIGet = async (endpoint: string) => {
    let url = APIUrl(endpoint)
    let response = await axios.get(url)
    return response.data
}

export const APIPost = async (endpoint: string, data: any) => {
    let url = APIUrl(endpoint)
    let response = await axios.post(url, data)
    return response.data
}

export const APIPut = async (endpoint: string, data: any) => {
    let url = APIUrl(endpoint)
    let response = await axios.put(url, data)
    return response.data
}

export const APIDelete = async (endpoint: string) => {
    let url = APIUrl(endpoint)
    let response = await axios.delete(url)
    return response.data
}

export const getUserByEmail = async (email: string) => APIGet(`users/${email}`);
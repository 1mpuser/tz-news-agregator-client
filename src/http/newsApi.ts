import { $authHost, $simpleHost } from "./index";
import { INewsItem } from "@/types/types";
import jwt_decode from 'jwt-decode'

export const registration = async (username: string, password : string) => {
    const {data} = await $simpleHost.post('api/auth/registration', {
        username,
        password
    });
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (username: string, password : string) => {
    const {data} = await $simpleHost.post('api/auth/login', {
        username,
        password
    });
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const postItem = async (item: INewsItem) => {
    const {title, text, author, dateOfCreate} = item
    const { data } = await $authHost.post('api/news/', {
        title,
        text,
        author, 
        dateOfCreate
    })
    console.log(data);
    return data
}
export const deleteItem = async (id : string | number) =>{
    const { data } = await $authHost.delete(`api/news/${id}`);
    console.log(data);
    return data;
}

export const editElem = async (item : INewsItem, id : string | number) => {
    const { title, text, author, dateOfCreate } = item;
    const { data } = await $authHost.put(`api/news/${id}`, {
        title, text, author, dateOfCreate
    })
    console.log(data)
    return data;
}
import { $host } from ".";
import axios from 'axios'
import { INewsItem } from '../types/types';

export const fetchPosts = async () => {
    const arr = axios.get(`${process.env.API_URL}api/news`);
    return arr
}
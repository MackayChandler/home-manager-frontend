import axios from "axios";
import { APIUrl } from "./services";
import useSWR from "swr";
import { HomeDTO } from "../models/models";

const fetcher = (url: string) => axios.get(url).then(res => res.data);


export const useHomesByUser = (userId: number) => {
    const {data, error, isLoading, mutate} = useSWR<HomeDTO[]>(APIUrl(`homes/${userId}`), fetcher);
    
    return {
        homes: data,
        error,
        isLoading,
        mutate
    }
}
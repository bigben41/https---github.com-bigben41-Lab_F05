import axios from "axios";
import {CarparkInfo} from "../data/CarparkInfo.ts";
import {CarkparkVacancy} from "../data/CarparkVacancy.ts";



export const getCarparkInfo = async ():Promise<CarparkInfo> => {
    const response = await axios.get<CarparkInfo>
    ("https://api.data.gov.hk/v1/carpark-info-vacancy")
    return response.data
}

export const getCarparkVacancy = async ():Promise<CarkparkVacancy> => {
    const response = await axios.get<CarkparkVacancy>
    ("https://api.data.gov.hk/v1/carpark-info-vacancy?data=vacancy")
    return response.data
}


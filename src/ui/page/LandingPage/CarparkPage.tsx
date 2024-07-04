import {useEffect, useState} from "react";
import mockData from "./responsee.json"
import Container from "react-bootstrap/Container";
import NavbarHead from "../../component/NavbarHead.tsx";
import NavbarInput from "../../component/NavbarInput.tsx";
import CarparkTable from "../../component/CarparkTable.tsx";
import TableLoadingSpinner from "../../component/TableLoadingSpinner.tsx";
import {CarparkVacancyTableResult} from "../../../data/CarparkVacancyTableResult.ts";
import  * as OpenCarParkApi from "../../../api/OpenCarParkApi.ts"
import {convertResult} from "../../../util/ConvertResult.ts";

export default function CarparkPage(){
    const [tableResult,setTableResult]
        =useState<CarparkVacancyTableResult[]|undefined>(undefined)
    const [filterDistrict, setFilterDistrict] = useState<string>("")
    const [filterVehicleType, setFilterVehicleType] = useState<string>("privateCar")

    const getCarparkVacancyTableResult = async () => {
        //setData(mockData);
        const carparkInfo = await OpenCarParkApi.getCarparkInfo();
        const carparkVacancy = await  OpenCarParkApi.getCarparkVacancy();
        convertResult(carparkInfo,carparkVacancy)
        setTableResult(convertResult(carparkInfo,carparkVacancy))
        }


    useEffect(() => {
        getCarparkVacancyTableResult()
    }, []);

    return(
        <Container>
            <NavbarHead/>
            <NavbarInput filterDistrict={filterDistrict}
            setFilterDistrict={setFilterDistrict}
            filterVehicleType={filterVehicleType}
            setFilterVehicleType={setFilterVehicleType}/>
            {
                tableResult
                ?<CarparkTable tableResult={tableResult}
                               filterDistrict={filterDistrict}
                                filterVehicleType={filterVehicleType}/>:<TableLoadingSpinner/>
            }
        </Container>
    )
}

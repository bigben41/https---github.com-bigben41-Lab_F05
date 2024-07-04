import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";
import CarparkTableRow from "./CarparkTableRow.tsx";
import {CarparkVacancyTableResult} from "../../data/CarparkVacancyTableResult.ts";

type Props = {
    tableResult : CarparkVacancyTableResult[]
    filterDistrict: string
    filterVehicleType:string
}

export default function CarparkTable({tableResult,filterDistrict,filterVehicleType}: Props) {
    const renderVacancyHeader = () =>{
        if(filterVehicleType === "privateCar"){
            return <th>Total Vacancy</th>
        } else if (filterVehicleType === "LGV"){
            return <th>LGV Vacancy</th>
        } else if (filterVehicleType === "HGV"){
            return <th>HGV Vacancy</th>
        } else if (filterVehicleType === "coach"){
            return <th>Coach Vacancy</th>
        } else {
            return <th>MotorCycle Vacancy</th>
        }
    }

    return (
        <Container>
            <Table striped bordered responsive className="mt-3">
                <thead>
                <tr>
                    <th style={{width: 20}}>image</th>
                    <th>Name</th>
                    <th>Address</th>
                    {renderVacancyHeader()}
                    <th style={{width: 20}}>Google <br/> Map</th>
                </tr>
                </thead>
                <tbody>
                {
                    tableResult.filter((item)=>{
                        return item.carparkInfo.district?.toLowerCase().includes(filterDistrict.toLowerCase())
                    }).map((item) => (
                        <CarparkTableRow tableResult={item}
                                         filterVehicleType={filterVehicleType}
                                         key={item.carparkInfo.park_Id}/>
                    ))
                }
                </tbody>
            </Table>
        </Container>
    );

}
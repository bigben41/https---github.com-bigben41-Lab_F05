
import {Button} from "react-bootstrap";
import {CarparkVacancyTableResult, VehicleType} from "../../data/CarparkVacancyTableResult.ts";

type Props = {
    tableResult:CarparkVacancyTableResult
    filterVehicleType:string
}

export default function CarparkTableRow ({tableResult,filterVehicleType}:Props){

    return (
        <tr>
            <td>
                <img width="100px"
                     src={tableResult.carparkInfo.renditionUrls?.carpark_photo||tableResult.carparkInfo.renditionUrls?.square}/>
            </td>
            <td>{tableResult.carparkInfo.name}</td>
            <td>{tableResult.carparkInfo.displayAddress}</td>
            <td>{tableResult[filterVehicleType as VehicleType]}</td>
            <td>
                <Button variant="primary"
                onClick={()=>{
                    window.open(`https://www.google.com/maps/?q=${tableResult.carparkInfo.latitude},${tableResult.carparkInfo.longitude}`,'_blank');
                }}
                >Map
                </Button>

            </td>
        </tr>
    );

}
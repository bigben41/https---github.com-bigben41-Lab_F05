import {CarparkInfo} from "../data/CarparkInfo.ts";
import {CarkparkVacancy} from "../data/CarparkVacancy.ts";
import {CarparkVacancyTableResult} from "../data/CarparkVacancyTableResult.ts";

export const convertResult = (carparkinfo: CarparkInfo, carparkVacancy: CarkparkVacancy):CarparkVacancyTableResult[] =>{
    const combinedData: CarparkVacancyTableResult[] = [];

    const carparkVacancyMap = new Map(carparkVacancy.results.map((item)=>[item.park_Id, item]));

    for (const item1 of carparkinfo.results){
        const commonId = item1.park_Id;

        if (carparkVacancyMap.has(commonId)){
            const combinedItem : CarparkVacancyTableResult={
                carparkInfo:item1,
                privateCar:carparkVacancyMap.get(commonId)?.privateCar?carparkVacancyMap.get(commonId)!.privateCar![0].vacancy:0,
                LGV:carparkVacancyMap.get(commonId)?.LGV?carparkVacancyMap.get(commonId)!.LGV![0].vacancy:0,
                HGV:carparkVacancyMap.get(commonId)?.HGV?carparkVacancyMap.get(commonId)!.HGV![0].vacancy:0,
                coach:carparkVacancyMap.get(commonId)?.coach?carparkVacancyMap.get(commonId)!.coach![0].vacancy:0,
                motorCycle:carparkVacancyMap.get(commonId)?.motorCycle?carparkVacancyMap.get(commonId)!.motorCycle![0].vacancy:0
            }
            combinedData.push(combinedItem);
        }

    }
    return combinedData
}
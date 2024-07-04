import { Result} from "./CarparkInfo.ts";

export interface CarparkVacancyTableResult {
    carparkInfo: Result;
    privateCar: number;
    LGV: number;
    HGV: number;
    coach: number;
    motorCycle: number;
}

export type VehicleType = "privateCar" |"LGV"|"HGV"|"coach"|"motorCycle"
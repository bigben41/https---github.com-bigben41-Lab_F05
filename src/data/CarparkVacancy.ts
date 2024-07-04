export interface CarkparkVacancy {
    results: Result[];
}

export interface Result {
    park_Id: string;
    privateCar?: PrivateCar[]
    LGV?: LGV[]
    HGV?: HGV[]
    coach?: Coach[]
    motorCycle?: MotorCycle[]
}

export interface PrivateCar {
    vacancy: number;
}

export interface LGV {
    vacancy: number;
}

export interface HGV {
    vacancy: number;
}

export interface MotorCycle {
    vacancy: number;
}

export interface Coach {
    vacancy: number;
}
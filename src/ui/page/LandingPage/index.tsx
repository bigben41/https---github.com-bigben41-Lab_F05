import React from "react";

import NavbarHead from "../../component/NavbarHead.tsx";
import NavbarInput from "../../component/NavbarInput.tsx";
import CarparkTable from "../../component/CarparkTable.tsx";
import mockData from "./responsee.json";
import {CarparkData} from "../../../data/CarparkData.ts";

type Props={

}

type State={
    carparkData:undefined|CarparkData
}
export default class LandingPage extends React.Component<Props,State>{
    constructor(props:Props) {
        super(props);
        this.state={
            carparkData:undefined
        }
    }

    componentDidMount() {
        this.setState(
            {carparkData:mockData}
        )
    }

    render() {
        return (
            <>
                <NavbarHead/>
                <NavbarInput/>
                <CarparkTable/>
            </>
        );
    }
}
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap";

type Props = {
    filterDistrict:string
    setFilterDistrict: React.Dispatch<React.SetStateAction<string>>
    filterVehicleType:string
    setFilterVehicleType: React.Dispatch<React.SetStateAction<string>>
}
export default function NavbarInput({filterDistrict,setFilterDistrict,
                                    filterVehicleType,setFilterVehicleType}:Props) {
    return (
            <>
                <Container style={{padding:"20px",border:"black solid 2px",borderRadius:"10px"}}>
                    <br/>
                    <Row>
                        <Col sm={3} style={{fontSize:20}}>District</Col>
                        <Col sm={8}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="text" placeholder="e.g. Kwun Tong" value={filterDistrict}
                                onChange={(event)=>{
                                    setFilterDistrict(event.currentTarget.value);
                                }}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={3} style={{fontSize:20}}>Vehicle Type</Col>
                        <Col sm={8}>
                            <Form.Select value={filterVehicleType} aria-label="Default select example"
                            onChange={(event)=>{
                                setFilterVehicleType(event.currentTarget.value)
                            }}>
                                <option>Private Car</option>
                                <option value="LGV">LGV</option>
                                <option value="HGV">HGV</option>
                                <option value="coach">Coach</option>
                                <option value="motorCycle">Motorcycle</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <br/>
                    <Button variant="primary">Search</Button>
                </Container>
            </>
    );
}
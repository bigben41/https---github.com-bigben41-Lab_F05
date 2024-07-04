import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarHead() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#">Parking Vacancy</Navbar.Brand>
            </Container>
        </Navbar>
    );
}
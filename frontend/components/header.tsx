import { useAuth0 } from "@auth0/auth0-react";
import { Col, Container, Loading, Row } from "@nextui-org/react";
import LoginButton from "./auth/login-button";
import LogoutButton from "./auth/logout-button";

const Header = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    return <Container 
        color="gradient"
        gap={0}
    >
        <Row gap={1} align="center">
            <Col>
                ☁️ 📦 
            </Col>
            <Col>
                cloud box
            </Col> 
            <Col> {
                isLoading 
                    ? <Loading type="points" /> 
                    : isAuthenticated 
                        ? <LogoutButton/>
                        : <LoginButton/>
            } </Col>
        </Row>
    </Container>;
}

export default Header;
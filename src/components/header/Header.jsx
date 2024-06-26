import { AppBar, Toolbar, styled } from "@mui/material";
import { Link } from "react-router-dom";

const Componets = styled(AppBar)`
    background: #ffffff;
    color: #000
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`;


const Header = () => {
    return(
        <Componets>
            <Container>
                <Link to='/'>Home</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contect'>CONTECT</Link>
                <Link to='/login'>Logout</Link>
            </Container>
        </Componets>
    )
}
export default Header;
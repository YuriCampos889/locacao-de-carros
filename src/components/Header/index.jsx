import { HeaderContainer } from './styles';
import logo from "../../assets/logo.png";

export default function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="Logo" />
            <h4>Header</h4>
        </HeaderContainer>
    );
}
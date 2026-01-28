import { HeaderContainer, HeaderDiv } from './styles';
import logo from "../../assets/logo.png";
import helpIcon from "../../assets/Help circle.png";
import WhatsappIcon from "../../assets/image 4.png";
import Language from "../../assets/Globe.png"
import BarIcon from "../../assets/Minus.png"
import UserIcon from "../../assets/User.png"
import MenuIcon from "../../assets/Menu.png"   

export default function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="Logo" /> 
            <button onClick={() => { 
                window.location.href = "/";
            }}>
                <img src={helpIcon} alt="Logo" />
                Ajuda
            </button>

            <button onClick={() => {
                window.location.href = "/";
            }}>
                <img src={WhatsappIcon} alt="Logo" />
                Fale Conosco
            </button>

            <HeaderDiv>
            <button onClick={() => {
                window.location.href = "/";
            }}>
                <img src={Language} alt="Globo" />
                PT-BR
            </button>
            <img src={BarIcon} alt="" />

            <button onClick={() => {
                window.location.href = "/";
            }}>
                <img src={UserIcon} alt="Globo" />
                Login
            </button>

            <button onClick={() => {
                window.location.href = "/";
            }}>
                <img src={MenuIcon} alt="Globo" />
            </button>
            </HeaderDiv>

            
        </HeaderContainer>
    );
}

function HelpButton() {
    return (
        <button onClick={() => {
            window.location.href = "/";
        }}>
            <img src={helpIcon} alt="Logo" />
        </button>
    );
}
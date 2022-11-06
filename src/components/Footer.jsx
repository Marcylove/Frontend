import facebook from '../assets/img/facebook-white.png';
import instagram from '../assets/img/instagram-white.png';
import twitter from '../assets/img/twitter-white.png';
import whatsapp from '../assets/img/whatsapp-white.png';
import { AiOutlineSkype } from 'react-icons/ai';


export default function Footer() {  return (
    <>
        <footer>
        <div className="footer-info">
            <div className="footer-info-copy">
                <p className="footer-info-copy-p"> <AiOutlineSkype /> © Lorem ipsum dolor, sit amet</p>
            </div>
            <div className="footer-info-icon">
                <img src={facebook} alt="Facebook" />
                <img src={instagram} alt="Instagram" />
                <img src={twitter} alt="Twitter" />
                <img src={whatsapp} alt="Whatsapp" />                
            </div>
        </div>
        
    </footer>
    </>
  )
}

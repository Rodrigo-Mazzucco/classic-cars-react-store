import { FaFacebook, FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Contato() {
    return (
        <div className="container">
            <h2>Contato</h2>
            <hr />
            <FaFacebook/>
            <FaInstagram/>
            <FaXTwitter/>
            <FaLinkedin/>
            <FaGithub/>
        </div>
    )
}

export default Contato;
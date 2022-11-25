import { Link } from "react-router-dom";
import Logo from "./Logo";
import UploadImage from "./uploadImage";
import "../styles/logo.css"

function Navbar(){
    return <div>
        <nav className="icon-container">
            <Logo/>
            <Link to="/postupload"><UploadImage/></Link>
        </nav>
    </div>
}
export default Navbar
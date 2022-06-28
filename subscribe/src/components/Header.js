import { Link, NavLink } from 'react-router-dom';
import { logo } from "./Images";
import '../assets/css/header.css'
import { memo} from 'react';

function Header()
{

   
    return <header>
        <div className="logo-section">
        <img src={logo}/>
        </div>
        <div className="custom-header">
            <ul className="header-ul">
           
            </ul>
        </div>

    </header>
}

export default memo(Header)
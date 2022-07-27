import { Link, NavLink } from 'react-router-dom';
import { logo } from "./Images";
import '../assets/css/header.css'
import { memo, useEffect, useRef, useState } from 'react';

import { useWeb3React } from "@web3-react/core";
import { connectWallet } from "../utils/connectWallet";

function Header(props)
{

    const {
        active,
        activate,
    } = useWeb3React();
   
    return <header>
        <div className="logo-section">
        <img src={logo}/>
        </div>
        <div className="custom-header">
            <ul className="header-ul">
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/gallery">
                        Gallery
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/artist'>
                        Artist
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/vote">
                        Vote
                    </NavLink>
                </li>
                <li className='position-relative'>
                    <div className='custom-dropdown'>
                    <NavLink to="/trap">
                    $TRAP ICO
                    </NavLink>
                    {/* <div className='dropdown-body'>
                        <ul>
                            <li>
                                <Link to={"/buy-token"} className=''>Round 1</Link>
                            </li>
                            <li>
                                <Link to={"/buy-token"} className=''>Round 2</Link>
                            </li>
                            <li>
                                <Link to={"/buy-token"} className=''>Round 3</Link>
                            </li>
                        </ul>
                    </div> */}
                    </div>
                </li>
                <li>
                    <NavLink to="/buy-trap">
                        Buy $TRAP
                    </NavLink>
                </li>
                
                <li>
                {
                active?
                <NavLink to="#" >
                    Connected
                </NavLink>
                :
                <NavLink to="#" onClick={()=>{                                   
                    connectWallet(activate, props.setErrorMessage);
                }}>
                Connect Wallet
                </NavLink>
                       
                                }
                 
                </li>
           
            </ul>
        </div>

    </header>
}

export default memo(Header)
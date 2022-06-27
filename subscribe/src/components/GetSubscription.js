import { Link, NavLink, useNavigate } from 'react-router-dom';
import { logo } from "./Images";
import '../assets/css/header.css'
import { memo, useEffect, useRef, useState } from 'react';

import axios from 'axios'
import { CSVLink, CSVDownload } from "react-csv";

function GetSubscription()
{
    
    const [data,setData] = useState([]);
    const navigate = useNavigate();
    const csvLink = useRef()
    const getAll = async () =>{
        await axios.get(process.env.REACT_APP_SUBSCRIPTION_API_URL+'get-all')
        .then((res)=>{
            setData(res.data.subs);
            csvLink.current.link.click()
            navigate('/');
        })
    }
    useEffect(() => {
        getAll()
    }, [])
    

    return (
       <section className='loader-section'>
        <CSVLink
            data={data}
            filename='subscription.csv'
            className='hidden'
            ref={csvLink}
            target='_blank'
        />
        <div class="spinner-border" role="status">
        </div>
        <span class="text-dark">Loading...</span>
       </section>
    )
}

export default memo(GetSubscription)
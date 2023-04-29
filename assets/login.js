import React, {useEffect} from 'react'
import {useState} from "React";
import axios from "axios";


export default function Login(){
    const [loginData, setLoginData] = useState({})
    useEffect(() => (
        axios.post('/login')
            .then().catch(

        )
    )
    , [loginData]);

    return (
        <div>
            <form action="" onSubmit={()=>{
            processData(e)
            }
            }>
                <input className="cne" type="text"/>
                <input classeName= "cni" type="text"/>
                <input type="submit"/>
            </form>
        </div>
    );
    function processData(e){
        const cne = document.querySelector('cne').value
        const cni = document.querySelector('cni').value
        setLoginData({
            username : cne,
            password : cni
        })
    }
}


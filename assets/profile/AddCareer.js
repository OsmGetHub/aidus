import React, {useState} from 'React'
import AjoutFormation from "./AjoutFormtion";

export default function AddCareer({setModal}){

    return(
        <div onClick={()=>setModal(true)} id="education" >
            <a   style={{
                padding:"15px 25px",
                display:"block",
                width:"100%"
            }} href="#"><img style={{ height:"20px" }} src="profile-styles/Images_css/plus.png" alt="default"/></a>
        </div>
    );
}
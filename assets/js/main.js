import React, {useEffect, useState} from 'react'
import Filtrage from "./flitrage"
import Articles from './articles'
import '../styles/main.css'
function Main(){
        return (
            <div id="Main">
                <Filtrage />
                <Articles />
            </div>
        );
}
export default Main;
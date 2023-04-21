import React, {useEffect, useState} from 'react'
import Filtrage from "./flitrage"
import Articles from './articles'
import '../styles/main.css'
import axios from "axios";
function Main(){
    const [filterValue, setFilterValue] = useState([]);
    const [records,setRecords] = useState([]);
    useEffect(()=>{

        axios.get('api/articles/read')
            .then(response=>{
                setRecords(response.data)
            }).catch(error=>{
            console.log(error)
        })

    }, []);
    const handlefilterChange = (value)=>{
        setFilterValue(value);
    }
        return (
            <div id="Main">
                <Filtrage filtred= {filterValue} records={records} onChange={handlefilterChange}/>
                <Articles filtred= {filterValue} records = {records}/>
            </div>
        );
}
export default Main;
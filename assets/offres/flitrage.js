import React, {useEffect, useReducer} from 'react'
import {render} from "react-dom";
import Data from '../data/data.json'

function Filtrage({filtred, records, onChange}){
    const [lists, setLists] = React.useState([]);
    const [listr, setListr] = React.useState([]);
    const [liste, setListe] = React.useState([]);
        return(
                <div className="div-filter">
                    <form className="filter">
                            <label><h2>Filtrage</h2></label>
                            <input className="secteur" type="text" placeholder="Secteur d'activites" onKeyPress={
                                (e)=> listsPrinter(e)
                            }/>
                            <div id="secteur"></div>
                            <input className="region" type="text" placeholder="Region"onKeyPress={
                                (e)=> listrPrinter(e)
                            }/>
                            <div id="region"></div>
                            <input className="entreprise" type="text" placeholder= "Entreprise" onKeyPress={
                                (e)=> listePrinter(e)
                            }/>
                            <div id="entreprise"></div>
                    </form>
                </div>
        );
    function isAny(val){
        const secteur = records.map((item) => item.title);
        if(secteur.includes(val)) return true
        return false

    }
    function listsPrinter(e){
        const newList = lists;
        if(e.key ==="Enter"){
            if (isAny(e.target.value) === true) {
                if(filtred === []) onChange(e.target.value);
                else filtred.push(e.target.value)
            }
            newList.push(e.target.value)
            e.preventDefault()
             setLists(newList)
            const span = lists.map((list, i) => {
                return <span className="variable" key={i}> {list}</span>
            })
            e.target.value = ''
            render(span, document.getElementById("secteur"))

        }
    }


    // function deLists(e){
    //     const newList = lists;
    //     const index = newList.indexOf(document);
    //     console.log(e)
    //     newList.slice(index, 1);
    //     e.preventDefault()
    //     const span = newList.map((list, i) => {
    //         return <span className="variable" key={i}> {list}</span>
    //     })
    //     render(span, document.getElementById("secteur"))
    //
    //
    // }
    function listrPrinter(e){
        const newList = listr;
        if(e.key ==="Enter"){

            onChange(e.target.value);

            if(e.target.value!=='') {
                newList.push(e.target.value)
                e.preventDefault()
                setListr(newList)
                e.target.value = ''
                const span = listr.map((list, i) => {
                    return <span className="variable" key={i}> {list}</span>
                })
                render(span, document.getElementById("region"))
            }
        }
    }

    function listePrinter(e){
        const newList = liste;
        if(e.key ==="Enter"){

            onChange(e.target.value);

            if(e.target.value!=='') {
                newList.push(e.target.value)
                e.preventDefault()
                setListe(newList)
                e.target.value = ''
                const span = liste.map((list, i) => {
                    return <span className="variable" key={i}> {list}</span>
                })
                render(span, document.getElementById("entreprise"))
            }
        }
    }



}

export default Filtrage
import React from 'react'
export default function AjoutFormationModal({setData, setEtude}){
    return (
        <div className="modal-main">
            <form action="#" style={styleForm}>
                <label htmlFor="input">Etablissement</label>
                <input style={inputs} type="text" required/>
                <label htmlFor="input">Diplome</label>
                <input style={inputs} type="text" required/>
                <label htmlFor="input">Domain d'etude</label>
                <input style={inputs} type="text" required/>
                <div style={divDate}>
                    <label htmlFor="input">Date de debut</label>
                    <input style={inputs} className="debut" type="date"/>
                    <label htmlFor="input">Date de fin (ou prevue)</label>
                    <input style={inputs} className="fin" type="date"/>
                </div>
                <label htmlFor="input">Resultat obtenu</label>
                <input style={inputs} type="text"/>
                <input onClick={(e)=>addformation(e)} style={submitButton} type="submit" value="Enregistrer"/>
                <input onClick={()=>{setEtude(false)}} style={resetButton} type="reset" value="Annuler"/>
            </form>
        </div>
    );
}

function addformation(e){

    console.log(e)

}
//Style de la section de formation --PROFILE

const styleForm ={
    fontSize : "0.8em",
    backgroundColor : "white",
    width : "30%",
    borderRadius: "5px",
    margin: "auto",
    height : "fit-Content",
    padding : "40px 25px",
    color : "rgba(0,0,0,0.6)",
    display: "flex",
    flexDirection: "column",
    justifyContent : "space-around",
    position: "relative"
}

const divDate = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    height: "50px",
    width: "100%"
}


const inputs=  {
    marginBottom: "10px"
}

const submitButton = {
    marginBottom: "10px",
    position: "absolute",
    bottom: "5px",
    width: "fit-content",
    padding: "2px 10px",
    borderColor: "transparent",
    backgroundColor: "#12549b",
    color : "white",
    borderRadius : "10px",
    right: "30px"
}
const resetButton = {
    marginBottom: "10px",
    position: "absolute",
    bottom: "5px",
    width: "fit-content",
    padding: "2px 10px",
    BackgroundColor: "transparent",
    color : "#12549b",
    borderColor: "transparent",
    borderRadius : "10px",
    right: "125px"
}
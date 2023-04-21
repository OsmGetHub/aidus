import React from 'React'


export default function AddModal({setModal, setEduModal, setExpModal}){
    return(
            <div>
                <div className="modal-main">
                    <div id="add-to-profile">
                        <div className="head-modal">Ajouter au profile <button type="submit" onClick={()=>setModal(false)}>x</button></div>
                        <hr />
                            <p className="ajouter"><button type="submit" onClick={()=>{setEduModal(true); setModal(false)}} >Ajouter une formation</button></p>
                            <hr className="second" />
                            <p className="ajouter"><button type="submit" onClick={()=>{setExpModal(true); setModal(false)}}>Ajouter une experience</button></p>
                    </div>
                </div>
            </div>
    );
}

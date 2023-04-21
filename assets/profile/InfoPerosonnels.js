import React, {Component, createContext, useState} from 'react';
import AddCareer from './AddCareer'
import AddModal from "./AddModal";
import AjoutFormation from "./AjoutFormtion";
import AjoutExperience from "./AjoutExperience";
export default function  InfoPerosonnels() {
    const [Modal, setModal] = useState(false);
    const [education, setEducation] = useState(false);
    const [experiance, setExperiance] = useState(false);
    const [EducationModal, setEduModal] = useState(false)
    const [ExperianceModal, setExpModal] = useState(false)
        return (
                <div className="all">
                    <div className="head">
                        <img src="profile-styles/Images_css/profile.png" alt="Photo_de_profile"/>
                        <h2 id="nom-etudiant">Nom_Etudiant</h2>
                        <p id="etat">Étudiant, Sciences Mathématiques Informatiques</p>
                        <span>Licencie Juin 2021</span>
                    </div>

                    <div className="personnels">
                        <div className="imgs">
                            <h2 style={{ height:"0.8em" }}>Infos personnels</h2>
                            <img src="profile-styles/Images_css/plus.png" alt="add"/>
                            <img src="profile-styles/Images_css/edit.png" alt=""modify/>
                        </div>
                        <p>cne <span>xxxxxxx</span><img src="" alt="visibilty"/><img src="" alt="lock"/></p>
                        <p>cni <span>xxxxxxx</span><img src="" alt="visibilty"/><img src="" alt="lock"/></p>
                        <p>telephone <span>xxxxxxx</span><img src="" alt="visibilty"/><img src="" alt="lock"/></p>
                        <p>naissance <span>xxxxxxx</span><img src="" alt="visibilty"/><img src="" alt="lock"/></p>
                    </div>
                    <>
                        {
                            (education == false && experiance == false) ?  <AddCareer setModal={setModal}/> : ''
                        }
                    </>
                    <>
                        {
                            Modal ? <AddModal setModal ={setModal} setEduModal = {setEduModal} setExpModal={setExpModal}/> : ''
                        }
                    </>
                    <>
                        {
                            EducationModal ? <AjoutFormation setEduModal = {setEduModal}/> : ''
                        }
                    </>
                    <>
                        {
                            ExperianceModal ? <AjoutExperience setExpModal={setExpModal}/> : ''
                        }
                    </>
                    <div id="apercu"><a>Apercus</a></div>
                </div>

        );
}


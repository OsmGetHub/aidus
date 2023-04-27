import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import OffresEmploi from "./offres_emploi";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import OffresStage from "./offres_stage";
import OffresFormation from "./offres_formation";
import Profile from './profile';
import Education from './data/Education.json'
import AddPost from "./ajouterOffres/addPost";

function App() {
    const [education, setEducation]= useState(Education)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<OffresEmploi />} />
                <Route path="/offreStage" element={<OffresStage />} />
                <Route path="/offreEmploi" element={<OffresEmploi />} />
                <Route path="/offreFormation" element={<OffresFormation />} />
                <Route path="/Profile" element={<Profile etudes={education} setEtudes={setEducation}/>} />
                <Route path="/ajouterOffre" element={<AddPost />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById('root'))
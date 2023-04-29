import React, {useContext, useState} from 'react';
import AddCareer from './AddCareer'
import AddModal from "./AddModal";
import AjoutFormation from "./AjoutFormtion";
import AjoutExperience from "./AjoutExperience";
import CarriereEtudes from "./CarriereEtudes";
import Experience from "./Experience";
// import '../images'
import {GolbalData} from "../app";


export default function  InfoPerosonnels() {
    const userData = useContext(GolbalData)
    const [Modal, setModal] = useState(false);
    const [education, setEducation] = useState(true);
    const [experiance, setExperiance] = useState(true);
    const [EducationModal, setEduModal] = useState(false);
    const [ExperianceModal, setExpModal] = useState(false);
        return (
                <div style={ALL_IN_MAIN}>
                    <div style={INFOS_HEADER}>
                        <img src="profile-styles/Images_css/profile.png" alt="Photo_de_profile"
                        style={{
                            // height: "70px",
                            width: "90px",
                            border: "2px solid #707070",
                            borderRadius: "100px"
                        }}
                        />
                        <div style={{ fontWeight:"bold", fontSize: "1.6em" }}>{userData.nom} {userData.prenom}</div>
                        <div style={{

                            fontWeight : "normal",
                            color : "#13569F"

                        }}>Étudiant, Sciences Mathématiques Informatiques</div>
                        <span style={{ color : "rgb(128, 128, 128)", fontWeight : "normal" }}>Licencié Juin 2021</span>
                    </div>
                    <div style={PERSONAL_INFOS}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                            <div style={{
                                margin : "10px 0px",
                                fontSize : "1.5em"
                            }}><b>Infos personnels</b></div>
                            <div>
                                <img style={{width : "20px"}} src="https://lh3.googleusercontent.com/fife/APg5EOZo7nVSIhDSkLeP0ZezzhTsINrC6HR355jnBy7MapFygKcPWMByweo3yTPWqVfzxoD-Oo5qKO5GS57UziLR3CpKQRgyeAfP6iKBh-eBgezJNnnktjkh7xuN0y8fsgF-faIdrV5ICF7pT2sG2V0fwBzOGxVNUQFvVOd1VBI7LOyr7XDPijDHO2IrP7hhxlEVu2yPBxDKq2aTQAThDwY3QnJswlGI163X5m-leD15ER4Kf0DVIkHwQwkVfdcgjR0QuK26VLnHJOy8ex0EEwxe9D6ZajTEPmcbYplgEuO-KajohpLAdDZNfQTgExaW2HlmcFT-46pRrgva_OPkJZYrvklQJ4BwTYH9BEMCFYdmU3jJrua7Z20qeE8JXvJToYPTqj5p0-LlzuOasvEIrOWLi3s3xAkOu-dYLtKPe-IXicEEVTpHk6vA0ijWH1mNipgpzFQvW9sc89Qa-FViFyUGYQ4w21i9MiQOxFnx8x_x_cDGi5Uf00FOQA6y8mlfSx59egiGnONVxEA1WvIZVe2E_42jFo-8trw3foA_y7hMR9BbefY5XQc_o9GvpjL8pZesg5xcDTiXpSF6aGJf8hyaGR-FY7gUHRMs_g4VoUOKkv_Imq_geafZsye1KzJuS-a59LBezD2Sa-1aFEsutsDiDOSuhzq4WcNCtGU9QR3N5X67PjVffkDdCR7FPrvr3hkqkrxxXs-qeUxxk8ZO_jOoombUozrz9mkYclDIZUEh5ZeiHZ6lGQnfX69Yo1VPGaa6U4gwl--xjGJWQzpVu6ntiL3hNH_KiZNK6vzc1na_7M8YhQXagTpendDh9qyY0epvSD2XI8MMFWtwJ5biXOBvdxtcooPeEYmbQvhUw_oF4HXKk0C2zsZMUAx2qYuWUd9wT4bS7z0YbBwcr_SyGldXUa7CmVLmlOxgWhtlWqIzDPRuDuBQCZC50PbrJrouwAquuJ3kZfWeyGJUvd6je_GKhb2h_7KpNyij4OSIDNmcM_xZbrKy-7nPaTkObChOZziKaHzpRYeaz_qgJ0mcvZI0r-M5-GCrBGMVJ5IoIhm6wfodmXsebRjUM8fY77AroYQDtSh3ezxd215TvGHsumqzQ2MCWWt0sfdv5e1KknkeHWPvhrBV0US7ky5JTavhLKYzhTQ-UkSvK29GqNI5O9J0cddYt8UKlKbQvOrKU9bqBiynfSeb2DCNGVO_c_tc-DIb6t69kUKW4lSySCjq38eGPcbQA77kVQ7kmw7N3hRLYuJ9XGXNbvxWGvYCGDUaTJZ6TmjhOcK2ee0ROaamrekX1S-MuB8o3LvgjanNoPv6PWRJcefEI_br28I_k6mcuXK852jjn7wEGgpEUo5c3zT678zpivbre5VI4GjnOEpVnk-11GgXQ4_a-0i0X03zUGhwkWAGziOG9w6t7_n2GIGke8y4regLpvGaGP1aJZC8oExllpN-v3w9zNOump8xE1PDLbu6wS9dcOVMYRdGko5A4ts-mGViYzOTjFmQ4qtNAyugp0dTnHa1vbD7hox0seGp7Roni65rxN7Ql84nQwyHtxqXXSM5trG_owN6x8PbNIbgQey3efSxCw9l38NNTfuo-1i-A7S0=w1866-h916" alt="Ajouter"/>
                                <img style={{width : "20px", marginLeft: "20px"}} src="https://lh3.googleusercontent.com/fife/APg5EOb0P1ZouQ4rNqzE83ILgilcu1jP1MmEba8DAfCnUm_LIOiCWd5WeY8XkOzLkopIEKrROYoiAjAZJbbWyr5K0ibUyGhxAUrjWtJV0W-7Jy3KqQjp77qIbF3YR6cW2BWftTETD1ZS08-5yg2I9LQkE_emYwSiAjUzyyjuPMZJKa8esb_O38D7PiepWLK0JaTOPamtpxvg8fFJomPS1xHHPapSkcwRxa3NA17iwgECSaQX-eWuR-FjkKpfo7s-Im-Na5rR_mZBulJMq_cmLvs_FX8uMJeKqyxlZ57Zq0W0iyvuXo3DugPiZJjGymXmu4INaP9BBORwUkZJDTuvOSwS8nQ5Wk__OyrqOEulw6foapt3Yo7ZEAJyM6EG-j2HOCw6lh8hvzydwtzjaxKWI_wWnHI6ZoXXOQEo9Zqr7xdFSilvclu_8-gObIhknSaf920tzkFqb-XqXpozWpIKKUMBiTZjzC0DuSpfUCsAptGqznVHTyl7AZFPcO9bqWgKcIkRkGYZbfMTClr5ucVvI99e1z-9GgqS-yy9Ze21l-xZzxj928NtMAWB_l32uYpZQnE-YmNxaVfR9AKVv9dw44QFxQ7HU7DSU56VS-2v9EBFlii96yXmG32kClx61MCyaakotdrRfm0SAfBZXRmeaDtV9Zhw3xAtNZMz1FCfmcpfMPMJuIRaVMyjMgnG1bDdJabsAx6tbRPAUQJUJFTcx3G92bK1x7WlGCf5kUKQ8KzAs4neoCnGcig51mXTLnFnZe06E2I_Of6WoQUEMMkfgMXCvMytJhYizd7agKq7XLoSWnosXEOKJfW6OXRkjXIr35qnYSm0ghlbJlyj-5L-P0xHTwDeL1ucfIAVLZ3pf8-q-DuChSeqgqAFr1vfq_RibwzD9IrihPMMZmSeTnoZZiBith-elyRrfPvEdATe9AL9nM8uZnPu-OCSXTlNHaSA0DmKZisKCoRnACwa4vePFcl_3P3pj96eEZQi41q1aPXngKDkVwp8ELadr__fq_ARgaJKKdTw_3jHbEUYqcw5bGs-ixhfjXstnCakuwOobJClppR5njZzMyTKN7FqHaxESK3dEA35bKj2ewy5RVtkmpIf8zG_U91ZNa1LZ4phzQsAcEgfuPwDJ0_pNm8rX5lPluUJjpkgW9j5XHuNWJDHgcM8lyu3zx-u8XcIa9Ds4MO1Dv0dy0Uss-3Cy0cOzKT1i_Qeta3_Vxfh8dlkrucVtMjX7aN6pGF5xyNjkkSNEhtJofFD5jSpl6kEvlhIkQMGqcg7NNRxKBdN1T7ma8Q1ZgzVO6XWUZZFFsvCWE2pFPlzQd_UJqX5tSGN8s8W8Io4u1go4uJd-M2KV7lCBGIb9s-xBIr4wCyZZjQGFu-JLiX34Xz7U9LY-CCg6hTvJtk4pTzuMG7ioYH5yGfLaNTbUaU3LxrF6LGYGkeipKzxqEH-CxnuymF2Ny-uYSCIJi_EOxwO7wla-z4-7PiafURw1SVobpd41zvaokmbg2Z3OlIfd8NFNITYe_2iRXL_GEd_a-bh6wPF_q2SEEgJ6Uerv-D_47Gl5bXMu5Z-wsUBQ7gFc1B0A0M6exNj4J90kr8M8NcYfij8sKyW=w1918-h1660" alt="edit"/>
                            </div>
                        </div>
                        <div className="required-fileds">
                            <div style={REQUIRED_FIELD}>

                                <span style={{ fontWeight : "bold" }}>CNE</span><span style={{marginLeft : "15px"}}>{userData.cne}</span>
                                {IMAGE_LOCK}
                                {IMAGE_OF_VISIBLITY}

                            </div>
                            <div style={REQUIRED_FIELD}>

                                <span style={{ fontWeight : "bold" }}>CNI</span><span style={{marginLeft : "15px"}}>{userData.cni}</span>
                                {IMAGE_LOCK}
                                {IMAGE_OF_VISIBLITY}

                            </div>
                            <div style={REQUIRED_FIELD}>

                                <span style={{ fontWeight : "bold" }}>Telephone</span><span style={{marginLeft : "15px"}}>{userData.telephone}</span>
                                {IMAGE_LOCK}
                                {IMAGE_OF_VISIBLITY}

                            </div>
                            <div style={REQUIRED_FIELD}>

                                <span style={{ fontWeight : "bold" }}>Naissance</span><span style={{marginLeft : "15px"}}>{userData.dateNaissance}</span>
                                {IMAGE_LOCK}
                                {IMAGE_OF_VISIBLITY}

                            </div>
                            { (userData.sexe !== "") ? <div style={REQUIRED_FIELD}><span style={{ fontWeight : "bold" }}>SEXE</span><span style={{marginLeft : "15px"}}>{userData.sexe}</span></div> : ''}
                            { (userData.adresse !== "") ? <div style={REQUIRED_FIELD}><span style={{ fontWeight : "bold" }}>ADRESSE</span><span style={{marginLeft : "15px"}}>{userData.adresse}</span></div> : ''}
                            { (userData.ville !== "") ? <div style={REQUIRED_FIELD}><span style={{ fontWeight : "bold" }}>VILLE</span><span style={{marginLeft : "15px"}}>{userData.ville}</span></div> : ''}
                        </div>
                    </div>
                    <div style={{
                        gridColumn: "4 / 5",
                        gridRowStart: "2",
                    }}>
                        <>
                            {
                                (education == true) ? <CarriereEtudes  /> : ''
                            }
                        </>
                        <>
                            {
                                (experiance == true) ? <Experience  /> : ''
                            }
                        </>
                        <>
                            {
                                (education == false || experiance == false) ?  <AddCareer setModal={setModal}/> : ''
                            }
                        </>
                    </div>
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
                    <div style={{
                        gridColumn: "6 / 7",
                        gridRowStart: "2"
                    }}><a style={APERCUS}>Apercus</a></div>
                </div>

        );
}


//Styles de profile etudiant

const requiredFiledIcons = {
    width : "15px"
}
const REQUIRED_FIELD = {
    position : "relative",
    padding : "4px 50px 4px 5px",
    border : "2px solid #808080",
    marginBottom : "15px",
    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",
    fontWeight : "normal",
    color : "#7b7b7b"
}
const ALL_IN_MAIN={
    fontFamily: "Arial",
    color: "#12549b",
    display: "grid",
    gridTemplateColumns: "1fr 325px 2% 50% 1fr 150px 1fr",
    gridTemplateRows: "1fr 12% 14% 4% 14% 14% 14% 14% 1fr",
    width: "99vw",
    height: "1100px"
}
const INFOS_HEADER = {
    gridRow: "2 / 4",
    gridColumn: "2 / 3",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 5px",
    textAlign: "center",
    fontWeight: "bold",
    border: "2px solid #707070",
    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)"
}

const PERSONAL_INFOS ={
    gridRowStart: "5",
    gridColumn: "2 / 3",
    border: "2px solid #707070",
    padding: "15px 20px",
    fontWeight: "bold",
    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",
    height : "fit-content"
}

const APERCUS ={
    gridRowStart : "2",
    gridColumn: "7 / 8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40px",
    backgroundImage: "url('Images_css/visible.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "25px",
    backgroundColor: "#12549b",
    backgroundPosition: "13px",
    borderRadius: "10px",
    color: "white",
    font: "bold 1.1em Arial",
    paddingLeft: "17px",
    textAlign: "center",
    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",
}

const locked = "https://bit.ly/425EjlM"
const visiblity = "https://bit.ly/3LgUINc"
const IMAGE_LOCK = <img style={{ position: "absolute", top: "50%", transform: "translate(-50%, -50%)", right :"0px", width: "15px" }} src={locked} alt="lock"/>
const IMAGE_OF_VISIBLITY = <img style={{ position: "absolute", top: "50%", transform: "translate(-50%, -50%)", right : "22.5px", width: "15px" }} src={visiblity} alt="visiblity"/>

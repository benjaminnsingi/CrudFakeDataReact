import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";

const baseUrl = "https://62dfa0449c47ff309e89cbe9.mockapi.io/EmployeeApi"; 

const Ajout = () => {

    const [nom, setNom] = useState("");
    const [adresse, setAdresse] = useState("");
    const [salaire, setSalaire] = useState("");
    const [grade, setGrade] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const data = {
        nom,
        adresse,
        salaire,
        grade,
        email,
        password
    }


    const handleSubmit = (e) => {
       e.preventDefault();
       console.log(data);
       axios.post(baseUrl, data).then(navigate("/")); 

    }

     return (
        <div className="container">
            <h1>Ajout</h1>
            <form onSubmit={handleSubmit}>
                 <input type="text" placeholder="Nom" onChange={e => {setNom(e.target.value)}} value={nom}/>
                 <input type="text" placeholder="Adresse" onChange={e => {setAdresse(e.target.value)}} value={adresse}/>
                 <input type="text" placeholder="Salaire" onChange={e => {setSalaire(e.target.value)}} value={salaire}/>
                 <input type="text" placeholder="Métier" onChange={e => {setGrade(e.target.value)}} value={grade}/>
                 <input type="text" placeholder="Email" onChange={e => {setEmail(e.target.value)}} value={email}/>
                 <input type="password" placeholder="Mot de passe" onChange={e => {setPassword(e.target.value)}} value={password}/>
                 <button>Sauvegarder</button>
            </form>
        </div>
     )
}

export default Ajout;
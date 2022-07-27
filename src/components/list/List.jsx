import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const baseUrl = "https://62dfa0449c47ff309e89cbe9.mockapi.io/EmployeeApi"; 

const List = () => {
 
    const [posts, setPost] = useState("");

    const loadPosts = () => {
        axios.get(baseUrl).then((res) => {
            setPost(res.post);
        });
    }

    useEffect(() => {
        loadPosts(),
        axios.get(baseUrl).then((response) => {
            console.log(response.data)
            setPost(response.data)
        })
    }, []);

    if (!posts) return null;

    const deletePost = (id) => {
        axios.delete(`https://62dfa0449c47ff309e89cbe9.mockapi.io/EmployeeApi/${id}`).then(loadPosts());
    }
    
    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th colSpan="2">Liste des employees</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((post, index) => (
                            //console.log(post.nom)
                        <tr key={index}>
                            <td>{post.id}</td>
                            <td>{post.nom}</td>
                            <td>{post.email}</td>
                            <td><strong>{post.grade}</strong></td>
                            <td>{post.salaire}€</td>
                            <td><button onClick={() => deletePost(post.id)}>supprimer</button></td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}


export default List;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function DemandeList() {
    const [demandes, setDemandes] = useState([]);
    
    const [deleteid, setDeletedId] = useState(null);
    useEffect(() => {
        // Fetch demandes from API and update state
        async function fetchDemandes() {
            try {
                const response = await axios.get('http://localhost:8000/api/demandes');
                setDemandes(response.data);
            } catch (error) {
                console.error('Error fetching demandes:', error);
            }
        }
        fetchDemandes();
    }, [deleteid]);
    // const deleteDemande = async (id) => {
    //     try {
    //         await axios.delete(`http://localhost:8000/api/demandes/${id}`);
    //         setDeletedId(id);
    //     } catch (error) {
    //         console.error('Error deleting demande:', error);
    //     }
    // };

    
    const deleteDemande = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/demandes/${id}`);
            setDeletedId(id);
            alert("Supprimé avec succès")
        } catch (error) {
            console.error('Error deleting demande:', error);
        }
    };

    return (
        <div className="container mt-4">
            <h3 className="mb-3">Liste des Demandes</h3>
            <Link to={"/add"}>add-demande</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Type de Contact</th>
                        <th>Prénom</th>
                        <th>Nom</th>
                        <th>raison Sociale</th>
                        <th>ice</th>
                        <th>adresse</th>
                        <th>telephone</th>
                        <th>mobile</th>
                        <th>email</th>
                        <th>typeDemande</th>
                        <th>description</th>
                        <td>action</td>
                  
                    </tr>
                </thead>
                <tbody>
                    {demandes.map((demande) => (
                        <tr key={demande.id}>
                            <td>{demande.id}</td>
                            <td>{demande.typeContact}</td>
                            <td>{demande.prenom}</td>
                            <td>{demande.nom}</td>
                            <td>{demande.raisonSociale}</td>
                            <td>{demande.ice}</td>
                            <td>{demande.adresse}</td>
                            <td>{demande.telephone}</td>
                            <td>{demande.mobile}</td>
                            <td>{demande.email}</td>
                            <td>{demande.typeDemande}</td>
                            <td>{demande.description}</td>
 
                            <td>
                                <button onClick={()=>deleteDemande(demande.id)}>Delete</button>
                                <Link to={`/show/${demande.id}`}>show</Link>
                                <br />
                                <Link to={`/update/${demande.id}`}>Update</Link>
                                
                               
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DemandeList;

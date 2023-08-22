import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function DemandeShow() {
    const { id } = useParams();
    const [demande, setDemande] = useState(null);

    useEffect(() => {
        async function fetchDemande() {
            try {
                const response = await axios.get(`http://localhost:8000/api/demandes/${id}`);
                setDemande(response.data);
            } catch (error) {
                console.error('Error fetching demande:', error);
            }
        }

        fetchDemande();
    }, [id]);

    return (
        <div className="container mt-5">
            <h3>Détails de la demande</h3>
            {demande ? (
                <div>
                    <div>Type de Contact: {demande.typeContact}</div>
                    <div>Prénom: {demande.prenom}</div>
                    <div>Nom: {demande.nom}</div>
                    {demande.typeContact === 'professionnel' && (
                        <div>
                            <div>Raison Sociale: {demande.raisonSociale}</div>
                            <div>ICE: {demande.ice}</div>
                        </div>
                    )}
                    <div>Adresse: {demande.adresse}</div>
                    <div>Téléphone: {demande.telephone}</div>
                    <div>Mobile: {demande.mobile}</div>
                    <div>Email: {demande.email}</div>
                    <div>Type de Demande: {demande.typeDemande}</div>
                    <div>Description: {demande.description}</div>
                    <Link to="/" className="btn btn-link mt-3">Retour à la liste des demandes</Link>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default DemandeShow;

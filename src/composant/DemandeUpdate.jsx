import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate,Link } from 'react-router-dom';

function DemandeUpdate() {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        typeContact: '',
        prenom: '',
        nom: '',
        raisonSociale: '',
        ice: '',
        adresse: '',
        telephone: '',
        mobile: '',
        email: '',
        typeDemande: '',
        description: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        // Fetch demande data from API and populate form data
        async function fetchDemande() {
            try {
                const response = await axios.get(`http://localhost:8000/api/demandes/${id}`);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching demande:', error);
            }
        }
        fetchDemande();
    }, [id]);

    const handleUpdateSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8000/api/demandes/${id}`, formData);
            // Handle success, show message or navigate to another page
            console.log('Demande updated:', response.data);
            alert("demande update success")
            navigate('/'); 
        } catch (error) {
            console.error('Error updating demande:', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="container mb-5 mt-3">
            <h3 className="titre">Modifier Demande</h3>
            <Link to="/" className="btn btn-link mb-5">Liste des demandes</Link>

            <form onSubmit={handleUpdateSubmit}>
                <div className="row">
                    <div className="col">
                        <div className="form-group row">
                                <label className="col-form-label col-sm-3" style={{ top: '-8px' }}>Type de Contact</label>
                                <div className="col-sm-9">
                                    <div className="form-check form-check-inline" >
                                        <input
                                            type="radio"
                                            name="typeContact"
                                            value="professionnel"
                                            className="form-check-input"
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" htmlFor="professionnel">Professionnel</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            type="radio"
                                            name="typeContact"
                                            value="particulier"
                                            className="form-check-input"
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" htmlFor="particulier">Particulier</label>
                                    </div>
                                </div>
                            </div>
                            
                        {/* Prénom */}
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="prenom">Prénom</label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    name="prenom"
                                    className="form-control"
                                    placeholder="Prénom"
                                    value={formData.prenom}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        
                        {/* Nom */}
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="nom">Nom</label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    name="nom"
                                    className="form-control"
                                    placeholder="Nom"
                                    value={formData.nom}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        
                        {/* Raison Sociale */}
                        {formData.typeContact === 'professionnel' && (
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label" htmlFor="raisonSociale">Raison Sociale</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        name="raisonSociale"
                                        className="form-control"
                                        placeholder="Raison Sociale"
                                        value={formData.raisonSociale}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        )}
                        
                        {/* ICE */}
                        {formData.typeContact === 'professionnel' && (
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label" htmlFor="ice">ICE</label>
                                <div className="col-sm-9">
                                    <input
                                        type="number"
                                        name="ice"
                                        className="form-control"
                                        placeholder="ICE"
                                        value={formData.ice}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        )}
                        
                        {/* Adresse */}
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="adresse">Adresse</label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    name="adresse"
                                    className="form-control"
                                    placeholder="Adresse"
                                    value={formData.adresse}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        
                        {/* Téléphone */}
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="telephone">Téléphone</label>
                            <div className="col-sm-9">
                                <input
                                    type="number"
                                    name="telephone"
                                    className="form-control"
                                    placeholder="Téléphone"
                                    value={formData.telephone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        
                        {/* Mobile */}
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="mobile">Mobile</label>
                            <div className="col-sm-9">
                                <input
                                    type="number"
                                    name="mobile"
                                    className="form-control"
                                    placeholder="Mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        
                        {/* Email */}
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="email">Email</label>
                            <div className="col-sm-9">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col">
                        {/* Type de Demande */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label">Type de Demande</label>
                            <div className="col-sm-7">
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        name="typeDemande"
                                        value="Visite"
                                        className="form-check-input"
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="visite">Visite</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        name="typeDemande"
                                        value="Traitement"
                                        className="form-check-input"
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="traitement">Traitement</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        name="typeDemande"
                                        value="Contrôle"
                                        className="form-check-input"
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="controle">Contrôle</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        name="typeDemande"
                                        value="Réclamation"
                                        className="form-check-input"
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="reclamation">Réclamation</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        name="typeDemande"
                                        value="Autre"
                                        className="form-check-input"
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="autre">Autre</label>
                                </div>
                            </div>
                        </div>
                        
                        {/* Description */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor="description">Description</label>
                            <div className="col-sm-7">
                                <textarea
                                    name="description"
                                    className="form-control"
                                    placeholder="Description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    style={{ height: '200px' }}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
               
                
                

                
                <div className="row mt-5">
                    <div className="col">
                        <div className="form-group">
                            <button type="submit" className="btn btn-info center">Mettre à jour</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default DemandeUpdate;

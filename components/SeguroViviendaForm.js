'use client'
import React, { useState } from 'react';

const SeguroViviendaForm = () => {
    const [formValues, setFormValues] = useState({
        viviendaType: '',
        viviendaSize: '',
        securitySystem: '',
        viviendaName: '',
        viviendaEmail: '',
        viviendaNumber: '',
    });

    const [showBasicModal, setShowBasicModal] = useState(false);
    const [showPremiumModal, setShowPremiumModal] = useState(false);
    const [basicPrice, setBasicPrice] = useState(0);
    const [premiumPrice, setPremiumPrice] = useState(0);
    const [formErrors, setFormErrors] = useState({});

    const handleInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleCloseModal = () => {
        setShowBasicModal(false);
        setShowPremiumModal(false);
        window.location.reload();
    };

    const calculateQuote = (e) => {
        e.preventDefault();

    const validateForm = () => {
        const errors = {};
    
        if (!formValues.viviendaName) errors.viviendaName = "Debe completar este campo";
        if (!formValues.viviendaEmail) errors.viviendaEmail = "Debe completar este campo";
        
        if (!formValues.viviendaType) errors.viviendaType = "Debe completar este campo";
        if (!formValues.viviendaSize) errors.viviendaSize = "Debe completar este campo";
        if (!formValues.securitySystem) errors.securitySystem = "Debe completar este campo";
    
        return errors;
    };
    const errors = validateForm();

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
        let basePrice;

        switch (formValues.viviendaType) {
            case 'Casa': basePrice = 120; break;
            case 'Departamento': basePrice = 100; break;
            case 'PH': basePrice = 110; break;
            default: basePrice = 0;
        }

        switch (formValues.viviendaSize) {
            case 'Pequeña': basePrice += 10; break;
            case 'Mediana': basePrice += 20; break;
            case 'Grande': basePrice += 30; break;
        }

        switch (formValues.securitySystem) {
            case 'Ninguno': basePrice += 20; break;
            case 'Básico': basePrice += 10; break;
        }

        setBasicPrice(basePrice * 1.10);  
        setPremiumPrice(basePrice * 1.25); 

        setShowBasicModal(true);
        setShowPremiumModal(true);

    }
       
    };

    return (
        <div className='container-cotizador-input'>
           
            <div className="contenedor-formulario-cotizador">
                <form onSubmit={calculateQuote}>
                    <fieldset>
                        
                        <input type="text" id="viviendaName" name="viviendaName" placeholder="First and last name" className="mt-2 mb-1" onChange={handleInputChange} />
                        {formErrors.viviendaName && <span className="error-text">{formErrors.viviendaName}</span>}
                            <div className="d-flex">
                                <input type="email" id="viviendaEmail" name="viviendaEmail" className="mt-2 mb-1 me-1" placeholder="Email" onChange={handleInputChange} />
                                
                                
                                <input type="number" id="viviendaNumber" name="viviendaNumber" className="mt-2 mb-1 ms-1" placeholder="Phone number" onChange={handleInputChange} />
                            </div>
                            {formErrors.viviendaEmail && <span className="error-text">{formErrors.viviendaEmail}</span>}
                            <select data-testid="viviendaType" name="viviendaType" className="mt-2 mb-1" onChange={handleInputChange}>
                                <option value="">Type of housing</option>
                                <option value="Casa">House</option>
                                <option value="Departamento">Apartment</option>
                                <option value="PH">Loft</option>
                            </select>
                            {formErrors.viviendaType && <span className="error-text">{formErrors.viviendaType}</span>}
                            <select id="viviendaSize" name="viviendaSize" className="mt-2 mb-1" onChange={handleInputChange}>
                                <option value="">Size of the housing</option>
                                <option value="Pequeña">Up to 20 square meters</option>
                                <option value="Mediana">Up to 40 square meters</option>
                                <option value="Grande">Over 40 square meters</option>
                            </select>
                            {formErrors.viviendaSize && <span className="error-text">{formErrors.viviendaSize}</span>}
                            <select id="securitySystem" name="securitySystem" className="mt-2 mb-1" onChange={handleInputChange}>
                                <option value="">Security system</option>
                                <option value="Ninguno">None</option>
                                <option value="Básico">Basic</option>
                                <option value="Avanzado">Advanced</option>
                            </select>
                            {formErrors.securitySystem && <span className="error-text">{formErrors.securitySystem}</span>}

                        <button type="submit" className="btnPrimary mb-1">Quote</button>
                    </fieldset>
                </form>
            </div>
                
            {(showBasicModal || showPremiumModal) && (
                <div style={{
                    position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1001',
                    display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '90%',
                }}>
                    {showBasicModal && (
                        <div style={{
                            backgroundColor: 'white', padding: '20px', minWidth: '40%', margin: '10px',
                            boxShadow: '0 8px 16px rgba(0,0,0,0.1)', borderRadius: '10px', transition: '0.3s'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <a href=''> <img src="/images/logoAssurence.png" width={'250px'} alt="Assurance Logo"></img></a>
                                <button style={{
                                    background: 'none', border: 'none', fontSize: '1.5rem', lineHeight: '1', cursor: 'pointer'
                                }} onClick={handleCloseModal}>&times;</button>
                            </div>
                            <div>
                                <h6>Basic Plan</h6>
                                <p>${basicPrice.toFixed(2)} per month</p>
                            </div>
                            <div>
                                <p>Plan Details</p>
                                <div style={{ display:'flex', justifyContent:'center'}}> 
                                    <table >
                                        <thead>
                                            <tr >
                                                <th style={{ padding:'1rem'}}>Benefit</th>
                                                <th>Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Benefit 1</td>
                                                <td>Description of Benefit 1</td>
                                            </tr>
                                            <tr>
                                                <td>Benefit 2</td>
                                                <td>Description of Benefit 2</td>
                                            </tr>
                                            <tr>
                                                <td>Benefit 3</td>
                                                <td>Description of Benefit 3</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <button onClick={handleCloseModal} style={{
                                marginTop: '20px', background: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer', transition: '0.3s'
                            }} onMouseOver={(e) => e.target.style.opacity = "0.8"} onMouseOut={(e) => e.target.style.opacity = "1"}>
                                Subscribe to Plan
                            </button>
                        </div>
                    )}
                    {showPremiumModal && (
                        <div style={{
                            backgroundColor: 'white', padding: '20px', minWidth: '40%', margin: '10px',
                            boxShadow: '0 8px 16px rgba(0,0,0,0.1)', borderRadius: '10px', transition: '0.3s'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <a href=''> <img src="/images/logoAssurence.png" width={'250px'} alt="Assurance Logo"></img></a>
                                <button style={{
                                    background: 'none', border: 'none', fontSize: '1.5rem', lineHeight: '1', cursor: 'pointer'
                                }} onClick={handleCloseModal}>&times;</button>
                            </div>
                            <div>
                                <h6>Premium Plan</h6>
                                <p>${premiumPrice.toFixed(2)} per month</p>
                            </div>
                            <div>
                                
                                <p>Plan Details</p>
                                <div style={{ display:'flex', justifyContent:'center'}}> 
                                    <table >
                                        <thead>
                                            <tr >
                                                <th style={{ padding:'1rem'}}>Benefit</th>
                                                <th>Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Benefit 1</td>
                                                <td>Description of Benefit 1</td>
                                            </tr>
                                            <tr>
                                                <td>Benefit 2</td>
                                                <td>Description of Benefit 2</td>
                                            </tr>
                                            <tr>
                                                <td>Benefit 3</td>
                                                <td>Description of Benefit 3</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <button onClick={handleCloseModal} style={{
                                marginTop: '20px', background: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer', transition: '0.3s'
                            }} onMouseOver={(e) => e.target.style.opacity = "0.8"} onMouseOut={(e) => e.target.style.opacity = "1"}>
                                Subscribe to Plan
                            </button>
                        </div>
                    )}
                </div>
                )}

            {(showBasicModal || showPremiumModal) && (
            <div style={{
                position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: '1000'
            }} onClick={handleCloseModal}></div>
            )}

        </div>
    );
}

export default SeguroViviendaForm;

'use client'

import React, { useState } from 'react';

const SeguroMovilidadForm = () => {
    const [formValues, setFormValues] = useState({
        movilidadName: '',
        movilidadEmail: '',
        movilidadNumber: '',
        bicycleValue: '',
        bicycleType: '',
        purchaseYear: '',
    });

    const [showBasicModal, setShowBasicModal] = useState(false);
    const [showPremiumModal, setShowPremiumModal] = useState(false);
    const [premiumPrice, setPremiumPrice] = useState(0);
    const [basicPrice, setBasicPrice] = useState(0);
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
        
            if (!formValues.movilidadName) errors.movilidadName = "You must complete this field";
            if (!formValues.movilidadEmail) errors.movilidadEmail = "You must complete this field";
            if (!formValues.bicycleValue) errors.bicycleValue = "You must complete this field";
            if (!formValues.bicycleType) errors.bicycleType = "You must complete this field";
            if (!formValues.purchaseYear) errors.purchaseYear = "You must complete this field";
        
            return errors;
        };

        const errors = validateForm();

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            let basePrice = 500; // Precio base por defecto

        if (formValues.bicycleType === 'Montaña') {
            basePrice += 100;
        } else if (formValues.bicycleType === 'Carrera') {
            basePrice += 50;
        }

        if (formValues.purchaseYear === '2011-2014') {
            basePrice -= 50;
        } else if (formValues.purchaseYear === '2015-2018') {
            basePrice -= 30;
        }

        setBasicPrice(basePrice * 1.10);  // Incremento del 10%
        setPremiumPrice(basePrice * 1.25); // Incremento del 25%

        setShowBasicModal(true);
        setShowPremiumModal(true);

        }

        
    };

    return (
        <div>
            <div className="col-md-12 contenedor-formulario-cotizador">
                <form onSubmit={calculateQuote}>
                    <fieldset>
                        <input type="text" id="movilidadName" name="movilidadName" placeholder="First and last name" className="mt-2 mb-1" onChange={handleInputChange} />
                        {formErrors.movilidadName && <span className="error-text">{formErrors.movilidadName}</span>}
                        <div className="d-flex">
                            <input type="email" id="movilidadEmail" name="movilidadEmail" className="mt-2 mb-1 me-1" placeholder="Email" onChange={handleInputChange} />
                            <input type="number" id="movilidadNumber" name="movilidadNumber" className="mt-2 mb-1 ms-1" placeholder="Phone number" onChange={handleInputChange} />
                        </div>
                        {formErrors.movilidadEmail && <span className="error-text">{formErrors.movilidadEmail}</span>}
                        <select id="bicycleValue" name="bicycleValue" className="mt-2 mb-1" onChange={handleInputChange}>
                            <option value="">Bicycle value</option>
                            <option value="Hasta $500">Up to $500</option>
                            <option value="$500 - $1000">Between $500 - $1000</option>
                            <option value="Más de $1000">Over $1000</option>
                        </select>
                        {formErrors.bicycleValue && <span className="error-text">{formErrors.bicycleValue}</span>}
                        <select id="bicycleType" name="bicycleType" className="mt-2 mb-1" onChange={handleInputChange}>
                            <option value="">Bicycle type</option>
                            <option value="Montaña">Mountain</option>
                            <option value="Carrera">Road</option>
                            <option value="Urbana">Urban</option>
                        </select>
                        {formErrors.bicycleType && <span className="error-text">{formErrors.bicycleType}</span>}
                        <select id="purchaseYear" name="purchaseYear" className="mt-2 mb-1" onChange={handleInputChange}>
                            <option value="">Year of purchase</option>
                            <option value="2011-2014">2011-2014</option>
                            <option value="2015-2018">2015-2018</option>
                            <option value="2019-2023">2019-2023</option>
                        </select>
                        {formErrors.purchaseYear && <span className="error-text">{formErrors.purchaseYear}</span>}
                    </fieldset>
                    <button type="submit" className="btnPrimary mb-1">Quote</button>
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
                            <button  onClick={handleCloseModal} style={{
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
export default SeguroMovilidadForm;


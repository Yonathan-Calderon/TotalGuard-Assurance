import React from 'react';

const FormSwitcher = ({ setSelectedForm, selectedForm }) => {
    return (
        <div className="form-switcher" style={{ display: 'flex', justifyContent: 'center', marginBottom: '0rem' }}>
            <button onClick={() => setSelectedForm('vivienda')} style={selectedForm === 'vivienda' ? { opacity: 0.6 } : {}}>Vivienda</button>
            <button onClick={() => setSelectedForm('movilidad')} style={selectedForm === 'movilidad' ? { opacity: 0.6 } : {}}>Movilidad</button>
        </div>
    );
}

export default FormSwitcher;

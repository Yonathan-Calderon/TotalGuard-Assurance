import React, { useState } from 'react';
import SeguroViviendaForm from './SeguroViviendaForm';
import SeguroMovilidadForm from './SeguroMovilidadForm';

const CotizadorForm = () => {
    const [selectedForm, setSelectedForm] = useState('vivienda');

    // Función para calcular el desplazamiento de la línea
    const getUnderlineStyle = () => {
        const defaultStyle = { width: '50%' };

        if (selectedForm === 'vivienda') {
            return { ...defaultStyle, transform: 'translateX(0%)' };
        } else {
            return { ...defaultStyle, transform: 'translateX(100%)' };
        }
    };

    return (
        <div className="form-container">
            <div className="form-header">
                <button 
                    type="button"
                    className={selectedForm === 'vivienda' ? 'active' : ''} 
                    onClick={() => setSelectedForm('vivienda')}
                >
                    Home
                </button>
                <button 
                    type="button"
                    className={selectedForm === 'movilidad' ? 'active' : ''} 
                    onClick={() => setSelectedForm('movilidad')}
                >
                    Mobility
                </button>
                <div className="underline" style={getUnderlineStyle()}></div>
            </div>
            
            {selectedForm === 'vivienda' && <SeguroViviendaForm />}
            {selectedForm === 'movilidad' && <SeguroMovilidadForm />}
        </div>
    );
}
export default CotizadorForm;
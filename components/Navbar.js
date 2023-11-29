import React from 'react';

const Navbar = ({ setSelectedForm }) => {
    return (
        <div>
            <button onClick={() => setSelectedForm('vivienda')}>Seguro de Vivienda</button>
            <button onClick={() => setSelectedForm('movilidad')}>Seguro de Movilidad</button>
        </div>
    );
}

export default Navbar;


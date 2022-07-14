import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='flex justify-between px-5 h-[50px] bg-green-600 items-center shadow-md'>
            <Link to='/'>Airport</Link>

            <Link to='/auth'>Auth</Link>
        </nav>
    );
};

export default Navigation;
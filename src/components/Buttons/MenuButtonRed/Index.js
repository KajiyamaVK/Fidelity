
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';


const MenuButtonRed = ({ children }) => {

    return (
        <>
            <Button variant="contained">{children}</Button>
        </>

    );

};

export default MenuButtonRed;


import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';


const MenuButtonNoColor = ({ children }) => {

    return (
        <>
            <Button variant="outlined" size="large">{children}</Button>
        </>

    );

};

export default MenuButtonNoColor;

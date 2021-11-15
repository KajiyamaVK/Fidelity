import { useState } from 'react'
import style from './stylesheet.module.css'
import ClientsRegister from '../../../pages/clients_register'

export default function MainScreen(props) {

    let menuSelected;

    switch (props.menuSelected) {
        case 'clientsRegisterLink':
            menuSelected = <ClientsRegister />
            break;

    }

    console.log(props.menuSelected)
    console.log(menuSelected);
    return (
        <div id={style.main}>
            {menuSelected}
        </div>
    )
}
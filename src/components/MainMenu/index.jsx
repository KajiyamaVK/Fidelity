import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPen, faHome, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import Link from "next/Link"
import style from './stylesheet.module.css'

import { selectElement, showSubMenu } from './scripts'
import { useState } from 'react'

export default function MainMenu(props) {

    // const [pageTo, setPageTo] = useState(props.menuSelected);



    return (



        <div id={style.mainMenu}>

            <div className={style.menuItem} id='menuItemHome' onClick={(e) => { const x = selectElement(e); props.changeMenuPage(x); }}>
                <FontAwesomeIcon icon={faHome} className={style.icon} />
                <Link href="/">
                    <a className={` ${style.link}`} id='homeLink'>Página Inicial</a>
                </Link>
            </div>

            {/* Cadastros */}

            <div className={style.menuItem} id='menuRegister' onClick={(e) => showSubMenu(e)}>
                <FontAwesomeIcon icon={faPen} className={style.icon} />Cadastros
                <FontAwesomeIcon id='menuRegisterArrow' className={style.menuArrow} icon={faAngleRight} sit='closed'/>
            </div>

            <div className={`${style.subMenu} ${style.invisible}`} id="subMenuRegister">
                <div className={[style.subMenuItem]} id="menuItemClients" onClick={(e) => { const x = selectElement(e); props.changeMenuPage(x); }}>
                    <Link href='/'>
                        <a className={style.link} id='clientsRegisterLink'>Clientes</a>
                    </Link>
                </div>
            </div>

            {/* Gerenciamento de pontos */}

            <div className={style.menuItem} id='menuPoints' onClick={(e) => showSubMenu(e)}>
                <FontAwesomeIcon icon={faStar} className={style.icon} />Pontos
            </div>


            <div className={`${style.subMenu} ${style.invisible}`} id="subMenuPoints">
                <div className={style.subMenuItem} onClick={(e) => { const x = selectElement(e); props.changeMenuPage(x); }}>
                    <Link href='/'>
                        <a className={style.link} id='subMenuAddPointsLink'>Adicionar Pontos</a>
                    </Link>
                </div>
                <div className={style.subMenuItem} onClick={(e) => { const x = selectElement(e); props.changeMenuPage(x); }}>
                    <Link href='/'>
                        <a className={style.link} id='subMenuSpendPointsLink'>Gastar Pontos</a>
                    </Link>
                </div>
            </div>

        </div>
    )

}
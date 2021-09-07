import style from './stylesheet.module.css'
import MenuButton from '../MenuButton'

export default function YNButtons() {

    return (

        <div className={style.buttonsArea}>
            <div>
                <MenuButton text="Sim" fontSize="80px" hoverColor="#fff" hoverBackColor="#888888" outlined />
            </div>
            <div>
                <MenuButton text="Não" backColor="#5454B8" hoverBackColor="#191938" mainColor="#fff" hoverColor="#fff" fontSize="80px" />
            </div>

        </div>

    )

}
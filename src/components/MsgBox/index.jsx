import style from './stylesheet.module.css'

export default function MsgBox(props) {

    return (

        <div>
            <h1 id={style.msg}>{props.text}</h1>
        </div>

    )

}
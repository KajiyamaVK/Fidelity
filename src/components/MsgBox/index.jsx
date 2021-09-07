import style from './stylesheet.module.css'

export default function MsgBox(props) {

    let msgBoxStyle;

    //Início. Definindo a cor do fundo
    if (props.blue) msgBoxStyle = style.blue
    else if (props.red) msgBoxStyle = style.red;
    //Fim. Definindo a cor do fundo

    return (

        <div>
            <h1 id={style.msg} className={msgBoxStyle}>{props.text}</h1>
        </div>

    )

}
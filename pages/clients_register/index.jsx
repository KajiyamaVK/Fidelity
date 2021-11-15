import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import style from './stylesheet.module.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function clients_register() {

    return (
        <div id={style.main}>

            <div class={style.input_group}>
                <label htmlFor={style.inputName}>Nome do cliente</label>
                <input id={style.inputName} type='text' placeholder="Ex.:Maria" />
            </div>

            <div class={style.input_group}>
                <label htmlFor={style.inputName}>Sobrenome do cliente</label>
                <input id={style.inputName} type='text' placeholder="Ex.: Silva" />
            </div>

            <div class={style.input_group}>
                <label htmlFor={style.inputName}>CPF</label>
                <input id={style.inputName} type='text' placeholder="Ex.:123.456.789-99" />
            </div>

        </div>
    )


}
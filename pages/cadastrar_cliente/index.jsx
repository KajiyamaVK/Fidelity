import TitleHalf from '../../src/components/TitleBars/TitleHalf'
import { Container } from '@material-ui/core'
import style from './stylesheet.module.css'
import TextField from '@material-ui/core/TextField';
import RenderTwoButtons from '../../src/components/Buttons/RenderTwoButtons'

export default function cadastrar_cliente() {


    return (

        <div id='background'>
            <TitleHalf text="Cadastro de Clientes" color='#fff' />
            <Container className={style.container}>
                <form>
                    <div className={style.flexContainer}>
                        <TextField
                            label="Nome"
                            inputProps={{ style: { fontSize: 20 } }} // font size of input text
                            InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
                        />
                        <TextField
                            label="Sobrenome"
                            inputProps={{ style: { fontSize: 20 } }} // font size of input text
                            InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label 
                        />
                    </div>
                    <div className={style.flexContainer}>
                        <TextField label="Telefone principal"
                            inputProps={{ style: { fontSize: 20 } }} // font size of input text
                            InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
                            className={style.input} />
                        <TextField label="Telefone adicional"
                            inputProps={{ style: { fontSize: 20 } }} // font size of input text
                            InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
                        />
                    </div>
                    <div className={style.flexContainer}>
                        <TextField label="CPF"
                            inputProps={{ style: { fontSize: 20 } }} // font size of input text
                            InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
                        />
                        <TextField label="Pontos adicionais"
                            inputProps={{ style: { fontSize: 20 } }} // font size of input text
                            InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
                        />
                    </div>
                    <RenderTwoButtons type='SC' color='blue' />
                </form>
            </Container>
        </div >


    )


}
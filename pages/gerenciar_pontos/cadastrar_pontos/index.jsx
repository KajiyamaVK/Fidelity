import TitleHalf from '../../../src/components/TitleBars/TitleHalf'
import { Container } from '@material-ui/core'
import style from './stylesheet.module.css'
import TextField from '@material-ui/core/TextField';
import RenderTwoButtons from '../../../src/components/Buttons/RenderTwoButtons'

export default function cadastrar_cliente() {


    return (

        <div id='background'>
            <TitleHalf text="Cadastrar pontos" color='#fff' />
            <Container className={style.container}>
                <form>
                    <div className={style.flexContainer}>
                        <div className={style.flexContainer}>
                            <TextField
                                label="Busca (CPF ou Nome)"
                                inputProps={{ style: { fontSize: 20 } }} // font size of input text
                                InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
                            />

                        </div>

                        <RenderTwoButtons type='FB' color='blue' />
                    </div>
                </form>
            </Container>
        </div >


    )


}
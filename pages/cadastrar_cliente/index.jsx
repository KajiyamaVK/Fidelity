import TitleHalf from '../../src/components/TitleBars/TitleHalf'
import { Container } from '@material-ui/core'
import style from './stylesheet.module.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export default function cadastrar_cliente() {


    return (

        <div id={style.background}>
            <TitleHalf text="Cadastro de Clientes" color='#fff' />
            <Container className={style.container}>
                <form>
                    <div className={style.flexContainer}>
                        <TextField label="Nome" />
                        <TextField label="Sobrenome" />
                    </div>
                    <div className={style.flexContainer}>
                        <TextField label="Telefone principal" />
                        <TextField label="Telefone adicional" />
                    </div>
                    <div className={style.flexContainer}>
                        <TextField label="CPF" />
                        <TextField label="Pontos adicionais" />
                    </div>
                    <div className={style.buttonsArea}>
                        <Button variant="contained" color="primary" style={{ marginRight: '10px', marginBottom: '10px' }}>
                            Salvar
                        </Button>
                        <Button variant="contained" style={{ marginRight: '10px', marginBottom: '10px' }}>
                            Cancelar
                        </Button>
                    </div>
                </form>
            </Container>
        </div >


    )


}
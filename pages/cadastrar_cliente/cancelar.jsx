import { Container } from '@material-ui/core'
import style from './stylesheet.module.css'
import MenuButton from '../../src/components/Buttons/MenuButton';
import MsgBox from '../../src/components/MsgBox';
import YNButtons from '../../src/components/Buttons/YNButtons';

export default function cancelar() {


    return (

        <Container>

            <MsgBox text="Tem certeza que deseja cancelar?" />
            <YNButtons />

        </Container>


    )

}
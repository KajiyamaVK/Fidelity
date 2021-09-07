import { Container } from '@material-ui/core'
import style from './stylesheet.module.css'
import MenuButton from '../../src/components/Buttons/MenuButton';
import MsgBox from '../../src/components/MsgBox';
import RenderTwoButtons from '../../src/components/Buttons/RenderTwoButtons';

export default function cancelar() {


    return (

        <Container>

            <MsgBox text="Tem certeza que deseja cancelar?" blue />
            <RenderTwoButtons type='YN' />

        </Container>


    )

}
import MsgBox from "../../src/components/MsgBox"
import RenderTwoButtons from "../../src/components/Buttons/RenderTwoButtons";

export default function acao_pontos(props) {

    const pts = 3
    const client = 'Victor Kajiyama'
    let MsgBoxContentHTML;

    if (props.type == 'add_points') MsgBoxContentHTML = <MsgBox text={`${pts} para ${client}`} blue />
    else if (props.type == 'spend_points') MsgBoxContentHTML = <MsgBox text="Tem certeza que deseja cancelar?" red />
    else MsgBoxContentHTML = <MsgBox text="Erro - verificar props" />


    return (

        <>
            {MsgBoxContentHTML}
            <RenderTwoButtons type='YN' color='blue' />
        </>
    )

}


import { Button } from "@material-ui/core"

export default function RenderTwoButtons(props) {

    let btnText1;
    let btnText2;

    switch (props.type) {

        case 'SC':
            btnText1 = 'Salvar'
            btnText2 = 'Cancelar'
            break;
        case 'YN':
            btnText1 = 'Simm'
            btnText2 = 'Não'
            break;

        case 'FB':
            btnText1 = 'Avançar'
            btnText2 = 'Voltar'
            break;


    }

    if (props.color == 'blue')

        return (

            <div className='buttons-area'>
                <Button variant="contained" color="primary" style={{ marginRight: '10px', marginBottom: '10px' }}>
                    {btnText1}
                </Button>
                <Button variant="contained" style={{ marginRight: '10px', marginBottom: '10px' }}>
                    {btnText2}
                </Button>
            </div>

        )

    else if (props.color == 'red')
        return (

            <div className='buttons-area'>
                <Button variant="contained" color="#820404" style={{ marginRight: '10px', marginBottom: '10px' }}>
                    {btnText1}
                </Button>
                <Button variant="contained" style={{ marginRight: '10px', marginBottom: '10px' }}>
                    {btnText2}
                </Button>
            </div>

        )
}

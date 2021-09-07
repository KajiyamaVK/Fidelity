import { Button } from "@material-ui/core"

export default function SCButtons() {

    return (

        <div className='buttons-area'>
            <Button variant="contained" color="primary" style={{ marginRight: '10px', marginBottom: '10px' }}>
                Salvar
            </Button>
            <Button variant="contained" style={{ marginRight: '10px', marginBottom: '10px' }}>
                Cancelar
            </Button>
        </div>

    )

}

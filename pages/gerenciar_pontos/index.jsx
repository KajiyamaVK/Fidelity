
import MenuButton from '../../src/components/Buttons/MenuButton'

export default function gerenciar_pontos() {

    return (
        <>
            <div className="flexbox-container">
                <div>
                    <MenuButton text="Cadastrar pontos" backColor="#5454B8" hoverBackColor="#191938" mainColor="#fff" hoverColor="#fff" fontSize="80px" />
                </div>
                <div>
                    <MenuButton text="Usar pontos" fontSize="80px" backColor="#820404" mainColor="#fff" hoverBackColor="#888888" style={{ padding: '160px' }} />
                </div>
            </div>

        </>
    );

};


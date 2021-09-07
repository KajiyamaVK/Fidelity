
import ReactDOM from 'react-dom';
import MenuButton from '../src/components/Buttons/MenuButton/Index';

function Home() {

    return (
        <>
            <div className="flexbox-container">
                <div>
                    <MenuButton text="Gerenciar pontos" backColor="#359AEC" hoverBackColor="#17466C" mainColor="#fff" hoverColor="#fff" fontSize="80px" />
                </div>
                <div>
                    <MenuButton text="Cadastrar Cliente" fontSize="80px" hoverColor="#fff" hoverBackColor="#888888" outlined />
                </div>
            </div>

        </>
    );

};

export default Home;

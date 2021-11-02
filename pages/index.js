
import ReactDOM from 'react-dom';
import MenuButton from '../src/components/Buttons/MenuButton/Index';
import Link from 'next/Link';
import Button from '@material-ui/core/Button';

function Home() {

    return (
        <>
            <div className="flexbox-container">
                <div>
                    {/* <Link href="/gerenciar_pontos" passHref>
                        <MenuButton text="Gerenciar pontos" backColor="#359AEC" hoverBackColor="#17466C" mainColor="#fff" hoverColor="#fff" fontSize="80px" />
                    </Link> */}
                    <Link href="/gerenciar_pontos" passHref>
                        <Button variant="contained" color="secondary">About</Button>
                    </Link>
                </div>
                <div>
                    <Link href="/cadastrar_cliente" passHref>
                        <MenuButton text="Cadastrar Cliente" fontSize="80px" hoverColor="#fff" hoverBackColor="#888888" outlined />
                    </Link>
                </div>
            </div>

        </>
    );

};

export default Home;


import { useState } from 'react';
import MainMenu from '../src/components/MainMenu';
import MainScreen from '../src/components/MainScreen';

function Home() {

    const [pageTo, setPageTo] = useState('Home');

    function handleChange(menuLink) {
        setPageTo(menuLink);
    }

    return (
        <>
            <div style={{ display: 'flex' }}>
                <div>
                    <MainMenu menuSelected={pageTo} changeMenuPage={handleChange} />
                </div>
                <div>
                    {/* {pageTo} */}
                    <MainScreen menuSelected={pageTo} />
                </div>

            </div>

        </>
    );

};

export default Home;

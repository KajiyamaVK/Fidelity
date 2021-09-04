
import React from 'react';
import ReactDOM from 'react-dom';
import MenuButtonBlue from '../src/components/Buttons/MenuButtonBlue/Index';
import MenuButtonNoColor from '../src/components/Buttons/MenuButtonNoColor/Index';
import MenuButtonRed from '../src/components/Buttons/MenuButtonRed/Index';

function Home() {

  return (
    <>
      <div className="flexbox-container">
        <div>
          <MenuButtonBlue>Gerenciar pontos</MenuButtonBlue>
        </div>
        <div>
          <MenuButtonNoColor>Cadastrar Clientes</MenuButtonNoColor>
        </div>
      </div>

    </>
  );

};

export default Home;

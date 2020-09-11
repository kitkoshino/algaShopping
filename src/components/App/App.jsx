import React, { useState } from 'react';
import { Wrapper, Container } from './App.styles';
import AppHeader from '../AppHeader/AppHeader';
import AppContainer from '../AppContainer/AppContainer';
import Checkbox from '../../shared/Checkbox/Checkbox';

function App() {
  const [lettuce, setLettuce] = useState(true);
  const [rice, setRice] = useState(false);



  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
          left={
            <div>
              produtos disponiveis 
              <Checkbox value={lettuce} title="Alface" onClick={() => setLettuce(!lettuce)}/>
              <Checkbox value={rice} title="Arroz"onClick={() => setRice(!rice)} />
            </div>
          }
          middle={<div>sua lista de compras</div>}
          right={<div>estatísticas</div>}
        />
      </Container>
    </Wrapper>
  );
}

export default App;

import React , { useState } from 'react';
import '../../styles/app.css';
import Text from '../components/text'
import Pokemons from './pokemon'

function App() {
  const  [useSearch, saveSearch ] = useState({nombre: ''})

  const onSubmit = (stateName, value) => {
    saveSearch({
        ...useSearch,
        [stateName] : value
    })
  }

  return (
    <div className="content">
        <div className='input-row'>
            <label style={{fontSize: 16, fontWeight: 'bold'}}>Nombre</label><Text stateName="nombre" onChange={onSubmit} style={{width:500}} label="Nombre" noFormItem={true} />
        </div>
        <Pokemons />
    </div>
  );
}

export default App;

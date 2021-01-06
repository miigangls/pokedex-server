import React , { useState } from 'react';
import '../../styles/app.css';
import Text from '../components/text'
import Pokemons from './pokemon'

function App() {
  const  [useSearch, saveSearch ] = useState({nombre: ''})
  const  [useFavorites, saveFavorites ] = useState([])

  const onSearch = (stateName, value) => {
    saveSearch({
        ...useSearch,
        [stateName] : value
    })
  }

  const onFavorites = ( key, value ) => {
    if(useFavorites[key]) {
      delete  useFavorites[key]
      saveFavorites({ ...useFavorites })
    } else {
      saveFavorites({
        ...useFavorites,
        [key] : value
      })
    }
  }

  return (
    <div className="content">
        <div className='input-row'>
            <label style={{fontSize: 16, fontWeight: 'bold'}}>Nombre</label><Text stateName="nombre" onChange={onSearch} style={{width:500}} label="Nombre" noFormItem={true} />
        </div>
        <Pokemons useSearch={useSearch} onFavorites={onFavorites} useFavorites={useFavorites} />
    </div>
  );
}

export default App;

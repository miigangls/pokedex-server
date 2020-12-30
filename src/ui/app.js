import React , { useState } from 'react';
import '../styles/app.css';
import { Layout } from 'antd';
import Header from './components/header'
import Text from './components/text'
import Pokemons from './pages/pokemon'
const { Content } = Layout;

function App() {
  const  [useSearch, saveSearch ] = useState({nombre: ''})

  const onSubmit = (stateName, value) => {
    saveSearch({
        ...useSearch,
        [stateName] : value
    })
  }

  return (
    <Layout style={{ minHeight: '100vh', overflowX:"hidden" }}>
      <Header />
      <Layout>
        <Content className='container'>
          <div className='input-row'>
            <label style={{fontSize: 16, fontWeight: 'bold'}}>Nombre</label><Text stateName="nombre" onChange={onSubmit} style={{width:500}} label="Nombre" noFormItem={true} />
          </div>
          <div className="content">
            <Pokemons />
          </div>
        </Content>
      </Layout>
    </Layout>
    
  );
}

export default App;


/*{Pokemons.map((row, i) => {
                    return <div key={i} style={{display: "table-cell"}}>
                      {row.map((name, i) => {
                        console.log(name);
                        return <div key={name} style={{margin: "10px 25px", pageBreakInside:'avoid', pageBreakAfter:"auto"}}>
                          
                          <div style={{width: "100%"}}>{name}</div>
                        </div>
                      })}
                    </div>
                  })}*/ 
import React, {useState, useEffect} from 'react';
import { fetchPokemons } from '../../fetch'
import { Card, Button, Spin } from 'antd';
import { LikeOutlined } from '@ant-design/icons';

function UsePokemons(props) { 
    let structure = [];
    const [ usePokemons, statePokemons] = useState([]);
    useEffect(() => {
        const fetchPokemon = async () => {
            const DATA = await fetchPokemons(150)
            statePokemons(DATA)
        }
        fetchPokemon();
    }, []);

    structure = usePokemons.reduce((memo, {name, url }, i) => {
        let rowIndex = url.split('/')[url.split('/').length - 2];
        let img = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${rowIndex}.png?raw=true`;
      memo[i % 4].push({name, img });
      return memo
    }, [[],[],[],[]])
  return (
    <Spin spinning={(usePokemons.length > 0) ? false : true} >
      <div style={{display: 'table', pageBreakInside:'auto'}}>
        {structure.map((row, i) => {
              return <div key={i} style={{display: "table-cell"}}>
                {row.map(({name, img}, i) => {
                  return <div key={name} style={{margin: "10px 25px", pageBreakInside:'avoid', pageBreakAfter:"auto"}}>
                      <Card hoverable style={{ width: 240 }} cover={<img alt="example" src={img} />} >
                          <div className='input-row' style={{margin: 5}}>
                            <div style={{marginRight: 'auto'}} ></div>
                            <h3 className="ant-card-meta-title">{name}</h3>
                            <div style={{marginLeft: 'auto'}} >
                              <Button type="link" icon={<LikeOutlined  />} />
                            </div>
                          </div>
                      </Card>
                  </div>
                })}
              </div>
            })}
      </div>
    </Spin>
  );
}

export default UsePokemons
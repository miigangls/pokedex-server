import React, {useState, useEffect} from 'react';
import { fetchTypes } from '../../fetch'
import Select from '../components/select';

function UseTypes(props) { 
    let {onChange,stateName,  style, value,  label} = props
    const [ useTypes, stateTypes] = useState([]);
    useEffect(() => {
        const fetchType = async () => {
            const TYPES = await fetchTypes()
            let data  = useMemo(() => TYPES.map(key => ({value: key.url.split('/')[6], name: key.name})), [data]) 
            stateTypes(data)
        }
        fetchType();
    }, []);

  return (
    <Select onChange={onChange} value={value} stateName={stateName} style={style} data={useTypes} label={label}  />
  );
}

export default UseTypes
import React, {useState, useEffect, useMemo} from 'react';
import { fetchStats } from '../../fetch'
import Select from '../components/select';

function UseStats(props, ref) { 
    let {onChange,stateName,  style, value,  label} = props
    const [ useStat, stateStat] = useState([]);
    useEffect(() => {
        const fetchStat = async () => {
            const STATS = await fetchStats()
            let data  = useMemo(() => STATS.map(key => ({value: key.url.split('/')[6], name: key.name})), [data])
            stateStat(data)
        }
        fetchStat();
    }, []);

  return (
    <Select onChange={onChange} value={value} stateName={stateName} style={style} data={useStat} label={label}  />
  );
}

export default UseStats
import React, {useEffect} from 'react'
import { Select as AntSelect } from 'antd';

const {Option} = AntSelect;

function Select(props) {
  let {onChange, value, label, stateName, name,   data= [], notables, defaultValue, style = {}, ...otherProps} = props
  , options = [<Option key='EMPTY'>{label}</Option>], alt_options = [];
  useEffect(() => {
    if (value) {
      if (!data.some(({value: v}) => v === value)) onChange()
    } else if (data.length) return onChange(stateName, data[0].value)
  }, [data])

  if (data.length) {
      options = [];
      data.forEach( (d, i) => {
        if (!d.value) return null;
        let style = {}
        if (props.altOptions && !notables.includes(d.value)) {
          alt_options.push(<Option style={style} value={d.value} key={d.name}>{d.name || d.value}</Option>)
        } else {
          options.push(<Option style={style} value={d.value} key={d.name}>{d.name || d.value}</Option>)
        }
      } )
    }

    

  return(
    <AntSelect name={name}  placeholder={label}  defaultValue={defaultValue} value={value}
      onChange={(value)=> onChange(stateName, value)} {...otherProps} disabled={props.disabled}
      style={{ width: 120, ...style }}>
      {options}
    </AntSelect>
  )
}

export default React.forwardRef(Select)
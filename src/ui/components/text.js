import React from 'react'
import {Input, Form} from 'antd';


function Text(props) {
    let {onChange, stateName, value, externalLabel, style, noFormItem} = props;
    let validateStatus;
    let help;

    if (noFormItem) {
      return <Input  disabled={props.disabled} style={style}
        type="text" placeholder={props.label}
        value={value} onChange={(e) => onChange(stateName, e.target.value)} />
    }

    return (
        <Form.Item
        validateStatus={validateStatus}
        hasFeedback={!!validateStatus}
        help={help}
        label={externalLabel ? props.label : false}
        {...props.formItemLayout}>
        <Input disabled={props.disabled}
          style={style}
          type="text" placeholder={props.label}
          value={value} onChange={(e) => onChange(stateName, e.target.value)} />
      </Form.Item>
    );
}

export default React.forwardRef(Text)

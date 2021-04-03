import React from 'react';

import Input from '../Input/index';
import Select from '../Select/index';

import './index.scss';

const FormControl = ({ select, className, ...props }) => {
    const Component = select ? Select : Input;
    return (
        <div className={className}>
            <Component {...props}/>
        </div>
    )
};

export default FormControl;

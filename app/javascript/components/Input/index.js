import React from 'react';
import './index.scss';

const Input = ({ className, required, value, onChange, type, min, max, placeholder, disabled }) => {
    const getClassName = () => {
        let result = 'input';
        if (className) result += ` ${className}`;
        if (value || value === 0) result += ' active';
        if (disabled) result += ' disabled';
        return result;
    };
    return (
        <div className={getClassName()}>
            <input
                required={required}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                min={min}
                max={max}
                disabled={disabled}
            />
        </div>
    );
}

export default Input;

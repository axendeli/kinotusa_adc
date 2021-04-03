import React from 'react';
import './index.scss';

const Button = ({ onClick, children, className, disabled, variant = 'normal', icon, ...props }) => {
    const getClassName = () => {
        let result = 'button';
        if (className) result += ` ${className}`;
        if (variant) result += ` ${variant}`;
        if (disabled) result += ' disabled';
        return result;
    };
    return (
        <button
            {...props}
            className={getClassName()}
            onClick={onClick}
            disabled={disabled}
        >
            {icon && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.625 9.3125L11.625 16.3125L18.625 9.3125" stroke="#0F0F0F" strokeWidth="1.5" strokeLinecap="square"/>
                </svg>
            )}
            {children}
        </button>
    );
};

export default Button;

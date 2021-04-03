import React, { useState, useEffect } from "react";

import './index.scss'

const initState = {
    label: "",
    showOption: false,
}

const Select = ({ label, options, onChange }) => {
    const [data, setData] = useState(initState);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        setData({ ...data, label });
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [])
    const handleClickOutside = e => {
        if (
            !e.target.classList.contains("custom-select-option") &&
            !e.target.classList.contains("selected-text")
        ) {
            setData(prevState => ({ label: prevState.label, showOption: false }));
        }
    };

    const handleListDisplay = () => {
        setData(prevState => ({ ...data, showOption: !prevState.showOption }));
    };
    const handleOptionClick = (e, value) => {
        setData({
            label: e.target.getAttribute("data-name"),
            showOption: false
        });
        onChange(value)
    };

    return (
        <div className="custom-select-container">
            <div
                className={data.showOption ? "selected-text active" : "selected-text"}
                onClick={handleListDisplay}
            >
                {data.label}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.625 9.3125L11.625 16.3125L18.625 9.3125" stroke="#0F0F0F" strokeWidth="1.5" strokeLinecap="square"/>
                </svg>
            </div>
            {data.showOption && (
                <ul className="select-options">
                    {options.map((option, index) => (
                        <li
                            className="custom-select-option"
                            data-name={option.label}
                            key={index}
                            onClick={(e) => handleOptionClick(e, option.value)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Select;

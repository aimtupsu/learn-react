import React from "react";
import '../../styles/common.css';

const AuthInput = ({name, desc, type, placeholder, autoFocus, errorMessage}) => {

    const error = errorMessage
        ? <p className="auth-error ">{errorMessage}</p>
        : null;

    return (
        <div>
            <label className="auth-label" htmlFor={name}>{desc}</label>
            {error}
            <input className="auth-input"
                   ref={(input) => { if (input && autoFocus) { input.focus() }}}
                   name={name}
                   type={type}
                   placeholder={placeholder}
            />
        </div>
    )
};

export default AuthInput;
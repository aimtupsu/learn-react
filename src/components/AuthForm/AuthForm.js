import React from "react";
import AuthInput from "../../components/AuthInput";
import '../../styles/bootstrap.min.css';
import '../../styles/auth-styles.css';

const AuthForm = ({authInputs, onSubmit, headText, error, errorMessage, buttonText, link, linkText}) => {

    const renderAuthInputs = authInputs.map(
        ({name, type, desc, placeholder, errorMessage, autoFocus}, index) => (
            <AuthInput
                key={index}
                name={name}
                type={type}
                desc={desc}
                placeholder={placeholder}
                errorMessage={errorMessage}
                autoFocus={autoFocus}/>
        ));

    return (
        <form className="auth-form" onSubmit={onSubmit}>
            <h1 className="auth-head">{headText}</h1>
            {renderAuthInputs}
            {error ? <p className="auth-error">{errorMessage}</p> : null}
            <button className="auth-button col-lg-7 btn-block" type="submit">{buttonText}</button>
            <h4><a className="auth-reference" href={link}>{linkText}</a></h4>
        </form>
    );
 };

export default AuthForm;
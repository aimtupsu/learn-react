import React, { Component, Fragment } from "react";
import { AuthInput} from "../../components/AuthInput";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: props.location.query
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('/login',
            {
                method: 'POST',
                body: data
            })
            .then(res => {
                if (res.status === 200) {
                    console.log(res.headers.get('Authorization'));
                    this.props.history.push('/');
                }
            });

    }

    render() {

        return (
            <Fragment>
                <form className="auth-form" onSubmit={this.handleSubmit}>
                    <h2 className="auth-head">Вход</h2>
                    <AuthInput name="username" type="text" desc="Имя пользователя"
                               placeholder="Введите имя пользователя..." errorMessage=""/>
                    <AuthInput name="password" type="password" desc="Пароль" placeholder="Введите пароль..."
                               errorMessage=""/>
                    <button className="auth-button" type="submit">Войти</button>
                    <h4><a className="auth-reference" href={'/registration'}>Зарегистрироваться</a></h4>
                    <label>{this.state.error ? "ERROR!" : "NO ERROR!"}</label>
                </form>
            </Fragment>
        )
    }
}

export { Login };
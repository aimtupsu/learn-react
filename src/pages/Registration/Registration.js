import React, { Component } from "react";
import AuthForm from "../../components/AuthForm";

export default class Registration extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {

        event.preventDefault();
        const data = new FormData(event.target);

        fetch('/registration',
            {
                method: 'POST',
                body: data
            })
            .then(res => {
                if (res.status === 200) {
                    console.log("Регистрация прошла успешно");
                    this.setState({ error: false });
                    this.props.history.push('/login');
                } else {
                    this.setState({ error: true })
                }
            });
    }

    render() {

        const authInputs = [{
            name: "principal",
            type: "text",
            desc: "Имя пользователя",
            placeholder: "Имя пользователя",
            errorMessage: "",
            autoFocus: true
        }, {
            name: "email",
            type: "text",
            desc: "Электронная почта",
            placeholder: "Электронная почта",
            errorMessage: ""
        }, {
            name: "password",
            type: "password",
            desc: "Пароль",
            placeholder: "Пароль",
            errorMessage: ""
        }];

        return (
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-lg-5">
                        <AuthForm
                            headText="Регистрация"
                            error={this.state.error}
                            errorMessage={this.state.errorMessage}
                            buttonText="Зарегистрировать"
                            link="/login"
                            linkText="Есть аккаунт"
                            onSubmit={this.handleSubmit}
                            authInputs={authInputs}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
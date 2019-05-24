import React, { Component} from "react";
import AuthForm from "../../components/AuthForm";
import '../../styles/auth-styles.css';

export default class Login extends Component {

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

        fetch('/login',
            {
                method: 'POST',
                body: data
            })
            .then(res => {
                if (res.status === 200) {
                    console.log(res.headers.get('Authorization'));
                    this.setState({ error: false });
                    this.props.history.push('/');
                } else if (res.status === 401) {
                    this.setState({ error: true });
                }
            });
    }

    render() {

        const authInputs = [{
            name: "username",
            type: "text",
            desc: "Имя пользователя",
            placeholder: "Введите имя пользователя...",
            errorMessage: "",
            autoFocus: true
        }, {
            name: "password",
            type: "password",
            desc: "Пароль",
            placeholder: "Введите пароль...",
            errorMessage: ""
        }];

        return (
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-lg-5">
                        <AuthForm
                            headText="Вход"
                            error={this.state.error}
                            errorMessage={this.state.errorMessage}
                            buttonText="Войти"
                            link={'/registration'}
                            linkText="Зарегистрироваться"
                            onSubmit={this.handleSubmit}
                            authInputs={authInputs}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
import React, { Component } from "react";
import '../../styles/common.css';

class AuthInput extends Component {

    constructor (props) {
        super(props);

        this.state = {
            name: props.name,
            type: props.type,
            desc: props.desc,
            placeholder: props.placeholder,
            value: '',
            errorMessage: props.errorMessage,
            autoFocus: props.autoFocus
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {

        this.setState({ value: event.target.value })
    }

    render() {

        const error = this.state.errorMessage !== ''
            ? <p className="has-error ">{this.state.errorMessage}</p>
            : null;

        return (
            <div>
                <label className="auth-label" htmlFor={this.state.name}>{this.state.desc}</label>
                {error}
                <input className="auth-input"
                       name={this.state.name}
                       type={this.state.type}
                       placeholder={this.state.placeholder}
                       value={this.state.value}
                       onChange={this.handleChange}
                       autoFocus={this.state.autoFocus}
                />
            </div>
        )
    }
}

export { AuthInput };
import React, {Fragment, Component} from "react";
import '../../styles/common.css';
import '../../styles/bootstrap.min.css';

export default class Home extends Component {

    constructor() {
        super();

        this.state = {
            isAuthorized: true,
            username: ''
        }
    }

    componentDidMount() {
        fetch('/current-user', {
            method: 'GET'
        }).then(res => {

            if (res.status === 200) {
                this.setState( {
                    isAuthorized: true
                })
            }

            return res.text()
        }).then(data => {

            this.setState( {
                username: data
            })
        });
    }

    render() {
        const userInfo = (
            <Fragment>
                <div >
                    {"Привет, " + this.state.username}
                </div>
                <h2><a className="auth-reference" href={'/logout'}>Выйти</a></h2>
                <h2><a className="auth-reference" href={'/diary'}>Школьный дневник</a></h2>
            </Fragment>
        );

        return (
            <div className="container h-100">
                <div className="row justify-content-center">
                    <div className="col-3 align-items-center">
                        {this.state.isAuthorized && userInfo}
                    </div>
                </div>
            </div>
        );
    }
}
import React from 'react'
import { Button } from 'react-mdl'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { login } from 'actions/fetch'
import { catchError } from 'actions/error'

if (process.env.BROWSER) {
    require('./style.scss')
}

class LoginDialogBody extends React.Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(event) {
        event.preventDefault();
        let account = this.refs.account.value
        let password = this.refs.password.value
        if (account == "" || password == "") {
            this.props.catchError("帳號或密碼不得為空")
        } else {
            this.props.login(account, password);
        }
    }
    render() {
        return (
            <div className="dialogBody">
                <form id="form" onSubmit={this.onSubmit}> 
                    <h2 >使用者登入</h2>
                    <div className="inputContainer">
                        <div className="account"></div>
                        <input type='text' placeholder="帳號" ref="account" autoComplete="off"/>
                    </div>
                    <div className="inputContainer">
                        <div className="password"></div>
                        <input type='password' placeholder="密碼" ref="password" />
                    </div>
                </form>
                    <div className="buttonField">
                        <div>
                            <Button>忘記密碼</Button>
                            <Button>註冊</Button>
                        </div>
                        <div>
                            <Button type="submit" id="loginButton"  form="form" raised>登入</Button>                  
                        </div>
                    </div>
            </div>
        )
    }

}

const mapDispatch = (dispatch) => {
    return {
        login: (account, password) => {
            dispatch(login(account, password));
        },
        catchError:(error)=>{
            dispatch(catchError(error))
        }
    }
}

export default connect(null, mapDispatch)(LoginDialogBody)

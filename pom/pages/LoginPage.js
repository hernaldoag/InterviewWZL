import {Selector} from 'testcafe'


class LoginPage{
    constructor(){
        this.username = Selector('#login-page > p:nth-child(2) > input')
        this.password = Selector('#login-page > p:nth-child(3)')
        this.loginButton = Selector('#login-page > p:nth-child(5) > button.btn.btn-lg.btn-primary.button-login')
        
    }

    async login(){
        
    }
}

export default new LoginPage()
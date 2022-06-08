import {Selector} from 'testcafe'

class WelcomePage{
    constructor(){
        this.WelcomeLogin = Selector('#welcome-page > p:nth-child(4) > button')
    }
}

export default new WelcomePage()
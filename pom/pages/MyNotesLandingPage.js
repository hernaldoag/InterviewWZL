import { Selector} from 'testcafe'


class MyNotesLandingPage{
    constructor(){
        this.simpleNote = Selector('#my-notes-page > div > a:nth-child(1) > h4')
        
    }
}

export default new MyNotesLandingPage()
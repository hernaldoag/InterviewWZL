import {Selector,  t } from 'testcafe'
import WelcomePage from '../pom/pages/WelcomePage'
import LoginPage from '../pom/pages/LoginPage'
import MyNotesLandingPage from '../pom/pages/MyNotesLandingPage'

fixture (`Login in Notes App`)
    .page(`http://testapp.galenframework.com/#`)

test('Test Login - Fixed', async t => {
    await t.
    click(WelcomePage.WelcomeLogin)
    .typeText(LoginPage.username, "testuser@example.com", {paste:true})
    .typeText(LoginPage.password, "Test123", {paste:true})
    .click(LoginPage.loginButton)

    await t.expect(MyNotesLandingPage.simpleNote.exists).ok
   
})

test('Test Login - Wrong', async t => {
    await t.click(WelcomePage.WelcomeLogin)
    .typeText(LoginPage.username, "testuser@example.com", {paste:true})
    .typeText(LoginPage.password, "Test123", {paste:true})
    .click(LoginPage.loginButton)
    //Add Error Validation
})
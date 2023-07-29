const loginForm = (req, res) => {
    res.render('auth/login',{
        page: "Login"
    });
}
const registerForm = (req, res) => {
    res.render('auth/register',{
        page: "Register"
    });
}
const resetPassword = (req, res) => {
    res.render('auth/reset_password',{
        page: "Reset password"
    });
}

export {
    loginForm,
    registerForm,
    resetPassword
}
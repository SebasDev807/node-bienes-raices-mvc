const formLogin = (req, res) => {
    res.render('auth/login', {
        page: 'Iniciar Sesión'
    })
}

const formSignIn = (req, res) => {

    res.render('auth/registry', {
        page: 'Crear cuenta'
    })
}

const createAcount = (req, res) => {

   console.log(req.body);
}

const formForgotMyPassword = (req, res) => {
    res.render('auth/forgot-password', {
        page: 'Olvide mi contraseña'
    })
}

export {
    formLogin,
    formSignIn,
    formForgotMyPassword,
    createAcount
}
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

    const { password, repetir_password } = req.body;

    if(password !== repetir_password){
        return res.status(400).json({
            msg:'Las contraseñas no coinciden'
        })
    }

    res.json({
        password,
        repetir_password
    })
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
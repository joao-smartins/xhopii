import jwt from 'jsonwebtoken';

class LoginController {
    static renderizarLogin(req, res) {
        res.render('login');
    }

    static realizarLogin(req, res) {
        const { inputEmailLog, inputSenhaLog } = req.body;

        if (inputEmailLog === 'admin@xhopii.com' && inputSenhaLog === '1234') {
            const token = jwt.sign(
                { email: inputEmailLog }, 
                process.env.JWT_SECRET, 
                { expiresIn: '1h' }
            );

            res.cookie('token', token, { httpOnly: true });

            res.redirect('/');
        } else {
            res.status(401).send('E-mail ou senha inválidos! Tente admin@xhopii.com e 1234');
        }
    }

    static realizarLogout(req, res) {
        res.clearCookie('token');
        res.redirect('/login');
    }
}

export default LoginController;
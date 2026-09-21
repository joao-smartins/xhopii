import jwt from 'jsonwebtoken';

class LoginController {
    static renderizarLogin(req, res) {
        res.render('login');
    }

    static realizarLogin(req, res) {
        const { inputEmailLog, inputSenhaLog } = req.body;

        // Simulação de verificação de utilizador
        if (inputEmailLog === 'admin@xhopii.com' && inputSenhaLog === '1234') {
            // Cria o token JWT válido por 1 hora
            const token = jwt.sign(
                { email: inputEmailLog }, 
                process.env.JWT_SECRET, 
                { expiresIn: '1h' }
            );

            // Guarda o token num cookie seguro chamado 'token'
            res.cookie('token', token, { httpOnly: true });

            // Redireciona o utilizador autenticado para a página principal
            res.redirect('/');
        } else {
            res.status(401).send('E-mail ou senha inválidos! Tente admin@xhopii.com e 1234');
        }
    }

    static realizarLogout(req, res) {
        // Limpa o cookie e envia de volta para o login
        res.clearCookie('token');
        res.redirect('/login');
    }
}

export default LoginController;
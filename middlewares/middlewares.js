import jwt from 'jsonwebtoken';

export const logRequisicao = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};

export const verificarToken = (req, res, next) => {
    const token = req.cookies.token; 

    if (!token) {
        return res.redirect('/login'); 
    }

    try {
        
        const decodificado = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decodificado; 
        next(); 
    } catch (error) {
        res.clearCookie('token');
        return res.redirect('/login');
    }
};
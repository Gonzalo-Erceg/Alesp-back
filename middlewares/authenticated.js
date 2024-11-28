import jwt from "jsonwebtoken"
const secretKey = process.env.SECRET_SESSION
const isAuthenticated = (req, res, next) => {
  const token = req.headers["authorization"]
  if (!token) {
    req.status(404).json({redirect:true,red:"/auth.html"})
  }
 
  const tokenWithoutBearer = token.split(' ')[1];


  jwt.verify(tokenWithoutBearer, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido' });
    }
    console.log(decoded)
    req.user = decoded
    return next()
  })
};

const isAuthenticatedAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === "admin") {
    return next();
  }
  res.redirect("/auth");
};

export { isAuthenticated, isAuthenticatedAdmin };

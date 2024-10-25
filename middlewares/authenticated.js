const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/auth");
};

const isAuthenticatedAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === "admin") {
    return next();
  }
  res.redirect("/auth");
};

export { isAuthenticated, isAuthenticatedAdmin };

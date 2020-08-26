const permit = (...roles) => {
  return (req, res, next) => {
    const { user } = req;
    if (user && roles.includes(user.role)) {
      next();
    } else {
      res.sendStatus(401);
    }
  };
};

module.exports = permit;

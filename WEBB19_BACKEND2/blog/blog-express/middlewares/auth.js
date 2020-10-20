const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  if (!req.headers.authorization) return res.sendStatus(401);
  const token = req.headers.authorization.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = {
      ...payload,
      owns(comment) {
        return this._id === comment.userId;
      },
    };
    next();
  } catch (e) {
    console.log(e);
    return res.sendStatus(401);
  }
};

module.exports = auth;

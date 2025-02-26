const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token || !token.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized, no valid token" });
  }

  try {
    token = token.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    req.user = { userId: decoded.userId, role: decoded.role }; 

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized, invalid token" });
  }
};

module.exports = { protect };

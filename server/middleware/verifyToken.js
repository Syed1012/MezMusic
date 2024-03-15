import JWT from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(403)
      .json({ success: false, message: "Token is required" });
  }

  try {
    const decoded = JWT.verify(token, process.env.JWT_SCERET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid Token" });
  }
};

export default verifyToken;
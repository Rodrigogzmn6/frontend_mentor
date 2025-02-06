import jwt from "jsonwebtoken";

// Access token verification Middleware
export const authenticateToken = (req, res, next) => {
  try {
    let token = null;
    if (req.method === "GET") {
      token = req.headers.authorization;
    } else {
      token = req.body.headers.authorization;
    }
    if (!token) {
      return res
        .status(401)
        .json({ message: "Authorization token was not provided." });
    }

    const decoded = jwt.verify(token, "secretKey");
    req.userId = decoded.userId;

    next();
  } catch (error) {
    console.error("Error en el middleware de autenticación", error);
    res.status(401).json({ message: "Invalid authorization token." });
  }
};

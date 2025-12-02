import jwt from "jsonwebtoken";
const validUsername = "testuserkml";
const validPassword = "password123";
const secretKey = "yourSecretKeykmllog125489";

const loginFn = (req, res, next) => {
  const { username, password } = req.body;

  // Check if the credentials match
  if (username === validUsername && password === validPassword) {
    // Create a JWT token
    const token = jwt.sign({ username }, secretKey, { expiresIn: "30mins" });

    // Send token to client
    return res.json({ token });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
};

const authenticate = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[0];

  // Check if token exists
  if (!token) {
    return res.status(403).json({ message: "Token is required" });
  }

  // Verify the token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }

    // Token is valid
    // return res.json({ message: "Access granted", user: decoded.username });
    next();
  });
};

export { authenticate, loginFn };

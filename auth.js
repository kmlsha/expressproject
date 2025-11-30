// import app from "./app.js";
import jwt from "jsonwebtoken";
const validUsername = "testuser";
const validPassword = "password123";

const authenticate = (req, res, next) => {
  const { username, password } = req.body;

  if (username === validUsername && password === validPassword) {
    // Authentication successful, proceed to the next middleware or route handler
    next();
  } else {
    // Authentication failed, send an error response
    console.log("auth failed");
    res.status(401).json({
      message: "Invalid credentials",
    });
  }
};

export { authenticate };

// Secret key for signing JWT
const SECRET_KEY = "mysecret123";

// Dummy user (for demo)
const user = {
  id: 1,
  username: "kamal",
  password: "1234",
};

// ----------------- LOGIN ROUTE -----------------
// app.post("/login", (req, res) => {
//   const { username, password } = req.body;

//   // Check credentials
//   if (username === user.username && password === user.password) {
//     // Generate JWT
//     const token = jwt.sign(
//       { userId: user.id, username: user.username },
//       SECRET_KEY,
//       { expiresIn: "1h" }
//     );

//     res.json({ token });
//   } else {
//     res.status(401).json({ message: "Invalid credentials" });
//   }
// });

// // ----------------- PROTECTED ROUTE -----------------
// app.get("/protected", (req, res) => {
//   const authHeader = req.headers["authorization"];

//   if (!authHeader)
//     return res.status(401).json({ message: "No token provided" });

//   const token = authHeader.split(" ")[1]; // Bearer <token>

//   try {
//     const decoded = jwt.verify(token, SECRET_KEY); // verify token
//     res.json({ message: "Protected data", user: decoded });
//   } catch (err) {
//     res.status(401).json({ message: "Invalid or expired token" });
//   }
// });

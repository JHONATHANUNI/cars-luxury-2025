import express from "express";
import fs from "fs";
import bcrypt from "bcryptjs";

const router = express.Router();

// Cargar usuarios
const loadUsers = () => {
  const data = fs.readFileSync("./users.json", "utf-8");
  return JSON.parse(data).users;
};

// Guardar usuarios
const saveUsers = (users) => {
  fs.writeFileSync("./users.json", JSON.stringify({ users }, null, 2));
};

// ---------------------- REGISTRO -------------------------
router.post("/register", (req, res) => {
  const { email, password } = req.body;

  const users = loadUsers();
  const exists = users.find((u) => u.email === email);

  if (exists) return res.status(400).json({ message: "El usuario ya existe" });

  const hashed = bcrypt.hashSync(password, 10);

  users.push({ email, password: hashed });
  saveUsers(users);

  res.json({ message: "Registro exitoso" });
});

// ---------------------- LOGIN -------------------------
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const users = loadUsers();
  const user = users.find((u) => u.email === email);

  if (!user) return res.status(400).json({ message: "Usuario no encontrado" });

  const ok = bcrypt.compareSync(password, user.password);
  if (!ok) return res.status(400).json({ message: "Contraseña incorrecta" });

  res.json({ message: "Login exitoso" });
});

export default router;

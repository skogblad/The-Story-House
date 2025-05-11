import express from 'express';
import { verifyAccessToken } from '../middleware/verifyToken';
import { isAdmin } from '../middleware/isAdmin'; 
import { login, logout, register } from '../controller/authController'
import { 
  createUser, 
  deleteUser, 
  fetchUser, 
  updateUser,
  fetchAllUsers  } from '../controller/usersController';
const router = express.Router()


// 🔐 Public Auth Routes
router.post('/login', login);
router.post('/logout', logout);
router.post('/register', register);

// 🔐 Protected User Routes (require token)
router.get('/', verifyAccessToken, isAdmin, fetchAllUsers);
router.get('/:id', verifyAccessToken, fetchUser);
router.post('/', verifyAccessToken, createUser);
router.patch('/:id', verifyAccessToken, updateUser);
router.delete('/:id', verifyAccessToken, deleteUser);

export default router;

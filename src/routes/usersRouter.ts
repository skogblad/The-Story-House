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
router.get('/' , fetchAllUsers);
router.get('/:id', fetchUser);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;

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
router.post('/login', login); //verifytoken on client webpage
router.post('/logout', logout); //verifytoken on client webpage
router.post('/register', register); //verifytoken on client webpage

// 🔐 Protected User Routes (require token)
router.get('/' , verifyAccessToken, fetchAllUsers); //verifytoken admin on client webpage
router.get('/:id', verifyAccessToken, fetchUser); //verifytoken on client webpage
router.post('/', verifyAccessToken,createUser);  //verifytoken on client webpage
router.patch('/:id', updateUser); 
router.delete('/:id', deleteUser);

export default router;

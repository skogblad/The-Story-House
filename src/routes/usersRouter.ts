import express from 'express';
import { verifyAccessToken } from '../middleware/verifyToken';
import { login, logout, register } from '../controller/authController'
import {
  createUser,
  deleteUser,
  fetchUser,
  updateUser,
  fetchAllUsers,
} from '../controller/usersController';

const router = express.Router();

router.get('/', fetchAllUsers);
router.get('/:id', fetchUser);

//Need verfiAccessToken 
router.post('/', verifyAccessToken, createUser);
router.patch('/:id',verifyAccessToken, updateUser);
router.delete('/:id',verifyAccessToken, deleteUser);

//Need Verify Access  
router.post('/login', login);
router.post('/logout', logout);
router.post('/register', register)


export default router;

import express from 'express';
import { verifyAccessToken } from '../middleware/verifyToken';
import { isAdmin } from '../middleware/isAdmin'; 
import { 
  createUser, 
  deleteUser, 
  fetchUser, 
  updateUser,
  fetchAllUsers  } from '../controller/usersController';
const router = express.Router()

// 🔐 Protected User Routes (require token)
router.get('/', fetchAllUsers);  
router.get('/:id', fetchUser); 
router.post('/', createUser);   
router.patch('/:id',verifyAccessToken, updateUser); 
router.delete('/:id', verifyAccessToken, deleteUser);  

export default router;

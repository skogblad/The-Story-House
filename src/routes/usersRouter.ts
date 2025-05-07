import express from 'express';
import { verifyAccessToken } from '../middleware/verifyToken';
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
router.post('/',verifyAccessToken, createUser);
router.patch('/:id',verifyAccessToken, updateUser);
router.delete('/:id',verifyAccessToken, deleteUser);

export default router;

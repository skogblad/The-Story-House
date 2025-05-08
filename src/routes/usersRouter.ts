import express from 'express';
import { 
  createUser, 
  deleteUser, 
  fetchUser, 
  updateUser,
  fetchAllUsers  } from '../controller/usersController';
const router = express.Router()

router.get('/', fetchAllUsers)
router.get('/:id', fetchUser)
router.post('/', createUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

router.get('/', fetchAllUsers);
router.get('/:id', fetchUser);

//Need verfiAccessToken 
router.post('/', verifyAccessToken, createUser);
router.patch('/:id',verifyAccessToken, updateUser);
router.delete('/:id',verifyAccessToken, deleteUser);

//Need Verify Access  
router.post('/login', login);
router.post('/logout', logout);
router.post('/:id', register)


export default router;

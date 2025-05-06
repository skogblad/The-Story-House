import express from 'express';
import { 
  createUser, 
  deleteUser, 
  fetchAllUsers, 
  fetchUser, 
  updateUser } from '../controller/usersController';
const router = express.Router()

router.get('/', fetchAllUsers)
router.get('/:id', fetchUser)
router.post('/', createUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router;
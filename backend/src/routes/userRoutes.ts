import express from 'express';
import * as userController from '../controllers/userController';

const router = express.Router();



router.get('/test', (req, res) => {
  res.json({ message: 'API fonctionne correctement' });
});



// GET all users
router.get('/', userController.getUsers);

// GET user by ID
router.get('/:id', userController.getUserById);

// POST new user
router.post('/',  userController.createUser);

// PUT update user
router.put('/:id', userController.updateUser);

// DELETE user
router.delete('/:id', userController.deleteUser);

export default router;
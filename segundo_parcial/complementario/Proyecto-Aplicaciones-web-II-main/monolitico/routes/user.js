const express = require('express');
const { allUsers, getUsers, addUser, getUserById, editUser, deleteUser } = require('../controllers/user')

const router = express.Router();

router.get('/alluser', allUsers);
router.get('/users', getUsers);
router.post('/adduser', addUser);
router.get('/user/:id', getUserById);
router.put('/user/:id', editUser);
router.delete('/user/:id', deleteUser);

module.exports = router;
/*// GET all Tasks
router.get('/users', getUsers);

// GET all Tasks
router.get('/user/:id', getUser);

// ADD a new task
router.post('/user', createUser);

// UPDATE a new task
router.put('/user/:id', updateUser);

router.delete('/user/:id', deleteUser);*/

module.exports = router;
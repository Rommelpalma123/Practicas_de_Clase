const  User = require('../models/user');


const allUsers = async (req, res) =>
{
    res.send('ruta usuario monolitica')
}
// Get all users
const getUsers = async (request, response) => {
    // Step -1 // Test API
    // response.send('Code for Interview');
    try{
        // finding something inside a model is time taking, so we need to add await
        const users = await User.find();
        response.status(200).json(users);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the user in database
const addUser = async (request, response) => {
    // retreive the info of user from frontend
    const user = request.body;
    console.log("inside")

    const newUser = new User(user);
    try{
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get a user by id
const getUserById = async (request, response) => {
    try{
        const user = await User.findById(request.params.id);
        response.status(200).json(user);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited user in the database
const editUser = async (request, response) => {
    let user = await User.findById(request.params.id);
    user = request.body;

    const editUser = new User(user);
    try{
        await User.updateOne({_id: request.params.id}, editUser);
        response.status(201).json(editUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of user from the database
const deleteUser = async (request, response) => {
    try{
        await User.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
module.exports = { getUsers, addUser, getUserById, editUser, deleteUser, allUsers }
/*const User = require('../models/user');


const getUsers = async ( req, res) =>
{
    const users = await User.find();
    res.json(users);
}

const createUser = async (req, res) => 
{
    const { nombre, description } = req.body;
    const user = new User({nombre, description});
    await user.save();
    res.json({status: 'User Saved'});
}

const getUser = async (req, res) => 
{
    const user = await User.findById(req.params.id);
    res.json(user);
}

const deleteUser = async (req, res) => 
{
    await User.findByIdAndRemove(req.params.id);
    res.json({status: 'user Deleted'});
}

const updateUser = async (req, res) => 
{
    const { name, description } = req.body;
    const newUser = {name, description};
    await User.findByIdAndUpdate(req.params.id, newUser);
    res.json({status: 'User Updated'});
}
module.exports = { updateUser, getUsers, createUser, getUser, deleteUser };*/
import User from '../models/User.model.js'

export const register = async (req, res) => {
     const {email, password, username} = req.body;
     try {
        const newUser = new User({
            username,
            password,
            email
         })

         await newUser.save();
         res.send('registrando...')
         console.log(newUser);
     } catch (error) {
        console.log(error);
     }

     
};

export const login = (req,res) => res.send('login');

import User from '../models/User.model.js'
import bcrypt from 'bcryptjs' // usado para encriptar la password
import createAccessToken from '../libs/jwt.js';

export const register = async (req, res) => {
     const {email, password, username} = req.body;
     try {

         const passwordHash = await bcrypt.hash(password, 10)

         const newUser = new User({
            username,
            email,
            password: passwordHash
         });
         
         const userSaved = await newUser.save();
         const token = await createAccessToken({id: userSaved._id});
         res.cookie('token', token)
         res.json({message:'Usuario creado satisfactoriamente.'},token);

         
     } catch (error) {
        console.error(error);
        res.status(500).json({message0:'Error al registrar usuario', message: error.message});
     }     
};

export const login = async (req,res) => {
   const {email , password} = req.body;
   try {
      const userFound = await User.findOne({ email })
      if(!userFound) return res.status(500).json({ message: 'User not found' })
      
      const isMatch = await bcrypt.compare(password , userFound.password);
      if(!isMatch) return res.status(400).json({ message: 'Incorrect password' });

      const token = await createAccessToken({ id: userFound._id});

      res.cookie("token", token);
      res.json({
         id: userFound._id,
         username: userFound.username,
         email: userFound.email,
         message:'Sesión iniciada con éxito'
      })
   }catch(error){
      res.status(500).json({ message: error.message });
   }
  

};

export const logout = (req, res) => {
   res.cookie('token', '',{
      expires: new Date(0)
   })
   res.json({message:'Sesion finalizada'});
   return res.sendStatus(200);
   
}

export const profile = async (req, res) =>{
   const userFound =await User.findById(req.user.id)

   if(!userFound) return res.status(404).json({message:"User not found"});

   return res.json({
      id: userFound.id,
      username : userFound.username,
      email : userFound.email
   })
   
}
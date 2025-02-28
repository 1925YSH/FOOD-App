import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcryptjs from "bcryptjs"
import validator from 'validator'


//Login User
const loginUser = async(req,resp)=>{

    const {email,password}=req.body;

try {
    //it checks the account is avilable with respect to the email then i will be stored in user variable
        const user = await userModel.findOne({email})    

        if (!user) {
         return resp.json({success:false,message:"User does not exits"});
        }
        //if the user is available we match the password from stored pswd in db
            const isMatch = await bcryptjs.compare(password,user.password);

            //if pswd is not matched
            if (!isMatch) {
                return resp.json({success:false,message:"Invalid password"})
            }

            //if pswad is matched then generate an token

            const token = createToken(user._id);

            resp.json({success:true,token});

} catch (error) {
            console.log(error);
                resp.json({success:false,message:"Error"})
}

}



//create token

const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//Register USer

const registerUser =async(req,resp)=>{
    const {name,email,password} =req.body;
    try {
        //checking if the user already exists
        const exist = await userModel.findOne({email})
        
        if (exist) {
            return resp.json({success:false,message:"User already exists"})
        }

        //validating email formate and strong password

        if (!validator.isEmail(email)) {
            return resp.json({success:false,message:"Please enter valid email"})
        }

        if (password.length<8) {
            return resp.json({success:false,message:"Please enter a strong password"})
             
        }

        //hashing user password

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password,salt);

        //creating acc of new user
        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)

        resp.json({success:true,token})


    } catch (error) {
        console.log(error);
        resp.json({success:false,message:"Error"})
    }

}


export {loginUser,registerUser}
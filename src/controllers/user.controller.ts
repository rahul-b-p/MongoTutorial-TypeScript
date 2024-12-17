import { Request, Response } from "express";
import { userBody } from "../types/body.type";
import users from "../models/users.model";
import { log } from "console";


export const createUser = async (req: Request<{}, any, userBody>, res: Response) => {
    try {
        const { username, email, age } = req.body;


        const existingUser = await users.findOne({ email });
        if (existingUser) {
            res.status(409).json({ message: 'User Already Exist' });
            return
        }
        const newUser = new users({
            username, email, age
        });
        await newUser.save();
        res.json({ message: 'New user added', data: newUser });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const readUser = async (req: Request<{}, any, any, { name: string }>, res: Response) => {
    try {
        const { name } = req.query
        const allUsers = await users.find({
            username: { $regex: name, $options: "i" },
        },{_id:1,username:1,age:1}).sort({username:1});
        res.json({ message: 'Fetched all users', data: allUsers });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const updateUser = async (req: Request<{ id: string }, any, userBody>, res: Response) => {
    try {
        const { id } = req.params
        log(id)
        const { username, email, age } = req.body
        const updatedUser = await users.findByIdAndUpdate({ _id: id }, { email, username, age });
        await updatedUser?.save();
        res.json({ message: 'Updated Successful', data: updatedUser });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteUser = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const { id } = req.params
        const deletedUser = await users.findByIdAndDelete({ _id: id });
        res.json({ message: 'Deleted Successful', data: deletedUser });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

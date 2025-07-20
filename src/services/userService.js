import { UserModel } from '../models/userModel.js'

//handles logic
export const UserService = {
    async createUser(newUser) {
        const {name, email} = newUser;
        const createdUser = await UserModel.create({ name, email });
        return createdUser;
    }
 }
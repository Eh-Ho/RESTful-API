const BaseService = require(`${config.path.services}/BaseService`);
const bcrypt = require('bcrypt');
const AppError = require(`${config.path.middlewares}/errorHandler`);
const {StatusCodes} = require('http-status-codes');



module.exports = new class UserService extends BaseService {
    
    async createUser(userBody) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userBody.password, salt);

        
        const newUser = await this.model.User.create({
            ...userBody,
            password: hashedPassword
        });

        return newUser;
    };

    async updateUser(updateData, userId) {

        if (updateData.password) {
            const salt = await bcrypt.genSalt(10);
            updateData.password = await bcrypt.hash(updateData.password, salt);
        }
        const updatedUser = await this.model.User.findByIdAndUpdate(userId, updateData, { 
            new: true, 
            runValidators: true 
        });

        if (!updatedUser) {
            throw new AppError('User not found.', StatusCodes.NOT_FOUND);
        }

        return updatedUser;
    };

    async deleteUser(userId) {
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            throw new AppError('User not found.', StatusCodes.NOT_FOUND);
        }

        return { message: 'User deleted successfully', id: userId };
    };

    async getUser(userId) {
        const user = await this.model.User.findById(userId);

        
        if (!user) {
            throw new AppError('User not found.', StatusCodes.NOT_FOUND);
        }

        return user;
    };

    async getAllUsers() {
        
        const users = await this.model.User.find().sort({ created_at: -1 });
        return users;
    };

}
const BaseService = require('./BaseService');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { StatusCodes } = require('http-status-codes');
const AppError = require(`${config.path.middlewares}/errorHandler`);

module.exports = new class AuthService extends BaseService{

    _generateToken(user) {
        return jwt.sign(
            { userId: user._id, role: user.role }, 
            config.JWT_SECRET, 
            { expiresIn: '1d' }
        );
    }

    async register(userInfo) {

        const existingUser = await this.model.User.findOne({ email: userInfo.email });
        
        if (existingUser) {
            throw new AppError('Email is already in use.', StatusCodes.CONFLICT);
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userInfo.password, salt);    
        const newUser = await User.create({
            ...userInfo,
            password: hashedPassword
        });

        const token = this._generateToken(newUser);
        const userResponse = newUser.toObject();
        delete userResponse.password;

        return { user: userResponse, token };
    };

    async signIn(userInfo) {
        const { email, password } = userInfo;

        const user = await this.model.User.findOne({ email });

        if (!user) {
            throw new AppError('Invalid email or password.', StatusCodes.UNAUTHORIZED);
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new AppError('Invalid email or password.', StatusCodes.UNAUTHORIZED);
        }

        const token = this._generateToken(user);
        const userResponse = user.toObject();
        delete userResponse.password;

        return { user: userResponse, token };
    };

    async signOut(userId) {
        return `user: ${userId}, signout successful` ;
    };



};
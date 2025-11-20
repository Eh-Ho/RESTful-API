module.exports = new class AuthDTO {

    register (reqBody) {
        const { name, email, password } = reqBody;

        return {
            name,
            email, 
            password,
            role : 'user' 
        };
    };

    signIn (reqBody) {
        const { email, password } = reqBody;

        return {
            email,
            password
        };
    };


};
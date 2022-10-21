import crypto from 'crypto'
import User from "../models/User.js";

function insertUser(user) {
    user.password =  hashPassword(user.password)
    const newUser = new User(user);
    return newUser.save()
}

function hashPassword(password) {
    // const hmac = crypto.createHmac('sha256', 'Sup3r_s3cr3t_k3yyyy');
    const hash = crypto.createHash('sha256')
    return hash.update(password).digest('hex')
}

function verifyUser(user) {
    user.password = hashPassword(user.password)
    return User.findOne(user)
}
export { hashPassword, insertUser, verifyUser }

import md5 from 'md5'
import cryptoRandomString from 'crypto-random-string'

export function hashPassword(clearPassword) {
    var salt = cryptoRandomString({ length: 10 });
    return { passwordToSave: md5(clearPassword + salt), salt: salt }
}

export function checkPassword(clearPassword, md5Password, salt) {
    return md5(clearPassword + salt) === md5Password
}
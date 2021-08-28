const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

module.exports.isValidEmail = (email) => {
    if (typeof email != 'string') {
        return false;
    }
    
    return emailRegex.test(email);
}
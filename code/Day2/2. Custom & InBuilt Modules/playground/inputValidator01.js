const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const isValidEmail = (email) => {    
    return emailRegex.test(email);
}

module.exports = {
    isValidEmail: isValidEmail
}
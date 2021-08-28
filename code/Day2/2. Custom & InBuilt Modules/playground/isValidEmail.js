const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

module.exports = (email) => {
    return emailRegex.test(email);
}
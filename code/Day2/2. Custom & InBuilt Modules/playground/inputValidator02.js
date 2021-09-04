const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

module.exports.isValidEmail = (email) => {
  return emailRegex.test(email);
};

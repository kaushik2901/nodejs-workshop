module.exports = {
    info: (message) => console.log(new Date(), message),
    err: (message) => console.error(new Date(), "Error", message),
}
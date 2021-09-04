module.exports = {
    info: (message) => console.log(new Date(), message),
    err: (message) => console.err(new Date(), "Error", message),
}
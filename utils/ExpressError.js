class ExpressError extends Error{
    constructor(message, statusCode) {
        super();
        thsi.message = message;
        this.statusCode = statusCode;
    }
}
module.exports = ExpressError;
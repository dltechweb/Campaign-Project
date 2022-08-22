const { CustomeAPIError } = require('../errors/custom-error')

const errorHanderMiddleware = (err, req, res, next) =>{
    if(err instanceof CustomeAPIError) {
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).json({msg: `Something went wrong, try again later`})
}

module.exports = errorHanderMiddleware
const sendResponse = (res, success= false, message, data= null, status= 200) => {

    return res.status(status).json({
        success,
        message,
        data
    });
}

export default sendResponse
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const utils = require('../utils/utils');

exports.scan = catchAsync(async (req, res, next) => {
    try{
        let {page}= req.params;
        let {token}= req.body;
    
        if (!page || !token) {
        //  check page and token
        return next(new AppError(' please proveide page and token ', 400));
        }
        const scanResult= await utils.scanApi(page, token);
        res.status(200).json({
                    status: 'success',
                    data: scanResult,
                });

    }catch(e){
        return next(new AppError(e.stack, 500));

    }
    
    
  
    
  });
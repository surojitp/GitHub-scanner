const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
//  Protecting Routes
module.exports = catchAsync(async (req, res, next) => {
  // 1- get the token check if exist
  //   const token=req.header('Authorization').replace('Bearer ','')
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(new AppError('Please provide token ', 401));
  }
  
  
  req.body["token"] = token;
  next();
});

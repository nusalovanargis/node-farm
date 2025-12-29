const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.signUp = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      user: newUser,
    },
  });
});

// exports.login = async (req, res, next) => {
//   const { email, password } = req.body;

//   // 1) Check if email and password exist
//   if (!email || !password) {
//     return res.status(400).json({
//       status: 'fail',
//       message: 'Please provide email and password!',
//     });
//   }

//   // 2) Check if user exists && password is correct
//   const user = await User.findOne({ email }).select('+password');

//   if (!user || user.password !== password) {
//     return res.status(401).json({
//       status: 'fail',
//       message: 'Incorrect email or password',
//     });
//   }

//   // 3) If everything ok, send token to client
//   res.status(200).json({
//     status: 'success',
//     message: 'Logged in successfully',
//   });
// };

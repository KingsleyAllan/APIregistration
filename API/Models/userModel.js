// const bcrypt = require('bcrypt');

// userSchema.pre('save', async function (next) {
//   try {
//     const salt = await bcrypt.genSalt(10);
//     const hashedPwd = await bcrypt.hash(this.password, salt);
//     this.password = hashedPwd; // Fix the typo here
//     next();
//   } catch (error) {
//     next(error); // Call next with the error in case of an exception
//   }
// });
// module.exports = {
// userSchema
// };

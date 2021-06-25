const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    trim: true,
    required: 'First Name is Required'
  },
  sirname: {
    type: String,
    trim: true,
    required: 'Last Name is Required'
  },
  password: {
    type: String,
    trim: true,
    required: 'Password is Required',
    validate: [({ length }) => length >= 6, 'Password should be longer.']
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
  }
});
// This is equivalent to Sequelize's beforeCreate hook
userSchema.pre( 'save', function( next ) {
  const user = this;
  if ( !user.isModified( 'password' ) ) {
    // if the user has not modified the password, call the next middleware
    return next();
  }
  try {
    const hashedPassword = await bcrypt.hash( user.password, 10 );
    user.password = hashedPassword;
    // call the next middleware
    next();
  } catch ( err ) {
    return next( err );
  }
});
// This is equivalent to Sequelize's beforeUpdate hook
userSchema.pre( 'updateOne', function( next ) {
  const update = this.getUpdate().$set
  if ( !update.password ) {
    return next();
  }
  try {
    const hashedPassword = await bcrypt.hash( update.password, 10 );
    update.password = hashedPassword;
    // call the next middleware
    next();
  } catch ( err ) {
    return next( err );
  }
});
userSchema.methods.comparePassword = function( pass ) {
  return bcrypt.compareSync( pass, this.password );
}
const User = mongoose.model( 'User', userSchema );
module.exports = User;

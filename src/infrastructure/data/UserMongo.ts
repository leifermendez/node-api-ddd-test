const userSchema = {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  uuid: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
};
export default userSchema;

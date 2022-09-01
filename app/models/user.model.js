module.exports = (mongoose, mongoosePaginate) => {
  var schema = mongoose.Schema(
    {
      name: {type: String, unique: true, required: true },
      email: { type: String, unique: true, required: true },
      phone: {type: String, unique: true, required: true },
      gender: {type: String, unique: true, required: true },
      password: {type: String, required: true },
      roles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Role"
        }
      ]
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  schema.plugin(mongoosePaginate);
  const findOrCreate = require('mongoose-findorcreate')
  schema.plugin(findOrCreate);

  return mongoose.model("User", schema);
}

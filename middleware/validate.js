const yup = require("yup");

const userCreateSchema = yup.object({
    name: yup.string().trim().min(2).max(64).required(),
    surname: yup.string().trim().min(2).max(64).required(),
    isMale: yup.boolean().required(),
    age: yup.number().positive().integer().required()
});

module.exports.validateUserCreate = (req, res, next) => {
  const { body } = req;
  userCreateSchema
    .validate(body)
    .then((validatedUser) => {
      req.body = validatedUser;
      next();
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};
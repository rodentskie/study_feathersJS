// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { app, result } = context;

    const User = app.services["users"].Model;

    const me = await User.findAll({
      attributes: ["id", "email", "age"],
      where: {
        id: result.userId,
      },
    });

    delete result.userId; // remove

    result.user = me;
    return context;
  };
};

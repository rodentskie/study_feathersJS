// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { app, result, params } = context;

    // if not authenticated; for login
    if (!params.authentication) return context;

    // append orders
    const Orders = app.services["orders"].Model;
    const ord = await Orders.findAll({
      attributes: ["id", "itemName", "qty"],
      where: {
        userId: context.id,
      },
    });

    result.orders = ord;
    return context;
  };
};

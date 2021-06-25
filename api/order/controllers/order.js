'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  me: async (ctx) => {
    const user = ctx.state.user;
    if (!user) {
      return ctx.badRequest(null, [{ messages: [{ id: 'No authorization header was found' }] }]);
    }

    const data = await strapi.services.order.find({user:user.id});

    if(!data){
      return ctx.notFound();
    }

    ctx.send(data);
  },
};

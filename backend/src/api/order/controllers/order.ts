/**
 * order controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::order.order', ({ strapi }) => ({
    async create(ctx) {
        const user = ctx.state.user;

        if(!user) {
            return ctx.unauthorized('You must be logged in');
        }

        const data = ctx.request.body.data;

        const order = await strapi.entityService.create('api::order.order', {
            data: {
                ...data,
                user: user.id
            }
        });

        return order;
    }
}));

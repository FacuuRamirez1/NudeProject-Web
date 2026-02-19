/**
 * collection controller
 */

import { factories } from '@strapi/strapi';
import { collectionSchema } from '@nudeproject/schemas';

export default factories.createCoreController('api::collection.collection', ({ strapi }) => ({
    async create (ctx) {
        const {data} = ctx.request.body;
        const parsed = collectionSchema.omit({ id:true }).safeParse(data);

        if(!parsed.success) {
            return ctx.badRequest('Invalid collection payload', {
                errors: parsed.error.format()
            });
        }

        return await super.create(ctx);
    },

    async update(ctx) {
        const {data} = ctx.request.body;
        const parsed = collectionSchema.partial().safeParse(data);

        if(!parsed.succes) {
            return ctx.badRequest('Invalid collection payload', {
                error: parsed.error.format()
            });
        }

        return await super.update(ctx);
    }
}));
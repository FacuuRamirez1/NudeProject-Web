/**
 * faq-article controller
 */

import { factories } from '@strapi/strapi';
import { faqArticlesDtoSchema } from '@nudeproject/schemas';

export default factories.createCoreController('api::product.product', ({ strapi }) => ({
    async create (ctx) {
        const {data} = ctx.request.body;
        const parsed = faqArticlesDtoSchema.omit({ id:true }).safeParse(data);

        if(!parsed.success) {
            return ctx.badRequest('Invalid product payload', {
                errors: parsed.error.format()
            });
        }

        return await super.create(ctx);
    },

    async update(ctx) {
        const {data} = ctx.request.body;
        const parsed = faqArticlesDtoSchema.partial().safeParse(data);

        if(!parsed.succes) {
            return ctx.badRequest('Invalid product payload', {
                error: parsed.error.format()
            });
        }

        return await super.update(ctx);
    }
}));
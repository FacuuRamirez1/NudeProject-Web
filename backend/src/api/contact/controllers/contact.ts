import { factories } from '@strapi/strapi';
import { Resend } from 'resend';
import { contactSchema } from '@nudeproject/schemas';
const resend = new Resend(process.env.RESEND_API_KEY);

export default factories.createCoreController('api::contact.contact', ({strapi}) => ({
    async sendEmail(ctx) {

        const parsed = contactSchema.safeParse(ctx.request.body);
        try {

            const data = await resend.emails.send({
                from: `Nude Project Contact <nudeprojectcontactg@resend.dev>`,
                to: ['helpnudeprojectfacuweb@gmail.com'],
                replyTo: parsed.email,
                subject: `New message from ${parsed.name}`,
                html: `
                    <p>Message: </p>
                    ${parsed.message}
                    <br/>
                    <p>To respond you can contact the email: ${parsed.email}</p>
                `
            });
    
            return { success: true, data };
        } catch (error) {
            ctx.badRequest(500, error);
        }
    }
}));
/**
 * contact router
 */

export default {
    routes: [
        {
            method: 'POST',
            path: '/contact',
            handler: 'api::contact.contact.sendEmail',
            config: {
                auth: false,
            }
        }
    ]
}


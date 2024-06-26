// path:./src/middlewares/save-ip.js
module.exports = (strapi) => {
  return {
    initialize() {
      strapi.app.use(async (ctx, next) => {
        await next();

        // Check if the request is a POST request
        if (ctx.method === "POST") {
          const ipAddress = ctx.ip; // Get the client's IP address

          // Example: Save IP address in a custom field for a specific model
          if (ctx.request.url.startsWith("/events")) {
            const articleData = ctx.request.body;
            articleData.creator = ipAddress; // Assuming there's a field named 'ipAddress'

            // Update the request body with the IP address
            ctx.request.body = articleData;
          }

          // Repeat similar blocks for other models/entities as needed
        }
      });
    },
  };
};

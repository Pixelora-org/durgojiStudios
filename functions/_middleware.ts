export const onRequest: PagesFunction = async ({ request, next }) => {
  const url = new URL(request.url);
  
  // If the request is for a static asset (has extension), serve it directly
  if (url.pathname.match(/\.[\w]+$/)) {
    return next();
  }
  
  // For all other routes, serve index.html for SPA routing
  try {
    const response = await next();
    if (response.status === 404) {
      return next(new Request(new URL('/index.html', request.url)));
    }
    return response;
  } catch (error) {
    // If anything fails, try to serve index.html
    return next(new Request(new URL('/index.html', request.url)));
  }
};


// Assuming a routes configuration object
const routes = {
    site: {
      home: '/',
    },
    auth: {
      signin: '/signin',
      signup: '/signup',
      logout: '/logout',
    },
  };
  
  // urlFor function
  const urlFor = (routeKey) => {
    // Check if the route key exists in the routes configuration
    if (routes[routeKey]) {
      return routes[routeKey];
    }
  
    // If the route key is not found, you can handle it accordingly (e.g., throw an error, return a default route)
    console.error(`Route key "${routeKey}" not found in routes configuration.`);
    return '/';
  };
  
  export default urlFor;
  
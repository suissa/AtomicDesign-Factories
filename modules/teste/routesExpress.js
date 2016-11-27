module.exports = (Routes, router) => Routes.map( (route, index) => 
  router[route.method](route.path, route.action) )

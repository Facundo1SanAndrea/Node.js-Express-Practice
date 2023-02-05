const authorize = (request, response, next) => {
    const {user} = request.request;
    if (user === 'john'){
        request.user = {name:'jhon',id:3}
        next()
    }
    else {
        response.status(401).send('Unauthorized')
    }
}

module.exports = authorize
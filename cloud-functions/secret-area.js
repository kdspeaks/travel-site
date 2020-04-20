exports.handler = function(event, context, callback) {
    
    let body

    if(event.body) {
        body = JSON.parse(event.body)
    } else {
        body = {}
    }

    if(body.password == "javascript") {
        callback(null, {
            statusCode: 200,
            body: "test"
        })
    } else {
        callback(null, {
            statusCode: 401
        })
    }
    
    
}
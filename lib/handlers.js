
// Define all the handlers
const handlers = {};

handlers._hello = {}; // containers for respective submethods ( Who knows? Maybe we could build this out and use it to make new friends online (??) )

handlers.hello = (data, callback) => {

    let acceptableMethods = ['post'];

    if (acceptableMethods.indexOf(data.method) > -1) {
        handlers._hello[data.method](data, callback);
    } else {
        callback(405);
    }
}

handlers._hello.post = (data, callback) => {

    let what_you_posted = data.payload;

    if( Object.keys(what_you_posted).length === 0 && what_you_posted.constructor === Object ) {

        callback(200, { '\'Hello\' back atacha!': 'Did you want to post something?'  });
    }
    else
    { 
        callback(200, { '\'Hello\' back atacha! You posted this:': what_you_posted });
    }
};

handlers.not_found = ( data, callback ) => {

    callback(404, { 'Error': 'Url not found' });
}


module.exports = handlers;


// Container for all the helpers
const helpers = {};


// Parse a JSON string to an object in all cases, without throwing
helpers.parseJsonToObject = (str) => {

    try {

        let obj = JSON.parse(str);

        return obj;

    } catch (e) {

        return {};
    }
};


// export the helpers module
module.exports = helpers;
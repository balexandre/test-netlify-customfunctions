const moment = require('moment');
const axios = require('axios');

const logger = require('./logger');

exports.handler = async (event, context) => {
  try {
    logger.log('Hi there'); // test external file

    const res = await axios.get('https://api.ipify.org?format=json'); // test await on axios

    // default docs response with extra "body"
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Hello ${subject}`,
        time: moment().format('DD MMM YYYY'),
        env: process.env.NODE_ENV,
        axios: res.data
      })
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}

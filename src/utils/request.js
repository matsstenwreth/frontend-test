const axios = require('axios')

async function request (options) {
  try {
    return await axios(options)
  } catch (err) {
    if (err.response?.status === 404) return err.response
    const errorMessage = err.message
    throw new Error(errorMessage)
  }
}

module.exports = {
  request
}

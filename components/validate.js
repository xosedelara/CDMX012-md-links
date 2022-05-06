const path = require('path')
const axios = require('axios')

const validateLinks = (array) => {
  let validatedLinks = Promise.all(array.map((obj) => {
    return axios.get(obj.href).then(res => {
      const data = {
        ...obj,
        status: res.status,
        ok: 'ok',
      };
      return data;
    }).catch(error => {
        const data = {
          ...obj,
          status: 404,
          ok: 'fail',
        };
        return data;
    });
  }));
  return validatedLinks
}; 

module.exports = { validateLinks }
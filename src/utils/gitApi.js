var axios = require('axios');

module.exports = {
  getImage: function (user) {
    return axios.get('https://api.github.com/users/' + user)
      .then(function (response) {
        return response.data.avatar_url;
     });
   },
   getRepos: function (user) {
     return axios.get('https://api.github.com/users/' + user)
       .then(function (response) {
         return response.data;
      });
    }
 };

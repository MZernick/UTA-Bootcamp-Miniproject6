var getSearchResults = function (user) {

    //if they !selct format
    var apiUrl = 'https://api.github.com/users/' + user;
    //else 
    var apiUrl = 'https://api.github.com/users/' + user;
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          console.log(response);
          response.json().then(function (data) {
            console.log(data);
            displayRepos(data, user);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to GitHub');
      });
  };
var getRepoIssues = function (repo) {
  var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
  fetch(apiUrl).then(function (response) {
    //request was sucessful
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
      });
    } else {
        alert("There was a problem with you request!");
    }
  });
};
getRepoIssues("facebook/react");

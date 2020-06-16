let APIURL = "";

switch (window.location.hostname) {
  // this is the localhost name of your react app
  case "localhost" || "127.0.0.1":
    // this is the local hostname of the server side of this application
    APIURL = "http://localhost:3000";
    break;
  // this is the deployed react application
  case "mr-ratings.herokuapp.com":
    // this is the full url of the deployed API(Server side)
    APIURL = "https://mr-serverapi2020.herokuapp.com";
  // testing
}

export default APIURL;

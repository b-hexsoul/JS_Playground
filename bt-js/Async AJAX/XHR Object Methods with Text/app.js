document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  // Create XHR Object - basically instantiating this object. This object has properties and methods associated
  const xhr = new XMLHttpRequest();

  // OPEN - Specify the type of request and the url or filename we want to make it to
  xhr.open("GET", "data.txt", true); //GET request is essentially we want to read the file

  // console.log('READYSTATE', xhr.readyState);

  // Option - Used for spinners/loaders
  xhr.onprogress = function () {
    console.log("READYSTATE", xhr.readyState);
  };

  xhr.onload = function () {
    // Check if status is 200. See HTTP Statuses below:
    if (this.status === 200) {
      document.getElementById("output").innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  xhr.onerror = function () {
    console.log("Request error...");
  };

  xhr.send();

  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  /* HTTP Statuses
      200: "OK"
      403: "Forbidden"
      404: "Not Found"
    */
}

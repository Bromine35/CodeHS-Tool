fetch(`https://codehs.com/editor/ajax/get_solution_code?itemID=${window.pageSpecific.itemID}&gulpUrl=${CHS.GULP_URL}&method=get_solution_code`, {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-US,en;q=0.9",
    "priority": "u=1, i",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": createReferrer(),
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
})
.then(response => {
  if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
  }
  return response.json();
})
.then(data => {
  if (data.status === "ok") {
      let decodedSolutionCode = decrypt(data.solutionCodeJson);
      console.log(unescape(decodedSolutionCode))
  } else {
      console.error('Failed to retrieve solution code.');
  }
})
.catch(error => {
  console.error('Error:', error);
});

function decrypt(encodedSolutionCode) {
const decodedSolutionCode = encodedSolutionCode.split('').map((char, index) => {
  const offsetChar = CHS.GULP_URL[index % CHS.GULP_URL.length];
  return String.fromCharCode((char.charCodeAt(0) - offsetChar.charCodeAt(0)) % 256);
}).join('');
return decodedSolutionCode;
}

function createReferrer() {
    let protocol = window.location.protocol;
    let hostname = window.location.hostname;
    let port = window.location .port? ':' + window.location.port : '';
    let pathname = window.location.pathname;
    let search = window.location.search;
    let hash = window.location.hash;
    return protocol + "//" + hostname + port + pathname + search + hash;
}
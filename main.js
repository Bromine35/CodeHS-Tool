// main.js leaks most of this info so we can just grab the headers the same way

function createReferrer() {
    let protocol = window.location.protocol;
    let hostname = window.location.hostname;
    let port = window.location .port? ':' + window.location.port : '';
    let pathname = window.location.pathname;
    let search = window.location.search;
    let hash = window.location.hash;

    // gawdamn why is it so complicated

    return protocol + "//" + hostname + port + pathname + search + hash;
}

function createToken() { // lol just grab cookie and call it the token
    let csrfToken = null;
    if (document.cookie && document.cookie!== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.substring(0, "csrftoken".length + 1) === "csrftoken=") {
                csrfToken = decodeURIComponent(cookie.substring("csrftoken".length + 1));
                break;
            }
        }
    }
    return csrfToken;
}

function incrementation(url) {
    const parsed = new URL(url);
    let segs = parsed.pathname.split('/');
    if (!isNaN(segs[segs.length - 1])) {
        segs[segs.length - 1] = parseInt(segs[segs.length - 1]) + 1;
    }
    const newPath = segs.join('/');
    parsed.pathname = newPath;
    return parsed.toString();
}

fetch("https://codehs.com/lms/ajax/submit_assignment", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-ch-ua": navigator.userAgent,
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-csrftoken": createToken(),
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": createReferrer(),
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": `student_assignment_id=${/*DAMN I DIDNT THINK IT WAS GONNA BE THAT EASY*/window.pageSpecific.studentAssignmentID}&method=submit_assignment`,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

function footer() {
    let element = document.createElement('div');

    element.style = `font-family: "Nunito", sans-serif; font-size: 14px; height: 65px; width: 175px; border: 4px solid rgb(15, 15, 15); background: rgb(240, 240, 240); position: absolute; top: 20px; left: 20px; border-radius: 10px; color: rgb(0, 0, 0); text-align: center; z-index: 99999;`;
    element.innerHTML = `<p>Turned in assignment. Going to the next assignment.</p>`;
    element.id = "doxrMenu";

    document.body.appendChild(element);
}

footer();

setTimeout(function() {
    // gawdamn why is it so complicated
    location.href = incrementation(createReferrer());
}, 100);

// ==UserScript==
// @name         CodeHS Assignment Submission
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Submit assignments on CodeHS automatically
// @author       Bromine35
// @match        https://codehs.com/student/*/section/*/assignment/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function createReferrer() {
        let protocol = window.location.protocol;
        let hostname = window.location.hostname;
        let port = window.location.port? ':' + window.location.port : '';
        let pathname = window.location.pathname;
        let search = window.location.search;
        let hash = window.location.hash;

        return protocol + "//" + hostname + port + pathname + search + hash;
    }

    function createToken() {
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

    function submitAssignment() {
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
            "body": `student_assignment_id=${window.pageSpecific.studentAssignmentID}&method=submit_assignment`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        }).then(response => {
            if (response.ok) {
                setTimeout(function() {
                    location.href = incrementation(createReferrer());
                }, 100);
            } else {
                console.error("Submission failed");
            }
        });
    }

    submitAssignment();
})();

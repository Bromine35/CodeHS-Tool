javascript:function%20decrypt%28e%29%7Breturn%20e.split%28%22%22%29.map%28%28%28e%2Co%29%3D%3E%7Bconst%20t%3DCHS.GULP_URL%5Bo%25CHS.GULP_URL.length%5D%3Breturn%20String.fromCharCode%28%28e.charCodeAt%280%29-t.charCodeAt%280%29%29%25256%29%7D%29%29.join%28%22%22%29%7Dfunction%20createReferrer%28%29%7Breturn%20window.location.protocol%2B%22%2F%2F%22%2Bwindow.location.hostname%2B%28window.location.port%3F%22%3A%22%2Bwindow.location.port%3A%22%22%29%2Bwindow.location.pathname%2Bwindow.location.search%2Bwindow.location.hash%7Dfunction%20footer%28%29%7Blet%20e%3Ddocument.createElement%28%22div%22%29%3Be.style%3D%27font-family%3A%20%22Nunito%22%2C%20sans-serif%3B%20font-size%3A%2010px%3B%20border%3A%204px%20solid%20rgb%2815%2C%2015%2C%2015%29%3B%20background%3A%20rgb%28240%2C%20240%2C%20240%29%3B%20position%3A%20absolute%3B%20top%3A%2020px%3B%20right%3A%2020px%3B%20width%3A%2035%25%3B%20border-radius%3A%2010px%3B%20color%3A%20rgb%280%2C%200%2C%200%29%3B%20z-index%3A%2099999%3B%20padding%3A%203px%3B%27%2Ce.innerHTML%3D%22%22%2Ce.id%3D%22doxrMenu%22%2Cdocument.body.appendChild%28e%29%7Dfunction%20additionalUnescaping%28%29%7Blet%20e%3Ddocument.getElementById%28%22doxrMenu%22%29%2Co%3De.innerHTML%2B%22%22%3Bo%3Do.replace%28%2F%5C%5Cn%2Fg%2C%22%5Cn%22%29%2Co%3Do.replace%28%2F%5C%5Ct%2Fg%2C%22%20%20%20%20%22%29%2Co%3Do.replace%28%2F%5C%5C%22%2Fg%2C%27%22%27%29%2Co%3Do.replace%28%2F%5C%5C%27%2Fg%2C%22%27%22%29%2Cconsole.log%28o%29%2Ce.innerHTML%3D%22%3Cpre%3E%3Ccode%3E%5Cn%22%2Bo%2B%22%5Cn%3C%2Fpre%3E%3C%2Fcode%3E%22%7D%21function%28%29%7Bvar%20e%3DXMLHttpRequest.prototype.open%3BXMLHttpRequest.prototype.open%3Dfunction%28o%2Ct%2Cn%2Cr%2Ci%29%7Bvar%20c%3Dthis%2Cs%3Dthis.send.bind%28this%29%3Bthis.send%3Dfunction%28e%29%7Breturn%20console.log%28%22found%20POST%20request%2C%20detecting%20paste%22%29%2C%22string%22%3D%3Dtypeof%20e%26%26e.includes%28%22%26reason%3Dpaste%22%29%7C%7Ct.includes%28%22%2Feditor%2Fajax%2Fsave_keystroke%22%29%3F%28console.log%28%22DETECTED%20PASTE%22%29%2Cc.abort%28%29%2C%211%29%3A%28console.log%28%22did%20not%20find%20paste%22%29%2Cs.apply%28c%2Carguments%29%29%7D%2Ce.call%28this%2Co%2Ct%2Cn%2Cr%2Ci%29%7D%7D%28%29%2Cfetch%28%60https%3A%2F%2Fcodehs.com%2Feditor%2Fajax%2Fget_solution_code%3FitemID%3D%24%7Bwindow.pageSpecific.itemID%7D%26gulpUrl%3D%24%7BCHS.GULP_URL%7D%26method%3Dget_solution_code%60%2C%7Bheaders%3A%7Baccept%3A%22application%2Fjson%2C%20text%2Fjavascript%2C%20%2A%2F%2A%3B%20q%3D0.01%22%2C%22accept-language%22%3A%22en-US%2Cen%3Bq%3D0.9%22%2Cpriority%3A%22u%3D1%2C%20i%22%2C%22sec-fetch-mode%22%3A%22cors%22%2C%22sec-fetch-site%22%3A%22same-origin%22%2C%22x-requested-with%22%3A%22XMLHttpRequest%22%7D%2Creferrer%3AcreateReferrer%28%29%2CreferrerPolicy%3A%22strict-origin-when-cross-origin%22%2Cbody%3Anull%2Cmethod%3A%22GET%22%2Cmode%3A%22cors%22%2Ccredentials%3A%22include%22%7D%29.then%28%28e%3D%3E%7Bif%28%21e.ok%29throw%20new%20Error%28%60HTTP%20error%20status%3A%20%24%7Be.status%7D%60%29%3Breturn%20e.json%28%29%7D%29%29.then%28%28e%3D%3E%7Bif%28%22ok%22%3D%3D%3De.status%29%7Blet%20o%3Ddecrypt%28e.solutionCodeJson%29%2B%22%22%3Blet%20t%3Do.replace%28%2F%5Cn%2Fg%2C%22%5Cn%22%29%3Bdocument.getElementById%28%22doxrMenu%22%29.innerHTML%3Dfunction%28e%29%7Bconst%20o%3De.split%28%22%22%29%3Breturn%20o.shift%28%29%2Co.pop%28%29%2Co.join%28%22%22%29%7D%28t%29%2CadditionalUnescaping%28%29%7Delse%20console.error%28%22Failed%20to%20retrieve%20solution%20code.%22%29%7D%29%29.catch%28%28e%3D%3E%7Bconsole.error%28%22Error%3A%22%2Ce%29%7D%29%29%2Cfooter%28%29%3B
(() => {
    'use strict'

    document.addEventListener("DOMContentLoaded", function () {
        let yearTxt = document.getElementById('spanYear');
        yearTxt.innerText = new Date().getFullYear();
    });
})();
   
   

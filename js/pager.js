'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  if (window.matchMedia("(min-width: 450px)").matches) {
    let breaks = document.querySelectorAll('span.page-break');
    for (let i in breaks) {
      let b = breaks[i];
      let pageNumber = (parseInt(b.innerHTML, 10) + 1).toString();
      if (pageNumber.length === 1) {
        pageNumber = '00' + pageNumber;
      } else if (pageNumber.length === 2) {
        pageNumber = '0' + pageNumber;
      }
      let pageImg = document.createElement("img");
      pageImg.setAttribute('class', 'page-scan');
      pageImg.setAttribute('src', 'pageImg/p_' + pageNumber + '.png');
      b.appendChild(pageImg);
    }
  }else{
    console.log("if you had a bigger screen you'd be seeing scans of the book too." );
  }
});

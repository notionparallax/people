'use strict';

document.addEventListener("DOMContentLoaded", function(event) {

    let breaks = Array.from( document.querySelectorAll('span.page-break') );

    function checkBreaks() {
      for (var i = breaks.length - 1; i >= 0; i--) {
        isScrolledIntoView(breaks[i]);
      }
    }

    function isScrolledIntoView(elem) {
        let top = elem.getBoundingClientRect().top
        if ((top > 0) && (top < window.innerHeight)) {
          //console.log(elem, "in view");
          let pageNumber = (parseInt(elem.innerHTML, 10) + 1).toString();
          if (pageNumber.length === 1) {
            pageNumber = '00' + pageNumber;
          } else if (pageNumber.length === 2) {
            pageNumber = '0' + pageNumber;
          }
          let filename = 'p_' + pageNumber + '.png';
          let pageImg = document.createElement("img");
          pageImg.setAttribute('class', 'page-scan');
          pageImg.setAttribute('src', 'pageImg/' + filename);
          elem.appendChild(pageImg);
          ga('send', 'scan-load', filename);

          //remove this guy from breaks so the image only loads once
          breaks.splice(breaks.indexOf(elem), 1);
        }
    }

  if (window.matchMedia("(min-width: 450px)").matches) {
      document.addEventListener("scroll", checkBreaks, false);
    } else {
      console.log("if you had a bigger screen you'd be seeing scans of the book too.");
    }


  });

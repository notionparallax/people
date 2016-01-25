'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  let imgNode = '<img class="page-scan" src="pageImg/Image_Page_013.png">';
  let breaks = document.querySelectorAll('span.page-break');
  for(let i in breaks){
    console.log(breaks[i]);
  }
});

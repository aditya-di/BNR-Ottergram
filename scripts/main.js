/* string variables to access the data attributes */
var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS ='hidden-detail';
var ESC_KEY = 27;
/* set the detail image and title */
function setDetails(imageURL,titleText){
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src',imageURL);
  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}


/* get clicked thumbnail image and it's title */
function imageFromThumb(thumbnail){
 'use strict';
 return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail){
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

/* set the detail image and it's title */
function setDetailsFromThumb(thumbnail){
  'use strict';
  setDetails(imageFromThumb(thumbnail),titleFromThumb(thumbnail))
}

/* add event listener, when 'click' event occurs,function() is called */
function addThumbClickHandler(thumb){
  'use strict';
  thumb.addEventListener('click',function(event){
    event.preventDefault();
    setDetailsFromThumb(thumb);
    showDetails();
  });
}

/* detailed thumbnails array */
function getThumbnailsArray(){
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

/* get the list of thumbnails (size 5 beacuse of 5 images)
    and iterate over it [5] [a,a,a,a,a] */
function initializeEvents(){
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  addKeyPressHandler();
}

/* dynamically add class to html <body> */
function hiddeDetails(){
  'use strict';
  document.body.classList.add(HIDDEN_DETAIL_CLASS)
}

/* hide detail image when esc is pressed */
function addKeyPressHandler(){
  'use strict';
  document.body.addEventListener('keyup',function(event){
    event.preventDefault();
    console.log(event.keyCode);
    if(event.keyCode === ESC_KEY){
      hiddeDetails();
    }
  });
}

/* show detail image when thumbnail is clicked */
function showDetails(){
  'use strict';
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);

 }

/* start of the ottergram */
initializeEvents();

// get id of main element to use elsewhere
// this should be set to sessionstorage as well. 
function getMainId() {
	return $('main').attr('id');
}

// store json results directly to local storage
function storeJson(carSection) {

	if (!sessionStorage.getItem(carSection)) {
		// if main has a class of xx
		xApiGetter("quotes");
		// else
		// jApiGetter(carSection);
	}
	// with another if we can send this to xApiGetter instead
	// the idea is to check for a class on <main> to specify j or x
}

// get json data from api based on main id
function jApiGetter(carSection) {

// store our json for easy access during our session 
// (we'll clear it later down below)
  $.ajax({
    url: 'https://smileschool-api.hbtn.info/' + carSection,
    method: 'GET',
    success: (data) => { 
	sessionStorage.setItem(carSection, JSON.stringify(data));
    },

    fail: () => { 
	    console.log('The backend is not reachable');
    }
  });

}

// get xml data from api based on main id
function xApiGetter(carSel) {
	$.ajax({
		type:'GET',
		url:'https://smileschool-api.hbtn.info/xml/' + carSel,
		dataType: 'xml',
		success: function(response) {
			const fruits = [];
                    $(response).find(carSel).children('quote').each(function () {
		      let i = 1;
                      let _name = $(this).find('name').text();
                      let _pic_url = $(this).find('pic_url').text();
                      let _title = $(this).find('title').text();
                      let _text = $(this).find('text').text();
var carObject = new Object();
			    carObject.name = _name;
			    carObject.pic_url = _pic_url;
			    carObject.id = i;
			    carObject.text = _text;
			    carObject.title = _title;
fruits.push(JSON.stringify(carObject));
			    i++
			});
		}
	});
}

// build div of data from template based on mainId
function buildMain(carSection, sData) {

  $(sData).each(function(i, item) {

    const divTemplates = {
      "quotes" :  '<div class="carousel-item"> <div class="row align-items-center justify-content-around"> <img class="quote-bg d-block ml-auto pl-2 py-2 rounded-circle" src="' + sData[i].pic_url + '" alt="slide' + sData[i].id++ + '"> <div class="col-12 col-sm-6 m-3 mr-auto"> <p>' + sData[i].text + '</p> <p class="mb-0">' + sData[i].name + '</p> <p><em>' + sData[i].title + '</em></p> </div> </div> </div>',
      "latest-videos" : '<div class="carousel-item"><div class="card col-md-4 border-0"> <div class="d-flex tutorial-bg justify-content-center align-items-center"> <img src="./images/play.png" class="card-img-over" alt="Play button"> </div> <div class="card-body"> <h5 class="card-title font-weight-bold tutorials-h1">' + sData[i].title + '</h5> <p class="card-text tutorials-p">' + sData[i]["sub-title"] + '</p> <div class="row"> <img class="rounded-circle mx-3 tinythumb" src="' + sData[i].author_pic_url + '"> <p class="purple pt-1">' + sData[i].author + '</p> </div> <div class="row justify-content-between mt-1"> <div class="col"> <span class="score"> <div class="score-wrap"> <span class="stars-active"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> </span> <span class="stars-inactive"> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> </span> </div> </span> </div> <p class="purple mr-3">' + sData[i].duration + '</p> </div> </div> </div> </div>',
      "popular-tutorials" : '<div class="carousel-item"><div class="card col-md-4 border-0 my-auto"> <div class="d-flex tutorial-bg justify-content-center align-items-center"> <img src="./images/play.png" class="card-img-over" alt="Play button"> </div> <div class="card-body"> <h5 class="card-title font-weight-bold tutorials-h1">' + sData[i].title + '</h5> <p class="card-text tutorials-p">' + sData[i]["sub-title"] + '</p> <div class="row"> <img class="rounded-circle mx-3 tinythumb" src="' + sData[i].author_pic_url + '"> <p class="purple pt-1">' + sData[i].author + '</p> </div> <div class="row justify-content-between mt-1"> <div class="col"> <span class="score"> <div class="score-wrap"> <span class="stars-active"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> </span> <span class="stars-inactive"> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> </span> </div> </span> </div> <p class="purple mr-3">' + sData[i].duration + '</p> </div> </div> </div> </div>'
      "courses" : '<div class="card col-md-4 border-0"> <div class="d-flex tutorial-bg justify-content-center align-items-center"> <img src="./images/play.png" class="card-img-over" alt="Play button"> </div> <div class="card-body"> <h5 class="card-title font-weight-bold tutorials-h1">' + sData[i].title + '</h5> <p class="card-text tutorials-p">' + sData[i]["sub-title"] + '</p> <div class="row"> <img class="rounded-circle mx-3 tinythumb" src="' + sData[i].author_pic_url + '"> <p class="purple pt-1">' + sData[i].author + '</p> </div> <div class="row justify-content-between mt-1"> <div class="col"> <span class="score"> <div class="score-wrap"> <span class="stars-active"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> </span> <span class="stars-inactive"> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> </span> </div> </span> </div> <p class="purple mr-3">' + sData[i].duration + '</p> </div> </div> </div>',
    }

    $("#empty" + carSection).append(divTemplates[carSection]);

    $("#empty" + carSection + " .tutorial-bg").last().css("background-image", "url(" + sData[i].thumb_url + ")");

    $(".stars-active").last().width(sData[i].star * 20 + "%");

  });

// when the timeout that called us is ready, we no longer need the spinner
  $( "#empty" + carSection ).removeClass( "spinner-border" );

// the card carousel divs are color purple for the spinner over white
	// we want black text on the cards now
  if (carSection !== 'quotes')
 	 $( "#empty" + carSection ).css('color', 'black');

  $( "#empty" + carSection + " .carousel-item" ).first().addClass( "active" );

  $( "#empty" + carSection + " .sr-only" ).first().remove();
  $( "#empty" + carSection ).removeAttr( "role" );
}

// do it 
$( document ).ready(function() {

  $('.navbar-toggle').focus(function () { $.addClass('border border-warning'); });

  let mainId = getMainId();
  // only get what we need
  if (mainId == 'homepage') {
      storeJson('quotes');
//      storeJson('popular-tutorials');
 //     storeJson('latest-videos');
  }
  if (mainId == 'pricing') {
      storeJson('quotes');
  }
  if (mainId == 'courses') {
      storeJson('courses');
  }

// wait 1.2 secs to let the api call complete and to demonstrate our spinner
  setTimeout(function(){ 
  // only build what we need
  if (mainId == 'homepage') {
      buildMain('quotes', JSON.parse(sessionStorage.getItem('quotes'))); 
//      buildMain('popular-tutorials', JSON.parse(sessionStorage.getItem('popular-tutorials'))); 
 //     buildMain('latest-videos', JSON.parse(sessionStorage.getItem('latest-videos'))); 
    }
  if (mainId == 'pricing') {
      buildMain('quotes', JSON.parse(sessionStorage.getItem('quotes'))); 
    }
  if (mainId == 'courses') {
      buildMain('courses', JSON.parse(sessionStorage.getItem('courses'))); 
    }
  }, 1200);

// I don't think anything below is working yet
$('#tutorials').carousel({
  interval: 10000
})

$('#tutorials .carousel-item').each(function(){
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});


});

// get id of main element to use elsewhere
// this should be set to sessionstorage as well. 
function getMainId() {
	return $('main').attr('id');
}

// store json results directly to local storage
function storeJson(carSection) {

	if (!sessionStorage.getItem(carSection)) {
		jApiGetter(carSection);
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
	    if (carSection !== 'courses') {

	sessionStorage.setItem(carSection, JSON.stringify(data));
  } else {
	sessionStorage.setItem(carSection, JSON.stringify(data.courses));
  }
    },

    fail: () => { alert(`The backend is not reachable`); }
  });

}

// get xml data from api based on main id
function xApiGetter(mainId) {
	// copied all to xml-scripts.js to meet class project deadline
	// for separate task since including here was not required
}

// build div of data from template based mainId
function buildMain(carSection, sData) {

  $(sData).each(function(i, item) {

    const divTemplates = {
      "quotes" :  '<div class="carousel-item"> <div class="row align-items-center justify-content-around"> <img class="quote-bg d-block ml-auto pl-2 py-2 rounded-circle" src="' + sData[i].pic_url + '" alt="slide' + sData[i].id++ + '"> <div class="col-12 col-sm-6 m-3 mr-auto"> <p>' + sData[i].text + '</p> <p class="mb-0">' + sData[i].name + '</p> <p><em>' + sData[i].title + '</em></p> </div> </div> </div>',
      "latest-videos" : '<div class="carousel-item"><div class="card col-md-4 border-0"> <div class="d-flex tutorial-bg justify-content-center align-items-center"> <img src="./images/play.png" class="card-img-over" alt="Play button"> </div> <div class="card-body"> <h5 class="card-title font-weight-bold tutorials-h1">' + sData[i].title + '</h5> <p class="card-text tutorials-p">' + sData[i]["sub-title"] + '</p> <div class="row"> <img class="rounded-circle mx-3 tinythumb" src="' + sData[i].author_pic_url + '"> <p class="purple pt-1">' + sData[i].author + '</p> </div> <div class="row justify-content-between mt-1"> <div class="col"> <span class="score"> <div class="score-wrap"> <span class="stars-active"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> </span> <span class="stars-inactive"> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> </span> </div> </span> </div> <p class="purple mr-3">' + sData[i].duration + '</p> </div> </div> </div> </div>',
      "popular-tutorials" : '<div class="carousel-item"><div class="card col-md-4 border-0 my-auto"> <div class="d-flex tutorial-bg justify-content-center align-items-center"> <img src="./images/play.png" class="card-img-over" alt="Play button"> </div> <div class="card-body"> <h5 class="card-title font-weight-bold tutorials-h1">' + sData[i].title + '</h5> <p class="card-text tutorials-p">' + sData[i]["sub-title"] + '</p> <div class="row"> <img class="rounded-circle mx-3 tinythumb" src="' + sData[i].author_pic_url + '"> <p class="purple pt-1">' + sData[i].author + '</p> </div> <div class="row justify-content-between mt-1"> <div class="col"> <span class="score"> <div class="score-wrap"> <span class="stars-active"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> </span> <span class="stars-inactive"> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> </span> </div> </span> </div> <p class="purple mr-3">' + sData[i].duration + '</p> </div> </div> </div> </div>',
      "courses" : '<div class="card border-0"><div class="tutorial-bg d-flex justify-content-center align-items-center"><img src="./images/play.png" class="card-img-over" alt="Play button"></div><div class="card-body"><h5 class="card-title font-weight-bold tutorials-h1">' + sData[i].title + '</h5><p class="card-text tutorials-p">' + sData[i]["sub-title"] + '</p><div class="row"><img class="rounded-circle mx-3 tinythumb" src="' + sData[i].author_pic_url + '"><p class="purple pt-1">' + sData[i].author + '</p></div><div class="row justify-content-between mt-1"><div class="col"><span class="score"><div class="score-wrap"><span class="stars-active" style="width:50%"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></span><span class="stars-inactive"><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i></span></div></span></div><p class="purple mr-3">' + sData[i].duration + '</p></div></div></div>'
    }

    if (divTemplates[carSection]) {
        $("#empty" + carSection).append(divTemplates[carSection]);
    }

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
  // storejson for our endpoints
  // had this specified like below but it was giving errors in the divTemplates
  storeJson('quotes');
  storeJson('popular-tutorials');
  storeJson('latest-videos');
  storeJson('courses');

  // wait 1.2 secs to let the api call complete and to demonstrate our spinner
  setTimeout(function(){ 
  // only build what we need
  if (mainId == 'homepage') {
      buildMain('quotes', JSON.parse(sessionStorage.getItem('quotes'))); 
      buildMain('popular-tutorials', JSON.parse(sessionStorage.getItem('popular-tutorials'))); 
      buildMain('latest-videos', JSON.parse(sessionStorage.getItem('latest-videos'))); 
    }
  if (mainId == 'pricing') {
      buildMain('quotes', JSON.parse(sessionStorage.getItem('quotes'))); 
    }
  if (mainId == 'courses') {
      buildMain('courses', JSON.parse(sessionStorage.getItem('courses'))); 
    }
  }, 1200);

//  sessionStorage.clear();

});

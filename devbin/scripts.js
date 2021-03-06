// get id of main element to use elsewhere
function getMainId() {

	let mainId = $('main').attr('id');

	return mainId;
}

// store json results directly to local storage
function storeJson(carSection) {
	if (!sessionStorage.getItem(carSection)) {
		jApiGetter(carSection);
	}
}

// get json data from api based on main id
function jApiGetter(carSection) {
  $.ajax({
    url: 'https://smileschool-api.hbtn.info/' + carSection,
    method: 'GET',
    success: (data) => { 
	sessionStorage.setItem(carSection, JSON.stringify(data));
    },

    fail: () => { alert(`The backend is not reachable`); }
  });
}

// get xml data from api based on main id
function xApiGetter(mainId) {
}

// build div of data from template based mainId
function buildMain(carSection, sData) {

  $(sData).each(function(i, item) {

    const divTemplates = {
      "quotes" :  '<div class="carousel-item"> <div class="row align-items-center justify-content-around"> <img class="quote-bg d-block ml-auto pl-2 py-2 rounded-circle" src="' + sData[i].pic_url + '" alt="slide' + sData[i].id++ + '"> <div class="col-12 col-sm-6 m-3 mr-auto"> <p>' + sData[i].text + '</p> <p class="mb-0">' + sData[i].name + '</p> <p><em>' + sData[i].title + '</em></p> </div> </div> </div>',
      "popular-tutorials" : '<div class="carousel-item"><div id="popular0" class="col-12 col-sm-12 col-md-6 col-lg-3"><div class="card-body"><div class="img-wrap d-flex align-items-center justify-content-center"><img src="' + sData[i].thumb_url + '" alt="" class="img-fluid"><div class="play-button row justify-content-center align-items-center"><img class="purple-text" src="images/play.png" alt=""></div></div><h4>' + sData[i].title + '</h4><p class="text-muted">' + sData[i]["sub-title"] + '</p><div class="row align-items-center"><div class="col-2 col-md-4"><img src="' + sData[i].pic_url + '" alt="" class="img profile-img rounded-circle"></div> /<div class="col purple-text"> ' + sData[i].author + ' </div></div><div class="row justify-content-between pt-3"><div class="col"><span class="score"><div class="score-wrap"><span class="stars-active"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></span><span class="stars-inactive"><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i></span></div><div class="col-4"><p class="purple-text text-right"' + sData[i].duration + '></p></div></div></div></div></div>' 
    }


    let rating = sData[i].star * 20 + "%"; 
    $("#empty" + carSection).append(divTemplates[carSection]);
    $("#empty" + carSection + " .tutorial-bg").last().css("background-image", "url(" + sData[i].thumb_url + ")");
    $(".stars-active").last().width(rating);
  });
console.log('#empty' + carSection);
    $("#empty" + carSection ).css("color", "black");
  $( "#empty" + carSection ).removeClass( "spinner-border" );
  $( "#empty" + carSection + " .sr-only" ).first().remove();
  $( "#empty" + carSection ).removeAttr( "role" );
  $( "#empty" + carSection + " .carousel-item" ).first().addClass( "active" );
}

// do it 
$( document ).ready(function() {

  let mainId = getMainId();
  if (mainId == 'homepage') {
      storeJson('quotes');
      storeJson('popular-tutorials');
      storeJson('latest-videos');
  }
  if (mainId == 'pricing') {
      storeJson('quotes');
  }
  if (mainId == 'courses') {
      storeJson('courses');
  }

  setTimeout(function(){ 
  if (mainId == 'homepage') {
      buildMain('quotes', JSON.parse(sessionStorage.getItem('quotes'))); 
      buildMain('popular-tutorials', JSON.parse(sessionStorage.getItem('popular-tutorials'))); 
    }
  if (mainId == 'pricing') {
      buildMain('quotes', JSON.parse(sessionStorage.getItem('quotes'))); 
    }
  if (mainId == 'courses') {
      buildMain('courses', JSON.parse(sessionStorage.getItem('courses'))); 
    }
  }, 2000);

});

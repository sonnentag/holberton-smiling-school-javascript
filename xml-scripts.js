// alternate version of scripts.js for xml datatype

// simplified logic a bit here since we're not attempting to handle both datatypes in 1 file

// get id of main element to use elsewhere
function getMainId() {
	return $('main').attr('id');
}

// get quotes as xml data from api based on main id
function xQuoteGetter() {
	$.ajax({
		type:'GET',
		url:'https://smileschool-api.hbtn.info/xml/quotes',
		dataType: 'xml',
		success: function(result) {
			let i = 1;
			$(result).find('quote').each(function () {

				var sTitle = $(this).find('title').text();
				var picUrl = $(this).find('pic_url').text();
				var itemName = $(this).find('name').text();
				var itemText = $(this).find('text').text();

				let quotes = '<div class="carousel-item"> <div class="row align-items-center justify-content-around"> <img class="quote-bg d-block ml-auto pl-2 py-2 rounded-circle" src="' + picUrl + '" alt="slide' + i + '"> <div class="col-12 col-sm-6 m-3 mr-auto"> <p>' + itemText + '</p> <p class="mb-0">' + itemName + '</p> <p><em>' + sTitle + '</em></p> </div> </div> </div>'

				$("#emptyquotes").append(quotes);

				i++;
			});

			$( "#emptyquotes" ).removeClass( "spinner-border" );
			$( "#emptyquotes .carousel-item" ).first().addClass( "active" );
		}
	});
}

// get popular tutorials as xml data from api based on main id
function xPopulGetter() {
	$.ajax({
		type:'GET',
		url:'https://smileschool-api.hbtn.info/xml/popular-tutorials',
		dataType: 'xml',
		success: function(result) {
			let i = 1;
			$(result).find('video').each(function () {

				var title = $(this).find('title').text();
				var subTitle = $(this).find('sub-title').text();
				var picUrl = $(this).find('author_pic_url').text();
				var thumbUrl = $(this).find('thumb_url').text();
				var author = $(this).find('author').text();
				var duration = $(this).find('duration').text();
				var rating = $(this).attr('star');

				let videos = '<div class="carousel-item"><div class="card col-md-4 border-0 my-auto"> <div class="d-flex tutorial-bg justify-content-center align-items-center"> <img src="./images/play.png" class="card-img-over" alt="Play button"> </div> <div class="card-body"> <h5 class="card-title font-weight-bold tutorials-h1">' + title + '</h5> <p class="card-text tutorials-p">' + subTitle + '</p> <div class="row"> <img class="rounded-circle mx-3 tinythumb" src="' + picUrl + '"> <p class="purple pt-1">' + author + '</p> </div> <div class="row justify-content-between mt-1"> <div class="col"> <span class="score"> <div class="score-wrap"> <span class="stars-active"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> </span> <span class="stars-inactive"> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> </span> </div> </span> </div> <p class="purple mr-3">' + duration + '</p> </div> </div> </div> </div>'

				$("#emptypopular-tutorials").append(videos);

				$(".stars-active").last().width(rating * 20 + "%");

				$("#emptypopular-tutorials .tutorial-bg").last().css("background-image", "url(" + thumbUrl + ")");

				i++;
			});

			$( "#emptypopular-tutorials" ).removeClass( "spinner-border" );
			$( "#emptypopular-tutorials" ).css('color', 'black');
			$( "#emptypopular-tutorials .carousel-item" ).first().addClass( "active" );
		}
	});
}

// get latest videos as xml data from api based on main id
function xLatestGetter() {
	$.ajax({
		type:'GET',
		url:'https://smileschool-api.hbtn.info/xml/latest-videos',
		dataType: 'xml',
		success: function(result) {
			let i = 1;
			$(result).find('video').each(function () {

				var title = $(this).find('title').text();
				var subTitle = $(this).find('sub-title').text();
				var picUrl = $(this).find('author_pic_url').text();
				var thumbUrl = $(this).find('thumb_url').text();
				var author = $(this).find('author').text();
				var duration = $(this).find('duration').text();
				var rating = $(this).attr('star');

				let videos = '<div class="carousel-item"><div class="card col-md-4 border-0 my-auto"> <div class="d-flex tutorial-bg justify-content-center align-items-center"> <img src="./images/play.png" class="card-img-over" alt="Play button"> </div> <div class="card-body"> <h5 class="card-title font-weight-bold tutorials-h1">' + title + '</h5> <p class="card-text tutorials-p">' + subTitle + '</p> <div class="row"> <img class="rounded-circle mx-3 tinythumb" src="' + picUrl + '"> <p class="purple pt-1">' + author + '</p> </div> <div class="row justify-content-between mt-1"> <div class="col"> <span class="score"> <div class="score-wrap"> <span class="stars-active"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> </span> <span class="stars-inactive"> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> </span> </div> </span> </div> <p class="purple mr-3">' + duration + '</p> </div> </div> </div> </div>'

				$("#emptylatest-videos").append(videos);

				$(".stars-active").last().width(rating * 20 + "%");

				$("#emptylatest-videos .tutorial-bg").last().css("background-image", "url(" + thumbUrl + ")");

				i++;
			});

			$( "#emptylatest-videos" ).removeClass( "spinner-border" );
			$( "#emptylatest-videos" ).css('color', 'black');
			$( "#emptylatest-videos .carousel-item" ).first().addClass( "active" );
		}
	});
}

// get courses as xml data from api based on main id
function xCourseGetter() {
	$.ajax({
		type:'GET',
		url:'https://smileschool-api.hbtn.info/xml/courses',
		dataType: 'xml',
		success: function(result) {
			let i = 1;
			$(result).find('course').each(function () {

				var title = $(this).find('title').text();
				var subTitle = $(this).find('sub-title').text();
				var picUrl = $(this).find('author_pic_url').text();
				var thumbUrl = $(this).find('thumb_url').text();
				var author = $(this).find('author').text();
				var duration = $(this).find('duration').text();
				var rating = $(this).attr('star');

				let courses = '<div class="card border-0"><div class="tutorial-bg d-flex justify-content-center align-items-center"><img src="./images/play.png" class="card-img-over" alt="Play button"></div><div class="card-body"><h5 class="card-title font-weight-bold tutorials-h1">' + title + '</h5><p class="card-text tutorials-p">' + subTitle + '</p><div class="row"><img class="rounded-circle mx-3 tinythumb" src="' + picUrl + '"><p class="purple pt-1">' + author + '</p></div><div class="row justify-content-between mt-1"><div class="col"><span class="score"><div class="score-wrap"><span class="stars-active" style="width:50%"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></span><span class="stars-inactive"><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i></span></div></span></div><p class="purple mr-3">' + duration + '</p></div></div></div>'

				$("#emptycourses").append(courses);

				$(".stars-active").last().width(rating * 20 + "%");

				$("#emptycourses .tutorial-bg").last().css("background-image", "url(" + thumbUrl + ")");

				i++;
			});

			$( "#emptycourses" ).removeClass( "spinner-border" );
			$( "#emptycourses" ).css('color', 'black');
			$( "#emptycourses .carousel-item" ).first().addClass( "active" );
		}
	});
}

// do it 
$( document ).ready(function() {
  $('.navbar-toggle').focus(function () { $.addClass('border border-warning'); });

  let mainId = getMainId();

  setTimeout(function(){ 
    if (mainId == 'homepage') {
      xQuoteGetter();
      xPopulGetter();
      xLatestGetter();
    }
    if (mainId == 'pricing') {
      xQuoteGetter();
    }
    if (mainId == 'courses') {
      xCourseGetter();
    }
  }, 1200);
});

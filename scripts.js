// get id of main element to use elsewhere
function getMainId() {

	let mainId = $('main').attr('id');

	return mainId;
}

// store json results directly to local storage
function storeJson(mainId) {

	if (!sessionStorage.getItem(mainId)) {
		jApiGetter(mainId);
	}
}

// get json data from api based on main id
function jApiGetter(mainId) {
  let delay = 2000;
  $.ajax({
    url: 'https://smileschool-api.hbtn.info/' + mainId,
    method: 'GET',
    success: (data) => { 
        setTimeout(function() {
	sessionStorage.setItem(mainId, JSON.stringify(data));
      }, delay);
    },

    fail: () => { alert(`The backend is not reachable`); }
  });
}

// get xml data from api based on main id
function xApiGetter(mainId) {
}

// build div of data from template based mainId
function buildMain(mainId, sData) {

  $(sData).each(function(i) {

    let divTemplates = {
      "quotes" :  '<div class="carousel-item"> <div class="row align-items-center justify-content-around"> <img class="quote-bg d-block ml-auto pl-2 py-2 rounded-circle" src="' + sData[i].pic_url + '" alt="slide' + sData[i].id++ + '"> <div class="col-12 col-sm-6 m-3 mr-auto"> <p>' + sData[i].text + '</p> <p class="mb-0"' + sData[i].name + '</p> <p><em>' + sData[i].title + '</em></p> </div> </div> </div>'
    }
	    // "popular-tutorials" : '',
	    // "latest-videos" : '',
	    // "courses" : ''

    $("#empty" + mainId).append(divTemplates[mainId]);
  });

  $( "#empty" + mainId + " div" ).first().addClass( "active" );
}

// do it 
$( document ).ready(function() {

  let mainId = getMainId();
  storeJson(mainId);

  let data = sessionStorage.getItem(mainId);

  // mainly still here for testing/demonstrating effect of loader wait 
  if(data){
    let newData = JSON.parse(data); 
    buildMain(mainId, newData); 
  }

});

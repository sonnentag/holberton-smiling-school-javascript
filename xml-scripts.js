// get id of main element to use elsewhere
function getMainId() {

	let mainId = $('main').attr('id');

	return mainId;
}

// store json results directly to local storage
function storeXml(carSection) {
	if (!sessionStorage.getItem(carSection)) {
		xApiGetter(carSection);
	}
}

// get json data from api based on main id
function jApiGetter(carSection) {
  $.ajax({
    url: 'https://smileschool-api.hbtn.info/xml/' + carSection,
    method: 'GET',
    dataType: 'xml',
    success: function(xml) { 
 $xml = $( $.parseXML( xml ) );
 $xml.find("quotes").each(function(){
  console.log($(this).find("name").text()); 
 });
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

	  $(sData).find('quotes').each(function(){
                    var name = $(this).find("name").text()
                    alert(name);
	  });
	  })

}

// do it 
$( document ).ready(function() {

jApiGetter('quotes');

});

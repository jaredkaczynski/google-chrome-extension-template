jQuery.noConflict();
(function($) { 
  $(function() {
    // shorthand logging function
  	var l = function(message) {
      console.log('Log:', message);
    }

    // Initializing the settings
    settings = new Settings($, 'form.settings');
    settings.get('text-field', l);

    // Activate tabbing
    $('#main-nav a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    });

    /**
     * Add your production codehere.
     */   
	function sortTime(){
	//Get the maretplace listings
	var mylist = $('._65db');
	//Get the children
	var listitems = mylist.children('a').get();
	console.log("Sorting");
	listitems.sort(function(a, b) {
		//Children grabs a single div, first selects it, children called selects the 2nd div child, another children 1 gets the element with time 
		var compA = $($($($($(a).children()[0])).children()[1]).children()[1]).text().split(" · ")[0];
		var compB = $($($($($(b).children()[0])).children()[1]).children()[1]).text().split(" · ")[0];
		intcompA = 0;
		intcompB = 0;
		switch(String(compA)){
			case "over a week ago":
				intcompA = 1450;
				break;
			case "about a day ago":
				intcompA = 1441;
				break;		
			case "2 days ago":
				intcompA = 1442;
				break;		
			case "3 days ago":
				intcompA = 1443;
				break;	
			case "4 days ago":
				intcompA = 1444;
				break;	
			case "5 days ago":
				intcompA = 1445;
				break;	
			case "6 days ago":
				intcompA = 1446;
				break;	
			case "7 days ago":
				intcompA = 1447;
				break;				
		}
		if(compA.includes('hour')){
			var r = /\d+/;
			intcompA = 60*parseInt(compA.match(r))
		}
		if(compA.includes('minute')){
			var r = /\d+/;
			intcompA = parseInt(compA.match(r))
		}
		switch(String(compB)){
			case "over a week ago":
				intcompB = 1450;
				break;
			case "about a day ago":
				intcompB = 1441;
				break;					
			case "2 days ago":
				intcompB = 1442;
				break;		
			case "3 days ago":
				intcompB = 1443;
				break;	
			case "4 days ago":
				intcompB = 1444;
				break;	
			case "5 days ago":
				intcompB = 1445;
				break;	
			case "6 days ago":
				intcompB = 1446;
				break;	
			case "7 days ago":
				intcompB = 1447;
				break;				
		}
		if(compB.includes('hour')){
			var r = /\d+/;
			intcompB = 60*parseInt(compB.match(r))
		}
		if(compB.includes('minute')){
			var r = /\d+/;
			intcompB = parseInt(compB.match(r))
		}
		if(intcompB > intcompA){
			return -1;
		} else if(intcompA > intcompB){
			return 1;
		} else {
			return 0;
		}
		//return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
	});
	$.each(listitems, function(idx, itm) {
		mylist.append(itm);
	})
	}
	function sortPrice(){
	//Get the maretplace listings
	var mylist = $('._65db');
	//Get the children
	var listitems = mylist.children('a').get();
	console.log("Sorting");
	listitems.sort(function(a, b) {
		//Children grabs a single div, first selects it, children called selects the 2nd div child, another children 1 gets the element with time 
		var compA = $($($($($(a).children()[0])).children()[0]).children()[0]).text().replace(',', '');
		var compB = $($($($($(b).children()[0])).children()[0]).children()[0]).text().replace(',', '');
		intcompA = 0;
		intcompB = 0;
		console.log(compA)
		if(compA.includes('$')){
			console.log(compA)
			var r = /\d+/;
			intcompA = parseInt(compA.match(r))
		}
		if(compB.includes('$')){
			console.log(compB)
			var r = /\d+/;
			intcompB = parseInt(compB.match(r))
		}
		if(intcompB > intcompA){
			return -1;
		} else if(intcompA > intcompB){
			return 1;
		} else {
			return 0;
		}
		//return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
	});
	$.each(listitems, function(idx, itm) {
		mylist.append(itm);
	})
	}
	
	$( document ).ready(function() {
		btn = $('<input />', {
              type  : 'button',
              value : 'Sort Time',
              id    : 'btn_a',
              on    : {
                 click: function() {
                     sortTime();
                 }
              }
          });
        $("._4v06").append(btn);
		btn = $('<input />', {
              type  : 'button',
              value : 'Sort Price',
              id    : 'btn_a',
              on    : {
                 click: function() {
                     sortPrice();
                 }
              }
          });
        $("._4v06").append(btn);
	});
    /** BADGE START
     *
     * Add buttons to set and reset the Badge. The badge is in the lower right
     * of the extensin plugin and should be max 4 chars long.
     */
    $('#home').append('<div class="button-wrapper" />');
    $('#home .button-wrapper').append('<button type="button" class="btn btn-success set-badge">Set badge</button>');
    $('#home .button-wrapper').append('<button type="button" class="btn btn-warning reset-badge">Reset badge</button>');
                    
    $('.set-badge').click(function() {
      chrome.browserAction.setBadgeText({'text': '1111'});
    });

    $('.reset-badge').click(function() {
      chrome.browserAction.setBadgeText({'text': ''});
    });
    /* BADGE END*/
	
	
	
  });
})(jQuery);
  var imageDir = 'images/mapoverlays/';
  var lastFloor = ''+(-1);
  var historicalOverlay;
  var map;
  var mapLoaded = false;
  var prevCenter = null;
  var infoWindow = new google.maps.InfoWindow({});
  var markers = [];
  var imageBounds = new google.maps.LatLngBounds(new google.maps.LatLng(37.334847, -121.886208),new google.maps.LatLng(37.336027, -121.883861)  );
  var mlkLibraryGPSCoord = new google.maps.LatLng(37.335438, -121.885036);
  allMainPageItems = [
  
  //ll
  {children: [{x: "37.335531", y: "-121.884836", 
  	contentString:'<div id="content">'+
        "Elevator"+
        '</div>'},
  {x: "37.335462", y: "-121.885356", 
  	contentString:'<div id="content">'+
        "Restrooms"+
        '</div>'},
  {x: "37.335431", y: "-121.884799", 
  	contentString:'<div id="content">'+
        'SJSU Spartan Collaboration Study Room L67'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a>" +
        '</div>'},
  {x: "37.335776", y: "-121.885040", 
  	contentString:'<div id="content">'+
        '</div>'},
  {x: "37.335776", y: "-121.885040", 
  	contentString:'<div id="content">'+
        'Study Room L02'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'},
  {x: "37.335801", y: "-121.885079", 
  	contentString:'<div id="content">'+
        'Study Room L04'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'},
  {x:"37.335518", y: "-121.885094",
    contentString:'<div id="content">'+
      'Printing'+
      "<div><img src='images/photos/Printing-small.jpg' height='100' width='100' align='left'>" +
      "<p> You can print from any library computer, USB, or laptop.</p>" +
      '</div>'}
  ]},
  
  //M
  {children: [{x: "37.335712", y: "-121.885180", 
  	contentString:'<div id="content">'+
        "Elevator"+
        '</div>'},
    {x: "37.335750", y: "-121.885224", 
      contentString:'<div id="bodyContent">'+
        'Printing'+
        "<div><img src='images/photos/Printing-small.jpg' height='100' width='100' align='left'>" +
        "<p> You can print from any library computer, USB, or laptop.</p>" +
        '</div>'},
    {x: "37.335648", y: "-121.885165", 
      contentString:'<div id="bodyContent">'+
      "<div><img src='images/photos/Mezzanine-small.jpg' height='100' width='100' align='left'>" +
        'Mezzanine'+
        '</div>'},
    {x:"37.335646", y:"-121.885103",
      contentString:'<div id="bodyContent">'+
        "Laptops and iPads"+
        "<img src='images/photos/LaptopsandiPads-small.jpg' height='100' width='100' align='left'>" +
        "<p>Free checkout of PC laptops, MacBook Pros and iPads using your SJSU Tower Card.</p>" +
        '</div>'}

  ]},
  
    //1st
  {children: [{x: "37.335360", y: "-121.885028", 	
  contentString:'<div id="content">' +
                  '<div><h2 id="firstHeading">Circulation Desk</h2>' +
                  '<div id="bodyContent">' +
                  "<div><img src='images/photos/CircDesk-small.jpg' height='100' width='100' align='left'>" +
                  '<p>Check out materials or get help with your library account.</p></div>' +
                  '</div>' +
                  '</div>'},
  {x: "37.335531", y: "-121.884836", 
  	contentString:'<div id="content">'+
        "Elevator"+
        '</div>'},
  {x: "37.335462", y: "-121.885350", 
  	contentString:'<div id="content">'+
        "Restrooms (1 of 3)"+
        '</div>'},
  {x: "37.335775", y: "-121.884975", 
  	contentString:'<div id="content">'+
        "Restrooms (2 of 3)"+
        '</div>'},
  {x: "37.335480", y: "-121.884662", 
  	contentString:'<div id="content">'+
        "Restrooms (3 of 3)"+
        '</div>'},
  {x: "37.335567", y:"-121.885102",
      contentString:'<div id="bodyContent">'+
        'Printing'+
        "<div><img src='images/photos/Printing-small.jpg' height='100' width='100' align='left'>" +
        "<p> You can print from any library computer, USB, or laptop.</p>" +
        '</div>'},
  {x: "37.335410", y:"-121.884567",
      contentString: '<div id="content">'+
      "Classroom 125" +
      '</div>'}
  ]},
  
  //2nd
  {children: [{x: "37.335538", y: "-121.885172", 	
  contentString:'<div id="content">' +
                                 '<div><h2 id="firstHeading">Reference Desk</h2>' +
                                 '</div>' +
                                 '<div id="content">' +
                                 "<div><img src='images/photos/RefDesk-small.jpg' height='100' width='100' align='left'>" +
                                 '<p>Get help with your research needs.</p></div>' +
                                 '</div>' +
                                 '</div>'},
  {x: "37.335531", y: "-121.884836", 
  	contentString:'<div id="content">'+
        "Elevator"+
        '</div>'},
  {x: "37.335486", y: "-121.884657", 
  	contentString:'<div id="content">'+
        "Restrooms (1 of 2)"+
        '</div>'},
  {x: "37.335462", y: "-121.885354", 
  	contentString:'<div id="content">'+
        "Restrooms (2 of 2)"+
        '</div>'},
  {x: "37.335713", y: "-121.885141", 
  	contentString:'<div id="content">'+
        'Study Room 226'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'},
  {x: "37.335684", y: "-121.885109",
  	contentString:'<div id="content">'+
        'Study Room 224'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'},
  {x: "37.335506", y:"-121.885252",
    contentString: '<div id="content">'+
        'Printing'+
        "<div><img src='images/photos/Printing-small.jpg' height='100' width='100' align='left'>" +
        "<p> You can print from any library computer, USB, or laptop.</p>" +
        '</div>' +
        '</div>'},
  {x: "37.335410", y: "-121.884567",
      contentString: '<div id="content">'+
      "Classroom 213"+
      '</div>'},
  {x: "37.335339", y: "-121.884651",
      contentString: '<div id="content">'+
      "Classroom 217"+
      '</div>'},
  {x: "37.335394", y: "-121.884731",
      contentString: '<div id="content">'+
      "Classroom 219"+
      '</div>'} 
  ]},
  
  //3rd
  {children: [{x: "37.335538", y: "-121.885172", 
  	contentString:'<div id="content">' +
                                 '<div><h2 id="firstHeading">Reference Desk</h2>' +
                                 '<a href="#RefDesk"/a>' +
                                 '</div>' +
                                 '<div id="bodyContent">' +
                                 "<div><img src='images/photos/RefDesk-small.jpg' height='100' width='100' align='left'>" +
                                 '<p>Get help with your research needs.</p></div>' +
                                 '</div>' +
                                 '</div>'},
  {x: "37.335531", y: "-121.884836", 
  	contentString:'<div id="content">'+
        "Elevator"+
        '</div>'},
  {x: "37.335486", y: "-121.884657", 
  	contentString:'<div id="content">'+
        "Restrooms (1 of 2)"+
        '</div>'},
  {x: "37.335462", y: "-121.885354", 
  	contentString:'<div id="content">'+
        "Restrooms (2 of 2)"+
        '</div>'},
  {x: "37.335684", y: "-121.885109",
  	contentString:'<div id="content">'+
        'Study Room 322, 324, 326'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'},
  {x: "37.335375", y: "-121.885291",
  	contentString:'<div id="content">'+
        'Study Room 390, 392'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'}
  ]},
  
  //4
  {children: [{x: "37.335531", y: "-121.884836", 
  	contentString:'<div id="content">'+
        "Elevator"+
        '</div>'},
    {x: "37.335486", y: "-121.884657", 
  	   contentString:'<div id="content">'+
        "Restrooms"+
        '</div>'},
    {x: "37.335374", y: "-121.884808", 
       contentString:'<div id="content">'+
        "Student Computing Services"+
        "<div><img src='images/photos/ComputingServices-small.jpg' height='100' width='100' align='left'>" +
        "<p>Student Computing Services provides students free access to PC laptops, MacBooks and iPads.</p>" + 
        '</div>'},
    {x: "37.335354", y: "-121.884780", 
       contentString:'<div id="content">'+
        "Student Technology Training"+
        "<div><img src='images/photos/TechTraining-small.jpg' height='100' width='100' align='left'>" +
        "<p>The Student Technology Training Center provides training, workshops and drop-in help with software such as Excel and SPSS.</p>" +
        '</div>'},
    {x: "37.335342", y: "-121.884824", 
       contentString:'<div id="content">'+
        "Laptops and iPads"+
        "<img src='images/photos/LaptopsandiPads-small.jpg' height='100' width='100' align='left'>" +
        "<p>Free checkout of PC laptops, MacBook Pros and iPads using your SJSU Tower Card.</p>" +
        '</div>'}
  ]},
  
  //5
  {children: [{x: "37.335531", y: "-121.884836", 
  	contentString:'<div id="content">'+
        "Elevator"+
        '</div>'},
  {x: "37.335486", y: "-121.884657", 
  	contentString:'<div id="content">'+
        "Restrooms"+
        '</div>'},
  {x: "37.335375", y: "-121.88488", 
    contentString:'<div id="bodyContent">'+
        'Printing'+
        "<div><img src='images/photos/Printing-small.jpg' height='100' width='100' align='left'>" +
        "<p> You can print from any library computer, USB, or laptop.</p>" +
        '</div>'}

  ]},
  
  //6
  {children: [{x: "37.335531", y: "-121.884836", 
  	contentString:'<div id="content">'+
        "Elevator"+
        '</div>'},
  {x: "37.335486", y: "-121.884657", 
  	contentString:'<div id="content">'+
        "Restrooms"+
        '</div>'},
  {x: "37.335723", y: "-121.885126", 
  	contentString:'<div id="content">'+
        'Study Room 602, 604, 606, 622, 624, 626'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'},
  	  {x: "37.335429", y: "-121.885341",
  	contentString:'<div id="content">'+
        'Study Room 632, 634, 662, 664'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'}
  ]},
  
  //7
  {children: [{x: "37.335531", y: "-121.884836", 
  	contentString:'<div id="content">'+
        "Elevator"+
        '</div>'},
  {x: "37.335486", y: "-121.884657", 
  	contentString:'<div id="content">'+
        "Restrooms"+
        '</div>'},
  {x: "37.335720", y: "-121.885073", 
  	contentString:'<div id="content">'+
        'Study Room 702, 704, 706, 722, 724, 726'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'},
  	  {x: "37.335400", y: "-121.885358",
  	contentString:'<div id="content">'+
        'Study Room 732, 734, 762, 764'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'}
  ]},
  
  //8
  {children: [{x: "37.335531", y: "-121.884836", 
  	contentString:'<div id="content">'+
        "Elevator"+
        '</div>'},
  {x: "37.335486", y: "-121.884657", 
  	contentString:'<div id="content">'+
        "Restrooms"+
        '</div>'},
  {x: "37.335720", y: "-121.885069", 
  	contentString:'<div id="content">'+
        'Study Room 802, 804, 806, 822, 824, 826'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'},
  	  {x: "37.335397", y: "-121.885358",
  	contentString:'<div id="content">'+
        'Study Room 832, 834, 862, 864'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'}
  ]}
  ];
  function initialize() {
  /*top : 37.336030, -121.885133 ... max first, 
  left : 37.335486, -121.886340 ... 
  bottom : 37.334880, -121.885057
  right : 37.33526, -121.883766

  https://www.google.com/maps/place/150+E+San+Fernando+St/@37.3354297,-121.8849654,20z/data=!3m1!5s0x808fccbbfc7cec57:0x74d9a902a9bfc6d0!4m2!3m1!1s0x808fccbbfc717863:0xbcd7b643f13145d5

  new top right: 37.336027, -121.883861


  new coords:
  center: 37.33552630743207, -121.88498558035661
  tg: -121.88627304068376, -121.88369812002946
  ta: 37.33610211206025, 37.334950498389865, 

  */
    prevCenter = mlkLibraryGPSCoord;
    

    var mapOptions = {
      zoom: 20,
      center: mlkLibraryGPSCoord
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
  	  var wHeight = $(document).height();
  	var mapHeight = wHeight - $('#header').height() - $('#footer').height()-36;
  	  $("#map-canvas").css("height", mapHeight);
  google.maps.event.trigger(map, "resize");


  google.maps.event.addListener(map,'dragend',function(event) {
          prevCenter = map.center;
  		if(!imageBounds.contains(map.center))
  		map.panToBounds(imageBounds);
      
      });
  	google.maps.event.addListener(map,'center_changed',function(event) {
          if(!imageBounds.contains(map.center))
  		map.panToBounds(imageBounds);
      });
  function AlertPos (map, location) {

     
  	
  }
    historicalOverlay = new google.maps.GroundOverlay(
        imageDir + '1-new.PNG',
        imageBounds);

    addOverlay();
  }

  function addOverlay() {
      historicalOverlay.setMap(map);
  }

  function removeOverlay() {
    historicalOverlay.setMap(null);
  }

  google.maps.event.addDomListener(window, 'load', initialize);
  function showCirculationDesk(floorNumber){
  circulationDesk = [
  //1st
  {children: [{x: "37.335360", y: "-121.885028", 	
  contentString:'<div id="content">' +
                  '<div><h2 id="firstHeading">Circulation Desk</h2>' +
                  '</div>' +
                  '<div id="bodyContent">' +
                  "<div><img src='/images/circDesk.jpg' height='100' width='100' align='left'>" +
                  '<p>Check out materials or get help with your library account.</p></div>' +
                  '<a href="#CircDesk"</a>' +
                  '</div>' +
                  '</div>'}
  ]}
  ];
  	  historicalOverlay = new google.maps.GroundOverlay(
        imageDir + (floorNumber)+ '-new.PNG',
        imageBounds);
  	  historicalOverlay.setMap(map);
  	  floorNumber--;
  	  console.log(circulationDesk);
  try{	      
  		  for(var i = 0; i < circulationDesk[floorNumber].children.length; i++) {
  		  
  		  var marker =     new google.maps.Marker({animation: google.maps.Animation.DROP,
  		  position : new google.maps.LatLng(circulationDesk[floorNumber].children[i].x, circulationDesk[floorNumber].children[i].y),
  		  title : "marker",
  		  map: map,
  		  draggable: false
  		  });
  		  marker['infoWindow'] = new google.maps.InfoWindow({
  		  content: circulationDesk[floorNumber].children[i].contentString,
  		  maxWidth: 200
  		  });
  		  google.maps.event.addListener(marker, 'click', function() {
  		  try {
  		  for(var b = 0; b < markers.length; b++) {
  		  var currentMarker = markers[i];
  		  currentMarker["infoWindow"].close();
  		  }} catch(e){}
  			this['infoWindow'].open(map,this);
  			});
  		markers.push(marker);
  		}
  }catch(e){}
  }
  function timer(floorNum) {
  if(lastFloor !== floorNum ) { 
  clearMap();
  if(floorNum === 'll')
  showFloor('0');
  else
  showFloor(floorNum);
  }
  }
  function initializeSlider() {
  var floors = {
  	10 : "LL",
  	11 : "M",
  	12 : "1st Fl",
  	13 : "2nd Fl",
  	14 : "3rd Fl",
  	15 : "4th Fl",
  	16 : "5th Fl",
  	17 : "6th Fl",
  	18 : "7th Fl",
  	19 : "8th Fl"
  };
  $('#slider-main').min = 10;
  $('#slider-main').max = 19;
  $('#slider-main').val("1st Fl");

  $('#slider-main').bind("change", function(event, ui) {
    var floorNumber = floors[event.target.value];


    console.log(event.target.value);
  if(parseInt(''+event.target.value) >= 10 && parseInt(''+event.target.value) <= 19)
  $('#slider-main').val(floors[event.target.value]);

  if(event.target.value.toLowerCase() === 'm') {
  var num = 'm';
  setTimeout(function(){timer(num)}, 100);
  }

  else if(event.target.value.toLowerCase() === 'll' || event.target.value.toLowerCase() === 'l') {

  var num = 'll';
  setTimeout(function(){timer(num)}, 100);
  }
  else if(parseInt(''+event.target.value) >= 0 )
  {
  var num = ''+parseInt(''+event.target.value);
  setTimeout(function(){timer(num)}, 100);
  }
  });
  $('#slider-main').slider({
  	value: 2,
  	min: 0,
  	max: 9,
  	step: 1,
  	slide: function(event, ui){
  	console.log("slide");
  	//showFloor(floors[ui.value]);
  	}
  	});
  }
  
  function showFloor(floorNumber){
    console.log(floorNumber);
  try {
  if(floorNumber == 'll' || floorNumber == 0){
    historicalOverlay = new google.maps.GroundOverlay(
        imageDir + 'll-new.PNG',
        imageBounds);
  	  lastFloor = 'll';
  	  historicalOverlay.setMap(map);
	  }
	  else if(floorNumber === "m"){
  	  historicalOverlay = new google.maps.GroundOverlay(
  	   imageDir + 'm-new.PNG',
        imageBounds);
  	  historicalOverlay.setMap(map);
  	  floorNumber = 1;
  	  lastFloor = 'm';
	  }
	  else
	  {
        console.log(imageDir + (floorNumber)+ '-new.PNG');
  	  historicalOverlay = new google.maps.GroundOverlay(
        imageDir + (floorNumber)+ '-new.PNG',
        imageBounds);
  	  historicalOverlay.setMap(map);
  	  	  lastFloor = ''+floorNumber;
  	  floorNumber++;
  	  }
  try{	      
  		  for(var i = 0; i < allMainPageItems[floorNumber].children.length; i++) {
  		  
  		  var marker =     new google.maps.Marker({animation: google.maps.Animation.DROP,
  		  position : new google.maps.LatLng(allMainPageItems[floorNumber].children[i].x, allMainPageItems[floorNumber].children[i].y),
  		  title : "marker",
  		  map: map,
  		  draggable: false
  		  });
  		  marker['infoWindow'] = new google.maps.InfoWindow({
  		  content: allMainPageItems[floorNumber].children[i].contentString,
  		  maxWidth: 200
  		  });
  		  google.maps.event.addListener(marker, 'click', function() {
  		  try {
  		  for(var b = 0; b < markers.length; b++) {
  		  var currentMarker = markers[i];
  		  currentMarker["infoWindow"].close();
  		  }} catch(e){}
  			this['infoWindow'].open(map,this);
  			});
  		markers.push(marker);
  		}
  }catch(e){console.log(e);}
  }catch(e){console.log(e);}

  }

  function showReferenceDesk(floorNumber){
  referenceDesk = [
  //2nd
  {children: [{x: "37.335538", y: "-121.885172", 	
  contentString:'<div id="content">' +
                                 '<div><h2 id="firstHeading">Reference Desk</h2>' +
                                 '</div>' +
                                 '<div id="bodyContent">' +
                                 "<div><img src='images/photos/RefDesk-small.jpg' height='100' width='100' align='left'>" +
                                 '<p>Get help with your research needs.</p></div>' +
                                 '</div>' +
                                 '</div>'}

  ]},
  //3rd
  {children: [{x: "37.335538", y: "-121.885172", 
  	contentString:'<div id="content">' +
                                 '<div><h2 id="firstHeading">Reference Desk</h2>' +
                                 '</div>' +
                                 '<div id="bodyContent">' +
                                 "<div><img src='images/photos/RefDesk-small.jpg' height='100' width='100' align='left'>" +
                                 '<p>Get help with all of your research needs.</p></div>' +
                                 '</div>' +
                                 '</div>'}

  ]}
  ]

  console.log(floorNumber);
  	  historicalOverlay = new google.maps.GroundOverlay(
         imageDir + (floorNumber)+'-new.PNG',
        imageBounds);
  	  historicalOverlay.setMap(map);
  	  floorNumber -= 2;
  	  
  try{	      
  		  for(var i = 0; i < referenceDesk[floorNumber].children.length; i++) {
  		  
  		  var marker =     new google.maps.Marker({animation: google.maps.Animation.DROP,
  		  position : new google.maps.LatLng(referenceDesk[floorNumber].children[i].x, referenceDesk[floorNumber].children[i].y),
  		  title : "marker",
  		  map: map,
  		  draggable: false
  		  });
  		  marker['infoWindow'] = new google.maps.InfoWindow({
  		  content: referenceDesk[floorNumber].children[i].contentString,
  		  maxWidth: 200
  		  });
  		  google.maps.event.addListener(marker, 'click', function() {
  		  try {
  		  for(var b = 0; b < markers.length; b++) {
  		  var currentMarker = markers[i];
  		  currentMarker["infoWindow"].close();
  		  }} catch(e){}
  			this['infoWindow'].open(map,this);
  			});
  		markers.push(marker);
  		}
  }catch(e){}
  }
  
  function showElevators(floorNumber){
  elevators = [
  //ll
  {children: [{x: "37.335531", y: "-121.884836", 
  	contentString:'<div id="content">'+
        "Elevator"+
        '</div>'}

  ]},
  //M
  {children: [{x: "37.335712", y: "-121.885180", 
  	contentString:'<div id="content">'+
        "Elevator"+
        '</div>'}

  ]},
  //1
  {children: [{x: "37.335531", y: "-121.884836", 
  	contentString:'<div id="content">'+
        "Elevator"+
        '</div>'}

  ]},
  //2
  {children: [{x: "37.335531", y: "-121.884836", 
  	contentString:'<div id="content">'+
        "Elevator"+
        '</div>'}

  ]},
  //3
  {children: [{x: "37.335531", y: "-121.884836", 
  	contentString:'<div id="content">'+
        "Elevator"+
        '</div>'}

  ]},
  //4
  {children: [{x: "37.335531", y: "-121.884836", 
  	contentString:'<div id="content">'+
        "Elevator"+
        '</div>'}

  ]},
  //5
  {children: [{x: "37.335531", y: "-121.884836", 
  	contentString:'<div id="content">'+
        "Elevator"+
        '</div>'}

  ]},
  //6
  {children: [{x: "37.335531", y: "-121.884836", 
  	contentString:'<div id="content">'+
        "Elevator"+
        '</div>'}

  ]},
  //7
  {children: [{x: "37.335531", y: "-121.884836", 
  	contentString:'<div id="content">'+
        "Elevator"+
        '</div>'}

  ]},
  //8
  {children: [{x: "37.335531", y: "-121.884836", 
  	contentString:'<div id="content">'+
        "Elevator"+
        '</div>'}

  ]}
  ]
  if(floorNumber == 0){
  historicalOverlay = new google.maps.GroundOverlay(
        imageDir + 'll-new.PNG',
        imageBounds);
  	  historicalOverlay.setMap(map);
  	  }
  	  else if(floorNumber === "m"){
  	  historicalOverlay = new google.maps.GroundOverlay(
  	   imageDir + 'm-new.PNG',
        imageBounds);
  	  historicalOverlay.setMap(map);
  	  floorNumber = 1;
  	  }
  	  else
  	  {
  	  historicalOverlay = new google.maps.GroundOverlay(
        imageDir + (floorNumber)+ '-new.PNG',
        imageBounds);
  	  historicalOverlay.setMap(map);
  	  floorNumber++;
  	  }
  try{	      
  		  for(var i = 0; i < elevators[floorNumber].children.length; i++) {
  		  
  		  var marker =     new google.maps.Marker({animation: google.maps.Animation.DROP,
  		  position : new google.maps.LatLng(elevators[floorNumber].children[i].x, elevators[floorNumber].children[i].y),
  		  title : "marker",
  		  map: map,
  		  draggable: false
  		  });
  		  marker['infoWindow'] = new google.maps.InfoWindow({
  		  content: elevators[floorNumber].children[i].contentString,
  		  maxWidth: 200
  		  });
  		  google.maps.event.addListener(marker, 'click', function() {
  		  try {
  		  for(var b = 0; b < markers.length; b++) {
  		  var currentMarker = markers[i];
  		  currentMarker["infoWindow"].close();
  		  }} catch(e){}
  			this['infoWindow'].open(map,this);
  			});
  		markers.push(marker);
  		}
  }catch(e){}
  }
  
  function showRestrooms(floorNumber) {
  Restrooms = [
  //ll
  {children: [{x: "37.335462", y: "-121.885356", 
  	contentString:'<div id="content">'+
        "Restrooms"+
        '</div>'}
  ]},
  //1st
  {children: [{x: "37.335462", y: "-121.885350", 
  	contentString:'<div id="content">'+
        "Restrooms (1 of 3)"+
        '</div>'},
  	  {x: "37.335775", y: "-121.884975", 
  	contentString:'<div id="content">'+
        "Restrooms (2 of 3)"+
        '</div>'},
  	  {x: "37.335480", y: "-121.884662", 
  	contentString:'<div id="content">'+
        "Restrooms (3 of 3)"+
        '</div>'}
  ]},
  //2nd
  {children: [{x: "37.335486", y: "-121.884657", 
  	contentString:'<div id="content">'+
        "Restrooms (1 of 2)"+
        '</div>'},
  {x: "37.335462", y: "-121.885354", 
  	contentString:'<div id="content">'+
        "Restrooms (2 of 2)"+
        '</div>'}
  ]},
  //3rd
  {children: [{x: "37.335486", y: "-121.884657", 
  	contentString:'<div id="content">'+
        "Restrooms (1 of 2)"+
        '</div>'},
  {x: "37.335462", y: "-121.885354", 
  	contentString:'<div id="content">'+
        "Restrooms (2 of 2)"+
        '</div>'}
  ]},
  //4th
  {children: [{x: "37.335486", y: "-121.884657", 
  	contentString:'<div id="content">'+
        "Restrooms"+
        '</div>'}
  ]},
  //5th
  {children: [{x: "37.335486", y: "-121.884657", 
  	contentString:'<div id="content">'+
        "Restrooms"+
        '</div>'}
  ]},
  //6th
  {children: [{x: "37.335486", y: "-121.884657", 
  	contentString:'<div id="content">'+
        "Restrooms"+
        '</div>'}
  ]},
  //7th
  {children: [{x: "37.335486", y: "-121.884657", 
  	contentString:'<div id="content">'+
        "Restrooms"+
        '</div>'}
  ]},
  //8th
  {children: [{x: "37.335486", y: "-121.884657", 
  	contentString:'<div id="content">'+
        "Restrooms"+
        '</div>'}
  ]}
  ]
  if(floorNumber == 0){
  historicalOverlay = new google.maps.GroundOverlay(
         imageDir + 'll-new.PNG',
        imageBounds);
  	  historicalOverlay.setMap(map);
  	  }
  	  else
  	  {
  	  historicalOverlay = new google.maps.GroundOverlay(
        imageDir + (floorNumber)+ '-new.PNG',
        imageBounds);
  	  historicalOverlay.setMap(map);
  	  }
  try{	      
  		  for(var i = 0; i < Restrooms[floorNumber].children.length; i++) {
  		  
  		  var marker =     new google.maps.Marker({animation: google.maps.Animation.DROP,
    		  position : new google.maps.LatLng(Restrooms[floorNumber].children[i].x, Restrooms[floorNumber].children[i].y),
    		  title : "marker",
    		  map: map,
    		  draggable: false
  		  });
  		  marker['infoWindow'] = new google.maps.InfoWindow({
    		  content: Restrooms[floorNumber].children[i].contentString,
    		  maxWidth: 200
  		  });
  		  google.maps.event.addListener(marker, 'click', function() {
  		  try {
  		  for(var b = 0; b < markers.length; b++) {
  		  var currentMarker = markers[i];
  		  currentMarker["infoWindow"].close();
  		  }} catch(e){}
  			this['infoWindow'].open(map,this);
  			});
  		markers.push(marker);
  		}
  }catch(e){}
  }
  function showRooms(floorNumber) {
  Rooms = [
  //ll
  {children: [{x: "37.335431", y: "-121.884799", 
  	contentString:'<div id="content">'+
        'SJSU Spartan Collaboration Study Room L67'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'},
  	  {x: "37.335776", y: "-121.885040", 
  	contentString:'<div id="content">'+
        'Study Room L02'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'},
  	  {x: "37.335776", y: "-121.885040", 
  	contentString:'<div id="content">'+
        'Study Room L02'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'},
  	  {x: "37.335801", y: "-121.885079", 
  	contentString:'<div id="content">'+
        'Study Room L04'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'},
  ]},

  //1st
  {children: [{x: "37.335410", y:"-121.884567",
    contentString: '<div id="content">'+
        "Classroom 125" +
        '</div>'}
  ]},

  //2nd
  {children: [{x: "37.335410", y: "-121.884567",
      contentString: '<div id="content">'+
      "Classroom 213"+
      '</div>'},
  {x: "37.335339", y: "-121.884651",
      contentString: '<div id="content">'+
      "Classroom 217"+
      '</div>'},
  {x: "37.335394", y: "-121.884731",
      contentString: '<div id="content">'+
      "Classroom 219"+
      '</div>'},
    {x: "37.335713", y: "-121.885141", 
  	contentString:'<div id="content">'+
        'Study Room 226'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'},
  {x: "37.335684", y: "-121.885109",
  	contentString:'<div id="content">'+
        'Study Room 224'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'}   
  ]},

  //3rd
  {children: [
  {x: "37.335684", y: "-121.885109",
  	contentString:'<div id="content">'+
        'Study Room 322, 324, 326'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'},
  	
  	  {x: "37.335375", y: "-121.885291",
  	contentString:'<div id="content">'+
        'Study Room 390, 392'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'}
  ]},
  //6th
  {children: [{x: "37.335723", y

  : "-121.885126", 
  	contentString:'<div id="content">'+
        'Study Room 602, 604, 606, 622, 624, 626'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'},
  	  {x: "37.335429", y: "-121.885341",
  	contentString:'<div id="content">'+
        'Study Room 632, 634, 662, 664'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'}
  ]},
  //7th
  {children: [{x: "37.335720", y: "-121.885073", 
  	contentString:'<div id="content">'+
        'Study Room 702, 704, 706, 722, 724, 726'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'},
  	  {x: "37.335400", y: "-121.885358",
  	contentString:'<div id="content">'+
        'Study Room 732, 734, 762, 764'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'}
  ]},
  //8th
  {children: [{x: "37.335720", y: "-121.885069", 
  	contentString:'<div id="content">'+
        'Study Room 802, 804, 806, 822, 824, 826'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'},
  	  {x: "37.335397", y: "-121.885358",
  	contentString:'<div id="content">'+
        'Study Room 832, 834, 862, 864'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'}
  ]}

  ]
  switch(floorNumber) {
  	case 0: {historicalOverlay = new google.maps.GroundOverlay(
         imageDir + 'll-new.PNG',
        imageBounds);
  	      historicalOverlay.setMap(map);
  		  for(var i = 0; i <Rooms[0].children.length; i++) {
  		  
  		  var marker =     new google.maps.Marker({animation: google.maps.Animation.DROP,
  		  position : new google.maps.LatLng(Rooms[0].children[i].x, Rooms[0].children[i].y),
  		  title : "marker",
  		  map: map,
  		  draggable: false
  		  });
  		  marker['infoWindow'] = new google.maps.InfoWindow({
  		  content: Rooms[0].children[i].contentString,
  		  maxWidth: 200
  		  });
  		  google.maps.event.addListener(marker, 'click', function() {
  		  try {
  		  for(var b = 0; b < markers.length; b++) {
  		  var currentMarker = markers[i];
  		  currentMarker["infoWindow"].close();
  		  }} catch(e){}
  			this['infoWindow'].open(map,this);
  			});
  		markers.push(marker);
  		}
  	  }break;
  	  case 2: {historicalOverlay = new google.maps.GroundOverlay(
         imageDir + '2-new.PNG',
        imageBounds);
  historicalOverlay.setMap(map);
  		  for(var i = 0; i < Rooms[1].children.length; i++) {
  		  
  		  var marker =     new google.maps.Marker({animation: google.maps.Animation.DROP,
  		  position : new google.maps.LatLng(Rooms[1].children[i].x, Rooms[1].children[i].y),
  		  title : "marker",
  		  map: map,
  		  draggable: false
  		  });
  		  marker['infoWindow'] = new google.maps.InfoWindow({
  		  content: Rooms[1].children[i].contentString,
  		  maxWidth: 200
  		  });
  		  google.maps.event.addListener(marker, 'click', function() {
  		  try {
  		  for(var b = 0; b < markers.length; b++) {
  		  var currentMarker = markers[i];
  		  currentMarker["infoWindow"].close();
  		  }} catch(e){}
  			this['infoWindow'].open(map,this);
  			});
  		markers.push(marker);
  		}	  }break;
  	  case 3: {historicalOverlay = new google.maps.GroundOverlay(
         imageDir + '3-new.PNG',
        imageBounds);
  historicalOverlay.setMap(map);
  		  for(var i = 0; i < Rooms[1].children.length; i++) {
  		  
  		  var marker =     new google.maps.Marker({animation: google.maps.Animation.DROP,
  		  position : new google.maps.LatLng(Rooms[2].children[i].x, Rooms[2].children[i].y),
  		  title : "marker",
  		  map: map,
  		  draggable: false
  		  });
  		  marker['infoWindow'] = new google.maps.InfoWindow({
  		  content: Rooms[2].children[i].contentString,
  		  maxWidth: 200
  		  });
  		  google.maps.event.addListener(marker, 'click', function() {
  		  try {
  		  for(var b = 0; b < markers.length; b++) {
  		  var currentMarker = markers[i];
  		  currentMarker["infoWindow"].close();
  		  }} catch(e){}
  			this['infoWindow'].open(map,this);
  			});
  		markers.push(marker);
  }
  	  }break;
  	  case 6: {historicalOverlay = new google.maps.GroundOverlay(
         imageDir + '6-new.PNG',
        imageBounds);
  historicalOverlay.setMap(map);
  		  for(var i = 0; i < Rooms[3].children.length; i++) {
  		  
  		  var marker =     new google.maps.Marker({animation: google.maps.Animation.DROP,
  		  position : new google.maps.LatLng(Rooms[3].children[i].x, Rooms[3].children[i].y),
  		  title : "marker",
  		  map: map,
  		  draggable: false
  		  });
  		  marker['infoWindow'] = new google.maps.InfoWindow({
  		  content: Rooms[3].children[i].contentString,
  		  maxWidth: 200
  		  });
  		  google.maps.event.addListener(marker, 'click', function() {
  		  try {
  		  for(var b = 0; b < markers.length; b++) {
  		  var currentMarker = markers[i];
  		  currentMarker["infoWindow"].close();
  		  }} catch(e){}
  			this['infoWindow'].open(map,this);
  			});
  		markers.push(marker);
  }
  	  }break;
  	  case 7: {historicalOverlay = new google.maps.GroundOverlay(
         imageDir + '7-new.PNG',
        imageBounds);
  historicalOverlay.setMap(map);
  		  for(var i = 0; i < Rooms[4].children.length; i++) {
  		  
  		  var marker =     new google.maps.Marker({animation: google.maps.Animation.DROP,
  		  position : new google.maps.LatLng(Rooms[4].children[i].x, Rooms[4].children[i].y),
  		  title : "marker",
  		  map: map,
  		  draggable: false
  		  });
  		  marker['infoWindow'] = new google.maps.InfoWindow({
  		  content: Rooms[4].children[i].contentString,
  		  maxWidth: 200
  		  });
  		  google.maps.event.addListener(marker, 'click', function() {
  		  try {
  		  for(var b = 0; b < markers.length; b++) {
  		  var currentMarker = markers[i];
  		  currentMarker["infoWindow"].close();
  		  }} catch(e){}
  			this['infoWindow'].open(map,this);
  			});
  		markers.push(marker);
  }
  	  }break;
  	  case 8: {historicalOverlay = new google.maps.GroundOverlay(
         imageDir + '8-new.PNG',
        imageBounds);
  historicalOverlay.setMap(map);
  		  for(var i = 0; i < Rooms[5].children.length; i++) {
  		  
  		  var marker =     new google.maps.Marker({animation: google.maps.Animation.DROP,
  		  position : new google.maps.LatLng(Rooms[5].children[i].x, Rooms[5].children[i].y),
  		  title : "marker",
  		  map: map,
  		  draggable: false
  		  });
  		  marker['infoWindow'] = new google.maps.InfoWindow({
  		  content: Rooms[5].children[i].contentString,
  		  maxWidth: 200
  		  });
  		  google.maps.event.addListener(marker, 'click', function() {
  		  try {
  		  for(var b = 0; b < markers.length; b++) {
  		  var currentMarker = markers[i];
  		  currentMarker["infoWindow"].close();
  		  }} catch(e){}
  			this['infoWindow'].open(map,this);
  			});
  		markers.push(marker);
  }	  }break;
  	  }
  }

  function showLocation(type){
      var pinInfo = bookNumberIndex[type];
      historicalOverlay = new google.maps.GroundOverlay(
        imageDir + (pinInfo.floor)+ '-new.PNG',
        imageBounds);
        $.mobile.changePage( "#home", { transition: "slideup"} );
        clearMap();
  	  historicalOverlay.setMap(map);
  	  $('#slider-main').val(String(pinInfo.floor));
  	  var infowindow = new google.maps.InfoWindow({
        content: pinInfo.contentString,
        maxWidth: 200
          });
  	  var newMarker = new google.maps.Marker({animation: google.maps.Animation.DROP,
  		  position : new google.maps.LatLng(pinInfo.lat, pinInfo.long),
  		  title : "marker",
  		  map: map,
  		  draggable: false
  		  });
        google.maps.event.addListener(newMarker, 'click', function() {
              infowindow.open(map, newMarker);
         });
         markers.push(newMarker);
  }

  function RoomByNumber(roomString) {
  Rooms = {};
  Rooms["L67"] = {x: "37.335431", y: "-121.884799", 
  	contentString:'<div id="content">'+
        'SJSU Spartan Collaboration Study Room L67'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["L02"] ={x: "37.335776", y: "-121.885040", 
  	contentString:'<div id="content">'+
        'Study Room L02'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["L04"] =	  {x: "37.335801", y: "-121.885079", 
  	contentString:'<div id="content">'+
        'Study Room L04'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};

  Rooms ["125"] = {x: "37.335410", y:"-121.884567",
    contentString: '<div id="content">'+
        "Classroom 125" +
        '</div>'};

  Rooms["213"] = {x: "37.335410", Y: "-121.884567",
      contentString: '<div id="content">'+
      "Classroom 213"+
      '</div>'};
  Rooms["217"] = {x: "37.335339", Y: "-121.884651",
      contentString: '<div id="content">'+
      "Classroom 217"+
      '</div>'};
  Rooms["219"] = {x: "37.335394", Y: "-121.884731",
      contentString: '<div id="content">'+
      "Classroom 219"+
      '</div>'};
  

  Rooms["226"] =	{x: "37.335713", y: "-121.885141", 
  	contentString:'<div id="content">'+
        'Study Room 226'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["224"] =	{x: "37.335684", y: "-121.885109",
  	contentString:'<div id="content">'+
        'Study Room 224'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};

  
  Rooms["322"] ={x: "37.335684", y: "-121.885109",
  	contentString:'<div id="content">'+
        'Study Room 322, 324, 326'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["324"] ={x: "37.335684", y: "-121.885109",
  	contentString:'<div id="content">'+
        'Study Room 322, 324, 326'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["326"] ={x: "37.335684", y: "-121.885109",
  	contentString:'<div id="content">'+
        'Study Room 322, 324, 326'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};

  Rooms["390"] ={x: "37.335375", y: "-121.885291",
  	contentString:'<div id="content">'+
        'Study Room 390, 392'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["392"] ={x: "37.335375", y: "-121.885291",
  	contentString:'<div id="content">'+
        'Study Room 390, 392'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["602"] ={x: "37.335723", y: "-121.885126", 
  	contentString:'<div id="content">'+
        'Study Room 602, 604, 606, 622, 624, 626'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["604"] ={x: "37.335723", y: "-121.885126", 
  	contentString:'<div id="content">'+
        'Study Room 602, 604, 606, 622, 624, 626'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["606"] ={x: "37.335723", y: "-121.885126", 
  	contentString:'<div id="content">'+
        'Study Room 602, 604, 606, 622, 624, 626'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["622"] ={x: "37.335723", y: "-121.885126", 
  	contentString:'<div id="content">'+
        'Study Room 602, 604, 606, 622, 624, 626'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["624"] ={x: "37.335723", y: "-121.885126", 
  	contentString:'<div id="content">'+
        'Study Room 602, 604, 606, 622, 624, 626'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["626"] ={x: "37.335723", y: "-121.885126", 
  	contentString:'<div id="content">'+
        'Study Room 602, 604, 606, 622, 624, 626'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};

  Rooms["632"] ={x: "37.335429", y: "-121.885341",
  	contentString:'<div id="content">'+
        'Study Room 632, 634, 662, 664'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["634"] ={x: "37.335429", y: "-121.885341",
  	contentString:'<div id="content">'+
        'Study Room 632, 634, 662, 664'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["662"] ={x: "37.335429", y: "-121.885341",
  	contentString:'<div id="content">'+
        'Study Room 632, 634, 662, 664'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["664"] ={x: "37.335429", y: "-121.885341",
  	contentString:'<div id="content">'+
        'Study Room 632, 634, 662, 664'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["702"] ={x: "37.335720", y: "-121.885073", 
  	contentString:'<div id="content">'+
        'Study Room 702, 704, 706, 722, 724, 726'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["704"] ={x: "37.335720", y: "-121.885073", 
  	contentString:'<div id="content">'+
        'Study Room 702, 704, 706, 722, 724, 726'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["706"] ={x: "37.335720", y: "-121.885073", 
  	contentString:'<div id="content">'+
        'Study Room 702, 704, 706, 722, 724, 726'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["722"] ={x: "37.335720", y: "-121.885073", 
  	contentString:'<div id="content">'+
        'Study Room 702, 704, 706, 722, 724, 726'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["724"] ={x: "37.335720", y: "-121.885073", 
  	contentString:'<div id="content">'+
        'Study Room 702, 704, 706, 722, 724, 726'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["726"] ={x: "37.335720", y: "-121.885073",
  	contentString:'<div id="content">'+
        'Study Room 702, 704, 706, 722, 724, 726'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};

  Rooms["732"] ={x: "37.335400", y: "-121.885358",
  	contentString:'<div id="content">'+
        'Study Room 732, 734, 762, 764'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["734"] ={x: "37.335400", y: "-121.885358",
  	contentString:'<div id="content">'+
        'Study Room 732, 734, 762, 764'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["762"] ={x: "37.335400", y: "-121.885358",
  	contentString:'<div id="content">'+
        'Study Room 732, 734, 762, 764'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["764"] ={x: "37.335400", y: "-121.885358",
  	contentString:'<div id="content">'+
        'Study Room 732, 734, 762, 764'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};

  Rooms["802"] ={x: "37.335720", y: "-121.885069", 
  	contentString:'<div id="content">'+
        'Study Room 802, 804, 806, 822, 824, 826'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["804"] ={x: "37.335720", y: "-121.885069", 
  	contentString:'<div id="content">'+
        'Study Room 802, 804, 806, 822, 824, 826'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["806"] ={x: "37.335720", y: "-121.885069", 
  	contentString:'<div id="content">'+
        'Study Room 802, 804, 806, 822, 824, 826'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["822"] ={x: "37.335720", y: "-121.885069", 
  	contentString:'<div id="content">'+
        'Study Room 802, 804, 806, 822, 824, 826'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["824"] ={x: "37.335720", y: "-121.885069", 
  	contentString:'<div id="content">'+
        'Study Room 802, 804, 806, 822, 824, 826'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["826"] ={x: "37.335720", y: "-121.885069", 
  	contentString:'<div id="content">'+
        'Study Room 802, 804, 806, 822, 824, 826'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};

  Rooms["832"] ={x: "37.335397", y: "-121.885358",
  	contentString:'<div id="content">'+
        'Study Room 832, 834, 862, 864'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["834"] ={x: "37.335397", y: "-121.885358",
  	contentString:'<div id="content">'+
        'Study Room 832, 834, 862, 864'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["862"] ={x: "37.335397", y: "-121.885358",
  	contentString:'<div id="content">'+
        'Study Room 832, 834, 862, 864'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};
  Rooms["864"] ={x: "37.335397", y: "-121.885358",
  	contentString:'<div id="content">'+
        'Study Room 832, 834, 862, 864'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'};

  if(roomString.charAt(0) === 'L')
  {
  historicalOverlay = new google.maps.GroundOverlay(
         imageDir + 'll-new.PNG',imageBounds);
  	  	      historicalOverlay.setMap(map);
  }
  else if(roomString.charAt(0) === '2' ||roomString.charAt(0) === '3' ||roomString.charAt(0) === '6' ||roomString.charAt(0) === '7' ||roomString.charAt(0) === '8'){
  historicalOverlay = new google.maps.GroundOverlay(
        roomString.charAt(0)+ imageDir + '-new.PNG',imageBounds);
  	  	      historicalOverlay.setMap(map);
  }
  else
  {
  console.log("error");
console.dir(roomString);
  return "error";
  }

        try{
  	  var myRoom = Rooms[roomString];
  		  var marker = new google.maps.Marker({animation: google.maps.Animation.DROP,
  		  position : new google.maps.LatLng(myRoom.x, myRoom.y),
  		  title : "marker",
  		  map: map,
  		  draggable: false
  		  });
  		  marker['infoWindow'] = new google.maps.InfoWindow({
  		  content: myRoom.contentString,
  		  maxWidth: 200
  		  });
  		  google.maps.event.addListener(marker, 'click', function() {
  		  try {
  		  for(var b = 0; b < markers.length; b++) {
  		  var currentMarker = markers[i];
  		  currentMarker["infoWindow"].close();
  		  }} catch(e){}
  			this['infoWindow'].open(map,this);
  			});
  		markers.push(marker);
  		}
  		catch(e) {
  		console.log("error 2");
  		return "error";
  		}
  }

  function clearMap() {
  removeOverlay();
  for(var i = 0; i < markers.length; i++) {
  markers[i].setMap(null);
  try{
  markers[i]['infoWindow'].close();
  }catch(e){}
  }
  markers.length=0;
  }
  $(window).resize(function() {
  map.setCenter(prevCenter);
  	var wHeight = $(window).height();
  	var mapHeight = wHeight - $('#header').height() - $('#footer').height()-36;
  	console.log(mapHeight);
  	$('#map-canvas').css('height', mapHeight);
  	google.maps.event.trigger(map, "resize");

  });
  
  function showPopup()
  {
  	$('#myPopup').popup();
  	$('#myPopup').infoWindow("open");
  }
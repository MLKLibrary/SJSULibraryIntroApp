$("#toggleEvtsVw").bind("click",function(event) {
  var toggleBtn = $("#toggleEvtsVw");
  if(toggleBtn.hasClass("table"))
  {
    toggleBtn.removeClass("table");
    toggleBtn.addClass("cal");
    toggleBtn.html("Show table");
    $("#jMonthCalendar").show();
    $("#evtsTable").hide();
  }
  else if(toggleBtn.hasClass("cal"))
  {
    toggleBtn.removeClass("cal");
    toggleBtn.addClass("table");
    toggleBtn.html("Show calendar view");
    $("#jMonthCalendar").hide();
    $("#evtsTable").show();
  }
});

$(document).bind("pagebeforeshow",function() { 

  GetEvents();
});

function PopulateEventsTable(eventList) {
  var tableHTML = "<table data-role='table' class='ui-responsive ui-shadow'><thead><tr><th class='tcell'>Event Name</th><th>Time & Location</th></tr></thead><tbody>";
  for(var i = 0; i<eventList.length; i++) {
    var lastClass = i==eventList.length-1?"last":"";
    tableHTML+= "<tr><td class='tcell'>"+eventList[i].Title+"</td><td>"+eventList[i].Location+"</br>"+eventList[i].Time+"</td></tr>";
  }
  tableHTML+="</tbody></table>";
  $("#evtsTable").html(tableHTML);
}

function PopulateEventsCalendar(eventList) {
  var options = {
    containerId: "#evtsCal",
    headerHeight: 50,
    firstDayOfWeek: 0,
    calendarStartDate:new Date(),
    dragableEvents: false,
    activeDroppableClass: false,
    hoverDroppableClass: false,
    navLinks: {
      enableToday: true,
      enableNextYear: true,
      enablePrevYear: true,
      p:'Prev',
      n:'Next',
      t:'Today',
      showMore: 'Show More'
    },
    onMonthChanging: function(dateIn) { return true; },
    onMonthChanged: function(dateIn) { return true; },
    onEventLinkClick: function(event) { return true; },
    onEventBlockClick: function(event) { return true; },
    onEventBlockOver: function(event) { return true; },
    onEventBlockOut: function(event) { return true; },
    onDayLinkClick: function(date) { return true; },
    onDayCellClick: function(date) { return true; },
    onDayCellDblClick: function(dateIn) { return true; },
    onEventDropped: function(event, newDate) { return true; },
    onShowMoreClick: function(eventArray) { return true; },
    locale: {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      weekMin: 'wk'
    }
  };

  $.jMonthCalendar.Initialize(options, eventList);
  $("#jMonthCalendar").hide();
}

function GetEvents() {
  $.ajax({
    type: 'POST',
    url: "http://library.sjsu.edu/events/events-feed",
    dataType: 'xml',
    crossDomain: true,
    success: function(res)
    {
      var eventList = new Array();
      var i = 0;
      var $xml = $(res);

      $xml.find("item").each(function(){
        var $this = $(this),
        item = {Title: $this.find("title").text()};			

        var descNode = document.createElement("div");
        descNode.innerHTML = $this.find("description").text();
        var dt = descNode.getElementsByClassName('date-display-single');
        var dtTime = dt[0].textContent.split(/[- ]/);

        var location = descNode.getElementsByClassName('field-name-field-eroom')[0].textContent;
        item.Location = location;
        item.StartDateTime = new Date(dtTime[0]);
        item.Time = dt[0].textContent;
        item.EventId = i;
        item.CssClass = "Meeting";
        item.Url="#"
        item.Description =  $this.find("description").text();
        item.ToolTip = item.Title+"</br>Location: "+item.Location+"</br>Time: "+item.Time+"</br>";			
        eventList[i] = item;
        i++;
      });

      PopulateEventsTable(eventList);
      PopulateEventsCalendar(eventList);
    }
  }); 
}
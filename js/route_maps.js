var routes = {
  'interlaken': {
    3: '//snippets.mapmycdn.com/routes/view/embedded/356639835?width=600&height=400&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2014-03-29T17:09:05-05:00',
    5: '//snippets.mapmycdn.com/routes/view/embedded/380810830?width=600&height=400&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2014-03-29T17:09:05-05:00',
    7: '//snippets.mapmycdn.com/routes/view/embedded/380811260?width=600&height=400&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2014-03-29T17:09:05-05:00'
  },
  'arboretum': {
    3: '//snippets.mapmycdn.com/routes/view/embedded/380811542?width=600&height=400&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2014-03-29T17:09:05-05:00',
    5: '//snippets.mapmycdn.com/routes/view/embedded/380811742?width=600&height=400&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2014-03-29T17:09:05-05:00',
    7: '//snippets.mapmycdn.com/routes/view/embedded/380812136?width=600&height=400&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2014-03-29T17:09:05-05:00'
  },
  'ravenna': {
    3: '//snippets.mapmycdn.com/routes/view/embedded/1362222805?width=600&height=400&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2016-11-17T22:15:40-08:00',
    5: '//snippets.mapmycdn.com/routes/view/embedded/381208242?width=600&height=400&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2014-03-29T17:09:05-05:00',
    7: '//snippets.mapmycdn.com/routes/view/embedded/381213640?width=600&height=400&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2014-03-29T17:09:05-05:00'
  },
  'laurelhurst': {
    3: '//snippets.mapmycdn.com/routes/view/embedded/380812480?width=600&height=400&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2014-03-29T17:09:05-05:00%22%20height=%22400px%22%20width=%22100%%22%20frameborder=%220%22',
    5: '//snippets.mapmycdn.com/routes/view/embedded/380812908?width=600&height=400&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2014-03-29T17:09:05-05:00',
    7: '//snippets.mapmycdn.com/routes/view/embedded/380813832?width=600&height=400&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2014-03-29T17:09:05-05:00'
  },
  'green_lake': {
    3: '//snippets.mapmycdn.com/routes/view/embedded/381215294?width=600&height=400&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2014-03-29T17:09:05-05:00',
    5: '//snippets.mapmycdn.com/routes/view/embedded/381216728?width=600&height=400&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2014-03-29T17:09:05-05:00',
    7: '//snippets.mapmycdn.com/routes/view/embedded/381218394?width=600&height=400&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2014-03-29T17:09:05-05:00'
  }
}

/*
  hah, jquery is for hipsters
 */

function listenToTheRadio() {
  var rad = document.route_form.route;
  var prev = null;
  for(var i = 0; i < rad.length; i++) {
    rad[i].onclick = function() {
      updateRoutes();
    };
  }

  var rad = document.route_form.distance;
  var prev = null;
  for(var i = 0; i < rad.length; i++) {
    rad[i].onclick = function() {
      updateRoutes();
    };
  }

  // set some defaults I guess
  /*document.route_form.route.value = "interlaken";
  document.route_form.distance.value = "3";

  updateRoutes();*/
}

function updateRoutes() {
  var name = document.route_form.route.value;
  var distance = parseInt(document.route_form.distance.value);

  if(name !== "" && !isNaN(distance)) {
    var route = routes[name][distance];
    document.getElementById("route-container").innerHTML = '<iframe id="mapmyfitness_route" src="' + route + '" height="400px" width="100%" frameborder="0"></iframe>';
  }
}

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
    3: '//snippets.mapmycdn.com/routes/view/embedded/380812480?width=600&height=400&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2014-03-29T17:09:05-05:00',
    5: '//snippets.mapmycdn.com/routes/view/embedded/380812908?width=600&height=400&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2014-03-29T17:09:05-05:00',
    7: '//snippets.mapmycdn.com/routes/view/embedded/380813832?width=600&height=400&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2014-03-29T17:09:05-05:00'
  },
  'green_lake': {
    3: '//snippets.mapmycdn.com/routes/view/embedded/381215294?width=600&height=400&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2014-03-29T17:09:05-05:00',
    5: '//snippets.mapmycdn.com/routes/view/embedded/381216728?width=600&height=400&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2014-03-29T17:09:05-05:00',
    7: '//snippets.mapmycdn.com/routes/view/embedded/381218394?width=600&height=400&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2014-03-29T17:09:05-05:00'
  },
  'long_names': {
    1: '//snippets.mapmycdn.com/routes/view/embedded/1379987599?width=600&height=400&&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2016-12-06T00:45:07-08:00',
    2: '//snippets.mapmycdn.com/routes/view/embedded/2865761827?width=600&height=400&&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2020-01-18T18:57:46-08:00',
    3: '//snippets.mapmycdn.com/routes/view/embedded/2730969919?width=600&height=400&&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2019-10-13T21:00:38-07:00',
    4: '//mapmyfitness.com/routes/view/embedded/5050970416?width=600&height=400&&line_color=E68006c6&rgbhex=c60680&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2022-06-13T21:16:51+00:00'
  }
}

/*
  hah, jquery is for hipsters
  amen
  what the heck is jquery - caesar
 */

function listenToTheRadio() {
  var rad = document.route_form.route;
  var prev = null;
  for(var i = 0; i < rad.length - 1; i++) {
    rad[i].onclick = function() {
      document.getElementById('long_names').style.display = 'none';
      document.getElementById('group_dist').style.display = 'block';
      updateRoutes();
    };
  }

  //set a different onclick for long run
  rad[rad.length - 1].onclick = function() {
     document.getElementById('group_dist').style.display = 'none';
     document.getElementById('long_names').style.display = 'block';
     updateRoutes();
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

  if(name !== "" && !isNaN(distance) && routes[name][distance] != undefined) {
    var route = routes[name][distance];
    document.getElementById("route-container").innerHTML = '<iframe id="mapmyfitness_route" src="' + route + '" height="400px" width="100%" frameborder="0"></iframe>';
  }
}

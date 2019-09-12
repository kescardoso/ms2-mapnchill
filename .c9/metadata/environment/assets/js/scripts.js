{"filter":false,"title":"scripts.js","tooltip":"/assets/js/scripts.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":173,"column":6},"end":{"row":179,"column":8},"action":"insert","lines":["// Converting MarkerImage objects to type Icon","      var icon = {","        url: place.icon,","        scaledSize: new google.maps.Size(25, 25),","        origin: new google.maps.Point(0, 0),","        anchor: new google.maps.Point(17, 34)","      };"],"id":1911}],[{"start":{"row":176,"column":42},"end":{"row":176,"column":43},"action":"remove","lines":["5"],"id":1912}],[{"start":{"row":176,"column":42},"end":{"row":176,"column":43},"action":"insert","lines":["4"],"id":1913}],[{"start":{"row":176,"column":46},"end":{"row":176,"column":47},"action":"remove","lines":["5"],"id":1914}],[{"start":{"row":176,"column":46},"end":{"row":176,"column":47},"action":"insert","lines":["4"],"id":1915}],[{"start":{"row":169,"column":28},"end":{"row":169,"column":29},"action":"remove","lines":["d"],"id":1916}],[{"start":{"row":169,"column":28},"end":{"row":169,"column":29},"action":"insert","lines":["d"],"id":1917}],[{"start":{"row":116,"column":0},"end":{"row":116,"column":2},"action":"remove","lines":["  "],"id":1918},{"start":{"row":115,"column":2},"end":{"row":116,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":135,"column":0},"end":{"row":135,"column":1},"action":"remove","lines":["\t"],"id":1919},{"start":{"row":134,"column":1},"end":{"row":135,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":199,"column":0},"end":{"row":199,"column":2},"action":"remove","lines":["  "],"id":1920},{"start":{"row":198,"column":2},"end":{"row":199,"column":0},"action":"remove","lines":["",""]},{"start":{"row":198,"column":0},"end":{"row":198,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":0,"column":0},"end":{"row":200,"column":62},"action":"remove","lines":["// DATA: yoga and massage businesses to be added to map.","// Code from: https://codepen.io/olivertaylor/pen/BWWNeb?editors=0010#0","var features = [","  ","  //YOGA BUSINESSES:","  {","    icon: 'yoga',","    content: '<div id=\"info-content\"> <h6><a target=\"_blank\" href=\"http://www.kescardoso.com\">KES CARDOSO<br/>Yoga & Sound</a></h6> <p><strong>Yoga:</strong> Yin-Yang Balanced Flow, Hatha Yoga Flow, Kundalini Yoga, Yin Yoga Restorative.<br/><strong>Massage:</strong> Sound Healing Therapy, Sonic Massage.</p> </div>',","    position: { lat: 43.71875279296885, lng: 7.2729331254959115 }","  }, ","  {","    icon: 'yoga',","    content: '<div id=\"info-content\"> <h6><a target=\"_blank\" href=\"http://www.pepitayoga.com\">Pepita Yoga</a></h6> <p>Hatha Flow, Acro Yoga, Hot Yoga, Power Yoga, Yin Yoga, Pilates.</p> </div>',","    position: { lat: 43.69852262776876, lng: 7.2591894865036 }","  },","  {","    icon: 'yoga',","    content: '<div id=\"info-content\"> <h6><a target=\"_blank\" href=\"https://enso.fr/\">Enso Yoga Massena</a></h6> <p>Hatha Yoga, Iyengar, Ashtanga, Vinyasa, Restorative, Pre-natal.</p> </div>',","    position: { lat: 43.69755689999653, lng: 7.2676920890808105 }","  },","  {","    icon: 'yoga',","    content: '<div id=\"info-content\"> <h6><a target=\"_blank\" href=\"https://enso.fr/\">Enso Yoga Valbonne</a></h6> <p>Hatha Yoga, Iyengar, Ashtanga, Vinyasa, Restorative, Pre-natal.</p> </div>',","    position: { lat: 43.62272781889663, lng: 7.04847514629364 }","  },","  {","    icon: 'yoga',","    content: '<div id=\"info-content\"> <h6><a target=\"_blank\" href=\"http://www.rivierayoga.fr\">Riviera Yoga</a></h6> <p>Hatha Yoga, Ashtanga & Vinyasa Yoga, Restorative, Pre/Post-natal.</p> </div>',","    position: { lat: 43.69970552613459, lng: 7.2816047072410575 }","  },","  {","    icon: 'yoga',","    content: '<div id=\"info-content\"> <h6><a target=\"_blank\" href=\"https://www.facebook.com/peaceyoganice/\">Thousand Bridges (La Passarelle)</a></h6> <p>Bikram Yoga, Kundalini Yoga, Yin Yoga Restorative, Sound Healing, Nature Immersion and Retreats.</p> </div>',","    position: { lat: 44.077041901917, lng: 7.121543884277344 }","  },","  {","    icon: 'yoga',","    content: '<div id=\"info-content\"> <h6><a target=\"_blank\" href=\"https://tigre-yoga.com/en/capsule/le-tigre-monte-carlo/\">Le Tigre Monte Carlo</a></h6> <p>Hatha & Vinyasa Flow, Kundalini Yoga, Yin Yoga, Pilates.</p> </div>',","    position: { lat: 43.75085032982795, lng: 7.444299459457397 }","  },","  ","  //MASSAGE BUSINESSES:","  {","    icon: 'massage',","    content: '<div id=\"info-content\"> <h6><a target=\"_blank\" href=\"http://www.kescardoso.com\">KES CARDOSO<br/>Yoga & Sound</a></h6> <p><strong>Yoga:</strong> Yin-Yang Balanced Flow, Hatha Yoga Flow, Kundalini Yoga, Yin Yoga Restorative.<br/><strong>Massage:</strong> Sound Healing Therapy, Sonic Massage.</p> </div>',","    position: { lat: 43.71873146899887, lng: 7.272777557373047 }","  }, ","  {","    icon: 'massage',","    content: '<div id=\"info-content\"> <h6><a target=\"_blank\" href=\"http://www.bodywork.com\">BodyWork by Andrea Daumas</a></h6> <p>Relaxing Massage, Reenergising/Detox Massage, Deep Tissue Massage, Thai Massage, Foot Reflexology.</p> </div>',","    position: { lat: 43.69720008098092, lng: 7.257483601570129 }","  },","  {","    icon: 'massage',","    content: '<div id=\"info-content\"> <h6><a target=\"_blank\" href=\"https://rivieramassage.com/\">Riviera Massage by Shona Marrs</a></h6> <p>Deep Tissue, Body Sculpting, Swedish, Sports, Acupressure, Thai, Skin rolling and manual kneading, Passive joint and sensory repatterning.</p> </div>',","    position: { lat: 43.58102233159652, lng: 7.122316360473633 }","  }","  ","];","","","// GLOBAL SETTINGS","// Define variables.","var google;","var map;","","// Define custom map options.","// Tutorial from: https://developers.google.com/maps/documentation/javascript/controls","// Tutorial from: https://developers.google.com/maps/documentation/javascript/controls#Adding_Controls_to_the_Map","var coteAzur = {lat: 43.8416215, lng: 7.2062602};","var mapOptions = {","\tzoom: 10,","\tcenter: coteAzur,","\tmapTypeId: 'roadmap',","\tzoomControl: true,","  mapTypeControl: false,","  scaleControl: true,","  streetViewControl: false,","  rotateControl: false,","  fullscreenControl: false","};","","// Define custom icons for map markers.","// Code from: https://codepen.io/olivertaylor/pen/BWWNeb?editors=0010#0","var icons = { ","  yoga: { ","    icon: 'assets/images/icon-yoga.png'","  },","  massage:","  {","    icon: 'assets/images/icon-massage.png'","  },","  soundtherapy: { ","    icon: 'assets/images/icon-sound.png'","  },","  osteopathe:","  {","    icon: 'assets/images/icon-osteo.png'","  },","  pilates: { ","    icon: 'assets/images/icon-pilates.png'","  },","  acupuncture:","  {","    icon: 'assets/images/icon-acupu.png'","  }","};","","","// GOOGLE MAPS API INSTALLATION.","// Create map.","function activateMap() {","","  // Load Map.","  map = new google.maps.Map(document.getElementById('map'), mapOptions);","  ","  // Add markers and display infowindows on mouseover.","  // Code from: https://codepen.io/olivertaylor/pen/BWWNeb?editors=0010#0","  var InfoWindows = new google.maps.InfoWindow({","    maxWidth: 280","  });","  ","\tfeatures.forEach(function(business) {\t","\t\tvar marker = new google.maps.Marker({","\t\t  position: { lat: business.position.lat, lng: business.position.lng },","\t\t  map: map,","\t\t  icon: icons[business.icon].icon,","\t\t  title: business.title","\t\t});","\t\tmarker.addListener('click', function() {","\t\t  InfoWindows.open(map, this);","\t\t  InfoWindows.setContent(business.content);","\t\t});","\t});","\t","\t// Add search and link it to the UI element using the Google Place Autocomplete feature:","\t// people can enter geographical searches, and the search box will return a","  // pick list containing a mix of places and predicted search terms.","  // Tutorial from: https://developers.google.com/maps/documentation/javascript/examples/places-searchbox","  var input = document.getElementById('search');","  var searchBox = new google.maps.places.SearchBox(input);","  map.controls[google.maps.ControlPosition.TOP].push(input);","  ","  // Bias the SearchBox results towards current map's viewport.","  map.addListener('bounds_changed', function() {","    searchBox.setBounds(map.getBounds());","  });","  ","  var markers = [];","  // Listen for the event fired when the user selects a prediction and retrieve more details for that place.","  searchBox.addListener('places_changed', function() {","    var places = searchBox.getPlaces();","","    if (places.length == 0) {","      return;","    }","    ","    // Clear out the old markers.","    markers.forEach(function(marker) {","      marker.setMap(null);","    });","    markers = [];","    ","    // For each place, get the icon, name and location.","    var bounds = new google.maps.LatLngBounds();","    places.forEach(function(place) {","      if (!place.geometry) {","        console.log(\"Returned place contains no geometry\");","        return;","      }","      ","      // Converting MarkerImage objects to type Icon","      var icon = {","        url: place.icon,","        scaledSize: new google.maps.Size(24, 24),","        origin: new google.maps.Point(0, 0),","        anchor: new google.maps.Point(17, 34)","      };","      ","      // Create a marker for each place.","      markers.push(new google.maps.Marker({","        map: map,","        icon: icon,","        title: place.name,","        position: place.geometry.location,","      }));","","      if (place.geometry.viewport) {","        // Only geocodes have viewport.","        bounds.union(place.geometry.viewport);","      } else {","        bounds.extend(place.geometry.location);","      }","    });","    map.fitBounds(bounds);","  });","","}","","// Call the function and display the map on the browser.","google.maps.event.addDomListener(window, 'load', activateMap);"],"id":1921},{"start":{"row":0,"column":0},"end":{"row":201,"column":62},"action":"insert","lines":["// DATA: yoga and massage businesses to be added to map.","// Code from: https://codepen.io/olivertaylor/pen/BWWNeb?editors=0010#0","","var features = [","  ","  //YOGA BUSINESSES:","  {","    icon: 'yoga',","    content: '<div id=\"info-content\"> <h6><a target=\"_blank\" href=\"http://www.kescardoso.com\">KES CARDOSO<br/>Yoga & Sound</a></h6> <p><strong>Yoga:</strong> Yin-Yang Balanced Flow, Hatha Yoga Flow, Kundalini Yoga, Yin Yoga Restorative.<br/><strong>Massage:</strong> Sound Healing Therapy, Sonic Massage.</p> </div>',","    position: { lat: 43.71875279296885, lng: 7.2729331254959115 }","  }, ","  {","    icon: 'yoga',","    content: '<div id=\"info-content\"> <h6><a target=\"_blank\" href=\"http://www.pepitayoga.com\">Pepita Yoga</a></h6> <p>Hatha Flow, Acro Yoga, Hot Yoga, Power Yoga, Yin Yoga, Pilates.</p> </div>',","    position: { lat: 43.69852262776876, lng: 7.2591894865036 }","  },","  {","    icon: 'yoga',","    content: '<div id=\"info-content\"> <h6><a target=\"_blank\" href=\"https://enso.fr/\">Enso Yoga Massena</a></h6> <p>Hatha Yoga, Iyengar, Ashtanga, Vinyasa, Restorative, Pre-natal.</p> </div>',","    position: { lat: 43.69755689999653, lng: 7.2676920890808105 }","  },","  {","    icon: 'yoga',","    content: '<div id=\"info-content\"> <h6><a target=\"_blank\" href=\"https://enso.fr/\">Enso Yoga Valbonne</a></h6> <p>Hatha Yoga, Iyengar, Ashtanga, Vinyasa, Restorative, Pre-natal.</p> </div>',","    position: { lat: 43.62272781889663, lng: 7.04847514629364 }","  },","  {","    icon: 'yoga',","    content: '<div id=\"info-content\"> <h6><a target=\"_blank\" href=\"http://www.rivierayoga.fr\">Riviera Yoga</a></h6> <p>Hatha Yoga, Ashtanga & Vinyasa Yoga, Restorative, Pre/Post-natal.</p> </div>',","    position: { lat: 43.69970552613459, lng: 7.2816047072410575 }","  },","  {","    icon: 'yoga',","    content: '<div id=\"info-content\"> <h6><a target=\"_blank\" href=\"https://www.facebook.com/peaceyoganice/\">Thousand Bridges (La Passarelle)</a></h6> <p>Bikram Yoga, Kundalini Yoga, Yin Yoga Restorative, Sound Healing, Nature Immersion and Retreats.</p> </div>',","    position: { lat: 44.077041901917, lng: 7.121543884277344 }","  },","  {","    icon: 'yoga',","    content: '<div id=\"info-content\"> <h6><a target=\"_blank\" href=\"https://tigre-yoga.com/en/capsule/le-tigre-monte-carlo/\">Le Tigre Monte Carlo</a></h6> <p>Hatha & Vinyasa Flow, Kundalini Yoga, Yin Yoga, Pilates.</p> </div>',","    position: { lat: 43.75085032982795, lng: 7.444299459457397 }","  },","  ","  //MASSAGE BUSINESSES:","  {","    icon: 'massage',","    content: '<div id=\"info-content\"> <h6><a target=\"_blank\" href=\"http://www.kescardoso.com\">KES CARDOSO<br/>Yoga & Sound</a></h6> <p><strong>Yoga:</strong> Yin-Yang Balanced Flow, Hatha Yoga Flow, Kundalini Yoga, Yin Yoga Restorative.<br/><strong>Massage:</strong> Sound Healing Therapy, Sonic Massage.</p> </div>',","    position: { lat: 43.71873146899887, lng: 7.272777557373047 }","  }, ","  {","    icon: 'massage',","    content: '<div id=\"info-content\"> <h6><a target=\"_blank\" href=\"http://www.bodywork.com\">BodyWork by Andrea Daumas</a></h6> <p>Relaxing Massage, Reenergising/Detox Massage, Deep Tissue Massage, Thai Massage, Foot Reflexology.</p> </div>',","    position: { lat: 43.69720008098092, lng: 7.257483601570129 }","  },","  {","    icon: 'massage',","    content: '<div id=\"info-content\"> <h6><a target=\"_blank\" href=\"https://rivieramassage.com/\">Riviera Massage by Shona Marrs</a></h6> <p>Deep Tissue, Body Sculpting, Swedish, Sports, Acupressure, Thai, Skin rolling and manual kneading, Passive joint and sensory repatterning.</p> </div>',","    position: { lat: 43.58102233159652, lng: 7.122316360473633 }","  }","  ","];","","","","// GLOBAL SETTINGS","// Define variables.","var google;","var map;","","// Define custom map options.","// Tutorial from: https://developers.google.com/maps/documentation/javascript/controls","// Tutorial from: https://developers.google.com/maps/documentation/javascript/controls#Adding_Controls_to_the_Map","var coteAzur = {lat: 43.8416215, lng: 7.2062602};","var mapOptions = {","\tzoom: 10,","\tcenter: coteAzur,","\tmapTypeId: 'roadmap',","\tzoomControl: true,","\tmapTypeControl: false,","\tscaleControl: true,","\tstreetViewControl: false,","\trotateControl: false,","\tfullscreenControl: false","};","","// Define custom icons for map markers.","// Code from: https://codepen.io/olivertaylor/pen/BWWNeb?editors=0010#0","var icons = {","\tyoga: { ","    \ticon: 'assets/images/icon-yoga.png'","    },","  \tmassage: {","    \ticon: 'assets/images/icon-massage.png'","  \t},","  \tsoundtherapy: { ","    \ticon: 'assets/images/icon-sound.png'","  \t},","  \tosteopathe: {","    \ticon: 'assets/images/icon-osteo.png'","  \t},","  \tpilates: { ","    \ticon: 'assets/images/icon-pilates.png'","  \t},","  \tacupuncture: {","    \ticon: 'assets/images/icon-acupu.png'","  \t}","};","","","","// GOOGLE MAPS API INSTALLATION.","// Create map.","function activateMap() {","","\t// Load Map.","  \tmap = new google.maps.Map(document.getElementById('map'), mapOptions);","  ","  \t// Add markers and display infowindows on mouseover.","  \t// Code from: https://codepen.io/olivertaylor/pen/BWWNeb?editors=0010#0","  \tvar InfoWindows = new google.maps.InfoWindow({","    \tmaxWidth: 280","  \t});","  ","\tfeatures.forEach(function(business) {","\t\tvar marker = new google.maps.Marker({","\t\t  \tposition: { lat: business.position.lat, lng: business.position.lng },","\t\t  \tmap: map,","\t\t  \ticon: icons[business.icon].icon,","\t\t  \ttitle: business.title","\t\t});","\t\tmarker.addListener('click', function() {","\t\t  \tInfoWindows.open(map, this);","\t\t  \tInfoWindows.setContent(business.content);","\t\t});","\t});","\t","\t// Add search and link it to the UI element using the Google Place Autocomplete feature:","\t// people can enter geographical searches, and the search box will return a","  \t// pick list containing a mix of places and predicted search terms.","  \t// Tutorial from: https://developers.google.com/maps/documentation/javascript/examples/places-searchbox","  \tvar input = document.getElementById('search');","  \tvar searchBox = new google.maps.places.SearchBox(input);","  \tmap.controls[google.maps.ControlPosition.TOP].push(input);","  ","  \t// Bias the SearchBox results towards current map's viewport.","  \tmap.addListener('bounds_changed', function() {","\t\tsearchBox.setBounds(map.getBounds());","  \t});","  ","  \tvar markers = [];","  \t// Listen for the event fired when the user selects a prediction and retrieve more details for that place.","  \tsearchBox.addListener('places_changed', function() {","    \tvar places = searchBox.getPlaces();","\t\tif (places.length == 0) {","      \t\treturn;","    \t}","    ","    // Clear out the old markers.","    markers.forEach(function(marker) {","      \tmarker.setMap(null);","    });","    markers = [];","    ","    // For each place, get the icon, name and location.","    var bounds = new google.maps.LatLngBounds();","    places.forEach(function(place) {","    \tif (!place.geometry) {","        \tconsole.log(\"Returned place contains no geometry\");","        \treturn;","      \t}","      ","\t\t// Converting MarkerImage objects to type Icon","\t\tvar icon = {","      \t\turl: place.icon,","        \tscaledSize: new google.maps.Size(24, 24),","        \torigin: new google.maps.Point(0, 0),","        \tanchor: new google.maps.Point(17, 34)","     \t};","      ","\t\t// Create a marker for each place.","\t\tmarkers.push(new google.maps.Marker({","\t\t\tmap: map,","        \ticon: icon,","        \ttitle: place.name,","        \tposition: place.geometry.location,","\t\t}));","","\t\tif (place.geometry.viewport) {","    \t\t// Only geocodes have viewport.","        \tbounds.union(place.geometry.viewport);","\t\t}","\t\telse","\t\t{","    \tbounds.extend(place.geometry.location);","    \t}","\t\t});","    map.fitBounds(bounds);","  \t});","","}","","// Call the function and display the map on the browser.","google.maps.event.addDomListener(window, 'load', activateMap);"]}],[{"start":{"row":89,"column":2},"end":{"row":89,"column":4},"action":"remove","lines":["  "],"id":1922}],[{"start":{"row":90,"column":2},"end":{"row":90,"column":3},"action":"remove","lines":["\t"],"id":1923}],[{"start":{"row":92,"column":2},"end":{"row":92,"column":3},"action":"remove","lines":["\t"],"id":1924}],[{"start":{"row":93,"column":2},"end":{"row":93,"column":3},"action":"remove","lines":["\t"],"id":1925}],[{"start":{"row":88,"column":4},"end":{"row":88,"column":5},"action":"remove","lines":["\t"],"id":1926}],[{"start":{"row":91,"column":4},"end":{"row":91,"column":5},"action":"remove","lines":["\t"],"id":1927}],[{"start":{"row":94,"column":4},"end":{"row":94,"column":5},"action":"remove","lines":["\t"],"id":1928}],[{"start":{"row":95,"column":2},"end":{"row":95,"column":3},"action":"remove","lines":["\t"],"id":1929}],[{"start":{"row":96,"column":2},"end":{"row":96,"column":3},"action":"remove","lines":["\t"],"id":1930}],[{"start":{"row":97,"column":4},"end":{"row":97,"column":5},"action":"remove","lines":["\t"],"id":1931}],[{"start":{"row":98,"column":2},"end":{"row":98,"column":3},"action":"remove","lines":["\t"],"id":1932}],[{"start":{"row":99,"column":2},"end":{"row":99,"column":3},"action":"remove","lines":["\t"],"id":1933}],[{"start":{"row":100,"column":4},"end":{"row":100,"column":5},"action":"remove","lines":["\t"],"id":1934}],[{"start":{"row":101,"column":2},"end":{"row":101,"column":3},"action":"remove","lines":["\t"],"id":1935}],[{"start":{"row":102,"column":2},"end":{"row":102,"column":3},"action":"remove","lines":["\t"],"id":1936}],[{"start":{"row":103,"column":4},"end":{"row":103,"column":5},"action":"remove","lines":["\t"],"id":1937}],[{"start":{"row":104,"column":2},"end":{"row":104,"column":3},"action":"remove","lines":["\t"],"id":1938}],[{"start":{"row":113,"column":0},"end":{"row":113,"column":1},"action":"remove","lines":["\t"],"id":1939}],[{"start":{"row":113,"column":0},"end":{"row":113,"column":2},"action":"insert","lines":["  "],"id":1940}],[{"start":{"row":114,"column":2},"end":{"row":114,"column":3},"action":"remove","lines":["\t"],"id":1941}],[{"start":{"row":116,"column":2},"end":{"row":116,"column":3},"action":"remove","lines":["\t"],"id":1942}],[{"start":{"row":117,"column":2},"end":{"row":117,"column":3},"action":"remove","lines":["\t"],"id":1943}],[{"start":{"row":118,"column":2},"end":{"row":118,"column":3},"action":"remove","lines":["\t"],"id":1944}],[{"start":{"row":119,"column":4},"end":{"row":119,"column":5},"action":"remove","lines":["\t"],"id":1945}],[{"start":{"row":120,"column":2},"end":{"row":120,"column":3},"action":"remove","lines":["\t"],"id":1946}],[{"start":{"row":124,"column":4},"end":{"row":124,"column":5},"action":"remove","lines":["\t"],"id":1947}],[{"start":{"row":125,"column":4},"end":{"row":125,"column":5},"action":"remove","lines":["\t"],"id":1948}],[{"start":{"row":126,"column":4},"end":{"row":126,"column":5},"action":"remove","lines":["\t"],"id":1949}],[{"start":{"row":127,"column":4},"end":{"row":127,"column":5},"action":"remove","lines":["\t"],"id":1950}],[{"start":{"row":130,"column":4},"end":{"row":130,"column":5},"action":"remove","lines":["\t"],"id":1951}],[{"start":{"row":131,"column":4},"end":{"row":131,"column":5},"action":"remove","lines":["\t"],"id":1952}],[{"start":{"row":137,"column":2},"end":{"row":137,"column":3},"action":"remove","lines":["\t"],"id":1953}],[{"start":{"row":138,"column":2},"end":{"row":138,"column":3},"action":"remove","lines":["\t"],"id":1954}],[{"start":{"row":139,"column":2},"end":{"row":139,"column":3},"action":"remove","lines":["\t"],"id":1955}],[{"start":{"row":140,"column":2},"end":{"row":140,"column":3},"action":"remove","lines":["\t"],"id":1956}],[{"start":{"row":141,"column":2},"end":{"row":141,"column":3},"action":"remove","lines":["\t"],"id":1957}],[{"start":{"row":143,"column":2},"end":{"row":143,"column":3},"action":"remove","lines":["\t"],"id":1958}],[{"start":{"row":144,"column":2},"end":{"row":144,"column":3},"action":"remove","lines":["\t"],"id":1959}],[{"start":{"row":145,"column":1},"end":{"row":145,"column":2},"action":"remove","lines":["\t"],"id":1960}],[{"start":{"row":145,"column":1},"end":{"row":145,"column":3},"action":"insert","lines":["  "],"id":1961}],[{"start":{"row":146,"column":2},"end":{"row":146,"column":3},"action":"remove","lines":["\t"],"id":1962}],[{"start":{"row":148,"column":2},"end":{"row":148,"column":3},"action":"remove","lines":["\t"],"id":1963}],[{"start":{"row":149,"column":2},"end":{"row":149,"column":3},"action":"remove","lines":["\t"],"id":1964}],[{"start":{"row":150,"column":2},"end":{"row":150,"column":3},"action":"remove","lines":["\t"],"id":1965}],[{"start":{"row":151,"column":4},"end":{"row":151,"column":5},"action":"remove","lines":["\t"],"id":1966}],[{"start":{"row":152,"column":2},"end":{"row":152,"column":4},"action":"insert","lines":["  "],"id":1967}],[{"start":{"row":153,"column":7},"end":{"row":153,"column":8},"action":"remove","lines":["\t"],"id":1968}],[{"start":{"row":156,"column":2},"end":{"row":156,"column":4},"action":"remove","lines":["  "],"id":1969}],[{"start":{"row":157,"column":2},"end":{"row":157,"column":4},"action":"remove","lines":["  "],"id":1970}],[{"start":{"row":158,"column":6},"end":{"row":158,"column":7},"action":"remove","lines":["\t"],"id":1971},{"start":{"row":158,"column":4},"end":{"row":158,"column":6},"action":"remove","lines":["  "]}],[{"start":{"row":159,"column":2},"end":{"row":159,"column":4},"action":"remove","lines":["  "],"id":1972}],[{"start":{"row":160,"column":2},"end":{"row":160,"column":4},"action":"remove","lines":["  "],"id":1973}],[{"start":{"row":160,"column":2},"end":{"row":161,"column":0},"action":"insert","lines":["",""],"id":1974},{"start":{"row":161,"column":0},"end":{"row":161,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":163,"column":2},"end":{"row":163,"column":4},"action":"remove","lines":["  "],"id":1975}],[{"start":{"row":164,"column":2},"end":{"row":164,"column":4},"action":"remove","lines":["  "],"id":1976}],[{"start":{"row":165,"column":2},"end":{"row":165,"column":4},"action":"remove","lines":["  "],"id":1977}],[{"start":{"row":166,"column":4},"end":{"row":166,"column":5},"action":"remove","lines":["\t"],"id":1978}],[{"start":{"row":167,"column":8},"end":{"row":167,"column":9},"action":"remove","lines":["\t"],"id":1979},{"start":{"row":167,"column":6},"end":{"row":167,"column":8},"action":"remove","lines":["  "]}],[{"start":{"row":168,"column":8},"end":{"row":168,"column":9},"action":"remove","lines":["\t"],"id":1980}],[{"start":{"row":169,"column":6},"end":{"row":169,"column":7},"action":"remove","lines":["\t"],"id":1981},{"start":{"row":169,"column":4},"end":{"row":169,"column":6},"action":"remove","lines":["  "]}],[{"start":{"row":173,"column":7},"end":{"row":173,"column":8},"action":"remove","lines":["\t"],"id":1982},{"start":{"row":173,"column":6},"end":{"row":173,"column":7},"action":"remove","lines":["\t"]}],[{"start":{"row":171,"column":1},"end":{"row":171,"column":2},"action":"remove","lines":["\t"],"id":1983}],[{"start":{"row":172,"column":1},"end":{"row":172,"column":2},"action":"remove","lines":["\t"],"id":1984}],[{"start":{"row":173,"column":4},"end":{"row":173,"column":6},"action":"remove","lines":["  "],"id":1985}],[{"start":{"row":174,"column":8},"end":{"row":174,"column":9},"action":"remove","lines":["\t"],"id":1986},{"start":{"row":174,"column":6},"end":{"row":174,"column":8},"action":"remove","lines":["  "]}],[{"start":{"row":175,"column":8},"end":{"row":175,"column":9},"action":"remove","lines":["\t"],"id":1987},{"start":{"row":175,"column":6},"end":{"row":175,"column":8},"action":"remove","lines":["  "]}],[{"start":{"row":176,"column":8},"end":{"row":176,"column":9},"action":"remove","lines":["\t"],"id":1988},{"start":{"row":176,"column":6},"end":{"row":176,"column":8},"action":"remove","lines":["  "]}],[{"start":{"row":177,"column":5},"end":{"row":177,"column":6},"action":"remove","lines":["\t"],"id":1989}],[{"start":{"row":177,"column":4},"end":{"row":177,"column":5},"action":"remove","lines":[" "],"id":1990}],[{"start":{"row":179,"column":1},"end":{"row":179,"column":2},"action":"remove","lines":["\t"],"id":1991}],[{"start":{"row":180,"column":1},"end":{"row":180,"column":2},"action":"remove","lines":["\t"],"id":1992}],[{"start":{"row":181,"column":2},"end":{"row":181,"column":3},"action":"remove","lines":["\t"],"id":1993}],[{"start":{"row":182,"column":8},"end":{"row":182,"column":9},"action":"remove","lines":["\t"],"id":1994},{"start":{"row":182,"column":6},"end":{"row":182,"column":8},"action":"remove","lines":["  "]},{"start":{"row":182,"column":4},"end":{"row":182,"column":6},"action":"remove","lines":["  "]}],[{"start":{"row":183,"column":8},"end":{"row":183,"column":9},"action":"remove","lines":["\t"],"id":1995},{"start":{"row":183,"column":6},"end":{"row":183,"column":8},"action":"remove","lines":["  "]},{"start":{"row":183,"column":4},"end":{"row":183,"column":6},"action":"remove","lines":["  "]}],[{"start":{"row":184,"column":8},"end":{"row":184,"column":9},"action":"remove","lines":["\t"],"id":1996},{"start":{"row":184,"column":6},"end":{"row":184,"column":8},"action":"remove","lines":["  "]},{"start":{"row":184,"column":4},"end":{"row":184,"column":6},"action":"remove","lines":["  "]}],[{"start":{"row":185,"column":1},"end":{"row":185,"column":2},"action":"remove","lines":["\t"],"id":1997}],[{"start":{"row":187,"column":1},"end":{"row":187,"column":2},"action":"remove","lines":["\t"],"id":1998}],[{"start":{"row":188,"column":5},"end":{"row":188,"column":6},"action":"remove","lines":["\t"],"id":1999},{"start":{"row":188,"column":4},"end":{"row":188,"column":5},"action":"remove","lines":["\t"]}],[{"start":{"row":189,"column":8},"end":{"row":189,"column":9},"action":"remove","lines":["\t"],"id":2000},{"start":{"row":189,"column":6},"end":{"row":189,"column":8},"action":"remove","lines":["  "]},{"start":{"row":189,"column":4},"end":{"row":189,"column":6},"action":"remove","lines":["  "]}],[{"start":{"row":190,"column":1},"end":{"row":190,"column":2},"action":"remove","lines":["\t"],"id":2001}],[{"start":{"row":191,"column":1},"end":{"row":191,"column":2},"action":"remove","lines":["\t"],"id":2002}],[{"start":{"row":192,"column":1},"end":{"row":192,"column":2},"action":"remove","lines":["\t"],"id":2003}],[{"start":{"row":193,"column":4},"end":{"row":193,"column":5},"action":"remove","lines":["\t"],"id":2004}],[{"start":{"row":194,"column":4},"end":{"row":194,"column":5},"action":"remove","lines":["\t"],"id":2005},{"start":{"row":194,"column":2},"end":{"row":194,"column":4},"action":"remove","lines":["  "]}],[{"start":{"row":187,"column":0},"end":{"row":187,"column":2},"action":"insert","lines":["  "],"id":2006},{"start":{"row":188,"column":0},"end":{"row":188,"column":2},"action":"insert","lines":["  "]},{"start":{"row":189,"column":0},"end":{"row":189,"column":2},"action":"insert","lines":["  "]},{"start":{"row":190,"column":0},"end":{"row":190,"column":2},"action":"insert","lines":["  "]},{"start":{"row":191,"column":0},"end":{"row":191,"column":2},"action":"insert","lines":["  "]},{"start":{"row":192,"column":0},"end":{"row":192,"column":2},"action":"insert","lines":["  "]},{"start":{"row":193,"column":0},"end":{"row":193,"column":2},"action":"insert","lines":["  "]},{"start":{"row":194,"column":0},"end":{"row":194,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":195,"column":1},"end":{"row":195,"column":2},"action":"remove","lines":["\t"],"id":2007}],[{"start":{"row":196,"column":2},"end":{"row":196,"column":4},"action":"remove","lines":["  "],"id":2008}],[{"start":{"row":197,"column":2},"end":{"row":197,"column":3},"action":"remove","lines":["\t"],"id":2009},{"start":{"row":197,"column":0},"end":{"row":197,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":156,"column":0},"end":{"row":156,"column":2},"action":"insert","lines":["  "],"id":2010},{"start":{"row":157,"column":0},"end":{"row":157,"column":2},"action":"insert","lines":["  "]},{"start":{"row":158,"column":0},"end":{"row":158,"column":2},"action":"insert","lines":["  "]},{"start":{"row":159,"column":0},"end":{"row":159,"column":2},"action":"insert","lines":["  "]},{"start":{"row":160,"column":0},"end":{"row":160,"column":2},"action":"insert","lines":["  "]},{"start":{"row":161,"column":0},"end":{"row":161,"column":2},"action":"insert","lines":["  "]},{"start":{"row":162,"column":0},"end":{"row":162,"column":2},"action":"insert","lines":["  "]},{"start":{"row":163,"column":0},"end":{"row":163,"column":2},"action":"insert","lines":["  "]},{"start":{"row":164,"column":0},"end":{"row":164,"column":2},"action":"insert","lines":["  "]},{"start":{"row":165,"column":0},"end":{"row":165,"column":2},"action":"insert","lines":["  "]},{"start":{"row":166,"column":0},"end":{"row":166,"column":2},"action":"insert","lines":["  "]},{"start":{"row":167,"column":0},"end":{"row":167,"column":2},"action":"insert","lines":["  "]},{"start":{"row":168,"column":0},"end":{"row":168,"column":2},"action":"insert","lines":["  "]},{"start":{"row":169,"column":0},"end":{"row":169,"column":2},"action":"insert","lines":["  "]},{"start":{"row":170,"column":0},"end":{"row":170,"column":2},"action":"insert","lines":["  "]},{"start":{"row":171,"column":0},"end":{"row":171,"column":2},"action":"insert","lines":["  "]},{"start":{"row":172,"column":0},"end":{"row":172,"column":2},"action":"insert","lines":["  "]},{"start":{"row":173,"column":0},"end":{"row":173,"column":2},"action":"insert","lines":["  "]},{"start":{"row":174,"column":0},"end":{"row":174,"column":2},"action":"insert","lines":["  "]},{"start":{"row":175,"column":0},"end":{"row":175,"column":2},"action":"insert","lines":["  "]},{"start":{"row":176,"column":0},"end":{"row":176,"column":2},"action":"insert","lines":["  "]},{"start":{"row":177,"column":0},"end":{"row":177,"column":2},"action":"insert","lines":["  "]},{"start":{"row":178,"column":0},"end":{"row":178,"column":2},"action":"insert","lines":["  "]},{"start":{"row":179,"column":0},"end":{"row":179,"column":2},"action":"insert","lines":["  "]},{"start":{"row":180,"column":0},"end":{"row":180,"column":2},"action":"insert","lines":["  "]},{"start":{"row":181,"column":0},"end":{"row":181,"column":2},"action":"insert","lines":["  "]},{"start":{"row":182,"column":0},"end":{"row":182,"column":2},"action":"insert","lines":["  "]},{"start":{"row":183,"column":0},"end":{"row":183,"column":2},"action":"insert","lines":["  "]},{"start":{"row":184,"column":0},"end":{"row":184,"column":2},"action":"insert","lines":["  "]},{"start":{"row":185,"column":0},"end":{"row":185,"column":2},"action":"insert","lines":["  "]},{"start":{"row":186,"column":0},"end":{"row":186,"column":2},"action":"insert","lines":["  "]},{"start":{"row":187,"column":0},"end":{"row":187,"column":2},"action":"insert","lines":["  "]},{"start":{"row":188,"column":0},"end":{"row":188,"column":2},"action":"insert","lines":["  "]},{"start":{"row":189,"column":0},"end":{"row":189,"column":2},"action":"insert","lines":["  "]},{"start":{"row":190,"column":0},"end":{"row":190,"column":2},"action":"insert","lines":["  "]},{"start":{"row":191,"column":0},"end":{"row":191,"column":2},"action":"insert","lines":["  "]},{"start":{"row":192,"column":0},"end":{"row":192,"column":2},"action":"insert","lines":["  "]},{"start":{"row":193,"column":0},"end":{"row":193,"column":2},"action":"insert","lines":["  "]},{"start":{"row":194,"column":0},"end":{"row":194,"column":2},"action":"insert","lines":["  "]},{"start":{"row":195,"column":0},"end":{"row":195,"column":2},"action":"insert","lines":["  "]},{"start":{"row":196,"column":0},"end":{"row":196,"column":2},"action":"insert","lines":["  "]},{"start":{"row":197,"column":0},"end":{"row":197,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":148,"column":19},"end":{"row":149,"column":0},"action":"insert","lines":["",""],"id":2011},{"start":{"row":149,"column":0},"end":{"row":149,"column":2},"action":"insert","lines":["  "]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":149,"column":2},"end":{"row":149,"column":2},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":122,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1568327317810,"hash":"38146da3ba44eeaab00ac4949f92e000ac50197d"}
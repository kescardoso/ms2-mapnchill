{"filter":false,"title":"map-scripts.js","tooltip":"/assets/js/map-scripts.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":25,"column":31},"end":{"row":25,"column":40},"action":"remove","lines":["pac-input"],"id":411},{"start":{"row":25,"column":31},"end":{"row":25,"column":32},"action":"insert","lines":["s"]},{"start":{"row":25,"column":32},"end":{"row":25,"column":33},"action":"insert","lines":["e"]},{"start":{"row":25,"column":33},"end":{"row":25,"column":34},"action":"insert","lines":["a"]},{"start":{"row":25,"column":34},"end":{"row":25,"column":35},"action":"insert","lines":["r"]},{"start":{"row":25,"column":35},"end":{"row":25,"column":36},"action":"insert","lines":["c"]},{"start":{"row":25,"column":36},"end":{"row":25,"column":37},"action":"insert","lines":["h"]}],[{"start":{"row":24,"column":2},"end":{"row":24,"column":4},"action":"insert","lines":["  "],"id":412}],[{"start":{"row":26,"column":2},"end":{"row":26,"column":4},"action":"insert","lines":["  "],"id":413}],[{"start":{"row":28,"column":2},"end":{"row":28,"column":4},"action":"insert","lines":["  "],"id":414}],[{"start":{"row":26,"column":48},"end":{"row":26,"column":53},"action":"remove","lines":["_LEFT"],"id":415}],[{"start":{"row":31,"column":4},"end":{"row":34,"column":7},"action":"remove","lines":["// Bias the SearchBox results towards current map's viewport.","    map.addListener('bounds_changed', function() {","        searchBox.setBounds(map.getBounds());","    });"],"id":416},{"start":{"row":31,"column":0},"end":{"row":31,"column":4},"action":"remove","lines":["    "]},{"start":{"row":30,"column":0},"end":{"row":31,"column":0},"action":"remove","lines":["",""]},{"start":{"row":29,"column":44},"end":{"row":30,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":73,"column":2},"end":{"row":78,"column":5},"action":"remove","lines":["// Bias the SearchBox results towards places that are within the bounds of the","  // current map's viewport.","  google.maps.event.addListener(map, 'bounds_changed', function() {","    var bounds = map.getBounds();","    searchBox.setBounds(bounds);","  });"],"id":417},{"start":{"row":73,"column":2},"end":{"row":79,"column":1},"action":"insert","lines":["// Bias the SearchBox results towards places that are within the bounds of the","  // current map's viewport.","  google.maps.event.addListener(map, 'bounds_changed', function() {","    var bounds = map.getBounds();","    searchBox.setBounds(bounds);","  });","}"]}],[{"start":{"row":79,"column":0},"end":{"row":79,"column":1},"action":"remove","lines":["}"],"id":418},{"start":{"row":78,"column":5},"end":{"row":79,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":2,"column":8},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":419}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":42},"action":"insert","lines":["var AUCKLAND = {lat: -37.06, lng: 174.58};"],"id":420}],[{"start":{"row":3,"column":4},"end":{"row":3,"column":12},"action":"remove","lines":["AUCKLAND"],"id":421},{"start":{"row":3,"column":4},"end":{"row":3,"column":12},"action":"insert","lines":["coteAzur"]}],[{"start":{"row":3,"column":21},"end":{"row":3,"column":28},"action":"remove","lines":["-37.06,"],"id":422},{"start":{"row":3,"column":21},"end":{"row":3,"column":32},"action":"insert","lines":["43.5587661,"]}],[{"start":{"row":3,"column":38},"end":{"row":3,"column":44},"action":"remove","lines":["174.58"],"id":423},{"start":{"row":3,"column":38},"end":{"row":3,"column":46},"action":"insert","lines":["6.354539"]}],[{"start":{"row":7,"column":4},"end":{"row":7,"column":63},"action":"remove","lines":["var coteAzur = new google.maps.LatLng(43.5587661,6.354539);"],"id":424},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"remove","lines":["    "]},{"start":{"row":6,"column":4},"end":{"row":7,"column":0},"action":"remove","lines":["",""]},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":11,"column":22},"end":{"row":11,"column":23},"action":"insert","lines":[","],"id":425}],[{"start":{"row":11,"column":23},"end":{"row":12,"column":0},"action":"insert","lines":["",""],"id":426},{"start":{"row":12,"column":0},"end":{"row":12,"column":2},"action":"insert","lines":["\t\t"]}],[{"start":{"row":12,"column":2},"end":{"row":12,"column":22},"action":"insert","lines":["strictBounds: false,"],"id":427}],[{"start":{"row":12,"column":21},"end":{"row":12,"column":22},"action":"remove","lines":[","],"id":428}],[{"start":{"row":12,"column":1},"end":{"row":12,"column":21},"action":"remove","lines":["\tstrictBounds: false"],"id":429},{"start":{"row":12,"column":0},"end":{"row":12,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":11,"column":23},"end":{"row":12,"column":0},"action":"remove","lines":["",""]},{"start":{"row":11,"column":22},"end":{"row":11,"column":23},"action":"remove","lines":[","]}],[{"start":{"row":3,"column":21},"end":{"row":3,"column":31},"action":"remove","lines":["43.5587661"],"id":430},{"start":{"row":3,"column":21},"end":{"row":3,"column":31},"action":"insert","lines":["43.8812522"]}],[{"start":{"row":3,"column":38},"end":{"row":3,"column":46},"action":"remove","lines":["6.354539"],"id":431},{"start":{"row":3,"column":38},"end":{"row":3,"column":47},"action":"insert","lines":["6.7871154"]}],[{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"remove","lines":["9"],"id":432}],[{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"insert","lines":["1"],"id":433},{"start":{"row":9,"column":9},"end":{"row":9,"column":10},"action":"insert","lines":["0"]}],[{"start":{"row":9,"column":9},"end":{"row":9,"column":10},"action":"remove","lines":["0"],"id":434}],[{"start":{"row":18,"column":0},"end":{"row":18,"column":3},"action":"insert","lines":["// "],"id":435},{"start":{"row":19,"column":0},"end":{"row":19,"column":3},"action":"insert","lines":["// "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":3},"action":"insert","lines":["// "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":9,"column":9},"end":{"row":9,"column":10},"action":"insert","lines":["0"],"id":436}],[{"start":{"row":16,"column":74},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":437},{"start":{"row":17,"column":0},"end":{"row":17,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":17,"column":4},"end":{"row":17,"column":6},"action":"insert","lines":["  "],"id":438}],[{"start":{"row":17,"column":6},"end":{"row":18,"column":25},"action":"insert","lines":["google.maps.event.addListener(map, 'bounds_changed', function() {","\t\talert(map.getBounds());"],"id":439}],[{"start":{"row":18,"column":2},"end":{"row":18,"column":4},"action":"insert","lines":["  "],"id":440}],[{"start":{"row":18,"column":4},"end":{"row":18,"column":6},"action":"insert","lines":["  "],"id":441}],[{"start":{"row":18,"column":29},"end":{"row":19,"column":0},"action":"insert","lines":["",""],"id":442},{"start":{"row":19,"column":0},"end":{"row":19,"column":6},"action":"insert","lines":["\t\t    "]}],[{"start":{"row":19,"column":4},"end":{"row":19,"column":6},"action":"remove","lines":["  "],"id":443}],[{"start":{"row":19,"column":4},"end":{"row":19,"column":5},"action":"insert","lines":["}"],"id":444},{"start":{"row":19,"column":0},"end":{"row":19,"column":4},"action":"remove","lines":["\t\t  "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":19,"column":7},"end":{"row":19,"column":8},"action":"insert","lines":[")"],"id":445},{"start":{"row":19,"column":8},"end":{"row":19,"column":9},"action":"insert","lines":[";"]}],[{"start":{"row":22,"column":32},"end":{"row":22,"column":69},"action":"remove","lines":["42.95870057632017, 4.4181986679686815"],"id":446},{"start":{"row":22,"column":32},"end":{"row":22,"column":69},"action":"insert","lines":["43.583560899329235, 5.818945233984323"]}],[{"start":{"row":23,"column":32},"end":{"row":23,"column":68},"action":"remove","lines":["44.15291452093742, 8.290879332031182"],"id":447},{"start":{"row":23,"column":32},"end":{"row":23,"column":67},"action":"insert","lines":["44.1774634389157, 7.755285566015573"]}],[{"start":{"row":9,"column":9},"end":{"row":9,"column":10},"action":"remove","lines":["0"],"id":448},{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"remove","lines":["1"]}],[{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"insert","lines":["8"],"id":449}],[{"start":{"row":17,"column":6},"end":{"row":17,"column":9},"action":"insert","lines":["// "],"id":450},{"start":{"row":18,"column":6},"end":{"row":18,"column":9},"action":"insert","lines":["// "]},{"start":{"row":19,"column":6},"end":{"row":19,"column":9},"action":"insert","lines":["// "]}],[{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"remove","lines":["8"],"id":451}],[{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"insert","lines":["9"],"id":452}],[{"start":{"row":3,"column":21},"end":{"row":3,"column":31},"action":"remove","lines":["43.8812522"],"id":454},{"start":{"row":3,"column":21},"end":{"row":3,"column":31},"action":"insert","lines":["43.8019903"]}],[{"start":{"row":3,"column":38},"end":{"row":3,"column":47},"action":"remove","lines":["6.7871154"],"id":455},{"start":{"row":3,"column":38},"end":{"row":3,"column":47},"action":"insert","lines":["6.6057867"]}],[{"start":{"row":3,"column":21},"end":{"row":3,"column":31},"action":"remove","lines":["43.8019903"],"id":456},{"start":{"row":3,"column":21},"end":{"row":3,"column":31},"action":"insert","lines":["43.7763155"]}],[{"start":{"row":3,"column":38},"end":{"row":3,"column":47},"action":"remove","lines":["6.6057867"],"id":457},{"start":{"row":3,"column":38},"end":{"row":3,"column":47},"action":"insert","lines":["7.1495998"]}],[{"start":{"row":17,"column":6},"end":{"row":17,"column":9},"action":"remove","lines":["// "],"id":458},{"start":{"row":18,"column":6},"end":{"row":18,"column":9},"action":"remove","lines":["// "]},{"start":{"row":19,"column":6},"end":{"row":19,"column":9},"action":"remove","lines":["// "]}],[{"start":{"row":22,"column":32},"end":{"row":22,"column":69},"action":"remove","lines":["43.583560899329235, 5.818945233984323"],"id":459},{"start":{"row":22,"column":32},"end":{"row":22,"column":69},"action":"insert","lines":["43.178408976858904, 5.213259467968783"]}],[{"start":{"row":23,"column":32},"end":{"row":23,"column":67},"action":"remove","lines":["44.1774634389157, 7.755285566015573"],"id":460},{"start":{"row":23,"column":32},"end":{"row":23,"column":68},"action":"insert","lines":["44.36830282624031, 9.085940132031283"]}],[{"start":{"row":17,"column":6},"end":{"row":19,"column":9},"action":"remove","lines":["google.maps.event.addListener(map, 'bounds_changed', function() {","\t\t    alert(map.getBounds());","      });"],"id":461},{"start":{"row":17,"column":4},"end":{"row":17,"column":6},"action":"remove","lines":["  "]},{"start":{"row":17,"column":2},"end":{"row":17,"column":4},"action":"remove","lines":["  "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":2},"action":"remove","lines":["  "]},{"start":{"row":16,"column":74},"end":{"row":17,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":18,"column":0},"end":{"row":18,"column":3},"action":"remove","lines":["// "],"id":462},{"start":{"row":19,"column":0},"end":{"row":19,"column":3},"action":"remove","lines":["// "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":3},"action":"remove","lines":["// "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":3},"action":"remove","lines":["// "]}],[{"start":{"row":18,"column":0},"end":{"row":18,"column":2},"action":"insert","lines":["  "],"id":463},{"start":{"row":19,"column":0},"end":{"row":19,"column":2},"action":"insert","lines":["  "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":2},"action":"insert","lines":["  "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":2},"action":"insert","lines":["  "],"id":464},{"start":{"row":10,"column":0},"end":{"row":10,"column":2},"action":"insert","lines":["  "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":19,"column":0},"end":{"row":19,"column":2},"action":"remove","lines":["  "],"id":465},{"start":{"row":20,"column":0},"end":{"row":20,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":19,"column":0},"end":{"row":19,"column":2},"action":"remove","lines":["  "],"id":466},{"start":{"row":20,"column":0},"end":{"row":20,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":19,"column":0},"end":{"row":19,"column":2},"action":"insert","lines":["  "],"id":467},{"start":{"row":20,"column":0},"end":{"row":20,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":21,"column":4},"end":{"row":21,"column":6},"action":"remove","lines":["  "],"id":468},{"start":{"row":21,"column":2},"end":{"row":21,"column":4},"action":"remove","lines":["  "]}],[{"start":{"row":21,"column":2},"end":{"row":21,"column":4},"action":"insert","lines":["  "],"id":469}],[{"start":{"row":21,"column":4},"end":{"row":21,"column":6},"action":"insert","lines":["  "],"id":470}],[{"start":{"row":21,"column":6},"end":{"row":21,"column":8},"action":"insert","lines":["  "],"id":471}],[{"start":{"row":21,"column":6},"end":{"row":21,"column":8},"action":"remove","lines":["  "],"id":472},{"start":{"row":21,"column":4},"end":{"row":21,"column":6},"action":"remove","lines":["  "]}],[{"start":{"row":9,"column":10},"end":{"row":9,"column":11},"action":"remove","lines":["9"],"id":473}],[{"start":{"row":9,"column":10},"end":{"row":9,"column":11},"action":"insert","lines":["1"],"id":474},{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"insert","lines":["0"]}],[{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"remove","lines":["0"],"id":475},{"start":{"row":9,"column":10},"end":{"row":9,"column":11},"action":"remove","lines":["1"]}],[{"start":{"row":9,"column":10},"end":{"row":9,"column":11},"action":"insert","lines":["8"],"id":476}],[{"start":{"row":9,"column":10},"end":{"row":9,"column":11},"action":"remove","lines":["8"],"id":477}],[{"start":{"row":9,"column":10},"end":{"row":9,"column":11},"action":"insert","lines":["5"],"id":478}],[{"start":{"row":9,"column":10},"end":{"row":9,"column":11},"action":"remove","lines":["5"],"id":479}],[{"start":{"row":9,"column":10},"end":{"row":9,"column":11},"action":"insert","lines":["1"],"id":480},{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"insert","lines":["4"]}],[{"start":{"row":18,"column":2},"end":{"row":18,"column":5},"action":"insert","lines":["// "],"id":481},{"start":{"row":19,"column":2},"end":{"row":19,"column":5},"action":"insert","lines":["// "]},{"start":{"row":20,"column":2},"end":{"row":20,"column":5},"action":"insert","lines":["// "]},{"start":{"row":21,"column":2},"end":{"row":21,"column":5},"action":"insert","lines":["// "]}],[{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"remove","lines":["4"],"id":482}],[{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"insert","lines":["0"],"id":485}],[{"start":{"row":3,"column":21},"end":{"row":3,"column":31},"action":"remove","lines":["43.7763155"],"id":486},{"start":{"row":3,"column":21},"end":{"row":3,"column":31},"action":"insert","lines":["43.8380865"]}],[{"start":{"row":3,"column":38},"end":{"row":3,"column":47},"action":"remove","lines":["7.1495998"],"id":487},{"start":{"row":3,"column":38},"end":{"row":3,"column":47},"action":"insert","lines":["7.2813012"]}],[{"start":{"row":3,"column":21},"end":{"row":3,"column":31},"action":"remove","lines":["43.8380865"],"id":488},{"start":{"row":3,"column":21},"end":{"row":3,"column":30},"action":"insert","lines":["43.870206"]}],[{"start":{"row":3,"column":37},"end":{"row":3,"column":46},"action":"remove","lines":["7.2813012"],"id":489},{"start":{"row":3,"column":37},"end":{"row":3,"column":45},"action":"insert","lines":["7.327047"]}],[{"start":{"row":3,"column":21},"end":{"row":3,"column":30},"action":"remove","lines":["43.870206"],"id":490},{"start":{"row":3,"column":21},"end":{"row":3,"column":31},"action":"insert","lines":["43.8691025"]}],[{"start":{"row":3,"column":38},"end":{"row":3,"column":46},"action":"remove","lines":["7.327047"],"id":491},{"start":{"row":3,"column":38},"end":{"row":3,"column":47},"action":"insert","lines":["7.2054375"]}],[{"start":{"row":16,"column":74},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":492},{"start":{"row":17,"column":0},"end":{"row":17,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":17,"column":4},"end":{"row":18,"column":25},"action":"insert","lines":["google.maps.event.addListener(map, 'bounds_changed', function() {","\t\talert(map.getBounds());"],"id":493}],[{"start":{"row":18,"column":25},"end":{"row":19,"column":0},"action":"insert","lines":["",""],"id":494},{"start":{"row":19,"column":0},"end":{"row":19,"column":2},"action":"insert","lines":["\t\t"]}],[{"start":{"row":19,"column":2},"end":{"row":19,"column":3},"action":"insert","lines":["}"],"id":495},{"start":{"row":19,"column":0},"end":{"row":19,"column":2},"action":"remove","lines":["\t\t"]},{"start":{"row":19,"column":0},"end":{"row":19,"column":4},"action":"insert","lines":["    "]},{"start":{"row":19,"column":5},"end":{"row":19,"column":6},"action":"insert","lines":[")"]},{"start":{"row":19,"column":6},"end":{"row":19,"column":7},"action":"insert","lines":[";"]}],[{"start":{"row":22,"column":32},"end":{"row":22,"column":69},"action":"remove","lines":["43.178408976858904, 5.213259467968783"],"id":496},{"start":{"row":22,"column":32},"end":{"row":22,"column":68},"action":"insert","lines":["43.52158150963843, 6.237267333984391"]}],[{"start":{"row":23,"column":32},"end":{"row":23,"column":68},"action":"remove","lines":["44.36830282624031, 9.085940132031283"],"id":497},{"start":{"row":23,"column":32},"end":{"row":23,"column":69},"action":"insert","lines":["44.214609002075285, 8.173607666015641"]}],[{"start":{"row":17,"column":4},"end":{"row":19,"column":7},"action":"remove","lines":["google.maps.event.addListener(map, 'bounds_changed', function() {","\t\talert(map.getBounds());","    });"],"id":498},{"start":{"row":17,"column":2},"end":{"row":17,"column":4},"action":"remove","lines":["  "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":2},"action":"remove","lines":["  "]},{"start":{"row":16,"column":74},"end":{"row":17,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":18,"column":2},"end":{"row":18,"column":5},"action":"remove","lines":["// "],"id":499},{"start":{"row":19,"column":2},"end":{"row":19,"column":5},"action":"remove","lines":["// "]},{"start":{"row":20,"column":2},"end":{"row":20,"column":5},"action":"remove","lines":["// "]},{"start":{"row":21,"column":2},"end":{"row":21,"column":5},"action":"remove","lines":["// "]}],[{"start":{"row":17,"column":0},"end":{"row":17,"column":2},"action":"insert","lines":["  "],"id":500}],[{"start":{"row":17,"column":2},"end":{"row":17,"column":4},"action":"insert","lines":["  "],"id":501}],[{"start":{"row":17,"column":4},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":502},{"start":{"row":18,"column":0},"end":{"row":18,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":2},"action":"remove","lines":["  "],"id":503},{"start":{"row":8,"column":0},"end":{"row":8,"column":2},"action":"remove","lines":["  "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":2},"action":"remove","lines":["  "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":2},"action":"remove","lines":["  "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":2},"action":"remove","lines":["  "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":2},"action":"remove","lines":["  "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":2},"action":"remove","lines":["  "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":2},"action":"remove","lines":["  "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":2},"action":"remove","lines":["  "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":2},"action":"remove","lines":["  "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":2},"action":"remove","lines":["  "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":2},"action":"remove","lines":["  "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":2},"action":"remove","lines":["  "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":2},"action":"remove","lines":["  "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":2},"action":"remove","lines":["  "]},{"start":{"row":22,"column":0},"end":{"row":22,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":18,"column":2},"end":{"row":18,"column":3},"action":"insert","lines":["/"],"id":504},{"start":{"row":18,"column":3},"end":{"row":18,"column":4},"action":"insert","lines":["/"]}],[{"start":{"row":18,"column":4},"end":{"row":18,"column":5},"action":"insert","lines":[" "],"id":505},{"start":{"row":18,"column":5},"end":{"row":18,"column":6},"action":"insert","lines":["C"]},{"start":{"row":18,"column":6},"end":{"row":18,"column":7},"action":"insert","lines":["r"]}],[{"start":{"row":18,"column":7},"end":{"row":18,"column":8},"action":"insert","lines":["e"],"id":506},{"start":{"row":18,"column":8},"end":{"row":18,"column":9},"action":"insert","lines":["a"]},{"start":{"row":18,"column":9},"end":{"row":18,"column":10},"action":"insert","lines":["t"]},{"start":{"row":18,"column":10},"end":{"row":18,"column":11},"action":"insert","lines":["e"]}],[{"start":{"row":18,"column":11},"end":{"row":18,"column":12},"action":"insert","lines":[" "],"id":507},{"start":{"row":18,"column":12},"end":{"row":18,"column":13},"action":"insert","lines":["B"]},{"start":{"row":18,"column":13},"end":{"row":18,"column":14},"action":"insert","lines":["o"]},{"start":{"row":18,"column":14},"end":{"row":18,"column":15},"action":"insert","lines":["u"]},{"start":{"row":18,"column":15},"end":{"row":18,"column":16},"action":"insert","lines":["n"]},{"start":{"row":18,"column":16},"end":{"row":18,"column":17},"action":"insert","lines":["d"]},{"start":{"row":18,"column":17},"end":{"row":18,"column":18},"action":"insert","lines":["s"]}],[{"start":{"row":18,"column":5},"end":{"row":18,"column":11},"action":"remove","lines":["Create"],"id":508},{"start":{"row":18,"column":5},"end":{"row":18,"column":6},"action":"insert","lines":["D"]},{"start":{"row":18,"column":6},"end":{"row":18,"column":7},"action":"insert","lines":["e"]},{"start":{"row":18,"column":7},"end":{"row":18,"column":8},"action":"insert","lines":["f"]},{"start":{"row":18,"column":8},"end":{"row":18,"column":9},"action":"insert","lines":["i"]},{"start":{"row":18,"column":9},"end":{"row":18,"column":10},"action":"insert","lines":["n"]},{"start":{"row":18,"column":10},"end":{"row":18,"column":11},"action":"insert","lines":["e"]}],[{"start":{"row":18,"column":11},"end":{"row":18,"column":12},"action":"insert","lines":[" "],"id":509},{"start":{"row":18,"column":12},"end":{"row":18,"column":13},"action":"insert","lines":["M"]},{"start":{"row":18,"column":13},"end":{"row":18,"column":14},"action":"insert","lines":["a"]},{"start":{"row":18,"column":14},"end":{"row":18,"column":15},"action":"insert","lines":["p"]}],[{"start":{"row":24,"column":0},"end":{"row":24,"column":2},"action":"remove","lines":["  "],"id":510},{"start":{"row":25,"column":0},"end":{"row":25,"column":2},"action":"remove","lines":["  "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":2},"action":"remove","lines":["  "]},{"start":{"row":27,"column":0},"end":{"row":27,"column":2},"action":"remove","lines":["  "]},{"start":{"row":29,"column":0},"end":{"row":29,"column":2},"action":"remove","lines":["  "]},{"start":{"row":30,"column":0},"end":{"row":30,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":30,"column":2},"end":{"row":30,"column":4},"action":"insert","lines":["  "],"id":511}],[{"start":{"row":32,"column":0},"end":{"row":32,"column":2},"action":"remove","lines":["  "],"id":512},{"start":{"row":33,"column":0},"end":{"row":33,"column":2},"action":"remove","lines":["  "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":2},"action":"remove","lines":["  "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":2},"action":"remove","lines":["  "]},{"start":{"row":36,"column":0},"end":{"row":36,"column":2},"action":"remove","lines":["  "]},{"start":{"row":38,"column":0},"end":{"row":38,"column":2},"action":"remove","lines":["  "]},{"start":{"row":39,"column":0},"end":{"row":39,"column":2},"action":"remove","lines":["  "]},{"start":{"row":40,"column":0},"end":{"row":40,"column":2},"action":"remove","lines":["  "]},{"start":{"row":41,"column":0},"end":{"row":41,"column":2},"action":"remove","lines":["  "]},{"start":{"row":42,"column":0},"end":{"row":42,"column":2},"action":"remove","lines":["  "]},{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":35,"column":2},"end":{"row":43,"column":11},"action":"remove","lines":["google.maps.event.addListener(searchBox, 'places_changed', function() {","      var places = searchBox.getPlaces();","","          if (places.length == 0) {","              return;","          }","          for (var i = 0, marker; marker = markers[i]; i++) {","              marker.setMap(null);","          }"],"id":513},{"start":{"row":35,"column":2},"end":{"row":43,"column":5},"action":"insert","lines":["google.maps.event.addListener(searchBox, 'places_changed', function() {","    var places = searchBox.getPlaces();","","    if (places.length == 0) {","      return;","    }","    for (var i = 0, marker; marker = markers[i]; i++) {","      marker.setMap(null);","    }"]}],[{"start":{"row":45,"column":4},"end":{"row":55,"column":8},"action":"remove","lines":["// For each place, get icon, name, and location.","    markers = [];","    var bounds = new google.maps.LatLngBounds();","    for (var i = 0, place; place = places[i]; i++) {","      var image = {","        url: place.icon,","        size: new google.maps.Size(71, 71),","        origin: new google.maps.Point(0, 0),","        anchor: new google.maps.Point(17, 34),","        scaledSize: new google.maps.Size(25, 25)","      };"],"id":514},{"start":{"row":45,"column":4},"end":{"row":55,"column":8},"action":"insert","lines":["// For each place, get the icon, place name, and location.","    markers = [];","    var bounds = new google.maps.LatLngBounds();","    for (var i = 0, place; place = places[i]; i++) {","      var image = {","        url: place.icon,","        size: new google.maps.Size(71, 71),","        origin: new google.maps.Point(0, 0),","        anchor: new google.maps.Point(17, 34),","        scaledSize: new google.maps.Size(25, 25)","      };"]}]]},"ace":{"folds":[],"scrolltop":748.5,"scrollleft":0,"selection":{"start":{"row":55,"column":8},"end":{"row":55,"column":8},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1565879694361,"hash":"108baaa3cf9fc05d00a3b1c636500d108c0f9c09"}
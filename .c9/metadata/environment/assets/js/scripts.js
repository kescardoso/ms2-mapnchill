{"filter":false,"title":"scripts.js","tooltip":"/assets/js/scripts.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":10,"column":14},"end":{"row":10,"column":15},"action":"insert","lines":["t"],"id":384},{"start":{"row":10,"column":15},"end":{"row":10,"column":16},"action":"insert","lines":["h"]},{"start":{"row":10,"column":16},"end":{"row":10,"column":17},"action":"insert","lines":["e"]}],[{"start":{"row":10,"column":17},"end":{"row":10,"column":18},"action":"insert","lines":[" "],"id":385}],[{"start":{"row":10,"column":24},"end":{"row":10,"column":25},"action":"remove","lines":["B"],"id":386}],[{"start":{"row":10,"column":24},"end":{"row":10,"column":25},"action":"insert","lines":[" "],"id":387},{"start":{"row":10,"column":25},"end":{"row":10,"column":26},"action":"insert","lines":["b"]}],[{"start":{"row":10,"column":44},"end":{"row":10,"column":45},"action":"insert","lines":["t"],"id":388},{"start":{"row":10,"column":45},"end":{"row":10,"column":46},"action":"insert","lines":["h"]},{"start":{"row":10,"column":46},"end":{"row":10,"column":47},"action":"insert","lines":["e"]}],[{"start":{"row":10,"column":47},"end":{"row":10,"column":48},"action":"insert","lines":[" "],"id":389},{"start":{"row":10,"column":48},"end":{"row":10,"column":49},"action":"insert","lines":["m"]},{"start":{"row":10,"column":49},"end":{"row":10,"column":50},"action":"insert","lines":["a"]},{"start":{"row":10,"column":50},"end":{"row":10,"column":51},"action":"insert","lines":["p"]}],[{"start":{"row":10,"column":51},"end":{"row":10,"column":52},"action":"insert","lines":[" "],"id":390},{"start":{"row":10,"column":52},"end":{"row":10,"column":53},"action":"insert","lines":["("]}],[{"start":{"row":10,"column":56},"end":{"row":10,"column":57},"action":"remove","lines":[" "],"id":391},{"start":{"row":10,"column":55},"end":{"row":10,"column":56},"action":"remove","lines":["e"]},{"start":{"row":10,"column":54},"end":{"row":10,"column":55},"action":"remove","lines":["h"]},{"start":{"row":10,"column":53},"end":{"row":10,"column":54},"action":"remove","lines":["t"]}],[{"start":{"row":10,"column":63},"end":{"row":10,"column":64},"action":"insert","lines":[")"],"id":392}],[{"start":{"row":10,"column":63},"end":{"row":10,"column":64},"action":"remove","lines":[")"],"id":393},{"start":{"row":10,"column":62},"end":{"row":10,"column":63},"action":"remove","lines":["t"]},{"start":{"row":10,"column":61},"end":{"row":10,"column":62},"action":"remove","lines":["n"]},{"start":{"row":10,"column":60},"end":{"row":10,"column":61},"action":"remove","lines":["e"]},{"start":{"row":10,"column":59},"end":{"row":10,"column":60},"action":"remove","lines":["m"]},{"start":{"row":10,"column":58},"end":{"row":10,"column":59},"action":"remove","lines":["e"]},{"start":{"row":10,"column":57},"end":{"row":10,"column":58},"action":"remove","lines":["l"]},{"start":{"row":10,"column":56},"end":{"row":10,"column":57},"action":"remove","lines":["e"]},{"start":{"row":10,"column":55},"end":{"row":10,"column":56},"action":"remove","lines":[" "]},{"start":{"row":10,"column":54},"end":{"row":10,"column":55},"action":"remove","lines":["I"]},{"start":{"row":10,"column":53},"end":{"row":10,"column":54},"action":"remove","lines":["U"]},{"start":{"row":10,"column":52},"end":{"row":10,"column":53},"action":"remove","lines":["("]},{"start":{"row":10,"column":51},"end":{"row":10,"column":52},"action":"remove","lines":[" "]}],[{"start":{"row":16,"column":0},"end":{"row":18,"column":0},"action":"insert","lines":["","    ",""],"id":394}],[{"start":{"row":17,"column":4},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":395},{"start":{"row":18,"column":0},"end":{"row":18,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":17,"column":4},"end":{"row":28,"column":5},"action":"insert","lines":["// [START region_getplaces]","  // Listen for the event fired when the user selects an item from the","  // pick list. Retrieve the matching places for that item.","  google.maps.event.addListener(searchBox, 'places_changed', function() {","    var places = searchBox.getPlaces();","","    if (places.length == 0) {","      return;","    }","    for (var i = 0, marker; marker = markers[i]; i++) {","      marker.setMap(null);","    }"],"id":397}],[{"start":{"row":18,"column":2},"end":{"row":18,"column":4},"action":"insert","lines":["  "],"id":398}],[{"start":{"row":18,"column":63},"end":{"row":18,"column":64},"action":"remove","lines":[" "],"id":399}],[{"start":{"row":18,"column":63},"end":{"row":19,"column":0},"action":"insert","lines":["",""],"id":400},{"start":{"row":19,"column":0},"end":{"row":19,"column":4},"action":"insert","lines":["    "]},{"start":{"row":19,"column":4},"end":{"row":19,"column":5},"action":"insert","lines":["/"]},{"start":{"row":19,"column":5},"end":{"row":19,"column":6},"action":"insert","lines":["/"]}],[{"start":{"row":19,"column":6},"end":{"row":19,"column":7},"action":"insert","lines":[" "],"id":401}],[{"start":{"row":20,"column":4},"end":{"row":20,"column":5},"action":"remove","lines":[" "],"id":402},{"start":{"row":20,"column":3},"end":{"row":20,"column":4},"action":"remove","lines":["/"]},{"start":{"row":20,"column":2},"end":{"row":20,"column":3},"action":"remove","lines":["/"]},{"start":{"row":20,"column":1},"end":{"row":20,"column":2},"action":"remove","lines":[" "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":1},"action":"remove","lines":[" "]},{"start":{"row":19,"column":15},"end":{"row":20,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":19,"column":15},"end":{"row":19,"column":16},"action":"insert","lines":[" "],"id":403}],[{"start":{"row":19,"column":27},"end":{"row":19,"column":28},"action":"remove","lines":["R"],"id":404},{"start":{"row":19,"column":26},"end":{"row":19,"column":27},"action":"remove","lines":[" "]},{"start":{"row":19,"column":25},"end":{"row":19,"column":26},"action":"remove","lines":["."]}],[{"start":{"row":19,"column":25},"end":{"row":19,"column":26},"action":"insert","lines":[","],"id":405}],[{"start":{"row":19,"column":26},"end":{"row":19,"column":27},"action":"insert","lines":[" "],"id":406},{"start":{"row":19,"column":27},"end":{"row":19,"column":28},"action":"insert","lines":["a"]},{"start":{"row":19,"column":28},"end":{"row":19,"column":29},"action":"insert","lines":["n"]},{"start":{"row":19,"column":29},"end":{"row":19,"column":30},"action":"insert","lines":["d"]}],[{"start":{"row":19,"column":30},"end":{"row":19,"column":31},"action":"insert","lines":[" "],"id":407},{"start":{"row":19,"column":31},"end":{"row":19,"column":32},"action":"insert","lines":["r"]}],[{"start":{"row":18,"column":33},"end":{"row":18,"column":34},"action":"insert","lines":[":"],"id":408}],[{"start":{"row":18,"column":43},"end":{"row":18,"column":44},"action":"remove","lines":[" "],"id":409},{"start":{"row":18,"column":42},"end":{"row":18,"column":43},"action":"remove","lines":["e"]},{"start":{"row":18,"column":41},"end":{"row":18,"column":42},"action":"remove","lines":["h"]},{"start":{"row":18,"column":40},"end":{"row":18,"column":41},"action":"remove","lines":["t"]}],[{"start":{"row":19,"column":16},"end":{"row":19,"column":25},"action":"remove","lines":["pick list"],"id":410},{"start":{"row":19,"column":16},"end":{"row":19,"column":17},"action":"insert","lines":["s"]},{"start":{"row":19,"column":17},"end":{"row":19,"column":18},"action":"insert","lines":["e"]},{"start":{"row":19,"column":18},"end":{"row":19,"column":19},"action":"insert","lines":["a"]},{"start":{"row":19,"column":19},"end":{"row":19,"column":20},"action":"insert","lines":["r"]},{"start":{"row":19,"column":20},"end":{"row":19,"column":21},"action":"insert","lines":["c"]},{"start":{"row":19,"column":21},"end":{"row":19,"column":22},"action":"insert","lines":["h"]}],[{"start":{"row":19,"column":22},"end":{"row":19,"column":23},"action":"insert","lines":[" "],"id":411},{"start":{"row":19,"column":23},"end":{"row":19,"column":24},"action":"insert","lines":["b"]},{"start":{"row":19,"column":24},"end":{"row":19,"column":25},"action":"insert","lines":["o"]},{"start":{"row":19,"column":25},"end":{"row":19,"column":26},"action":"insert","lines":["x"]}],[{"start":{"row":19,"column":44},"end":{"row":19,"column":45},"action":"remove","lines":[" "],"id":412},{"start":{"row":19,"column":43},"end":{"row":19,"column":44},"action":"remove","lines":["e"]},{"start":{"row":19,"column":42},"end":{"row":19,"column":43},"action":"remove","lines":["h"]},{"start":{"row":19,"column":41},"end":{"row":19,"column":42},"action":"remove","lines":["t"]}],[{"start":{"row":19,"column":70},"end":{"row":19,"column":71},"action":"insert","lines":[" "],"id":413},{"start":{"row":19,"column":71},"end":{"row":19,"column":72},"action":"insert","lines":["o"]},{"start":{"row":19,"column":72},"end":{"row":19,"column":73},"action":"insert","lines":["n"]}],[{"start":{"row":19,"column":73},"end":{"row":19,"column":74},"action":"insert","lines":[" "],"id":414},{"start":{"row":19,"column":74},"end":{"row":19,"column":75},"action":"insert","lines":["t"]},{"start":{"row":19,"column":75},"end":{"row":19,"column":76},"action":"insert","lines":["h"]},{"start":{"row":19,"column":76},"end":{"row":19,"column":77},"action":"insert","lines":["e"]}],[{"start":{"row":19,"column":77},"end":{"row":19,"column":78},"action":"insert","lines":[" "],"id":415},{"start":{"row":19,"column":78},"end":{"row":19,"column":79},"action":"insert","lines":["m"]},{"start":{"row":19,"column":79},"end":{"row":19,"column":80},"action":"insert","lines":["a"]},{"start":{"row":19,"column":80},"end":{"row":19,"column":81},"action":"insert","lines":["p"]}],[{"start":{"row":20,"column":2},"end":{"row":20,"column":4},"action":"insert","lines":["  "],"id":416}],[{"start":{"row":21,"column":4},"end":{"row":21,"column":8},"action":"insert","lines":["    "],"id":417}],[{"start":{"row":23,"column":4},"end":{"row":23,"column":8},"action":"insert","lines":["    "],"id":418}],[{"start":{"row":23,"column":8},"end":{"row":23,"column":12},"action":"insert","lines":["    "],"id":419}],[{"start":{"row":24,"column":6},"end":{"row":24,"column":8},"action":"insert","lines":["  "],"id":420}],[{"start":{"row":24,"column":8},"end":{"row":24,"column":12},"action":"insert","lines":["    "],"id":421}],[{"start":{"row":24,"column":12},"end":{"row":24,"column":16},"action":"insert","lines":["    "],"id":422}],[{"start":{"row":25,"column":4},"end":{"row":25,"column":8},"action":"insert","lines":["    "],"id":423}],[{"start":{"row":25,"column":8},"end":{"row":25,"column":12},"action":"insert","lines":["    "],"id":424}],[{"start":{"row":26,"column":4},"end":{"row":26,"column":8},"action":"insert","lines":["    "],"id":425}],[{"start":{"row":26,"column":8},"end":{"row":26,"column":12},"action":"insert","lines":["    "],"id":426}],[{"start":{"row":27,"column":6},"end":{"row":27,"column":8},"action":"insert","lines":["  "],"id":427}],[{"start":{"row":27,"column":8},"end":{"row":27,"column":12},"action":"insert","lines":["    "],"id":428}],[{"start":{"row":27,"column":12},"end":{"row":27,"column":16},"action":"insert","lines":["    "],"id":429}],[{"start":{"row":28,"column":4},"end":{"row":28,"column":8},"action":"insert","lines":["    "],"id":430}],[{"start":{"row":28,"column":8},"end":{"row":28,"column":12},"action":"insert","lines":["    "],"id":431}],[{"start":{"row":29,"column":4},"end":{"row":30,"column":0},"action":"remove","lines":["",""],"id":432}],[{"start":{"row":29,"column":5},"end":{"row":29,"column":6},"action":"insert","lines":[")"],"id":433}],[{"start":{"row":32,"column":0},"end":{"row":33,"column":0},"action":"remove","lines":["",""],"id":434},{"start":{"row":31,"column":68},"end":{"row":32,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":31,"column":67},"end":{"row":31,"column":68},"action":"remove","lines":[";"],"id":435}],[{"start":{"row":31,"column":67},"end":{"row":31,"column":68},"action":"insert","lines":[";"],"id":436}],[{"start":{"row":29,"column":6},"end":{"row":29,"column":7},"action":"insert","lines":[";"],"id":437}],[{"start":{"row":31,"column":67},"end":{"row":31,"column":68},"action":"remove","lines":[";"],"id":438}],[{"start":{"row":31,"column":67},"end":{"row":31,"column":68},"action":"insert","lines":[";"],"id":439}],[{"start":{"row":29,"column":5},"end":{"row":29,"column":6},"action":"remove","lines":[")"],"id":440}],[{"start":{"row":29,"column":4},"end":{"row":29,"column":5},"action":"insert","lines":[")"],"id":441}],[{"start":{"row":29,"column":4},"end":{"row":29,"column":5},"action":"remove","lines":[")"],"id":442}],[{"start":{"row":29,"column":5},"end":{"row":29,"column":6},"action":"insert","lines":[")"],"id":443}],[{"start":{"row":31,"column":67},"end":{"row":31,"column":68},"action":"remove","lines":[";"],"id":444}],[{"start":{"row":31,"column":67},"end":{"row":31,"column":68},"action":"insert","lines":[";"],"id":445}],[{"start":{"row":29,"column":7},"end":{"row":30,"column":0},"action":"insert","lines":["",""],"id":446},{"start":{"row":30,"column":0},"end":{"row":30,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":30,"column":0},"end":{"row":30,"column":4},"action":"remove","lines":["    "],"id":447}],[{"start":{"row":30,"column":0},"end":{"row":30,"column":1},"action":"insert","lines":["}"],"id":448}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":449},{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["/"]},{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":[" "],"id":450},{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":["C"]},{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["r"]},{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["e"]},{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["a"]},{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["t"]},{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["e"]}],[{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":[" "],"id":451}],[{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":["m"],"id":452},{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["a"]},{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":["p"]}],[{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":[" "],"id":453},{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["f"]},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["u"]},{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["n"]},{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["c"]},{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"insert","lines":["t"]},{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"insert","lines":["i"]},{"start":{"row":2,"column":20},"end":{"row":2,"column":21},"action":"insert","lines":["o"]},{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"insert","lines":["n"]}],[{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"insert","lines":[" "],"id":454}],[{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"insert","lines":["a"],"id":455},{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"insert","lines":["c"]},{"start":{"row":2,"column":25},"end":{"row":2,"column":26},"action":"insert","lines":["t"]},{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"insert","lines":["i"]},{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"insert","lines":["v"]},{"start":{"row":2,"column":28},"end":{"row":2,"column":29},"action":"insert","lines":["a"]},{"start":{"row":2,"column":29},"end":{"row":2,"column":30},"action":"insert","lines":["t"]},{"start":{"row":2,"column":30},"end":{"row":2,"column":31},"action":"insert","lines":["e"]}],[{"start":{"row":2,"column":31},"end":{"row":2,"column":32},"action":"insert","lines":["M"],"id":456},{"start":{"row":2,"column":32},"end":{"row":2,"column":33},"action":"insert","lines":["a"]},{"start":{"row":2,"column":33},"end":{"row":2,"column":34},"action":"insert","lines":["p"]},{"start":{"row":2,"column":34},"end":{"row":2,"column":35},"action":"insert","lines":["S"]},{"start":{"row":2,"column":35},"end":{"row":2,"column":36},"action":"insert","lines":["e"]},{"start":{"row":2,"column":36},"end":{"row":2,"column":37},"action":"insert","lines":["a"]},{"start":{"row":2,"column":37},"end":{"row":2,"column":38},"action":"insert","lines":["r"]},{"start":{"row":2,"column":38},"end":{"row":2,"column":39},"action":"insert","lines":["c"]},{"start":{"row":2,"column":39},"end":{"row":2,"column":40},"action":"insert","lines":["h"]}],[{"start":{"row":2,"column":40},"end":{"row":2,"column":41},"action":"insert","lines":["."],"id":457}],[{"start":{"row":32,"column":0},"end":{"row":33,"column":0},"action":"insert","lines":["",""],"id":458},{"start":{"row":33,"column":0},"end":{"row":33,"column":1},"action":"insert","lines":["/"]},{"start":{"row":33,"column":1},"end":{"row":33,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":33,"column":2},"end":{"row":33,"column":3},"action":"insert","lines":[" "],"id":459},{"start":{"row":33,"column":3},"end":{"row":33,"column":4},"action":"insert","lines":["D"]},{"start":{"row":33,"column":4},"end":{"row":33,"column":5},"action":"insert","lines":["i"]},{"start":{"row":33,"column":5},"end":{"row":33,"column":6},"action":"insert","lines":["s"]},{"start":{"row":33,"column":6},"end":{"row":33,"column":7},"action":"insert","lines":["p"]},{"start":{"row":33,"column":7},"end":{"row":33,"column":8},"action":"insert","lines":["l"]},{"start":{"row":33,"column":8},"end":{"row":33,"column":9},"action":"insert","lines":["a"]},{"start":{"row":33,"column":9},"end":{"row":33,"column":10},"action":"insert","lines":["y"]}],[{"start":{"row":33,"column":10},"end":{"row":33,"column":11},"action":"insert","lines":["s"],"id":460}],[{"start":{"row":33,"column":11},"end":{"row":33,"column":12},"action":"insert","lines":[" "],"id":461},{"start":{"row":33,"column":12},"end":{"row":33,"column":13},"action":"insert","lines":["t"]},{"start":{"row":33,"column":13},"end":{"row":33,"column":14},"action":"insert","lines":["h"]},{"start":{"row":33,"column":14},"end":{"row":33,"column":15},"action":"insert","lines":["e"]}],[{"start":{"row":33,"column":15},"end":{"row":33,"column":16},"action":"insert","lines":[" "],"id":462},{"start":{"row":33,"column":16},"end":{"row":33,"column":17},"action":"insert","lines":["m"]},{"start":{"row":33,"column":17},"end":{"row":33,"column":18},"action":"insert","lines":["a"]},{"start":{"row":33,"column":18},"end":{"row":33,"column":19},"action":"insert","lines":["p"]}],[{"start":{"row":33,"column":19},"end":{"row":33,"column":20},"action":"insert","lines":[" "],"id":463},{"start":{"row":33,"column":20},"end":{"row":33,"column":21},"action":"insert","lines":["o"]},{"start":{"row":33,"column":21},"end":{"row":33,"column":22},"action":"insert","lines":["n"]}],[{"start":{"row":33,"column":22},"end":{"row":33,"column":23},"action":"insert","lines":[" "],"id":464},{"start":{"row":33,"column":23},"end":{"row":33,"column":24},"action":"insert","lines":["t"]},{"start":{"row":33,"column":24},"end":{"row":33,"column":25},"action":"insert","lines":["h"]},{"start":{"row":33,"column":25},"end":{"row":33,"column":26},"action":"insert","lines":["e"]}],[{"start":{"row":33,"column":26},"end":{"row":33,"column":27},"action":"insert","lines":[" "],"id":465},{"start":{"row":33,"column":27},"end":{"row":33,"column":28},"action":"insert","lines":["b"]},{"start":{"row":33,"column":28},"end":{"row":33,"column":29},"action":"insert","lines":["r"]},{"start":{"row":33,"column":29},"end":{"row":33,"column":30},"action":"insert","lines":["o"]},{"start":{"row":33,"column":30},"end":{"row":33,"column":31},"action":"insert","lines":["w"]},{"start":{"row":33,"column":31},"end":{"row":33,"column":32},"action":"insert","lines":["s"]},{"start":{"row":33,"column":32},"end":{"row":33,"column":33},"action":"insert","lines":["e"]},{"start":{"row":33,"column":33},"end":{"row":33,"column":34},"action":"insert","lines":["r"]}],[{"start":{"row":33,"column":3},"end":{"row":33,"column":4},"action":"insert","lines":["L"],"id":466},{"start":{"row":33,"column":4},"end":{"row":33,"column":5},"action":"insert","lines":["i"]},{"start":{"row":33,"column":5},"end":{"row":33,"column":6},"action":"insert","lines":["s"]},{"start":{"row":33,"column":6},"end":{"row":33,"column":7},"action":"insert","lines":["t"]},{"start":{"row":33,"column":7},"end":{"row":33,"column":8},"action":"insert","lines":["e"]},{"start":{"row":33,"column":8},"end":{"row":33,"column":9},"action":"insert","lines":["n"]},{"start":{"row":33,"column":9},"end":{"row":33,"column":10},"action":"insert","lines":["s"]}],[{"start":{"row":33,"column":10},"end":{"row":33,"column":11},"action":"insert","lines":[" "],"id":467},{"start":{"row":33,"column":11},"end":{"row":33,"column":12},"action":"insert","lines":["t"]},{"start":{"row":33,"column":12},"end":{"row":33,"column":13},"action":"insert","lines":["o"]}],[{"start":{"row":33,"column":13},"end":{"row":33,"column":14},"action":"insert","lines":[" "],"id":468}],[{"start":{"row":33,"column":14},"end":{"row":33,"column":15},"action":"insert","lines":["t"],"id":469},{"start":{"row":33,"column":15},"end":{"row":33,"column":16},"action":"insert","lines":["h"]},{"start":{"row":33,"column":16},"end":{"row":33,"column":17},"action":"insert","lines":["e"]}],[{"start":{"row":33,"column":17},"end":{"row":33,"column":18},"action":"insert","lines":[" "],"id":470},{"start":{"row":33,"column":18},"end":{"row":33,"column":19},"action":"insert","lines":["f"]},{"start":{"row":33,"column":19},"end":{"row":33,"column":20},"action":"insert","lines":["u"]},{"start":{"row":33,"column":20},"end":{"row":33,"column":21},"action":"insert","lines":["n"]},{"start":{"row":33,"column":21},"end":{"row":33,"column":22},"action":"insert","lines":["c"]},{"start":{"row":33,"column":22},"end":{"row":33,"column":23},"action":"insert","lines":["t"]},{"start":{"row":33,"column":23},"end":{"row":33,"column":24},"action":"insert","lines":["i"]},{"start":{"row":33,"column":24},"end":{"row":33,"column":25},"action":"insert","lines":["o"]},{"start":{"row":33,"column":25},"end":{"row":33,"column":26},"action":"insert","lines":["n"]}],[{"start":{"row":33,"column":26},"end":{"row":33,"column":27},"action":"insert","lines":[" "],"id":471},{"start":{"row":33,"column":27},"end":{"row":33,"column":28},"action":"insert","lines":["a"]},{"start":{"row":33,"column":28},"end":{"row":33,"column":29},"action":"insert","lines":["n"]},{"start":{"row":33,"column":29},"end":{"row":33,"column":30},"action":"insert","lines":["d"]}],[{"start":{"row":33,"column":30},"end":{"row":33,"column":31},"action":"insert","lines":[" "],"id":472}],[{"start":{"row":33,"column":31},"end":{"row":33,"column":32},"action":"remove","lines":["D"],"id":473}],[{"start":{"row":33,"column":31},"end":{"row":33,"column":32},"action":"insert","lines":["d"],"id":474}],[{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"insert","lines":[":"],"id":475}],[{"start":{"row":33,"column":9},"end":{"row":33,"column":10},"action":"remove","lines":["s"],"id":476}],[{"start":{"row":33,"column":37},"end":{"row":33,"column":38},"action":"remove","lines":["s"],"id":477}],[{"start":{"row":33,"column":60},"end":{"row":33,"column":61},"action":"insert","lines":["."],"id":478}],[{"start":{"row":33,"column":3},"end":{"row":33,"column":16},"action":"remove","lines":["Listen to the"],"id":479},{"start":{"row":33,"column":3},"end":{"row":33,"column":4},"action":"insert","lines":["C"]},{"start":{"row":33,"column":4},"end":{"row":33,"column":5},"action":"insert","lines":["a"]},{"start":{"row":33,"column":5},"end":{"row":33,"column":6},"action":"insert","lines":["l"]},{"start":{"row":33,"column":6},"end":{"row":33,"column":7},"action":"insert","lines":["l"]}],[{"start":{"row":33,"column":7},"end":{"row":33,"column":8},"action":"insert","lines":[" "],"id":480},{"start":{"row":33,"column":8},"end":{"row":33,"column":9},"action":"insert","lines":["t"]},{"start":{"row":33,"column":9},"end":{"row":33,"column":10},"action":"insert","lines":["h"]},{"start":{"row":33,"column":10},"end":{"row":33,"column":11},"action":"insert","lines":["e"]}],[{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"insert","lines":[","],"id":481}],[{"start":{"row":6,"column":16},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":482},{"start":{"row":7,"column":0},"end":{"row":7,"column":8},"action":"insert","lines":["        "]},{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":["d"]},{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":["i"]},{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":["s"]},{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"insert","lines":["a"]},{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":["b"]},{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"insert","lines":["l"]},{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":["e"]},{"start":{"row":7,"column":15},"end":{"row":7,"column":16},"action":"insert","lines":["D"]}],[{"start":{"row":7,"column":16},"end":{"row":7,"column":17},"action":"insert","lines":["e"],"id":483},{"start":{"row":7,"column":17},"end":{"row":7,"column":18},"action":"insert","lines":["f"]},{"start":{"row":7,"column":18},"end":{"row":7,"column":19},"action":"insert","lines":["a"]},{"start":{"row":7,"column":19},"end":{"row":7,"column":20},"action":"insert","lines":["u"]},{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"insert","lines":["l"]},{"start":{"row":7,"column":21},"end":{"row":7,"column":22},"action":"insert","lines":["t"]}],[{"start":{"row":7,"column":22},"end":{"row":7,"column":23},"action":"insert","lines":["U"],"id":484},{"start":{"row":7,"column":23},"end":{"row":7,"column":24},"action":"insert","lines":["I"]},{"start":{"row":7,"column":24},"end":{"row":7,"column":25},"action":"insert","lines":[":"]}],[{"start":{"row":7,"column":25},"end":{"row":7,"column":26},"action":"insert","lines":[" "],"id":485},{"start":{"row":7,"column":26},"end":{"row":7,"column":27},"action":"insert","lines":["t"]},{"start":{"row":7,"column":27},"end":{"row":7,"column":28},"action":"insert","lines":["r"]},{"start":{"row":7,"column":28},"end":{"row":7,"column":29},"action":"insert","lines":["u"]},{"start":{"row":7,"column":29},"end":{"row":7,"column":30},"action":"insert","lines":["e"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":7,"column":30},"end":{"row":7,"column":30},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1563812807405,"hash":"35b7bb9671324689af611b690e3d1338188be1fd"}
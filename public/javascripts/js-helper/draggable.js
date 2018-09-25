
/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ SVG add ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function makeSVG(tag, attrs) {
  var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (var k in attrs)
      el.setAttribute(k, attrs[k]);
  return el ;
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ jQuery ui Droppable (Map) ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

$(() => {
  let svg_map = $('#svg')
  svg_map.droppable({
    accept: '.item',
    drop: function (event, ui) {
      deleteItem(ui.draggable)
    }
  })

})

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Draggable Start (Devices) ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function dra_start (x){
  $(x.helper[0].children).css('color', 'transparent'),
    $(x.helper[0]).css({
      'height': '30px',
      'width': '30px'
    })
  $('#map_img').css('background-color', 'rgba(255,192,203,0.7)')
}


/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ 轉換成 SVG X,Y ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function getPosition (a){

  const clientPoint = svg.createSVGPoint()
  const CTM = svg.getScreenCTM()

  let z =  
  
  clientPoint.x = a.clientX
  clientPoint.y = a.clientY
  SVGPoint = clientPoint.matrixTransform(CTM.inverse())

  console.log( 
    Math.round(SVGPoint.x - 15),
    Math.round(SVGPoint.y - 15)
  )
  return z
}



/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ jQuery ui Draggable (Devices) ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

$(() => {

  $('.item').draggable({
    cursor: 'pointer',
    revert: "invalid",
    helper: "clone",
    cursorAt: {
      top: 22,
      left: 21
    },

    start: function (event, ui) {  // 拖動開始時
      dra_start (ui)
    },

    drag: function (event, ui) {   // 拖動進行中
      getPosition (event)
    },

    stop: function (event, ui) {   // 拖動停止後

      getPosition (event)
      let name = ui.helper[0].attributes.name.value
      let _x = Math.round(SVGPoint.x - 15)
      let _y = Math.round(SVGPoint.y - 15)
      let _img; // 放入 image

      // 用 name 判斷並抓出圖片

      switch (name) {
        case 'idc-gateway':
          _img = icon.gateway;
          break;
        case 'ids-co':
          _img = icon.co;
          break;
        case 'ids-co2':
          _img = icon.co2;
          break;
        case 'ids-door':
          _img = icon.door;
          break;
        case 'idc-light-rgb':
          _img = icon.light;
          break;
        case 'idc-plug':
          _img = icon.socket;
          break;
        case 'ids-thermo':
          _img = icon.thermometer;
          break;
        case 'ids-smoke':
          _img = icon.thermometer;
          break;
        case 'ids-gas':
          _img = icon.smoke;
          break;
        case 'ids-glass':
          _img = icon.thermometer;
          break;
        case 'ids-pir':
          _img = icon.pir;
          break;
        case 'ids-water':
          _img = icon.water;
          break;
        case 'idc-sos':
          _img = icon.thermometer;
          break;
        case 'ids-light':
          _img = icon.thermometer;
          break;
        case 'idc-door-lock':
          _img = icon.door_lock;
          break;
        case 'idc-q-module':
          _img = icon.q_module;
          break;
        case 'idc-water-valve':
          _img = icon.thermometer;
          break;
        case 'idc-gas-keeper':
          _img = icon.thermometer;
          break;
      };

      var _image = makeSVG('image',{
        class: 'device_icon',
        x : _x, 
        y : _y,
        width: 30, 
        height: 30, 
        href: _img
      })
      $(_image).appendTo('#svg');
      moveDev();
      $('#map_img').css('background-color', 'rgba(255,192,203,0.3)');
    },
  });
});

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ jQuery ui Draggable (svg) ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */
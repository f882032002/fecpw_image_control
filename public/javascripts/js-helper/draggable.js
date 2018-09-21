
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

// /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ SVG init ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

// function svg_Init() {
//   let svg = $('#svg')
//   svg.html(svg.html())
// }

// /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Image On Map Template ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

// function add_dev_to_map(a, b, c) {

//     let x =
//       `<image class="device_img" x="${a}" y="${b}" width="30" height="30" href="${c}"></image>`
//     return x
// }


/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ jQuery ui Draggable (Devices) ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

$(() => {

  let _top = $('.mapsTitle').outerHeight()
  let _left = $('#areaGroup').outerWidth()

  $('.item').draggable({
    cursor: 'pointer',
    revert: "invalid",
    helper: "clone",
    cursorAt: {
      top: 22,
      left: 21
    },
    start: function (event, ui) {
      $(ui.helper[0].children).css('color', 'transparent'),
        $(ui.helper[0]).css({
          'height': '30px',
          'width': '30px'
        })
      $('#map_img').css('background-color', 'rgba(255,192,203,0.7)')
    },
    drag: function (event, ui) {

      console.log(
        Math.round(ui.offset.top - _top),
        Math.round(ui.offset.left - _left)
      )
    },
    stop: function (event, ui) {

      let name = ui.helper[0].attributes.name.value
      let _x = Math.round(ui.offset.left - _left)
      let _y= Math.round(ui.offset.top - _top)
      
      let _img; // 放入 image
 
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
      $('#map_img').css('background-color', 'rgba(255,192,203,0.4)');
    },
  });
});

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ jQuery ui Draggable (svg) ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */
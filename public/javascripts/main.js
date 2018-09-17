

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ MinWidth ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function width_init (){
  let window_min = $(window).width();
  let window_h = $(window).height();

  $('#app').css({
    'min-width': window_min,
    'height': window_h
  })
}

$(document).ready(()=>{
  width_init ()
  $(window).resize(()=>{
    width_init ()
  })
}); 

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Colors ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

let Toilet_color = '#93E6CE'
let LivingRoom_color = '#93CEE6'
let BedRoom_color = '#CEBEEB'

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ API & Maps ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

let apiUrl = '';

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ data ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

let data = {
  maps: [ // 地圖們
    { // 一樓平面圖
      name: '1F',
      map_url: '/images_map/1F.png',
      areas: [
        { // 一樓廁所
          name: 'Toilet',
          x: 0,
          y: 0,
          _id: 'ta001',
          value: 'toilet',
          point: '',
          color: Toilet_color,
          devices: [ /* 一樓廁所裡的設備 */ ]
        },
        { // 一樓房間
          name: 'BedRoom',
          x: 0,
          y: 0,
          _id: 'ba001',
          value: 'bedroom',
          color: BedRoom_color,
          point: '',
          devices: [ /* 一樓房間裡的設備 */ ]
        },
        { // 一樓客廳
          name: 'LivingRoom',
          x: 0,
          y: 0,
          _id: 'la001',
          value: 'livingRoom',
          color: LivingRoom_color,
          point: '',
          devices: [ /* 一樓客廳裡的設備 */ ]
        }
      ]
    }
  ]
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Button Object Data ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

let btn = {
  del: {
    name: 'del_btn',
    icon: 'x'
  },
  update: {
    name: 'new_btn',
    icon: '♻'
  }
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Icon Object Data ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

let icon = {
  co: '/images/co.svg',
  co2: '/images/co2.svg',
  pir: '/images/pir.svg',
  sos: '/images/sos.svg',
  door: '/images/door.svg',
  smoke: '/images/smoke.svg',
  light: '/images/light.svg',
  water: '/images/water.svg',
  socket: '/images/Socket.svg',
  gateway: '/images/gateway.svg',
  q_module: '/images/q-module.svg',
  door_lock: '/images/door-lock.svg',
  thermometer: '/images/Thermometer.svg',
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Device li Html Template ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function myDevice(a, b) {
  return `
      <li class="item">
        <img src="${b}" alt="">
        <p>${a}</p>
        <button class="${btn.del.name}">${btn.del.icon}</button>
        <button class="${btn.update.name}">${btn.update.icon}</button>
      </li>  
    `
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Area li Html Template ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function myArea(c) {
  return `
      <li class="area">${c}
        <button class="${btn.del.name}">${btn.del.icon}</button>
        <button class="${btn.update.name}">${btn.update.icon}</button>
      </li>  
    `
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Map Html Template ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function myMap(d) {
  return `
    <img src="${d}" alt="">
  `
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Add Areas Html Template ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

var mx, my;
$(document).on('click', function (e) {
  mx = e.offsetX;
  my = e.offsetY;
  _wave(mx, my);
  
});

let mh = $('.img_div').height();
let mw = $('.img_div').width();

function _wave(i, j) {
  console.log(`
  ${Math.round(i) }, 
  ${Math.round(j) },
  `)
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Button Even ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */


function del(x) {
  let y =

    $(x.view).find('.del_btn')
    .on('click', function () {
      $(this).parent().remove()
      del_fun(x.self)
    }).end()

  return y
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Show List ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function showList() {

  data.maps.forEach((map, mapID) => { // Map 迴圈

    $('.maps_name span').append(map.name)
    $(myMap(map.map_url)).appendTo('.img_div')

    map.areas.forEach((area, areaID) => { // Area in Maps

      let areaHtml = {
        view: myArea(area.name),
        key: area._id,
        self: map.areas
      }

      $(del(areaHtml)).appendTo('.groups')
    })
  })

  response.forEach((device, deviceID) => { // 設備呼叫

    device.list.forEach((imgs, imgsID) => {

      let _icon ; // 放入 image

      switch (imgs.value) {
        case 'idc-gateway':
          _icon = icon.gateway;
          break;
        case 'ids-co':
          _icon = icon.co;
          break;
        case 'ids-co2':
          _icon = icon.co2;
          break;
        case 'ids-door':
          _icon = icon.door;
          break;
        case 'idc-light-rgb':
          _icon = icon.light;
          break;
        case 'idc-plug':
          _icon = icon.socket;
          break;
        case 'ids-thermo':
          _icon = icon.thermometer;
          break;
        case 'ids-smoke':
          _icon = icon.thermometer;
          break;
        case 'ids-gas':
          _icon = icon.smoke;
          break;
        case 'ids-glass':
          _icon = icon.thermometer;
          break;
        case 'ids-pir':
          _icon = icon.pir;
          break;
        case 'ids-water':
          _icon = icon.water;
          break;
        case 'idc-sos':
          _icon = icon.thermometer;
          break;
        case 'ids-light':
          _icon = icon.thermometer;
          break;
        case 'idc-door-lock':
          _icon = icon.door_lock;
          break;
        case 'idc-q-module':
          _icon = icon.q_module;
          break;
        case 'idc-water-valve':
          _icon = icon.thermometer;
          break;
        case 'idc-gas-keeper':
          _icon = icon.thermometer;
          break;
      };

      let deviceHtml = {
        view: myDevice(device.name, _icon),
        key: device._id,
        self: response
      }

      $(del(deviceHtml)).appendTo('.items')
    })

  })

};
showList();

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ jQuery ui Draggable (Area Group) ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

$(() => {
  $('.area').draggable({
    cursor: 'pointer',
    helper: "clone",
    revert: "invalid",
  });
});

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ jQuery ui Droppable (Map) ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */




/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ jQuery ui Draggable (Devices) ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

$(() => {
  $('.item').draggable({
    cursor: 'pointer',
    helper: "clone",
    revert: "invalid"
  });
});

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ 縮放按鈕 ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

$(() => {
  let _width = 100; // 初始寬度
  let _top = 50;
  let _left = 50;

  function init() {
    $('.img_div').css('width', _width + '%')
    $('.point').css({
      'top': _top + '%',
      'left': _left + '%'
    })
  };
  init();


  $('#zoom').on('click', function () { // 放大圖片
    (_width == 300) ? (
      console.log('Has been max width !!')
    ) : (
      (_width += 10),
      init()
    );
  });

  $('#zoom_Out').on('click', function () { // 縮小圖片
    (_width == 100) ? (
      console.log('Has been min width !!')
    ) : (
      (_width -= 10),
      init()
    );
  });
})




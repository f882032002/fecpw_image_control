/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ MinWidth ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

let window_h = $(window).height();

function width_init() {
  $('#app').css({
    'height': window_h
  })
}

$(document).ready(() => {
  width_init()
  $(window).resize(() => {
    width_init()
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
      areas: [{ // 一樓廁所
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



/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ SVG init ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function svg_Init() {
  let svg = $('#svg')
  svg.html(svg.html())
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
    <svg width="1800" height="1000" id="svg" viewBox="0 0 1800 1000" >
      <image x="0" y="0" width="1800" height="1000" href="${d}"></image>
      <rect 
      x="50" y="50" rx="20" ry="20"
      fill="rgba(101, 168, 166, 0.5)" 
      width="250" 
      height="250" 
      />
      <image x="950" y="500" width="30" height="30" href="${icon.co}"></image>
      <image x="1220" y="731" width="30" height="30" href="${icon.light}"></image>
      <image x="723" y="151" width="30" height="30" href="${icon.door_lock}"></image>
      <image x="1159" y="137" width="30" height="30" href="${icon.door}"></image>
      <image x="632" y="678" width="30" height="30" href="${icon.water}"></image>
      <image x="1224" y="198" width="30" height="30" href="${icon.thermometer}"></image>
    </svg>
  `
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Add Areas On Map Html Template And Move It ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

$(() => {

  //  點擊坐標 ！！！
  let dx, dy, ux, uy, mx, my, rectX, rectY
  let svg = $('#svg')
  let rect = svg.find('rect')
  let isMouseDown = false

  rect.on('mousedown', function (e) {

    isMouseDown = true
    dx = e.offsetX;
    dy = e.offsetY;
    rectX = $(this).attr('x')
    rectY = $(this).attr('y')
    console.log($(this), rectX, rectY, dx, dy, isMouseDown) // 一開始滑鼠點下去的坐標
    moveNow()
  });

  function moveNow() {
    if (isMouseDown === true) {

      rect.on('mousemove', function (e) {

        mx = e.offsetX;
        my = e.offsetY;
        $(this).attr({
          'x': mx,
          'y': my - 130
        })
        console.log(mx, my)
      })
    } else {
      rect.off('mousemove')
    }
  }

  rect.on('mouseup', function (e) {

    isMouseDown = false
    ux = e.offsetX;
    uy = e.offsetY;
    $(this).attr({
      'x': ux,
      'y': uy - 130
    })
    moveNow()
    console.log(uy, ux)
  })
})

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
    $(
      myMap(map.map_url)
    ).appendTo('.img_div')

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

      let _icon; // 放入 image

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

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ 縮放按鈕 ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

$(() => {
  let _width = 100; // 初始寬度
  let _height = 100; // 初始高度

  function init() {
    $('#svg').css({
      'width': _width + '%',
      'height': _height + '%'
    })
  };
  init();


  $('#zoom').on('click', function () { // 放大圖片
    (_width == 300, _height == 300) ? (
      console.log('Has been max width !!')
    ) : (
      (_width += 10),
      (_height += 10),
      init()
    );
  });

  $('#zoom_Out').on('click', function () { // 縮小圖片
    (_width == 100, _height == 100) ? (
      console.log('Has been min width !!')
    ) : (
      (_width -= 10),
      (_height -= 10),
      init()
    );
  });
})
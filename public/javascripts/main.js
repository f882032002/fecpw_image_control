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

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Device li Html Template ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function myDevice(a, b, c) {
  return `
      <li class="item" name="${c}">
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
    <svg width="1900" height="1000" id="svg" viewBox="0 0 1900 1000" xmlns="http://www.w3.org/1999/xhtml" >
      <image x="0" y="0" width="1900" height="1000" href="${d}"></image>
      <rect 
      x="50" y="50" rx="20" ry="20"
      fill="rgba(101, 168, 166, 0.5)" 
      width="250" 
      height="250" 
      />
      <image class="device_icon" x="950" y="500" width="30" height="30" href="${icon.co}"></image>
      <image class="device_icon" x="1220" y="731" width="30" height="30" href="${icon.light}"></image>
      <image class="device_icon" x="723" y="151" width="30" height="30" href="${icon.door_lock}"></image>
      <image class="device_icon" x="1159" y="137" width="30" height="30" href="${icon.door}"></image>
      <image class="device_icon" x="632" y="678" width="30" height="30" href="${icon.water}"></image>
      <image class="device_icon" x="1224" y="198" width="30" height="30" href="${icon.thermometer}"></image>
    </svg>
  `
}





/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Device On Map Move It ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function moveDev() {
  //  點擊坐標 ！！！
  let dx, dy, ux, uy, mx, my, dev_onMapX, dev_onMapY
  let svg = $('#svg')
  let dev_onMap = svg.find('.device_icon')
  let isMouseDown = false
  let dev_onMap_w = dev_onMap.width()
  let dev_onMap_h = dev_onMap.height()

  function moveNow() {
    if (isMouseDown === true) {

      dev_onMap.on('mousemove', function (e) {

        mx = e.offsetX;
        my = e.offsetY;
        $(this).attr({
          'x': mx - (dev_onMap_w / 2),
          'y': my - (dev_onMap_h / 2)
        })
      })
    } else {
      dev_onMap.off('mousemove')
    }
  }

  dev_onMap.on('mousedown', function (e) {

    isMouseDown = true
    dx = e.offsetX;
    dy = e.offsetY;
    dev_onMapX = $(this).attr('x')
    dev_onMapY = $(this).attr('y')
    moveNow()
    
  });

  dev_onMap.on('mouseup', function (e) {

    isMouseDown = false
    ux = e.offsetX;
    uy = e.offsetY;
    $(this).attr({
      'x': ux - (dev_onMap_w / 2),
      'y': uy - (dev_onMap_h / 2)
    })
    moveNow()
  })
}



/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Add Areas On Map Html Template And Move It ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function moveArea() {
  //  點擊坐標 ！！！
  let dx, dy, ux, uy, mx, my, rectX, rectY
  let svg = $('#svg')
  let rect = svg.find('rect')
  let isMouseDown = false
  let rect_w = rect.width()
  let rect_h = rect.height()

  rect.on('mousedown', function (e) {

    isMouseDown = true
    dx = e.offsetX;
    dy = e.offsetY;
    rectX = $(this).attr('x')
    rectY = $(this).attr('y')
    //console.log($(this), rectX, rectY, dx, dy, isMouseDown) // 一開始滑鼠點下去的坐標
    moveNow()
  });

  function moveNow() {
    if (isMouseDown === true) {

      rect.on('mousemove', function (e) {

        mx = e.offsetX;
        my = e.offsetY;
        $(this).attr({
          'x': mx - (rect_w / 2),
          'y': my - (rect_h / 2)
        })
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
      'x': ux - (rect_w / 2),
      'y': uy - (rect_h / 2)
    })
    moveNow()
  })
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
        view: myDevice(device.name, _icon, imgs.value),
        key: device._id,
        self: response
      }

      $(del(deviceHtml)).appendTo('.items')
    })

  })

};
showList(); // 將定義好的函數全部執行一次
moveArea();
moveDev();


/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ 縮放按鈕 ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

$(() => {
  let _width = 1900; // 初始寬度
  let _height = 1000; // 初始高度
  let opa = 0;

  function init() {
    $('#svg').css({
      'width': _width,
      'height': _height
    })
    $('.homer').css('opacity', opa)
  };
  init();


  $('#zoom').on('click', function () { // 放大圖片
    (_width == 5700, _height == 3000) ? (
      console.log('Has been max width !!')
    ) : (
      (_width += 190),
      (_height += 100),
      (opa += 0.033),
      init()
    );
  });

  $('#zoom_Out').on('click', function () { // 縮小圖片
    (_width == 1900, _height == 1000) ? (
      console.log('Has been min width !!')
    ) : (
      (_width -= 190),
      (_height -= 100),
      (opa -= 0.033),
      init()
    );
  });
})



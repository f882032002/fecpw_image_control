/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ colors ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

let Toilet_color = '#93E6CE'
let LivingRoom_color = '#93CEE6'
let BedRoom_color = '#CEBEEB'

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ API ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

let apiUrl = '';

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ data ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

let data = {
  maps: [ // 地圖們
    { // 一樓平面圖
      name: '1F',
      areas: [{ // 一樓廁所
          name: 'Toilet',
          x: 0,
          y: 0,
          _id: 'ta001',
          value: 'toilet',
          point: '',
          color: Toilet_color,
          devices: [ // 一樓廁所裡的設備
            {
              _id: 'td001',
              name: 'CO₂ Sensor',
              value: 'co2',
              x: 0,
              y: 0
            },
            {
              _id: 'td002',
              name: 'Smart Socket',
              value: 'socket',
              x: 0,
              y: 0
            },
            {
              _id: 'td003',
              name: 'Infrared Thermometer',
              value: 'thermometer',
              x: 0,
              y: 0
            }
          ]
        },
        { // 一樓房間
          name: 'BedRoom',
          x: 0,
          y: 0,
          _id: 'ba001',
          value: 'bedroom',
          color: BedRoom_color,
          point: '',
          devices: [ // 一樓房間裡的設備
            {
              _id: 'bd001',
              name: 'Color Light',
              value: 'light',
              x: 0,
              y: 0
            },
            {
              _id: 'bd002',
              name: 'Smart Socket',
              value: 'socket',
              x: 0,
              y: 0
            },
            {
              _id: 'bd003',
              name: 'Door Magnetic Sensor',
              value: 'door',
              x: 0,
              y: 0
            },
          ]
        },
        { // 一樓客廳
          name: 'LivingRoom',
          x: 0,
          y: 0,
          _id: 'la001',
          value: 'livingRoom',
          color: LivingRoom_color,
          point: '',
          devices: [ // 一樓客廳裡的設備
            {
              _id: 'ld001',
              name: 'Color Light',
              value: 'light',
              x: 0,
              y: 0
            },
            {
              _id: 'ld002',
              name: 'Door Magnetic Sensor',
              value: 'door',
              x: 0,
              y: 0
            },
            {
              _id: 'ld003',
              name: 'Smart Socket',
              value: 'socket',
              x: 0,
              y: 0
            },
            {
              _id: 'ld004',
              name: 'Infrared Thermometer',
              value: 'thermometer',
              x: 0,
              y: 0
            }
          ]
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
  co2: '/images/co2.svg',
  door: '/images/door.svg',
  light: '/images/light.svg',
  socket: '/images/Socket.svg',
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

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Button Even ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function del(x) {
  let y =

    $(x.view).find('.del_btn')
    .on('click', function () {
      $(this).parent().remove()

    }).end()
  return y
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Show List ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function showList() {

  data.maps.forEach((map, mapID) => {

    map.areas.forEach((area, areaID) => {

      let areaHtml = {
        view: myArea(area.name),
        key: area._id,
        self: map.areas
      }

      $(del(areaHtml)).appendTo('.groups')

      area.devices.forEach((device, deviceID) => {

        let x; // 放入 image
        switch (device.value) {
          case 'co2':
            x = icon.co2;
            break;
          case 'door':
            x = icon.door;
            break;
          case 'light':
            x = icon.light;
            break;
          case 'socket':
            x = icon.socket;
            break;
          case 'thermometer':
            x = icon.thermometer;
            break;
        };

        let deviceHtml = {
          view: myDevice(device.name, x),
          key: device.value,
          self: area.devices
        }

        $(del(deviceHtml)).appendTo('.items')
      })
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

// $(() => {
//   $('#map_img img').droppable('.area', '.item');
// });


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
  let _top = 240;
  let _left = 630;

  function init(){
    $('.img_div').css('width', _width + '%')
    $('.point').css({
      'top': _top + 'px',
      'left': _left + 'px'
    })
  };
  init();
  

  $('#zoom').on('click', function () { // 放大圖片
    (_width == 300) ? (
      console.log('Has been max width !!')
    ) : (
      (_width += 10),
      (_top += 20),
      (_left += 64),
      init()
    );
  });

  $('#zoom_Out').on('click', function () { // 縮小圖片
    (_width == 100) ? (
      console.log('Has been min width !!')
    ) : (
      (_width -= 10),
      (_top -= 20),
      (_left -= 64),
      init()
    );
  });
})
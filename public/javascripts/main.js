
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
          point: '',
          color: Toilet_color,
          devices: [ // 一樓廁所裡的設備
            {
              _id: 't001',
              name: 'CO₂ Sensor',
              value: 'co2',
              x: 0,
              y: 0
            },
            {
              _id: 't002',
              name: 'Smart Socket',
              value: 'socket',
              x: 0,
              y: 0
            },
            {
              _id: 't003',
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
          color: BedRoom_color,
          point: '',
          devices: [ // 一樓房間裡的設備
            {
              _id: 'b001',
              name: 'Color Light',
              value: 'light',
              x: 0,
              y: 0
            },
            {
              _id: 'b002',
              name: 'Smart Socket',
              value: 'socket',
              x: 0,
              y: 0
            },
            {
              _id: 'b003',
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
          color: LivingRoom_color,
          point: '',
          devices: [ // 一樓客廳裡的設備
            {
              _id: 'l001',
              name: 'Color Light',
              value: 'light',
              x: 0,
              y: 0
            },
            {
              _id: 'l002',
              name: 'Door Magnetic Sensor',
              value: 'door',
              x: 0,
              y: 0
            },
            {
              _id: 'l003',
              name: 'Smart Socket',
              value: 'socket',
              x: 0,
              y: 0
            },
            {
              _id: 'l004',
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

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Icon Html Template ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function myIcon(d) {
  `
  <img src="${d}" alt="">
`
};

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Device li Html Template ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function myDevice(a) {
  return `
      <li class="item">
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

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Show List ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function showList() {

  data.maps.forEach((map, mapID) => {

    map.areas.forEach((area, areaID) => {
      let areaHtml = myArea(area.name)
      
      $(areaHtml)
        .find('.del_btn')
        .on('click', function () {
          $(this).parent().remove()
        }).end()
        .appendTo('.groups')


      area.devices.forEach((device, deviceID) => {
        let deviceHtml = myDevice(device.name)
        switch(device.value){
          case 'co2':
            myIcon(icon.co2).appendTo(deviceHtml)
          break;  

        };

        $(deviceHtml)
          .find('.del_btn')
          .on('click', function () {
            $(this).parent().remove()
          }).end()
          .appendTo('.items')
      })
    })
  })
};
showList();

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Button Even ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */
















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

  $('#zoom').click(() => { // 放大圖片
    (_width == 300) ? (
      this.unbind()
    ) : (
      (_width += 10),
      $('#map_img img').css('width', _width + '%')
    );
  });

  $('#zoom_Out').click(() => { // 縮小圖片
    (_width == 100) ? (
      this.unbind()
    ) : (
      (_width -= 10),
      $('#map_img img').css('width', _width + '%')
    );
  });
})
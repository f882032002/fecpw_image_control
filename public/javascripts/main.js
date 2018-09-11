
/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ colors ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */
let Toilet_color = '#93E6CE'
let LivingRoom_color = '#93CEE6'
let BedRoom_color = '#CEBEEB'


/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ 讓整個畫面自適應螢幕高度 ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

$(document).ready(() => {
  let _height = $(window).height();
  $('#app').css('height', _height)
});

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ API ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

let apiUrl = '';

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ data ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

let data = {

  maps: [ // 地圖們

    { // 一樓平面圖
      name: '1F',
      areas: [
        { // 一樓廁所
          name: 'Toilet',
          x: 0,
          y: 0,
          point: '',
          color: Toilet_color,
          devices: [ // 一樓廁所裡的設備
            {
              name: 'CO₂ Sensor',
              icon: '/images/co2.svg',
              color: Toilet_color
            },
            {
              name: 'Infrared Thermometer',
              icon: '/images/Thermometer.svg',
              color: Toilet_color
            },
            {
              name: 'Smart Socket',
              icon: '/images/Socket.svg',
              color: Toilet_color
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
              name: 'Color Light',
              icon: '/images/light.svg',
              color: BedRoom_color
            },
            {
              name: 'Door Magnetic Sensor',
              icon: '/images/door.svg',
              color: BedRoom_color
            },
            {
              name: 'Smart Socket',
              icon: '/images/Socket.svg',
              color: BedRoom_color
            }
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
              name: 'Color Light',
              icon: '/images/light.svg',
              color: LivingRoom_color
            },
            {
              name: 'Door Magnetic Sensor',
              icon: '/images/door.svg',
              color: LivingRoom_color
            },
            {
              name: 'Smart Socket',
              icon: '/images/Socket.svg',
              color: LivingRoom_color
            },
            {
              name: 'Infrared Thermometer',
              icon: '/images/Thermometer.svg',
              color: LivingRoom_color
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

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Device li Html Template ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function myDevice(a, b, c) {
  return `
    <li class= "item" style="background-color:${c}">
      <img src="${b}" alt="">
      <p>${a}</p>
      <button class= "${btn.del.name}">${btn.del.icon}</button>
      <button class= "${btn.update.name}">${btn.update.icon}</button>
    </li>  
  `
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Area li Html Template ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function myArea(b, c) {
  return `
    <li class= "area" style="background-color:${c}">${b}
      <button class= "${btn.del.name}">${btn.del.icon}</button>
      <button class= "${btn.update.name}">${btn.update.icon}</button>
    </li>  
  `
}



/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Show List ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function showList() {

  data.maps.forEach((val, id) => {
    console.log(val.areas)
    val.areas.forEach((val, id) => {
      $('.groups').append(myArea(val.name, val.color))
        .find('.del_btn').click(()=>{
        })

      val.devices.forEach((val, id) => {
        $('.items').append(myDevice(val.name, val.icon, val.color))
          .find('.del_btn').click(()=>{
          })
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


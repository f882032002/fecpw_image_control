
/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Draggable Start (Devices) ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function dra_start (x){

  $(x.helper[0].children[1]).remove()
  
  $(x.helper[0]).css({
    'background-color' : 'transparent',
    'height'           : '45px',
    'width'            : '45px'
  })

  $('#map_img').css({
    'background-color' : 'rgba(255,192,203,0.7)'
  })
  
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ jQuery ui Draggable (Devices) ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

$(() => {

  $('.item').draggable({
    cursor  : 'pointer',
    revert  : "invalid",
    helper  : "clone",
    cursorAt: {
      top : 22,
      left: 21
    },

    start: function (event, ui) {  // 拖動開始時

      dra_start (ui)

    },


    drag: function (event, ui) {   // 拖動進行中

      CTM_function (event)
    },


    stop: function (event, ui) {   // 拖動停止後
      
      CTM_function (event)
      let name = ui.helper[0].attributes.name.value
      let _x   = Math.round(SVGPoint.x - 15)
      let _y   = Math.round(SVGPoint.y - 15)

      // 用 name 判斷並抓出圖片
      image_switch(name)
      
      var _image = makeSVG('image',{
        class : 'device_icon',
        x     : _x, 
        y     : _y,
        width : 30, 
        height: 30, 
        href  : _icon  
      })
      
      $(_image).appendTo('#svg');
      $(event.target).fadeOut()
      moveDev();

      $('#map_img').css({
        'background-color' : 'rgba(255,192,203,0.3)'
      });

    },
  });

});

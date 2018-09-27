
/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ MinWidth ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

let window_h = $(window).height(); // 螢幕高度

function width_init() { // 讓整份文件與螢幕等高
  $('#app').css({
    'height': window_h
  })
}

$(document).ready(() => { // 一開始時就讓整份文件與螢幕等高
  width_init()
  $(window).resize(() => { // 調整視窗大小時讓文件與螢幕一起調整高度
    width_init()
  })
});


/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ SVG add ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function makeSVG(tag, attrs) { // 讓 HTML 讀懂 SVG 
  var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs)
      el.setAttribute(k, attrs[k]);
  return el ;
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Button Object Data ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

let btn = { // 定義好按鈕中的名字與 HTML
  del: {
    name: 'del_btn',
    icon: 'x'
  }
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Device li Html Template ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function myDevice(a, b, c) { // 設備清單的模板
  return `
      <li class="item" name="${c}">
        <img src="${b}" alt="">
        <p>
          ${a}
        </p>
      </li>  
    `
}
/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Device Image On Map Html Template ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function myDeviceOnMap(a, b, c) { // 從後端 GET 到的設備資料顯示於畫面上的模板
  return `
  <image class ="device_icon" 
         x     ="${a}" 
         y     ="${b}" 
         width ="30" 
         height="30" 
         href  ="${c}">
  </image>
  `
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Area li Html Template ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function myArea(c) { // 區域清單模板
  return `
      <li class="area">${c}
        <button class="${btn.del.name}">
          ${btn.del.icon}
        </button>
      </li>  
    `
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Map Html Template ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function myMap(d) { // 地圖模板
  return `
    <svg width  ="1900" 
         height ="1000" 
         id     ="svg" 
         viewBox="0 0 1900 1000" 
         xmlns  ="http://www.w3.org/1999/xhtml" >

      <image x     ="0" 
             y     ="0" 
             width ="1900" 
             height="1000" 
             href  ="${d}">
      </image>

    </svg>
  `
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Current Transform Matrix ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function CTM_function (a){ // CTM 轉換矩陣

  const clientPoint = svg.createSVGPoint()
  const CTM         = svg.getScreenCTM()
  
  let z =  
  
  clientPoint.x = a.clientX
  clientPoint.y = a.clientY
  SVGPoint      = clientPoint.matrixTransform(CTM.inverse())

  return z
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Device On Map Move It ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function moveDev() { // 讓地圖上的 Device 可被移動
  //  點擊坐標 ！！！
  let svg         = $('#svg')
  let dev_onMap   = svg.find('.device_icon')
  let isMouseDown = false

  function createAreas(){
    svg.on('mousedown',function(e){
      CTM_function (e)
      console.log(SVGPoint)
    })
  }createAreas()

  function moveNow() {
    if (isMouseDown === true) {

      dev_onMap.on('mousemove', function (e) {

        CTM_function (e) // 將座標轉換成 SVG 座標
        
        $(this).attr({
          'x': Math.round(SVGPoint.x - 15),
          'y': Math.round(SVGPoint.y - 15)
        })
      })

    } else {
      dev_onMap.off('mousemove')
    }
  }

  dev_onMap.on('mousedown', function (e) {

    isMouseDown = true
    CTM_function (e)
    moveNow()
    
  });

  dev_onMap.on('mouseup', function (e) {

    isMouseDown = false
    CTM_function (e)
    $(this).attr({
      'x': Math.round(SVGPoint.x - 15),
      'y': Math.round(SVGPoint.y - 15)
    })

    moveNow()

  })
}



/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Add Areas On Map Html Template And Move It ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function moveArea() {
  //  點擊坐標 ！！！
  let svg         = $('#svg')
  let rect        = svg.find('rect')
  let isMouseDown = false

  rect.on('mousedown', function (e) {

    isMouseDown = true
    CTM_function (e)
    moveNow()

  });

  function moveNow() {
    if (isMouseDown === true) {

      rect.on('mousemove', function (e) {

        CTM_function (e)
        
        $(this).attr({
          'x': Math.round(SVGPoint.x - 125),
          'y': Math.round(SVGPoint.y - 125)
        })

      })
    } else {
      rect.off('mousemove')
    }
  }

  rect.on('mouseup', function (e) {

    isMouseDown = false
    CTM_function (e)
    $(this).attr({
      'x': Math.round(SVGPoint.x - 125),
      'y': Math.round(SVGPoint.y - 125)
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
        key : area._id,
        self: map.areas
      }

      $(del(areaHtml)).appendTo('.groups')

      area.devices.forEach((device, deviceID) => { // 區域中的設備

        device.list.forEach((imgs, imgsID) => {
          image_switch(imgs.value)

          let _devicesMap = makeSVG('image',{

            class : 'device_icon',
            x     : device.x, 
            y     : device.y,
            width : 30, 
            height: 30, 
            href  : _icon

          })
          let deviceHtml = {

            view: myDevice(device.name, _icon, imgs.value),
            key : device._id,
            self: area.devices

          }

          $(_devicesMap)    .appendTo('#svg');
          $(del(deviceHtml)).appendTo('.items')

        })
      })
    })
  })
};

// 將定義好的函數全部執行一次

showList(); 
moveArea();
moveDev ();


/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ 縮放按鈕 ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

$(() => {
  let _width  = 1900; // 初始寬度
  let _height = 1000; // 初始高度
  let opa     = 0;

  function init() {

    $('#svg').css({
      'width' : _width,
      'height': _height
    })

    $('.homer').css({
      'opacity' : opa
    })

  };
  init();


  $('#zoom').on('click', function () { // 放大圖片
    (_width == 5700, _height == 3000) ? (
      console.log('Has been max width !!')
    ) : (
      (_width  += 190  ),
      (_height += 100  ),
      (opa     += 0.033),
      init()
    );
  });

  $('#zoom_Out').on('click', function () { // 縮小圖片
    (_width == 1900, _height == 1000) ? (
      console.log('Has been min width !!')
    ) : (
      (_width  -= 190  ),
      (_height -= 100  ),
      (opa     -= 0.033),
      init()
    );
  });
})



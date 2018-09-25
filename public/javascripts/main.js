
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


/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ SVG add ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function makeSVG(tag, attrs) {
  var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (var k in attrs)
      el.setAttribute(k, attrs[k]);
  return el ;
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
/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Device Image On Map Html Template ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function myDeviceOnMap(a, b, c) {
  return `
  <image class="device_icon" x="${a}" y="${b}" width="30" height="30" href="${c}"></image>
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
    </svg>
  `
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ 轉換成 SVG X,Y ( CTM 轉換器) ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function getPosition (a){

  const clientPoint = svg.createSVGPoint()
  const CTM = svg.getScreenCTM()

  let z =  
  
  clientPoint.x = a.clientX
  clientPoint.y = a.clientY
  SVGPoint = clientPoint.matrixTransform(CTM.inverse())

  // console.log( 
  //   Math.round(SVGPoint.x - 15),
  //   Math.round(SVGPoint.y - 15)
  // )
  return z
}


/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Device On Map Move It ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function moveDev() {
  //  點擊坐標 ！！！
  let svg         = $('#svg')
  let dev_onMap   = svg.find('.device_icon')
  let isMouseDown = false

  function moveNow() {
    if (isMouseDown === true) {

      dev_onMap.on('mousemove', function (e) {

        getPosition (e)
        
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
    getPosition (e)
    moveNow()
    
  });

  dev_onMap.on('mouseup', function (e) {

    isMouseDown = false
    getPosition (e)
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
    getPosition (e)
    moveNow()

  });

  function moveNow() {
    if (isMouseDown === true) {

      rect.on('mousemove', function (e) {

        getPosition (e)
        
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
    getPosition (e)
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

      image_switch(imgs.value)

      let _devicesMap = makeSVG('image',{
        class: 'device_icon',
        x : device.x, 
        y : device.y,
        width: 30, 
        height: 30, 
        href: _icon
      })

      let deviceHtml = {
        view: myDevice(device.name, _icon, imgs.value),
        key : device._id,
        self: response
      }
      $(_devicesMap)    .appendTo('#svg');
      $(del(deviceHtml)).appendTo('.items')
    })

  })

};
showList(); // 將定義好的函數全部執行一次
moveArea();
moveDev();


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
    $('.homer').css('opacity', opa)
  };
  init();


  $('#zoom').on('click', function () { // 放大圖片
    (_width == 5700, _height == 3000) ? (
      console.log('Has been max width !!')
    ) : (
      (_width  += 190),
      (_height += 100),
      (opa     += 0.033),
      init()
    );
  });

  $('#zoom_Out').on('click', function () { // 縮小圖片
    (_width == 1900, _height == 1000) ? (
      console.log('Has been min width !!')
    ) : (
      (_width  -= 190),
      (_height -= 100),
      (opa     -= 0.033),
      init()
    );
  });
})



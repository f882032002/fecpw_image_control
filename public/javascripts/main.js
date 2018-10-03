
/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ MinWidth ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

let window_h           = $(window).height();  // 螢幕高度
let isMouseDown_device = false                // 預設為 false
let isMouseDown_area   = false                // 預設為 false

function width_init() {                       // 讓整份文件與螢幕等高
  $('#app').css({
    'height': window_h
  })
}
$(document).ready(() => {                     // 一開始時就讓整份文件與螢幕等高
  width_init()
  $(window).resize(() => {                    // 調整視窗大小時與螢幕一起調整高度
    width_init()
  })
});

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Current Transform Matrix ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function CTM_function (a){                                // CTM 轉換矩陣

  const clientPoint = svg.createSVGPoint()
  const CTM         = svg.getScreenCTM()
  
  let z =  
  clientPoint.x = a.clientX
  clientPoint.y = a.clientY
  SVGPoint      = clientPoint.matrixTransform(CTM.inverse())

  return z
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ SVG add ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function makeSVG(tag, attrs) {       // 讓 HTML 讀懂 SVG 
  var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs)
      el.setAttribute(k, attrs[k]);
  return el ;
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Device li Html Template ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function myDevice(a, b, c) {                           
  return `<li class="item" name="${c}"><img src="${b}" alt=""><p>${a}</p></li>`
}
/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Device On Map Html Template ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function myDeviceOnMap(a, b, c) {    
  return `<image class="device_icon" x="${a}" y="${b}" width="30" height="30" href="${c}"></image>`
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Area li Html Template ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

let del_area_btn = `<button class = "${btn.del.name}">${btn.del.icon}</button>`

function myArea(c) {                                    
  return `<li class = "area" title="點我兩下編輯區域名稱"><p>${c}</p>${del_area_btn}</li>`
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Map Html Template ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function myMap(d) {                                  
  return `
  <svg width="1900" height="1000" id="svg" viewBox="0 0 1900 1000" xmlns="http://www.w3.org/1999/xhtml" >
    <image x= "0" y="0" width="1900" height="1000" href="${d}"></image>
  </svg>
  `
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Move Function ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */


function moveNow(a,b) {
  let _height = a.attr('height')
  let _width  = a.attr('width')
  if (b === true) {
    a.on('mousemove', function (e) {
      CTM_function (e)                        // 將座標轉換成 SVG 座標
      $(this).attr({
        'x': Math.round(SVGPoint.x - (_width / 2)),
        'y': Math.round(SVGPoint.y - (_height / 2))
      })
    })
  } else {
    a.off('mousemove')
  }
}


/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Device On Map Move It ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function moveDev() {                       // 讓地圖上的 Device 可被移動
  let svg       = $('#svg')
  let dev_onMap = svg.find('.device_icon')

  dev_onMap.on('mousedown', function (e) {
    
    if (isMouseDown_area === true){
      console.log(isMouseDown_device)
    }else{
      isMouseDown_device = true
      CTM_function (e)
      moveNow($(this),isMouseDown_device)
    }
  });

  dev_onMap.on('mouseup', function (e) {
    let dev_onMap_H = $(this).height()
    let dev_onMap_W = $(this).width()
    isMouseDown_device = false
    CTM_function (e)
    $(this).attr({
      'x': Math.round(SVGPoint.x - (dev_onMap_W / 2)),
      'y': Math.round(SVGPoint.y - (dev_onMap_H / 2))
    })
    moveNow($(this),isMouseDown_device)
  })
}


/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Add Areas On Map ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function createAreas(){
  let svg = $('#svg')
  
  svg.on('mousedown',function(e){
    CTM_function (e)                       // 把 cilent 座標轉換到 SVG
    let button_value = $('#addArea').attr('value')
    if (button_value === "add_on"){        // 判斷按鈕的值是否為可以在地圖上新增區域
      let _areasMap   = makeSVG('rect',{
        class : 'area_on_map',
        width : 100, 
        height: 100,
        x     : Math.round(SVGPoint.x - 50), 
        y     : Math.round(SVGPoint.y - 50),
        fill  : 'rgba(101, 168, 166, 0.5)', 
        href  : _icon
      })  
      $('#svg image').first().after(_areasMap,del_area_btn)
      moveArea()
      let areaHtml  = {
        view: myArea('Unnamed(點擊兩下編輯名稱)'),
        self: _areasMap
      }
      $(del(areaHtml)).appendTo('.groups')
      renameArea ()
    } else {
      console.log('You can not add areas')
    } 
  })
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Areas Rename ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */  

function renameArea (){

  $('.area p').off().on('dblclick',function(){
    var input_val = $(this).text() 
    let name_input = $('<input/>').attr({
      class       : 'area_name',
      type        : 'text',
      value       : input_val,
      placeholder : 'Enter the name.'
    })
    
    $(this).empty()                  // 清空 p
      .append(name_input)            // 加入 input
      .find('input')                 // 找到剛加入的 input
      .focus()                       // 讓他事件一開始就處於被選取狀態
      .blur(function(){              // 解除 focus 後
        input_Rename(this,input_val)
      })

    $(name_input).keydown(function(event){ 
      let key_Enter = event.which
      if(key_Enter == 13){
        input_Rename(this,input_val)
      }
    });  
  })
}

function input_Rename(x,y){
  let areaInput = x.value   // 將 input 內的值帶入 p 中
  if (areaInput === ''){       // 如果 input 沒有輸入東西 
    $(x).parent()           // 則返回原本的內容
      .html(y)
  } else {                     // 如果 input 有輸入東西
    $(x).parent()           // 就將 p 中的文字代換成 input 輸入的值
      .html(areaInput)
    y = areaInput
  }
}
  

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Move Areas On Map ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function moveArea() {
  let svg         = $('#svg')
  let area_onMap  = svg.find('rect')

  area_onMap.on('mousedown', function (e) {
    
    if(isMouseDown_device === true){
      console.log(isMouseDown_area)
    }else{
      isMouseDown_area = true
      CTM_function (e)
      moveNow ($(this),isMouseDown_area)
    }
  });

  area_onMap.on('mouseup', function (e) {
    let area_onMap_H = $(this).height()
    let area_onMap_W = $(this).width()
    isMouseDown_area = false
    CTM_function (e)
    $(this).attr({
      'x': Math.round(SVGPoint.x - (area_onMap_W / 2)),
      'y': Math.round(SVGPoint.y - (area_onMap_H / 2))
    })
    moveNow($(this),isMouseDown_area)
  })
}



/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Delete Button Event ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */


function del(x) {
  let y =
    $(x.view).find('.del_btn')
      .on('click', function () {
        $(this).parent().remove()
        $(x.self).remove()
      }).end()  
  return y
}

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Show List ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

function showList() {

  data.maps.forEach((map, mapID) => {
    $('.maps_name span').append(map.name)
    $(myMap(map.map_url)).appendTo('.img_div')

    map.areas.forEach((area, areaID) => {          // Area in Maps

      let _areasMap = makeSVG('rect',{
        class : 'area_on_map',
        x     : area.x, 
        y     : area.y,
        width : 100, 
        height: 100,
        fill  : 'rgba(101, 168, 166, 0.5)', 
        href  : _icon
      })  
      let areaHtml = {
        view: myArea(area.name),
        key : area._id,
        self: _areasMap
      }
      $('#svg image').first().after(_areasMap)
      $(del(areaHtml)).appendTo('.groups')
      moveArea()
      renameArea ()
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
          $(del(deviceHtml)).appendTo('.items');
          moveDev();
        })
      })
    })
  })
};

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ 將定義好的函數全部執行一次 ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

showList   (); 
createAreas();

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Buttons ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

$(() => {
  let _width  = 1900;                        // 初始寬度
  let _height = 1000;                        // 初始高度
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


  $('#zoom').on('click', function () {       // Zoom Image
    (_width == 5700, _height == 3000) ? (
      console.log('Has been max width !!')
    ) : (
      (_width  += 190  ),
      (_height += 100  ),
      (opa     += 0.033),
      init()
    );
  });

  $('#zoom_Out').on('click', function () {  // Zoom Out Image
    (_width == 1900, _height == 1000) ? (
      console.log('Has been min width !!')
    ) : (
      (_width  -= 190  ),
      (_height -= 100  ),
      (opa     -= 0.033),
      init()
    );
  });

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ 儲存按鈕與新增按鈕 ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

  $('#store').on('click',function(){                 // 儲存按鈕
    $('#addArea').attr({
      'value' : 'add_off'
    })
  });

  $('#addArea').on('click',function(){               // 新增區域按鈕
    $('#addArea').attr({
      'value' : 'add_on'
    })
  });

})



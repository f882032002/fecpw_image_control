



  

  /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ 負責接收新資料的地方 ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */


  let newMaps   = []
  let newAreas  = []
  let newDevices= []

  let window_h          = $(window).height();  
  let isMouseDownDevice = false                
  let isMouseDownArea   = false                

  document.oncontextmenu = function() {        
    return false;
  }

  function widthInit() {                       
    $('#app').css({
      'height': window_h
    })
  }
  $(document).ready(() => {                     
    widthInit()
    $(window).resize(() => {                    
      widthInit()
    })
  });

  /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Current Transform Matrix ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

  function CTMFunction (a){ 
    const clientPoint = svg.createSVGPoint()
    const getCTM      = svg.getScreenCTM()
    let z =  
    clientPoint.x = a.clientX
    clientPoint.y = a.clientY
    SVGPoint      = clientPoint.matrixTransform(getCTM.inverse())

    return z
  }

  /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Icon Object Data ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

  let icon = {
    co         : '/images/co.svg'         ,
    co2        : '/images/co2.svg'        ,
    pir        : '/images/pir.svg'        ,
    sos        : '/images/sos.svg'        ,
    door       : '/images/door.svg'       ,
    smoke      : '/images/smoke.svg'      ,
    light      : '/images/light.svg'      ,
    water      : '/images/water.svg'      ,
    socket     : '/images/Socket.svg'     ,
    gateway    : '/images/gateway.svg'    ,
    q_module   : '/images/q-module.svg'   ,
    door_lock  : '/images/door-lock.svg'  ,
    thermometer: '/images/Thermometer.svg',
  }

  /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Icon Switch ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

  let deviceIcon; // 放入 image
  function image_switch (x){
        switch (x) {
          case 'ids-co'         : deviceIcon = icon.co;          break;
          case 'idc-sos'        : deviceIcon = icon.co;          break;
          case 'ids-co2'        : deviceIcon = icon.co2;         break;
          case 'ids-pir'        : deviceIcon = icon.pir;         break;
          case 'ids-gas'        : deviceIcon = icon.smoke;       break;
          case 'ids-door'       : deviceIcon = icon.door;        break;
          case 'idc-plug'       : deviceIcon = icon.socket;      break;
          case 'ids-smoke'      : deviceIcon = icon.co;          break;
          case 'ids-glass'      : deviceIcon = icon.co;          break;
          case 'ids-water'      : deviceIcon = icon.water;       break;
          case 'ids-light'      : deviceIcon = icon.co;          break;
          case 'ids-thermo'     : deviceIcon = icon.thermometer; break;
          case 'idc-gateway'    : deviceIcon = icon.gateway;     break;
          case 'idc-q-module'   : deviceIcon = icon.q_module;    break;
          case 'idc-light-rgb'  : deviceIcon = icon.light;       break;
          case 'idc-door-lock'  : deviceIcon = icon.door_lock;   break;
          case 'idc-gas-keeper' : deviceIcon = icon.co;          break;
          case 'idc-water-valve': deviceIcon = icon.co;          break;
        };
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
 
  /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Area li Html Template ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

  let delAreaBtn = `<button class = "del_btn">x</button>`

  function myArea(a,b) {                                    
    return `<li class = "area" data-id="${b}" title="點我兩下編輯區域名稱"><p>${a}</p>${delAreaBtn}</li>`
  }

  /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Map Html Template ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

  function myMap(a) {                                  
    return `
      <svg width="1900" height="1000" id="svg" viewBox="0 0 1900 1000" xmlns="http://www.w3.org/1999/xhtml" >
        <image x= "0" y="0" width="1900" height="1000" href="${a}"></image>
      </svg>
    `
  }

  /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Move Function ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

  function whenMoving(a,b) {
    let svg     = $('#svg')
    let _height = a.attr('height')
    let _width  = a.attr('width')
    svg.on('mousemove', e => {
      if (b === true && e.which === 1 ) {
        CTMFunction (e)                        // 將座標轉換成 SVG 座標
        $(a).attr({
          'x': Math.round(SVGPoint.x - (_width / 2)),
          'y': Math.round(SVGPoint.y - (_height / 2))
        }) 
      } else {
        svg.off('mousemove')
      }
    })
  }

  /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Device On Map Move It ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

  function moveDev() {                       // 讓地圖上的 Device 可被移動
    let svg       = $('#svg')
    let deviceOnMap = svg.find('.device_icon')

    deviceOnMap.on('mousedown', e => {
      if (isMouseDownArea === false && e.which === 1){
        isMouseDownDevice = true
        CTMFunction (e)
        whenMoving($(e.target),isMouseDownDevice)
      }
    });

    deviceOnMap.on('mouseup', e => {
      let dev_onMap_H = $(e.target).height()
      let dev_onMap_W = $(e.target).width()
      isMouseDownDevice = false
      if (isMouseDownArea === false && e.which === 1){
        CTMFunction (e)
        $(e.target).attr({
          'x': Math.round(SVGPoint.x - (dev_onMap_W / 2)),
          'y': Math.round(SVGPoint.y - (dev_onMap_H / 2))
        })
      }
      
      whenMoving($(e.target),isMouseDownDevice)
    })
  }

  /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Add Areas On Map ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

  function createAreas(){
    let svg = $('#svg')
    svg.on('mousedown',e => {
      CTMFunction (e)                       // 把 cilent 座標轉換到 SVG
      let canIAddArea = $('#addArea').attr('value')
      
      if (canIAddArea === "addYes"){        // 判斷按鈕的值是否為可以在地圖上新增區域
        let filterKey   = new Date().valueOf()
        let areasOnMap = makeSVG('rect',{
          class      : 'areaOnMap',
          'data-key' : filterKey,
          width      : 100, 
          height     : 100,
          x          : Math.round(SVGPoint.x - 50), 
          y          : Math.round(SVGPoint.y - 50),
          fill       : 'rgba(0,0,0,0.4)', 
          href       : deviceIcon
        }) 

        let areaHtml = {
          view       : myArea('UnNamed(點擊兩下編輯名稱)',filterKey),
          self       : areasOnMap
        }

        let newAreaX    = $(areasOnMap).attr('x')
        let newAreaY    = $(areasOnMap).attr('y')

        let newAreaData = {
          name : $(areaHtml.view).find('p').text(),
          id   : filterKey,
          x    : newAreaX,
          y    : newAreaY 
        }
        
        newAreas.push(newAreaData)
        console.log(newAreas)
        $('#svg image').first().after(areasOnMap)
        $(del(areaHtml,newAreas,newAreaData)).appendTo('.groups')
        moveArea()
        renameArea()

      } else {
        console.log('You can not add areas')
      } 
    })
  }

    /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Areas Rename ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */  

  function renameArea (){

    $('.area p').off().on('dblclick',e => {
      var oldName  = $(e.target).text()
      let enterName = $('<input/>').attr({ // this is input
        class       : 'enterName',
        type        : 'text',
        value       : oldName,
        placeholder : 'Enter the name.'
      })
      let areaListId = $(e.target).parent().attr('data-id')
      
      $(e.target).empty()              
        .append(enterName)           
        .find('input')                 
        .focus()                     
        .on('blur', e =>{                
          updateAreaData(e.target,areaListId)
          updateName(e.target,oldName)
          console.log(newAreas)
        })

      $(enterName).on('keydown', e => { 
        if(e.which == 13){
          updateAreaData(e.target,areaListId)
          updateName(e.target,oldName)
          console.log(newAreas)
        }
      });  
    })
  }

  function updateAreaData (x,y){
    newAreas.forEach(function(areas,id){
      if(areas.id == y){
        areas.name = $(x).val()
      }
    })
  } 

  function updateName(x,y){
    let newName = x.value      
    if (newName === ''){       
      $(x).parent()              
        .html(y)
    } else {                    
      y = newName
      $(x).parent()             
        .html(newName)
    }
  }


  /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Move Areas On Map ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

  function moveArea() {
    let svg         = $('#svg')
    let areaOnMap  = svg.find('rect')

    areaOnMap.on('mousedown', e => {

      if(isMouseDownDevice === false && e.which === 1){
        isMouseDownArea = true
        CTMFunction (e)
        whenMoving ($(e.target),isMouseDownArea)
      }
    });

    areaOnMap.on('mouseup', e => {
      let area_onMap_H = $(e.target).height()
      let area_onMap_W = $(e.target).width()
      isMouseDownArea = false
      if(isMouseDownDevice === false && e.which === 1){
        CTMFunction (e)
        $(e.target).attr({
          'x': Math.round(SVGPoint.x - (area_onMap_W / 2)),
          'y': Math.round(SVGPoint.y - (area_onMap_H / 2))
        })
      }
      whenMoving($(e.target),isMouseDownArea)
    })
  }
  /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Delete Button Event ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

  function del(x,y,z) {
    let a =
      $(x.view).find('.del_btn')
        .on('click', function () {
          $(this).parent().remove()      
          $(x.self).remove()             
          y.splice($.inArray(z, y), 1)  
          console.log(newAreas)
        }).end()
    return a
  }
  /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Show List ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

  function showList() {

    data.maps.forEach((map, mapID) => {
      $('.maps_name span').append(map.name)
      $(myMap(map.map_url)).appendTo('.img_div')

      map.areas.forEach((area, areaID) => {          // Area in Maps

        let areasOnMap = makeSVG('rect',{
          class : 'areaOnMap',
          x     : area.x, 
          y     : area.y,
          width : 100, 
          height: 100,
          fill  : 'rgba(0,0,0,0.4)', 
          href  : deviceIcon
        })  
        let areaHtml = {
          view: myArea(area.name),
          key : area._id,
          self: areasOnMap
        }
        $('#svg image').first().after(areasOnMap)
        $(del(areaHtml)).appendTo('.groups')
        moveArea()
        renameArea ()
        area.devices.forEach((device, deviceID) => { // 區域中的設備

          device.list.forEach((imgs, imgsID) => {
            image_switch(imgs.value)
            let oldDeviceOnMap = makeSVG('image',{
              class : 'device_icon',
              x     : device.x, 
              y     : device.y,
              width : 30, 
              height: 30, 
              href  : deviceIcon
            })

            let deviceHtml = {
              view: myDevice(device.name, deviceIcon, imgs.value),
              key : device._id,
              self: area.devices
            }
            $(oldDeviceOnMap) .appendTo('#svg');
            $(deviceHtml.view).appendTo('.items');
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
    let _width     = 1900;                  
    let _height    = 1000;  

    function init() {
      $('#svg').css({
        'width' : _width,
        'height': _height
      })
    };
    init();


    $('#zoom').on('click', function () {       // Zoom Image
      (_width == 5700, _height == 3000) ? (
        console.log('Has been max width !!')
      ) : (
        (_width     += 190  ),
        (_height    += 100  ),
        init()
      );
    });

    $('#zoom_Out').on('click', function () {  // Zoom Out Image
      (_width == 1900, _height == 1000) ? (
        console.log('Has been min width !!')
      ) : (
        (_width     -= 190  ),
        (_height    -= 100  ),
        init()
      );
    });

  /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ 儲存按鈕與新增按鈕 ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

    $('#store').on('click',() => {                 // 儲存按鈕
      $('#addArea').attr({
        'value' : 'addNo'
      })
    });

    $('#addArea').on('click',() => {               // 新增區域按鈕
      $('#addArea').attr({
        'value' : 'addYes'
      })
    });

    
    $(".img_div").on('mousedown',e => {
      let detailWidth  = e.target.attributes.width.value
      let detailHeight = e.target.attributes.height.value
      let detailTop    = e.target.attributes.y.value
      let detailLeft   = e.target.attributes.x.value
      if (e.which === 3) {    // 如果點的是右鍵
      
        $('.dev_function').css({
          'opacity'  : 1,
          'top'      : detailTop + 'px',
          'left'     : detailLeft  + 'px',
          'transform': 'translateX' + '(' + detailWidth + 'px)' + 'translateY' + '(' + (detailHeight / 2) + 'px)' 
        })
      } else {
        $('.dev_function').css({
          'opacity'  : 0,
        })
      }
    }) 

    $('.areaOnMap').on('mouseenter', e =>{
      //console.log(e)
    })
    $('.areaOnMap').on('mouseleave', e =>{
      //console.log(e)
    })
  })

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

      start: function (event, ui) {  

        $(ui.helper[0].children[1]).remove()
    
        $(ui.helper[0]).css({
          'background-color' : 'transparent',
          'height'           : '45px',
          'width'            : '45px'
        })

        $('#map_img').css({
          'background-color' : 'rgba(189,189,189,0.1)',
          'transition'       : '0.3s'
        })

      },

      drag: function (event, ui) {   

        CTMFunction (event)
      },

      stop: function (event, ui) {   
        CTMFunction (event)
        let name = ui.helper[0].attributes.name.value
        let svgX   = Math.round(SVGPoint.x - 15)
        let svgY   = Math.round(SVGPoint.y - 15)
        
        image_switch(name)

        var _image = makeSVG('image',{
          class : 'device_icon',
          x     : svgX, 
          y     : svgY,
          width : 30, 
          height: 30, 
          href  : deviceIcon 
        })

        $(_image).appendTo('#svg');
        $(event.target).fadeOut()
        moveDev();
        $('#map_img').css({
          'background-color' : 'rgba(189,189,189,0.4)'
        });
      },
    });
  });









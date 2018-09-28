
/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ Colors ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

let Toilet_color     = '#93E6CE'
let LivingRoom_color = '#93CEE6'
let BedRoom_color    = '#CEBEEB'


/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ data ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

let data = {
  maps: [ // 地圖們
    { // 一樓平面圖
      name    : '1F',
      map_url : '/images_map/1F.png',
      areas   : [
        {
          name   : 'BedRoom',
          x      : 0,
          y      : 0,
          width  : 0,
          height : 0,
          color  : BedRoom_color,
          devices: [
            {
              _id      : '66e327867f5949d24c388130dfd0e3b5',
              name     : 'Gateway-e3b5',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 1075,
              y        : 475,
              shareable: false,
              list     : [
                {
                  fullID: 3,
                  value : 'idc-gateway',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                }
              ]
            },
            {
              _id      : 'b6c5d57dbe34f1ee527312919bf668ee',
              name     : 'Gateway-68ee',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 945,
              y        : 331,
              shareable: false,
              list     : [
                {
                  fullID: 3,
                  value : 'idc-gateway',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                }
              ]
            },
            {
              _id      : '00158D0001A6B939!1',
              name     : 'LED 彩燈-B939',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 1185,
              y        : 587,
              shareable: true,
              list     : [
                {
                  fullID: 3,
                  value : 'idc-light-rgb',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                }
              ]
            },
            {
              _id      : '00158D00017CAC5F!1',
              name     : 'LED 彩燈-AC5F',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 709,
              y        : 132,
              shareable: true,
              list     : [
          
                {
                  fullID: 3,
                  value : 'idc-light-rgb',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                }
              ]
            },
            {
              _id      : 'ACB859FFFFF0501C!11',
              name     : '黃白燈-501C',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 1146,
              y        : 132,
              shareable: true,
              list     : [
                {
                  fullID: 3,
                  value : 'idc-light-rgb',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                }
              ]
            },
            {
              _id      : '00158D000146DA5C!1',
              name     : '電源插座-DA5C',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 1279,
              y        : 571,
              shareable: true,
              list     : [
                {
                  fullID: 3,
                  value : 'idc-plug',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                }
              ]
            },
            {
              _id      : '00124B000426176B!2',
              name     : '煙霧感測器-176B',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 852,
              y        : 453,
              shareable: true,
              list     : [
                {
                  fullID: 3,
                  value : 'ids-smoke',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                }
              ]
            },
            {
              _id      : '00124B0007834773!2',
              name     : '二氧化碳感測器-4773',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 534,
              y        : 589,
              shareable: true,
              list     : [
                {
                  fullID: 3,
                  value : 'ids-co2',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                }
              ]
            },
            {
              _id      : '00124B000783446E!2',
              name     : '瓦斯感測器-446E',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 637,
              y        : 640,
              shareable: true,
              list     : [
                {
                  fullID: 3,
                  value : 'ids-gas',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                }
              ]
            },
            {
              _id      : '00124B00092DA550!2',
              name     : '玻璃破碎偵測器-A550',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 680,
              y        : 655,
              shareable: true,
              list     : [
                {
                  fullID: 3,
                  value : 'ids-glass',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                }
              ]
            },
            {
              _id      : '00124B00094DB999!2',
              name     : '一氧化碳感測器-B999',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 534,
              y        : 610,
              shareable: true,
              list     : [
                {
                  fullID: 3,
                  value : 'ids-co',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                }
              ]
            },
            {
              _id      : '00124B00092DB190!2',
              name     : '紅外線傳感器-B190',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 1314,
              y        : 516,
              shareable: true,
              list     : [
                {
                  fullID: 3,
                  value : 'ids-pir',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                }
              ]
            },
            {
              _id      : '00124B00094DB9DE!2',
              name     : '紅外線傳感器-B9DE',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 1287,
              y        : 827,
              shareable: true,
              list     : [
                {
                  fullID: 3,
                  value : 'ids-pir',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                }
              ]
            },
            {
              _id      : '00124B0005A7B462!2',
              name     : '溫溼度感測器-B462',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 1111,
              y        : 855,
              shareable: true,
              list     : [
                {
                  fullID: 3,
                  value : 'ids-thermo',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                },
              ]
            },
            {
              _id      : '000D6F000AF1A9DA!1',
              name     : '水浸感測器-A9DA',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 1276,
              y        : 93,
              shareable: true,
              list     : [
                {
                  fullID: 3,
                  value : 'ids-water',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                },
              ]
            },
            {
              _id      : '00124B000F8CC6E5!2',
              name     : '智慧SOS緊急按鈕-C6E5',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 483,
              y        : 633,
              shareable: true,
              list     : [
                {
                  fullID: 3,
                  value : 'idc-sos',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                },
              ]
            },
            {
              _id      : '00124B000AB70F0C!1',
              name     : '光照度感測器-0F0C',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 1066,
              y        : 885,
              shareable: true,
              list     : [
                {
                  fullID: 3,
                  value : 'ids-light',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                }
              ]
            },
            {
              _id: '00158D00018885FE!1',
              name     : '智慧電源插座-85FE',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 1373,
              y        : 323,
              shareable: true,
              list     : [
                {
                  fullID: 3,
                  value : 'idc-plug',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                }
              ]
            },
            {
              _id      : '00124B000ACC76F8!1',
              name     : '門窗感測器-76F8',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 823,
              y        : 826,
              shareable: true,
              list     : [
                {
                  fullID: 3,
                  value : 'ids-door',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                }
              ]
            },
            {
              _id      : '00124B001545998B!1',
              name     : '智能門鎖-998B',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 1349,
              y        : 698,
              shareable: true,
              list     : [
                {
                  fullID: 3,
                  value : 'idc-door-lock',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                }
              ]
            },
            {
              _id      : '000D6F0004151B63!1',
              name     : '智慧方塊電源模組-1B63',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 1376,
              y        : 421,
              shareable: true,
              list     : [
                {
                  fullID: 3,
                  value : 'idc-q-module',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                }
              ]
            },
            {
              _id      : '00124B0017F307D3!1',
              name     : '智能門鎖-07D3',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 1127,
              y        : 336,
              shareable: true,
              list     : [
                {
                  fullID: 3,
                  value : 'idc-door-lock',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                }
              ]
            },
            {
              _id      : '00124B0015459B6D!1',
              name     : '連線型中文感應式門禁控制器-9B6D',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 908,
              y        : 460,
              shareable: true,
              list     : [
                {
                  fullID: 3,
                  value : 'idc-door-lock',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                }
              ]
            },
            {
              _id      : '00124B00094DBC39!2',
              name     : '紅外線傳感器-BC39',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 874,
              y        : 78,
              shareable: true,
              list     : [
                {
                  fullID: 3,
                  value : 'ids-pir',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                }
              ]
            },
            {
              _id      : '000D6F0004151C26!1',
              name     : '智慧方塊電源模組-1C26',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 1312,
              y        : 656,
              shareable: true,
              list     : [
                {
                  fullID: 3,
                  value : 'idc-q-module',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                }
              ]
            },
            {
              _id      : '000D6F000415168B!1',
              name     : '智慧方塊電源模組-168B',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 1354,
              y        : 657,
              shareable: true,
              list     : [
                {
                  fullID: 3,
                  value : 'idc-q-module',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                }
              ]
            },
            {
              _id      : '00124B000950406B!9',
              name     : '水閥控制器-406B',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 1329,
              y        : 604,
              shareable: true,
              list     : [
                {
                  fullID: 3,
                  value : 'idc-water-valve',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                }
              ]
            },
            {
              _id      : '00124B0009504205!9',
              name     : '瓦斯閥門機械手控制器-4205',
              owner    : '5aeac9f3570ddb30d8cdd874',
              x        : 1329,
              y        : 610,
              shareable: true,
              list     : [
          
                {
                  fullID: 3,
                  value : 'idc-gas-keeper',
                  _id   : '5b234fe09d717f66e0a21d5f',
                  key   : '00158D0001A6B939!1'
                }
              ]
            },
          ]
        },
        {
          name   : 'LivingRoom',
          x      : 0,
          y      : 0,
          width  : 0,
          height : 0,
          color  : BedRoom_color,
          devices: [

          ]
        },
        {
          name   : 'Toilet',
          x      : 0,
          y      : 0,
          width  : 0,
          height : 0,
          color  : BedRoom_color,
          devices: [

          ]
        },
      ]
    }
  ]
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

let _icon; // 放入 image
function image_switch (x){

      switch (x) {

        case 'ids-co'         : _icon = icon.co;          break;
        case 'idc-sos'        : _icon = icon.thermometer; break;
        case 'ids-co2'        : _icon = icon.co2;         break;
        case 'ids-pir'        : _icon = icon.pir;         break;
        case 'ids-gas'        : _icon = icon.smoke;       break;
        case 'ids-door'       : _icon = icon.door;        break;
        case 'idc-plug'       : _icon = icon.socket;      break;
        case 'ids-smoke'      : _icon = icon.thermometer; break;
        case 'ids-glass'      : _icon = icon.thermometer; break;
        case 'ids-water'      : _icon = icon.water;       break;
        case 'ids-light'      : _icon = icon.thermometer; break;
        case 'ids-thermo'     : _icon = icon.thermometer; break;
        case 'idc-gateway'    : _icon = icon.gateway;     break;
        case 'idc-q-module'   : _icon = icon.q_module;    break;
        case 'idc-light-rgb'  : _icon = icon.light;       break;
        case 'idc-door-lock'  : _icon = icon.door_lock;   break;
        case 'idc-gas-keeper' : _icon = icon.thermometer; break;
        case 'idc-water-valve': _icon = icon.thermometer; break;
        

      };

}











 
// 資料預設格式 :
// data = {
//   maps:[
//     { name    :'map1',
//       imageURL:'/awefwe/awegaw/egr.jpg',
//       areas   :[
//         { 
//           name   :'area1', 
//           x      :0, 
//           y      :0, 
//           color  :'#000000', 
//           point  :'1234, 234, 2345, 234',
//           devices:[
//             {
//              name:'devices1', 
//              x   :0, 
//              y   :0
//             },
//             {
//              name:'devices2', 
//              x   :0, 
//              y   :0
//             },
//             {
//              name:'devices3', 
//              x   :0, 
//              y   :0
//             },
//             {
//              name:'devices4', 
//              x   :0, 
//              y   :0
//             },
//           ]    
//         },
//         { 
//           name   :'area2', 
//           x      :0, 
//           y      :0, 
//           color  :'#000000', 
//           point  :'1234, 234, 2345, 234',
//           devices:[
//             { 
//              name:'devices5', 
//              x   :0, 
//              y   :0
//             },
//             { 
//              name:'devices6', 
//              x   :0, 
//              y   :0
//             },
//             { 
//              name:'devices7', 
//              x   :0, 
//              y   :0
//             },
//             { 
//              name:'devices8', 
//              x   :0, 
//              y   :0
//             },
//           ]    
//         },
//       ]
//     }
//   ]
// };
(function(e){function t(t){for(var n,a,i=t[0],c=t[1],s=t[2],f=0,d=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(d.length)d.shift()();return l.push.apply(l,s||[]),o()}function o(){for(var e,t=0;t<l.length;t++){for(var o=l[t],n=!0,i=1;i<o.length;i++){var c=o[i];0!==r[c]&&(n=!1)}n&&(l.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={app:0},l=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/LuckySheetTrial/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=c;l.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},l=[],a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"hello"},[o("div",{staticStyle:{position:"absolute",top:"0"}},[o("span",[e._v("上传xlsx文件: ")]),o("input",{staticStyle:{"font-size":"16px"},attrs:{type:"file"},on:{change:e.uploadExcel}}),o("button",{attrs:{justify:"end"}},[o("a",{attrs:{href:"javascript:void(0)"},on:{click:e.downloadExcel}},[e._v("下载xlsx文件")])])]),o("div",{staticStyle:{margin:"0px",padding:"0px",position:"absolute",width:"100%",left:"0px",top:"60px",bottom:"0px"},attrs:{id:"luckysheet"}}),o("div",{directives:[{name:"show",rawName:"v-show",value:e.isMaskShow,expression:"isMaskShow"}],staticStyle:{position:"absolute","z-index":"1000000",left:"0px",top:"0px",bottom:"0px",right:"0px",background:"rgba(255, 255, 255, 0.8)","text-align":"center","font-size":"40px","align-items":"center","justify-content":"center",display:"flex"}},[e._v("Downloading")])])},i=[],c=(o("b0c0"),o("ac1f"),o("1276"),o("f7e6")),s=o.n(c),u=(o("a623"),o("cb29"),o("4160"),o("c975"),o("d3b7"),o("07ac"),o("25f0"),o("5319"),o("159b"),o("21a6")),f=o.n(u),d=o("e8ae"),h=function(e,t){var o=new d.Workbook;"[object Object]"===Object.prototype.toString.call(e)&&(e=[e]),e.forEach((function(e){if(0===e.data.length)return!0;var t=o.addWorksheet(e.name);console.log("worksheet",t),t.properties.defaultRowHeight=15,t.properties.defaultColWidth=8.43;var n=e.config&&e.config.merge||{},r=e.config&&e.config.borderInfo||{},l=(e.images,e.config.columnlen),a=e.config.rowlen;return m(e.data,t),g(n,t),b(r,t),p(l,a,t),!0}));var n=o.xlsx.writeBuffer().then((function(e){var o=new Blob([e],{type:"application/vnd.ms-excel;charset=utf-8"});console.log("导出成功！"),f.a.saveAs(o,"".concat(t,".xlsx"))}));return n},p=function(e,t,o){e&&_.each(e,(function(e,t){var n=parseInt(t)+1,r=o.getColumn(n);r.width=e/6})),t&&_.each(t,(function(e,t){var n=parseInt(t)+1,r=o.getRow(n);r.height=e}))},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,o=Object.values(e);o.forEach((function(e){t.mergeCells(e.r+1,e.c+1,e.r+e.rs,e.c+e.cs)}))},b=function(e,t){Array.isArray(e)&&e.forEach((function(e){if("range"===e.rangeType)for(var o=w(e.borderType,e.style,e.color),n=e.range[0],r=n.row,l=n.column,a=r[0]+1;a<r[1]+2;a++)for(var i=l[0]+1;i<l[1]+2;i++)t.getCell(a,i).border=o;if("cell"===e.rangeType){var c=e.value,s=c.col_index,u=c.row_index,f=Object.assign({},e.value);delete f.col_index,delete f.row_index;var d=k(f,u,s);t.getCell(u+1,s+1).border=d}}))},m=function(e,t){Array.isArray(e)&&e.forEach((function(e,o){e.every((function(e,n){if(!e)return!0;var r=x(e.bg),l=v(e.ff,e.fc,e.bl,e.it,e.fs,e.cl,e.ul),a=y(e.vt,e.ht,e.tb,e.tr),i="";e.f?i={formula:e.f,result:e.v}:!e.v&&e.ct&&e.ct.s?e.ct.s.forEach((function(e){i+=e.v})):i=e.v;var c=S(n),s=t.getCell(c+(o+1));for(var u in r){s.fill=r;break}return s.font=l,s.alignment=a,s.value=i,!0}))}))},x=function(e){if(!e)return{};var t={type:"pattern",pattern:"solid",fgColor:{argb:e.replace("#","")}};return t},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#000000",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:10,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,i={0:"微软雅黑",1:"宋体（Song）",2:"黑体（ST Heiti）",3:"楷体（ST Kaiti）",4:"仿宋（ST FangSong）",5:"新宋体（ST Song）",6:"华文新魏",7:"华文行楷",8:"华文隶书",9:"Arial",10:"Times New Roman ",11:"Tahoma ",12:"Verdana",num2bl:function(e){return 0!==e}},c={name:"number"===typeof e?i[e]:e,family:1,size:r,color:{argb:t.replace("#","")},bold:i.num2bl(o),italic:i.num2bl(n),underline:i.num2bl(a),strike:i.num2bl(l)};return c},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"default",r={vertical:{0:"middle",1:"top",2:"bottom",default:"top"},horizontal:{0:"center",1:"left",2:"right",default:"left"},wrapText:{0:!1,1:!1,2:!0,default:!1},textRotation:{0:0,1:45,2:-45,3:"vertical",4:90,5:-90,default:0}},l={vertical:r.vertical[e],horizontal:r.horizontal[t],wrapText:r.wrapText[o],textRotation:r.textRotation[n]};return l},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#000";if(!e)return{};var n={type:{"border-all":"all","border-top":"top","border-right":"right","border-bottom":"bottom","border-left":"left"},style:{0:"none",1:"thin",2:"hair",3:"dotted",4:"dashDot",5:"dashDot",6:"dashDotDot",7:"double",8:"medium",9:"mediumDashed",10:"mediumDashDot",11:"mediumDashDotDot",12:"slantDashDot",13:"thick"}},r={style:n.style[t],color:{argb:o.replace("#","")}},l={};return"all"===n.type[e]?(l["top"]=r,l["right"]=r,l["bottom"]=r,l["left"]=r):l[n.type[e]]=r,l};function k(e,t,o){var n={},r={type:{l:"left",r:"right",b:"bottom",t:"top"},style:{0:"none",1:"thin",2:"hair",3:"dotted",4:"dashDot",5:"dashDot",6:"dashDotDot",7:"double",8:"medium",9:"mediumDashed",10:"mediumDashDot",11:"mediumDashDotDot",12:"slantDashDot",13:"thick"}};for(var l in e)-1===e[l].color.indexOf("rgb")?n[r.type[l]]={style:r.style[e[l].style],color:{argb:e[l].color.replace("#","")}}:n[r.type[l]]={style:r.style[e[l].style],color:{argb:e[l].color}};return n}function S(e){var t="A".charCodeAt(0),o="Z".charCodeAt(0),n=o-t+1,r="";while(e>=0)r=String.fromCharCode(e%n+t)+r,e=Math.floor(e/n)-1;return r}var D={name:"HelloWorld",props:{msg:String},data:function(){return{selected:"",options:[{text:"Money Manager.xlsx",value:"https://minio.cnbabylon.com/public/luckysheet/money-manager-2.xlsx"},{text:"Activity costs tracker.xlsx",value:"https://minio.cnbabylon.com/public/luckysheet/Activity%20costs%20tracker.xlsx"},{text:"House cleaning checklist.xlsx",value:"https://minio.cnbabylon.com/public/luckysheet/House%20cleaning%20checklist.xlsx"},{text:"Student assignment planner.xlsx",value:"https://minio.cnbabylon.com/public/luckysheet/Student%20assignment%20planner.xlsx"},{text:"Credit card tracker.xlsx",value:"https://minio.cnbabylon.com/public/luckysheet/Credit%20card%20tracker.xlsx"},{text:"Blue timesheet.xlsx",value:"https://minio.cnbabylon.com/public/luckysheet/Blue%20timesheet.xlsx"},{text:"Student calendar (Mon).xlsx",value:"https://minio.cnbabylon.com/public/luckysheet/Student%20calendar%20%28Mon%29.xlsx"},{text:"Blue mileage and expense report.xlsx",value:"https://minio.cnbabylon.com/public/luckysheet/Blue%20mileage%20and%20expense%20report.xlsx"}],isMaskShow:!1}},mounted:function(){$((function(){var e={container:"luckysheet",title:"Neo Luckysheet",column:26,defaultRowHeight:20,defaultColWidth:64};luckysheet.create(e)}))},methods:{uploadExcel:function(e){var t=e.target.files;if(null!=t&&0!=t.length){var o=t[0].name,n=o.split("."),r=n[n.length-1];"xlsx"==r?s.a.transformExcelToLucky(t[0],(function(e,t){if(null!=e.sheets&&0!=e.sheets.length){window.luckysheet.destroy();var o={container:"luckysheet",showinfobar:!1,data:e.sheets,title:e.info.name,userInfo:e.info.name.creator};luckysheet.create(o)}else alert("Failed to read the content of the excel file, currently does not support xls files!")})):alert("Currently only supports the import of xlsx files")}else alert("No files wait for import")},selectExcel:function(e){var t=this,o=this.selected,n=e.target.options[e.target.selectedIndex].innerText;""!=o&&(this.isMaskShow=!0,s.a.transformExcelToLuckyByUrl(o,n,(function(e,o){null!=e.sheets&&0!=e.sheets.length?(t.isMaskShow=!1,window.luckysheet.destroy(),window.luckysheet.create({container:"luckysheet",showinfobar:!1,data:e.sheets,title:e.info.name,userInfo:e.info.name.creator})):alert("Failed to read the content of the excel file, currently does not support xls files!")})))},downloadExcel:function(){h(luckysheet.getAllSheets(),"下载")}}},j=D,T=(o("d0e4"),o("2877")),O=Object(T["a"])(j,a,i,!1,null,"796519e5",null),C=O.exports,A={name:"App",components:{HelloWorld:C}},E=A,M=(o("034f"),Object(T["a"])(E,r,l,!1,null,null,null)),H=M.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(H)}}).$mount("#app")},"85ec":function(e,t,o){},b604:function(e,t,o){},cf05:function(e,t,o){e.exports=o.p+"img/logo.82b9c7a5.png"},d0e4:function(e,t,o){"use strict";o("b604")}});
//# sourceMappingURL=app.9e1d5eba.js.map
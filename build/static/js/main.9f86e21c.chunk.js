(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{198:function(t,e){},231:function(t,e,n){t.exports=n(404)},236:function(t,e,n){},400:function(t,e){},401:function(t,e){},402:function(t,e,n){},404:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(13),r=n.n(i),c=(n(236),n(211)),s=n(205),l=n.n(s),u=n(153),d=n.n(u),f=n(128),m=n.n(f),p=(n(402),"https://tableau-write-back.herokuapp.com/writeback");var _=function(){var t=Object(o.useState)([]),e=Object(c.a)(t,2),n=e[0],i=e[1];Object(o.useEffect)((function(){window.tableau.extensions.initializeAsync&&0===n.length&&window.tableau.extensions.initializeAsync().then((function(){console.log("Tableau initialized successfully"),window.tableau.extensions.dashboardContent.dashboard.worksheets.find((function(t){return"write_back"===t.name})).getDataSourcesAsync().then((function(t){return t.find((function(t){return"write_back_data_source"===t.name})).getUnderlyingDataAsync()})).then((function(t){for(var e=t.data,o=t.columns,a=0;a<e.length;a++){var r=o.findIndex((function(t){return"Location Name"===t.fieldName})),c=o.findIndex((function(t){return"Location Number"===t.fieldName})),s=o.findIndex((function(t){return"Forecast"===t.fieldName}));if(-1!==s&&-1!==c&&-1!==r){var l={location_number:e[a][c].value,location_name:e[a][r].value,budget_year:"",on_deck_or_flag:"",budget_year_confirmed:"",comments:"",operator_status:"",region:"",site_status:"",construction_start:"",open_date:"",forecast:e[a][s].value,operator_name:"",activation_date:"",contract_type_group:"",location_type:"",project_category:"",risk_weight_string:""};n.push(l)}}i(d()(n))})).catch((function(t){return console.log(t)}))})).catch((function(t){console.log(t)}))}),[n]);var r=function(){var t=m.a.utils.book_new();t.Props={Title:"SheetJS Tutorial",Subject:"Test",Author:"Red Stapler",CreatedDate:new Date(2017,12,19)},t.SheetNames.push("Sheet1");for(var e=[["location number","location name","budget year","on deck or flag","budget year confirmed","comments","operator status","region","site status","construction start","open date","forecast","operator name","activation date","contract type (group)","location type","project category","risk weight string"]],o=0;o<n.length;o++){for(var a=[],i=Object.values(n[o]),r=0;r<i.length;r++)"object"!==typeof i[r]&&a.push(i[r]);e.push(a)}var c=m.a.utils.aoa_to_sheet(e);t.Sheets.Sheet1=c;var s=m.a.write(t,{bookType:"xlsx",type:"binary"});fetch("".concat(p),{method:"PUT",body:new Blob([function(t){for(var e=new ArrayBuffer(t.length),n=new Uint8Array(e),o=0;o<t.length;o++)n[o]=255&t.charCodeAt(o);return e}(s)],{type:"application/octet-stream"})}),setTimeout((function(){window.tableau.extensions.dashboardContent.dashboard.worksheets.find((function(t){return"write_back"===t.name})).getDataSourcesAsync().then((function(t){return t.find((function(t){return"write_back_data_source"===t.name})).refreshAsync()})).catch((function(t){return console.log(t)}))}),3e3)};return a.a.createElement("div",{className:"App"},a.a.createElement("div",{style:{maxWidth:"100%"}},a.a.createElement(l.a,{editable:{onRowUpdate:function(t,e){return new Promise((function(o,a){setTimeout((function(){var a=n.indexOf(e);n[a]=t,i(d()(n)),r(),o()}),1e3)}))}},columns:[{title:"Location Number",field:"location_number",editable:"never"},{title:"Location Name",field:"location_name",editable:"never"},{title:"Budget Year",field:"budget_year"},{title:"On Deck or Flag",field:"on_deck_or_flag"},{title:"Budget Year Confirmed",field:"budget_year_confirmed"},{title:"Comments",field:"comments"},{title:"Operator Status",field:"operator_status"},{title:"Region",field:"region"},{title:"Site Status",field:"site_status"},{title:"Construction Start",field:"construction_start"},{title:"Open Date",field:"open_date"},{title:"Forecast",field:"forecast"},{title:"Operator Name",field:"operator_name"},{title:"Activation Date",field:"activation_date"},{title:"Contract Type (Group)",field:"contract_type_group"},{title:"Location Type",field:"location_type"},{title:"Project Category",field:"project_category"},{title:"Risk Weight String",field:"risk_weight_string"}],data:n,title:"Write Back Demo"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[231,1,2]]]);
//# sourceMappingURL=main.9f86e21c.chunk.js.map
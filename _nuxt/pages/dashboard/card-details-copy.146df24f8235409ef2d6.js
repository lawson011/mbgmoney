webpackJsonp([60],{"+ABt":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("v-parallax",{attrs:{src:"/assets/bank-parallax.jpg",height:"300"}},[a("div",{staticClass:"parallax-text"},[a("h2",[t._v("Hi there, Lotanna")]),a("p",[t._v("This feature allows you to provide new and edit existing bank information.")])]),a("div",{staticClass:"parallax-btn"},[a("v-dialog",{attrs:{"max-width":"800px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-btn",{attrs:{slot:"activator",color:"primary",dark:"",large:""},slot:"activator"},[t._v("ADD A NEW BANK ACCOUNT")]),a("v-card",{staticClass:"py-3"},[a("v-card-title",{staticClass:"ml-3"},[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"Bank Name"},model:{value:t.editedItem.bankName,callback:function(e){t.$set(t.editedItem,"bankName",e)},expression:"editedItem.bankName"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"Account Number"},model:{value:t.editedItem.accountNumber,callback:function(e){t.$set(t.editedItem,"accountNumber",e)},expression:"editedItem.accountNumber"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"Account Name"},model:{value:t.editedItem.accountName,callback:function(e){t.$set(t.editedItem,"accountName",e)},expression:"editedItem.accountName"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"BVN"},model:{value:t.editedItem.bankVerificationNumber,callback:function(e){t.$set(t.editedItem,"bankVerificationNumber",e)},expression:"editedItem.bankVerificationNumber"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"Account Type"},model:{value:t.editedItem.accountType,callback:function(e){t.$set(t.editedItem,"accountType",e)},expression:"editedItem.accountType"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",flat:""},nativeOn:{click:function(e){return t.close(e)}}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"primary",flat:""},nativeOn:{click:function(e){return t.save(e)}}},[t._v("Save")])],1)],1)],1)],1)]),a("section",{staticClass:"scoped-container"},[a("v-flex",[a("v-layout",[a("v-flex",{attrs:{"px-2":"","mt-4":""}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.bank,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return a("tr",{},[a("td",[t._v(t._s(e.item.bankName))]),a("td",[t._v(t._s(e.item.accountNumber))]),a("td",[t._v(t._s(e.item.accountName))]),a("td",[t._v(t._s(e.item.bankVerificationNumber))]),a("td",[t._v(t._s(e.item.accountType))]),a("td",{staticClass:"justify-center layout px-0"},[a("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.viewDialog=!0}}},[a("v-icon",{attrs:{color:"purple"}},[t._v("fas fa-eye")])],1),a("v-dialog",{attrs:{"max-width":"600"},model:{value:t.viewDialog,callback:function(e){t.viewDialog=e},expression:"viewDialog"}},[a("v-card",{staticClass:"py-5 pl-4"},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{md6:""}},[a("img",{staticClass:"atm",attrs:{src:"/assets/repay-card.png",alt:""}})]),a("v-flex",{staticClass:"pl-3",attrs:{md6:""}},[a("div",{staticClass:"mb-2 headline"},[t._v("CARD DETAILS")]),a("v-flex",{staticClass:"py-3"},[a("div",{staticClass:"caption grey--text"},[t._v("Card Number")]),a("h2",[t._v("1456 1298 6574 1287")])]),a("v-layout",{staticClass:"py-3",attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{md6:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Expiry Date")]),a("h2",[t._v("02/22")])]),a("v-flex",{attrs:{md6:""}},[a("div",{staticClass:"caption grey--text"},[t._v("CCV Number")]),a("h2",[t._v("456")])])],1),a("v-flex",{staticClass:"py-3"},[a("div",{staticClass:"caption grey--text"},[t._v("Pin")]),a("h3",[t._v("****")])])],1)],1)],1)],1),a("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(a){return t.editItem(e.item)}}},[a("v-icon",{attrs:{color:"teal"}},[t._v("edit")])],1),a("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(a){return t.deleteItem(e.item)}}},[a("v-icon",{attrs:{color:"red"}},[t._v("delete")])],1)],1)])}}])},[a("v-flex",{attrs:{slot:"no-data"},slot:"no-data"},[a("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("\n                Reset")])],1)],1)],1)],1)],1)],1)],1)};i._withStripped=!0;var n={render:i,staticRenderFns:[]};e.a=n},"0hkJ":function(t,e,a){var i=a("w0Hy");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("98069ab2",i,!1,{sourceMap:!1})},G5Gq:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("W7NF"),n=a("+ABt"),s=!1;var c=function(t){s||a("0hkJ")},l=a("VU/8")(i.a,n.a,!1,c,"data-v-6cc95e19",null);l.options.__file="pages/dashboard/card-details-copy.vue",e.default=l.exports},W7NF:function(t,e,a){"use strict";var i=a("woOf"),n=a.n(i);e.a={layout:"user",data:function(){return{viewDialog:!1,items:[{text:"Home",disabled:!1},{text:"User",disabled:!0}],dialog:!1,headers:[{text:"BANK NAME",align:"left",value:"bankName"},{text:"ACCOUNT NUMBER",align:"left",value:"accountNumber"},{text:"ACCOUNT NAME",align:"left",value:"accountName"},{text:"BANK VERIFICATION NUMBER",align:"left",value:"bankVerificationNumber"},{text:"ACCOUNT TYPE",align:"left",value:"accountType"},{text:"ACTIONS",align:"center",value:"bankName",sortable:!1}],bank:[],editedIndex:-1,editedItem:{bankName:"",accountNumber:"",accountName:"",bankVerificationNumber:"",accountType:""},defaultItem:{bankName:"",accountNumber:"",accountName:"",bankVerificationNumber:"",accountType:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"ADD A NEW BANK ACCOUNT":"EDIT BANK ACCOUNT"}},watch:{dialog:function(t){t||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){this.bank=[{bankName:"GTBank",accountNumber:"1234567890",accountName:"LOTANNA OBI",bankVerificationNumber:"123456789",accountType:"DOLLAR"},{bankName:"Fidelity",accountNumber:"1234567890",accountName:"OLASUNKANMI ISMAIL",bankVerificationNumber:"123456789",accountType:"NAIRA"},{bankName:"UBA",accountNumber:"1234567890",accountName:"VICTOR OWUDA",bankVerificationNumber:"123456789",accountType:"EURO"}]},editItem:function(t){this.editedIndex=this.bank.indexOf(t),this.editedItem=n()({},t),this.dialog=!0},deleteItem:function(t){var e=this.bank.indexOf(t);confirm("Are you sure you want to delete this bank account?")&&this.bank.splice(e,1)},close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.editedItem=n()({},t.defaultItem),t.editedIndex=-1},300)},save:function(){this.editedIndex>-1?n()(this.bank[this.editedIndex],this.editedItem):this.bank.push(this.editedItem),this.close()}}}},w0Hy:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".parallax-text[data-v-6cc95e19]{max-width:500px;margin-left:4%}.parallax-btn[data-v-6cc95e19]{margin-left:3.5%}.scoped-container[data-v-6cc95e19]{margin:2% auto;padding:0 20px;max-width:1160px}.atm[data-v-6cc95e19]{width:250px}",""])}});
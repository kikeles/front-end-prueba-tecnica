import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//importar bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
//uso de jquery para el manejo de bootstrap
const $ = require("jquery")
window.$ = $
//importar DataTables en el proyecto de manera global
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
//importación de VueSweetalert2 para ventanas emergentes
import VueSweetalert2 from 'vue-sweetalert2'; 
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

<template>
<div class="row justify-content-center m-2">
  <div class="col-md-8 col-sm-10">
  <!-- div contenedor -->
    <div class="text-center">
      <h1>Administración de juguetes</h1>
    </div>

    <div class="col-6 p-0">
      <div class="input-group mb-3">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" @click="accionAgregarNuevo()">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
          Agregar nuevo
        </button>
      </div>
    </div>

    <!-- tabla de los registros -->
    <div class="table-responsive" style="overflow-x:auto; display: block;">
      <table class="table table-hover dt-responsive nowrap" id="tabla-juguetes">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">Edad</th>
            <th scope="col">Precio</th>
            <th scope="col">Compañía</th>
            <th scope="col">Imagen</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <!-- cargar elementos del DataTable -->
        </tbody>
      </table>
    </div>
    <!-- tabla de los registros -->


    <!-- formulario modal para agregar un nuevo contacto  -->
    <div class="modal fade p-0" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">

          <div class="modal-header text-white" :class="colorModal">
            <h5 class="modal-title" id="exampleModalLabel">{{tituloModal}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          
          <div class="modal-body form-row m-0">
            <!-- campos del formulrio -->

            <div class="col-md-6 col-sm-12">
            <!-- columna izquierda -->
              <div class="form-group row">
                <label for="nombre" class="col-sm-4 col-form-label">Nombre</label>
                <div class="col-sm">
                  <input type="text" class="form-control" id="nombre" v-model="nombre">
                  <span class="text-danger" v-if="validaciones.nombre" v-text="validaciones.nombre"></span>
                </div>
              </div>

              <div class="form-group row">
                <label for="precio" class="col-sm-4 col-form-label">Precio</label>
                <div class="col-sm">
                  <input type="text" class="form-control" id="precio" placeholder="0.00" v-model="precio">
                  <span class="text-danger" v-if="validaciones.precio" v-text="validaciones.precio"></span>
                </div>
              </div>

              <div class="form-group row">
                <label for="compania" class="col-sm-4 col-form-label">Compañía</label>
                <div class="col-sm">
                  <input type="text" class="form-control" id="compania" v-model="compania">
                  <span class="text-danger" v-if="validaciones.compania" v-text="validaciones.compania"></span>
                </div>
              </div>

              <div class="form-group row">
                <label for="restriccionEdad" class="col-sm-4 col-form-label">Edad Máxima</label>
                <div class="col-sm">
                  <input type="number" min="0" max="100" class="form-control" id="restriccionEdad" v-model="restriccionEdad">
                  <span class="text-danger" v-if="validaciones.restriccionEdad" v-text="validaciones.restriccionEdad"></span>
                </div>
              </div>

              <div class="form-group row">
                <label for="descripcion" class="col-sm-4 col-form-label">Descripción</label>
                <div class="col-sm">
                  <textarea class="form-control" id="descripcion" rows="3" v-model="descripcion"></textarea>
                  <span class="text-danger" v-if="validaciones.descripcion" v-text="validaciones.descripcion"></span>
                </div>
              </div>
            <!-- columna izquierda -->
            </div>

            <div class="col-md-6 col-sm-12">
            <!-- columna derecha-->
              <div class="form-group row justify-content-center m-0">
                <div class="col-lg-9 col-md-10 text-center">
                  <img v-if="typeof(imagen) === 'object'" :src="imagenSeleccionada" alt="Juguete" 
                    class="img-fluid mx-auto" width="300px" height="300px">
                  <img v-else-if="typeof(imagen) === 'string'" :src="rutaImage + imagen" 
                    alt="Juguete" class="img-fluid mx-auto" width="300px" height="300px">
                  <span class="text-danger" v-if="validaciones.imagen" v-text="validaciones.imagen"></span>
                </div>
                <input type="file" class="form-control" id="cargarImagen" @change="cargarImagen">
              </div>
            <!-- columna derecha-->
            </div>

            <!-- <div class="col-12 text-center" v-show="validaciones.length">  
              <div class="text-danger" v-for="mensaje in validaciones" :key="mensaje" v-text="mensaje"></div>
            </div> -->

            <!-- campos del formulrio -->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" v-if="tipoAccion == 1" @click="agregarJuguete()">Guardar</button>
            <button type="button" class="btn btn-warning" v-else-if="tipoAccion == 2" @click="editarJuguete()">Actualizar</button>
          </div>
        </div>
      </div>
    </div>

  <!-- div contenedor -->
  </div>
</div>
</template>


<script>
//libreria axios para las peticiones
import axios from "axios";
//variables globales
import { variables } from "../utilidades/variables";


//api de Vue.js
export default{
  data(){
    return{
      juguetes: [],
      //campos del formulario
      id: 0,
      nombre: "",
      descripcion: "",
      restriccionEdad: 0,
      compania: "",
      precio: "",
      imagen: "image.jpg",
      //ruta de acceso a las imagenes
      rutaImage: variables.IMG_URL,
      imagenSeleccionada: "",
      //variables para eventos con el modal
      colorModal: "",
      tituloModal: "",
      //variables para las validaciones
      validaciones: {
        nombre: "",
        descripcion: "",
        restriccionEdad: "",
        compania: "",
        precio: "",
        imagen: "",
      },
      //variable para el tipo de acción 1 = Insertar, 2 = Actualizar, 3 = Eliminar
      tipoAccion: 1
    }
  },
  methods:{
    cargarDataTable(){
      var buttons = `
        <button class="btn btn-warning mr-2" id="editar">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
          </svg>
        </button>

        <button class="btn btn-danger" id="eliminar">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg>
        </button>
      `;
      
      var datatable = $('#tabla-juguetes').DataTable({
        data: this.juguetes,
        columns: [
          { data: "id"},//mostrar
          { data: "nombre"},//mostrar
          { data: "descripcion", "visible" : false },
          { data: "restriccionEdad", 
            render: function (data, type, row) {
                return data == 0 ? "N/a" : data;
            },
          },//mostrar
          { data: "precio", 
            render: function (data, type, row) {
                return '$'+data;
            },
          },//mostrar
          { data: "compania"},//mostrar
          { data: "imagen", "visible" : false},
          { defaultContent: buttons, orderable: false}
        ],
        "language": {
          "search": "Buscar:",
          "info": "Mostrando _START_ a _END_ de _TOTAL_ juguetes",
          "lengthMenu": "Mostrar _MENU_ juguetes",
          "paginate": {
              "first": "First",
              "last": "Last",
              "next": "Siguiente",
              "previous": "Anterior"
          }
        },
        "lengthMenu": [ 5, 10, 25, 50, 75, 100 ],
        order: [[0, 'desc']],
        responsive:{
          details:{
            type:"column",
            target: "tr" 
          }
        }
      });
      
      this.accionEditar(datatable);
      this.accionEliminar(datatable);
    },
    cargarImagen(event){
      var archivo = event.target.files[0];
      if (!window.FileReader){
        this.validaciones.imagen  = "El navegador no soporta este tipo de archivos";
      }
      else if(!(/\.(jpg|png|jfif)$/i).test(archivo.name)){
        this.validaciones.imagen = "El archivo debe ser una imagen (jpg, png)";
        $("#cargarImagen").val("");
      }
      else{
        this.validaciones.imagen = "";
        this.imagen = archivo;
        let reader = new FileReader();
        reader.readAsDataURL(archivo);
        reader.onload = (e) => {
          this.imagenSeleccionada = e.target.result;
        }
      }
    },
    accionAgregarNuevo(){
      this.limpiarValidaciones();
      this.tituloModal = "Agregar un nuevo juguete";
      this.colorModal = "bg-primary";
      this.tipoAccion = 1;//acción crear
      this.id = 0;
      this.nombre = "";
      this.descripcion = "";
      this.restriccionEdad = 0;
      this.compania = "";
      this.precio = "";
      this.imagen = "image.jpg";
      this.imagenSeleccionada = "";
      $("#cargarImagen").val("");
    },
    accionEditar(datatable){
      this.limpiarValidaciones();
      let me = this;
      $("#tabla-juguetes tbody").on("click", "#editar", function () {
        var data = datatable.row($(this).parents('tr')).data();
        me.tituloModal = "Actualizar el juguete";
        me.colorModal = "bg-warning text-dark";
        me.tipoAccion = 2;//acción actualizar
        me.id = data.id;
        me.nombre = data.nombre;
        me.descripcion = data.descripcion;
        me.restriccionEdad = data.restriccionEdad;
        me.compania = data.compania;
        me.precio = data.precio;
        if(data.imagen == "" || data.imagen == null){
          me.imagen = "image.jpg";
        }
        else{
          me.imagen = data.imagen;
        }
        $("#cargarImagen").val("");
        $("#exampleModal").modal("show");
      });
    },
    accionEliminar(datatable){
      let me = this;
      $("#tabla-juguetes tbody").on("click", "#eliminar", function () {
        var data = datatable.row($(this).parents('tr')).data();
        me.id = data.id;
        me.$swal({
          title: '¿Está seguro de eliminarlo?',
          text: "¡No podrá revertir esta acción!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#6c757d',
          confirmButtonText: '¡Si, eliminarlo!',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            me.eliminarJuguete();
          }
        })
      });
    },
    listarJugutes(){
      let me = this;
      axios.get(variables.API_URL+"juguetes")
      .then(response => {
        me.juguetes = response.data;
        $('#tabla-juguetes').DataTable().clear().rows.add(response.data).draw();
      })
      .catch(error => console.error(error));
    },
    agregarJuguete(){
      if(this.validarCampos()){
        return;
      }
      
      let me = this;

      var formData = new FormData();
      formData.append("nombre", me.nombre);
      formData.append("descripcion", me.descripcion);
      formData.append("restriccionEdad", Number(me.restriccionEdad));
      formData.append("compania", me.compania);
      formData.append("precio", Number(me.precio));
      formData.append("imagen", me.imagen);
      let cabecera = {headers: {'Content-Type': 'multipart/form-data' }};
      
      axios.post(variables.API_URL+"juguetes", formData, cabecera)
      .then(response => {
        $("#exampleModal").modal('hide');
        me.listarJugutes();
      })
      .catch(error => console.error(error));
    },
    editarJuguete(){
      if(this.validarCampos()){
        return;
      }

      let me = this;
      var formData = new FormData();
      formData.append("id", me.id);
      formData.append("nombre", me.nombre);
      formData.append("descripcion", me.descripcion);
      formData.append("restriccionEdad", Number(me.restriccionEdad));
      formData.append("compania", me.compania);
      formData.append("precio", Number(me.precio));
      formData.append("imagen", me.imagen);
      let cabecera = {headers: {'Content-Type': 'multipart/form-data' }};

      axios.put(variables.API_URL+"juguetes", formData, cabecera)
      .then(response => {
        $("#exampleModal").modal('hide');
        me.listarJugutes();
      })
      .catch(error => console.error(error));
    },
    eliminarJuguete(){
      let me = this;
      axios.delete(variables.API_URL+"juguetes/"+me.id)
      .then(response => {
        me.listarJugutes();
      })
      .catch(error => console.error(error));
    },
    validarCampos(){
      var error = false;

      if(this.nombre == ""){
        error = true;
        this.validaciones.nombre = "El campo es requerido.";
      }
      else if(this.nombre.length > 50){
        error = true;
        this.validaciones.nombre = "El campo debe contener máximo 50 caracteres.";
      }
      else{
        this.validaciones.nombre = "";
      }

      if(this.descripcion.length > 100){
        error = true;
        this.validaciones.descripcion = "El campo debe contener máximo 100 caracteres.";
      }
      else{
        this.validaciones.descripcion = "";
      }

      if(this.restriccionEdad > 100 || this.restriccionEdad < 0){
        error = true;
        this.validaciones.restriccionEdad = "La Edad es de un rango de 0 a 100.";
      }
      else{
        this.validaciones.restriccionEdad = "";
      }

      if(this.compania == ""){
        error = true;
        this.validaciones.compania = "El campo es requerido.";
      }
      else if(this.compania.length > 50){
        error = true;
        this.validaciones.compania = "El campo debe contener máximo 50 caracteres.";
      }
      else{
        this.validaciones.compania = "";
      }

      if(this.precio == ""){
        error = true;
        this.validaciones.precio = "El campo es requerido.";
      }
      else if(/^[0-9\.]+$/.test(this.precio) == false){
        error = true;
        this.validaciones.precio = "Ingrese solo números decimales, ejemplo 149.99";
      }
      else if(this.precio < 0 || this.precio > 1000){
        error = true;
        this.validaciones.precio = "El precio tiene un rango de 1 a 1000.";
      }
      else{
        this.validaciones.precio = "";
      }

      return error;
    },
    limpiarValidaciones(){
      this.validaciones = {
        nombre: "",
        descripcion: "",
        restriccionEdad: "",
        compania: "",
        precio: "",
        imagen: ""
      }
    }
  },
  mounted(){
    this.cargarDataTable();
    this.listarJugutes();
  }

}
</script>

<style scoped>
.table{
  width: 100% !important;
}
</style>
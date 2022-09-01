<template>
    <div class="cont_ul">
        <ul class="container_opciones" >
            <li @click.self="$emit('enviar-name',nam)" v-for="nam in names">{{nam}}</li>
        </ul>
        <Incorrecto :estado="estado" v-if="time"/>  
    </div>
   
</template>

<script>
import Incorrecto from './Incorrecto.vue';
export default {
  components:{Incorrecto},
  props:{
    names:{
        defaul:[1,2,3,4]
    },
    time:null,
    estado:null
  },


}
</script>


<style scoped>
  .cont_ul{
   display: flex;
   height: 100%;
   width: 100%;
  }
  .container_opciones{
    height: 100%;
    font-size: 1.7rem;
    width: 100%;
    text-align: center;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    
  }
  .container_opciones li{
    width: 80%;
    background-color: #ffffbc;
    color: #1b2e23;
    list-style: none;
    border-radius: 8px;
    padding: 5px ;
    cursor: pointer;
    font-weight: bold;
  }

  .container_opciones li:hover{
    background-color:#ffcd63;
  }
</style>


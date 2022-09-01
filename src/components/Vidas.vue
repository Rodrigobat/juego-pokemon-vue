<template>
        <div class="cont_vidas">
          <img v-for="vida in vidas" src="../assets/images/corazon-editado.png" alt="">
        </div>
        <!-- <div class="invisible"></div> -->
        <!-- <input @click="mensaa" type="button" value="mostrar estado"> -->
</template>
<script>
export default {
    props:{
        estado:{
            default:null,
        },
         vidas:{
            default:[]
         }
    },
}
</script>
<style scoped>
.cont_vidas{
    display: flex;
    width: 40%;


    /* justify-content: center; */
}
.cont_vidas img{
    max-width: 14%;
    height: auto;
    padding: 5px;
}
</style>



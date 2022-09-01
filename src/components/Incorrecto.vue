<template>
    <div :class="{fallo : !estado, exito:estado, } ">
        <span v-if="!estado">OPCION INCORRECTA</span>
        <span v-if="estado">MUY BIEN!!!!</span>
    </div>
</template>
<script>
export default {
    props:{
        estado:null
    },

}
</script>
<style scoped>
    div{
        width:100%;
        height: 100%;
        color:  #1b2e23;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 900;
        font-size: 3rem;
        font-family: cursive;
        text-align: center;
    }
    .fallo{        
        background-color: rgba(255, 0, 0, .3);
        backdrop-filter: blur(2px);
    }
    .exito{
        background-color: rgba(0, 255, 13, 0.3);
        backdrop-filter: blur(2px);  
    }
</style>
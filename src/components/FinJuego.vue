<template>
    <div v-if="vidas.length==0" class="cont_mensaje">
        <h2>FIN DEL JUEGO</h2>
        <img src="../assets/images/llorando1.gif" alt="">
        <input class="buton especial" @click="volverAJugar()" type="button" value="Volver a jugar">
    </div>
</template>
<script>
export default {
    props:{
        vidas:{
            default:[1,2,3,4,5]
    },
    volverAJugar:{},
    }
}
</script>
<style scoped>
.cont_mensaje{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3;
    background-color:rgba(248, 89, 60, 0.616);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
img{
    width: 90%;
    margin: 10px 0;

}
h2{
font-size: 3rem;
color: #1b2e23;
font-weight: 900;
font-family: cursive;
}
.especial{
    font-size: 2rem;
}
</style>
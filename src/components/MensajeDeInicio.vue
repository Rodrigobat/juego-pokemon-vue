<template>
    <div class="cont_mensajeInicio">
        <h2>Adivina el nombre del pokemon</h2>
        <h3>Reglas del juego</h3>
        <ul>
            <li>aparecera una silueta de pokemon y cuatro nombres aleatorios</li>
            <li>debes adivinar que pokemon es el de la imagen</li>
            <li>si la opcin elegida es incorrecta perderas una vida</li>
            <li>si eliges la opcion correcta 3 veces consecutivas se recargara una vida. esta no podra sobrepasar el maximo de vidas</li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.cont_mensajeInicio{
    width: 85%;
    padding: 10px;
    min-height: 42%;
    overflow: auto;
    font-size: 1.2rem;
    background-color: #ffffbc;
}

@media screen and (max-width:768px){
    .cont_mensajeInicio{
        width:100%;
       

    }  
}
</style>
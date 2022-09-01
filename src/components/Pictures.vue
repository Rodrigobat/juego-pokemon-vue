<template>
    <div class="cont_imagen">
      <img :src="imgsrc" :class="{colore: !estado}" alt="">
    </div>
</template>

<script>
export default {
    props:{
        imgsrc:{
            default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
        },
        estado:null
    }
}
</script>
<style scoped>
.colore{
    filter: brightness(0);   
}
img{
     width: 100%;
     user-select: none;
     -moz-user-select: none;
     -ms-user-select: none;
     -webkit-user-drag: none;
     -webkit-user-select: none;
}
.cont_imagen{
    border: solid 3px black;
    width: 85%;
    min-height: 45%;
    max-height: 45%;
    display: flex;
    justify-content:center;
    background-color:#ffffbc;
    margin-top:20px;
}

@media screen and (max-width:768px){
    .cont_imagen{
  
    width: 100%;

 }
}
</style>
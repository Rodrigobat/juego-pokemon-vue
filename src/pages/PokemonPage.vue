<template>
    <div class="contain">
      <Pictures :imgsrc="img" :estado="estado"/>     
      <div class="cont_botones">  
        <Vidas :estado="estado" :vidas="vidas"/> 
        <div class="botones">  
          <input v-show="empezarJuego" class="buton" @click.once="pokemons(); cambiarEstadoEmpezar()" type="button" value="jugar">
          <input v-show="!empezarJuego" class="buton" @click="volverAJugar()" type="button" value="reiniciar">
        </div>      
      </div>
      <MensajeDeInicio v-if="empezarJuego"/>
      <Options :names="names" :time="time" :estado="estado" @enviar-name="comparandoName"/>       
       <FinJuego :vidas="vidas" :volverAJugar="volverAJugar"/>
      <span>{{pokemonActual}}</span>
    </div>
</template>

<script>
import Options from '../components/Options.vue';
import Pictures from '../components/Pictures.vue';
import Vidas from '../components/Vidas.vue';
import FinJuego from '../components/FinJuego.vue';
import numAleatorios from '../funcionalidad/obtenerNumeros';
import MensajeDeInicio from '../components/MensajeDeInicio.vue'
export default {
    components: { Options, Pictures, Vidas, FinJuego, MensajeDeInicio},
    data() {
      return {
        names:[],
        img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/171.svg",
        pokemonActual:"",
        estado:null,
        time:false,
        vidas:[1,2,3,4,5],
        empezarJuego:true,
        contRecargarVida:0
      }
    },
    methods: {
     async pokemons(){
        let num=numAleatorios();
        let indice=this.indiceAleatorio()
            let res= await fetch(`https://pokeapi.co/api/v2/pokemon?limit=621&offset=0.`)
            let data= await res.json()
            const nom= data.results
            let rr=nom[num[indice]].name
            this.pokemonActual=rr       
            this.names.push(nom[num[0]].name,nom[num[1]].name,nom[num[2]].name, nom[num[3]].name)
            this.img=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${encodeURI(num[indice]+1)}.svg`          
        },

      indiceAleatorio(){
        let nu=Math.floor(Math.random() * (3 - 0 + 1) + 0)
        return nu
      },

      comparandoName(name){
        this.pokemonActual!=name ? this.estado=false  : this.estado=true
      },

      reiniciarValores(){
        this.time=true
        if(this.vidas.length>0){
          setTimeout(()=>{
          this.names=[]
          this.estado=null
          this.pokemons()
          this.time=false
        },2000)
        }
      },
      cambiarVidas(){
            this.vidas.pop()
        },

      recargarVidas(){
        this.vidas=[1,2,3,4,5]
      },
      cambiarEstadoEmpezar(){
        this.empezarJuego=false
      },

      volverAJugar(){
        this.recargarVidas();
        this.names=[]
        this.estado=null
        this.pokemons()
        this.time=false
      },

      recargarVida3Aciertos(){
        if(this.vidas.length<5){
          this.vidas.push(1)
        }
      }
    },

    watch: {
      estado(){
        if(this.estado)
        {
          this.reiniciarValores()
          this.contRecargarVida++
        }
        else if(this.estado==false){
          this.cambiarVidas()
          this.reiniciarValores()
          this.contRecargarVida=0
        }else return
        
      },
      contRecargarVida(){
        if(this.contRecargarVida==3){
          this.recargarVida3Aciertos()
          this.contRecargarVida=0
        }else{
          return
        }
      }
    },
}
</script>

<style scoped>
.contain{
  display:flex;
  flex-direction: column;
  align-items: center;
  background-color:#00625c;
  width:100% ;
  max-width: 720px;
  height: 100vh;
}
.cont_botones{
  padding: 10px 0;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}
.botones{
   width: 40%; 
   display: flex;
   justify-content: flex-end;
}
</style>
<template lang="pug">
#app
  img(src='dist/logo.png')
  h2 VueMusic
  select(v-model="pais_seleccionado")
    option(v-for="pais in paises" v-bind:value="pais.value") {{ pais.name }}
  #lista_artistas
    loading(v-show="cargando")
    artista(v-for="artista in artistas" v-bind:artista="artista" v-bind:key="artista.mbid")
</template>

<script>
import getArtistas from './api'
import artista from './components/artista.vue'
import loading from './components/loading.vue'

export default {
  name: 'app',
  data () {
    return {
      pais_seleccionado: 'venezuela',
      artistas: [],
      cargando: true,
      paises: [
      {name:'Venezuela',value:'venezuela'},
      {name:'Colombia',value:'colombia'},
      {name:'Argentina',value:'argentina'}
      ],
    }
  },
  components:{
    artista,
    loading
  },
  methods:{
    mostrar_lista: function () {
      const self = this
      this.artistas = []
      this.cargando = true
      getArtistas(this.pais_seleccionado)
        .then(function (artistas) {
          self.artistas = artistas
          self.cargando = false
        })
    }
  },
  mounted: function () {
    this.mostrar_lista()
  },
  watch: {
    pais_seleccionado: function () {
      this.mostrar_lista()
    }
  }
}
</script>

<style lang="stylus" scoped>
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

h1
  font-weight normal
  margin-top 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
  
#lista_artistas
  margin-top 20px
  
#app img
  width 100px
</style>

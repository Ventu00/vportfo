<template>
  <div id="app">
    <Home/>
    <ProjectsView/>
  </div>
</template>

<script>
import Home from './components/home.vue'
import ProjectsView from './components/projectsView.vue'

export default {
  name: 'App',
  components: {
    Home,
    ProjectsView // Cambiar el nombre del componente aquí
  }
}
</script>

<style>
*{
  cursor: none;
}
body{
  background-color: black;
}

.skills {
  padding: 15px;
  width: 84px;
}
.lenguages {
  padding: 5px;
  overflow-y: auto;
}

</style>

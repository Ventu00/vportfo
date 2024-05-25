<template>
    <div class="project-detail">
      <!-- Contenido de tu componente aquí -->
      <h1>{{ project.title }}</h1>
      <img :src="project.image" :alt="project.title">
      <p>{{ project.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectDetail',
    props: {
      project: Object // Propiedad para recibir el proyecto seleccionado desde el componente ProjectsView
    }
  }
  </script>
  
  <style scoped>
  /* Estilos adicionales según sea necesario */
  .project-detail {
    /* Estilos para el componente ProjectDetail */
  }
  </style>
  
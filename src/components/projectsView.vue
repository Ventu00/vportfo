<template>
  <div class="projects-view container animate__animated animate__fadeInUp">
    <h1 class="text-center text-white my-4">Projects</h1>
    <button @click="closeProjects" class="btn btn-outline-light mb-4">Close</button>
    <div class="row">
      <div 
        class="col-md-4 col-sm-6 mb-4" 
        v-for="(project, index) in projects" 
        :key="index" 
        @click="selectProject(project)"
      >
        <div class="card h-100">
          <img :src="project.image" class="card-img-top" :alt="project.title">
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsView',
  data() {
    return {
      projects: [
        { 
          title: 'Bitiby',
          description: 'Una aplicación solidaria con mapa interactivo',
          image: 'public/src/assets/go.png',
          initialProblem: 'Se nos planteó un problema: ¿Como ayudar a la gente necesitada de la calle de durante el dia a dia?',
          solution: "Para ello, yo y mi equipo hicimos una aplicacion con mapa interactivo\n donde puedes hacer reservas a restaurantes donantesi ver lugares donde puedes donar",
                    process: 'Hemos usado Scrum y diversos metodos de trabajo. Tambén hemos gestionado con git hub las diferentes partes del proyecto.'
        },
        { 
          title: 'El mon de la Laia',
          description: 'Description for project 2',
          image: './images/project2.jpg',
          initialProblem: 'Initial problem for project 2',
          solution: 'Solution for project 2',
          process: 'Process for project 2'
        },
        { 
          title: 'Pokedex',
          description: 'Description for project 3',
          image: './images/project3.jpg',
          initialProblem: 'Initial problem for project 3',
          solution: 'Solution for project 3',
          process: 'Process for project 3'
        },
        // Agrega más proyectos según sea necesario
      ]
    }
  },
  methods: {
    selectProject(project) {
      this.$emit('select-project', project); // Emitir el evento select-project
    },
    closeProjects() {
      this.$emit('close-projects'); // Emitir el evento close-projects
      
    }
  }
}
</script>


<style scoped>
h1{
  font-size: 85px;
}

.btn{
  cursor: none;
}
.projects-view {
  color: white;
}
.card {
  background-color: #333;
  color: white;
  border-radius: 30px;
}
.card img {
  height: 200px;
  
  object-fit: cover;
}
</style>

<template>
  <div class="projects-view container">
    <h1 class="text-center text-white my-4">Projects Gallery</h1>
    <button @click="$emit('close-projects')" class="btn btn-secondary mb-4">Close</button>
    <div class="row">
      <div class="col-md-4 col-sm-6 mb-4" v-for="(project, index) in projects" :key="index" @click="showProjectDetail(index)">
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
        { title: 'Project 1', description: 'Description for project 1', image: './images/project1.jpg' },
        { title: 'Project 2', description: 'Description for project 2', image: './images/project2.jpg' },
        { title: 'Project 3', description: 'Description for project 3', image: './images/project3.jpg' },
        // Agrega más proyectos según sea necesario
      ]
    }
  },
  methods: {
    showProjectDetail(index) {
      // Asegúrate de que this.$router esté definido antes de llamar a push
      if (this.$router) {
        this.$router.push({ name: 'ProjectDetail', params: { index } });
      } else {
        console.error('Vue Router no está disponible.');
      }
    }
  }
}
</script>

<style scoped>
.projects-view {
  color: white;
}
.card {
  background-color: #333;
  color: white;
}
.card img {
  height: 200px;
  object-fit: cover;
}
</style>

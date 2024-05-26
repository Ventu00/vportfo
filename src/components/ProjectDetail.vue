<template>
  <div class="project-detail container">
    <br>
    <button @click="backToProjects" class="btn btn-outline-light mb-4">Back to Projects</button>
    <div v-if="project" class="card h-100" :style="{ backgroundColor: projectBackgroundColor }">
      <img :src="project.image" class="card-img-top" :alt="project.title">
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">{{ project.description }}</p>
        <div class="project-info" :style="{ backgroundColor: contentBackgroundColor }">
          <div><strong>Initial Problem:</strong> {{ project.initialProblem }}</div>
          <div><strong>Solution:</strong> {{ project.solution }}</div>
          <div><strong>Process:</strong> {{ project.process }}</div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading project details...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetail',
  props: {
    project: {
      type: Object,
      default: () => ({
        image: '',
        title: '',
        description: '',
        initialProblem: '',
        solution: '',
        process: ''
      })
    }
  },
  methods: {
    backToProjects() {
      this.$emit('back-to-projects'); // Emitir el evento back-to-projects
    }
  }
};
</script>

<style scoped>
.project-detail {
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

<template>
  <div class="project-detail container animate__animated animate__fadeIn">
    <br>
    <button @click="backToProjects" class="btn btn-outline-light mb-4">Back to Projects</button>
    <div v-if="project" class="card h-100" :style="{ backgroundColor: projectBackgroundColor }">
      <div class="card-body">

        <div class="titdetail">
          <h1 class="card-title">{{ project.title }}</h1>
        </div>

        <img :src="project.image" class="card-img-top" :alt="project.title">

        <!-- <p class="card-text">{{ project.description }}</p> -->
        <div class="project-info" :style="{ backgroundColor: contentBackgroundColor }">
          <div class="titdetail"><strong>Initial Problem:</strong></div>
          <div class="contdetai">
            <div class="textdet">
              {{ project.initialProblem }}

            </div>
          </div>
          <div class="titdetail"><strong>Solution:</strong></div> 
          <div class="contdetai ">
            <div class="textdet">

            {{ project.solution }}
            </div>
            <button class="btn btnSolut"><img class="arrowbtn" src="./images/arrow.svg" alt=""></button>
          </div>
          <div class="titdetail"><strong>Process:</strong></div>
          <div class="contdetai">
            <div class="textdet">

            {{ project.process }}
            </div>
          </div>
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
.btnSolut {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 150px;
  background-color: #09DE85;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 15px; /* Ajusta este valor según tus necesidades */
  border-bottom-right-radius: 15px; /* Ajusta este valor según tus necesidades */
}

.arrowbtn {
  padding: 15px; /* Remueve el padding del elemento img */
  width: 100%; /* Ajusta el ancho de la imagen según necesites */
  height: auto; /* Mantiene la proporción de la imagen */
  text-align: center; /* Opcional, ya que flexbox se encarga de centrar */
}

.textdet{
  margin-right: 200px;
}

.contdetai {
  position: relative; /* Necesario para el posicionamiento absoluto del botón */
  margin-bottom: 30px;
  margin-top: 10px;
  border-radius: 30px;
  padding: 55px;
  background-color: rgba(41, 41, 41, 0.867);
}

.btn{
  cursor: none;
}
.card-title{
  font-size: 90px;
  color: #09DE85;
}



.titdetail{
  font-size: 40px;
  border-radius: 30px;
  padding: 40px;
  background-color: rgba(16, 16, 16, 0.778)

}

.project-detail {
  color: white;
}
.card {
  background-color: #3333331c;
  color: white;
  border-radius: 40px;
}
.card img {
  height: 200px;
  object-fit: cover;
}
</style>

<template>


  <div class="project-detail container animate__animated animate__fadeIn">
    <br>
    <div v-if="project" class="card h-100" :style="{ backgroundColor: projectBackgroundColor }">
      <div class="card-body">
        <button @click="backToProjects" class="btn goback mb-4"></button>

        <div class="titdetail">
          <h1 class="card-title">{{ project.title }}</h1>
        </div>
  
        <div id="carouselExample" class="carousel slide">
          <button v-if="project.images.length > 1" class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true">
                      <img src="./images/left.png" alt="Previous slide icon">
                    </span>
                    <span class="visually-hidden">Previous</span>
  </button>
  <button v-if="project.images.length > 1" class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true">
                      <img src="./images/rigth.png"  alt="Next slide icon">
                    </span>
                    <span class="visually-hidden">Next</span>
  </button>
  <div class="carousel-inner">
    <div v-for="(item, index) in project.images" :key="index" :class="{ 'carousel-item imgcontpro': true, 'active': index === 0 }">
      <template v-if="isYouTubeVideo(item)">
        <iframe class="card-img-top" width="100%" height="100%" :src="embedYouTubeVideo(item)" frameborder="0" allowfullscreen></iframe>
      </template>
      <template v-else>
        <img :src="item" class="d-block w-100 img-fluid card-img-top" :alt="'project.title' + (index + 1)">
      </template>
    </div>
  </div>

  <!-- Carousel controls -->

</div>


        <!-- <p class="card-text">{{ project.description }}</p> -->
        <div class="project-info" :style="{ backgroundColor: contentBackgroundColor }">
          <div class="titdetail"><strong>Initial Problem:</strong></div>
          <div class="contdetai">
            <div class="">
              {{ project.initialProblem }}
            </div>
          </div>
          <div class="titdetail">
            <a :href="project.link" target="_blank" class="btn btnSolut">
              <img class="arrowbtn" src="./images/arrow.svg" alt="">
            </a>
            <strong class="tittext">Solution:</strong>
          </div>
          <div class="contdetai">
            <div class="textdet">
              {{ project.solution }}
            </div>
          </div>
          <div class="titdetail"><strong>Process:</strong></div>
          <div class="contdetai">
            <div class="process">
              <template v-if="Array.isArray(project.process)">
                <div v-for="(step, index) in project.process" :key="index" class="process-step">
                  <br>
                  <h3>{{ step.step }}</h3>
                  <p>{{ step.description }}</p>
                  <img v-if="step.image" :src="step.image" alt="Step Image" class="imgstep">
                </div>
              </template>
              <template v-else>
                <p>{{ project.process }}</p>
              </template>
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
        link: '',
        process: ''
      })
    }
  },
  methods: {
    backToProjects() {
      this.$emit('back-to-projects'); // Emitir el evento back-to-projects
    },
    isYouTubeVideo(item) {
      // Check if the item is a YouTube video link
      return typeof item === 'string' && item.startsWith('https://www.youtube.com/');
    },
    embedYouTubeVideo(link) {
  // Extract the video ID from the YouTube link and construct the embed URL
  const videoId = link.match(/[?&]v=([^&]+)/);
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId[1]}`;
  } else {
    // If the link is invalid or not a YouTube video, return an empty string
    return '';
  }
}
  }
};
</script>

<style scoped>

/* .carousel-control-next-icon img{
  width: 20px;
  height: 20px;
} */


.carousel-control-prev-icon img,
.carousel-control-next-icon img {
  max-width: 50px; /* Set the maximum width of the image */
  max-height: 50px; /* Set the maximum height of the image */
}








.process-step {
  height: 100%; /* or any other desired height */
  width: 100%; /* Ensure it takes full width */
}

.process-step img {
  border-radius: 15px;

  width: 100%;
  min-height: 580px;
  object-fit: cover;
}





        .goback {
          position:fixed;
          z-index: 1111;
            background-image: url('goback.svg');
            background-size: contain; /* Asegura que la imagen se ajuste dentro del botón */
            background-repeat: no-repeat; /* Evita que la imagen se repita */
            background-position: center; /* Centra la imagen en el botón */
            cursor: none; /* El cursor debe ser pointer para los botones */
            padding: 10px 20px; /* Espaciado interno del botón */
            border: none; /* Sin borde */
            border-radius: 5px; /* Bordes redondeados */
            position: absolute; /* Posicionamiento absoluto del botón */
            left: 20px; /* Ajuste para alinear el botón a la izquierda */
            width: 60px; /* Ancho del botón */
            height: 60px; /* Alto del botón */
            transition: opacity 0.3s ease-in-out; /* Transición suave para la sombra */

        }
        .goback:hover {
          opacity: 0.3;
        }
.imgcontpro {
  height: 610px; /* or any other desired height */
  width: 100%; /* Ensure it takes full width */
}

.imgcontpro img {
  border-radius: 15px;

  width: 100%;
  min-height: 610px;
  object-fit: cover;
}


.card-title {
  font-size: 90px;
  color: #09DE85;
  overflow: hidden;
  text-align: center;
}

.btnSolut {
  position: absolute;
  top: 0; /* Posiciona el botón en la parte superior del contenedor */
  right: 0; /* Alinea el botón a la derecha */
  margin: 0; /* Elimina cualquier margen */
  padding: 0; /* Elimina cualquier padding */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  background-color: #09DE85;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 15px; /* Ajusta este valor según tus necesidades */
  border-bottom-right-radius: 15px; /* Ajusta este valor según tus necesidades */
  text-decoration: none; /* Quita el subrayado del enlace */
  transition: opacity 0.3s ease-in-out;
}


.btnSolut:hover {
opacity: 0.2;
}


.arrowbtn {

  padding: 15px; /* Remueve el padding del elemento img */
  width: 100%; /* Ajusta el ancho de la imagen según necesites */
  height: auto; /* Mantiene la proporción de la imagen */
  text-align: center; /* Opcional, ya que flexbox se encarga de centrar */
}

.textdet {
  /* Otros estilos que desees aplicar al texto */
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




.titdetail{
  overflow: hidden;
  
  position: relative;
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



@media (max-width: 1090px) {


  .contdetai {
  position: relative; /* Necesario para el posicionamiento absoluto del botón */
  margin-bottom: 30px;
  margin-top: 10px;
  border-radius: 30px;
  padding: 20px;
  background-color: rgba(41, 41, 41, 0.867);
}

.tittext{}

.titdetail{
  overflow: hidden;
  
  position: relative;
  font-size: 40px;
  border-radius: 30px;
  padding: 25px;
  background-color: rgba(16, 16, 16, 0.778)
}

.btnSolut {
  position: absolute;
  top: 0; /* Posiciona el botón en la parte superior del contenedor */
  right: 0; /* Alinea el botón a la derecha */
  margin: 0; /* Elimina cualquier margen */
  padding: 0; /* Elimina cualquier padding */
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  background-color: #09DE85;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 15px; /* Ajusta este valor según tus necesidades */
  border-bottom-right-radius: 15px; /* Ajusta este valor según tus necesidades */
  text-decoration: none; /* Quita el subrayado del enlace */
}



  .titdetail{
    font-size: 30px;
  }
  #circularcursor{
    display: none;

  }

  .goback{
    margin-top: 0;
          margin-left: 1%;
          padding: 5px;
          width: 40px; /* Ancho del botón */
            height: 40px;
  }
  .circularcursor{
    display: none;

  }

  #clickcursor {
    display: none;
}
.card-title{
  font-size: 40px;
  text-align: center;
}
.imgcontpro {
  height: 210px; /* or any other desired height */
  width: 100%; /* Ensure it takes full width */
}

.imgcontpro img {
  width: 100%;
  min-height: 210px;
  object-fit: cover;
}

.process-step  {
  height: 100%; /* or any other desired height */
  width: 100%; /* Ensure it takes full width */
}

.process-step  img {
  width: 100%;
  min-height: 210px;
  object-fit: cover;
}

}
</style>

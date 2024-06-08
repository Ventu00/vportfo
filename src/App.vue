<template>
  <div id="app" :class="{ 'blurred': showProjects }">
    <LoaderComponent v-if="loading" />
    <div :class="{ 'blurred': showProjects }">
      <Home @toggle-projects="showProjects = !showProjects" />
    </div>
    <div v-if="showProjects" class="overlay">
      <ProjectsView @close-projects="showProjects = false" />
    </div>
    <div id="circularcursor"></div>
    <div id="clickcursor"></div>
    
  </div>
</template>

<script>
import { Carousel } from 'bootstrap';
// En main.js o App.vue
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './components/home.vue'
import ProjectsView from './components/projectsView.vue'
import LoaderComponent from './components/LoaderComponent.vue' // Importa el componente Loader

export default {
  name: 'App',
  components: {
    Home,
    ProjectsView,
    LoaderComponent // Añade el componente Loader a los componentes
  },
  data() {
    return {
      showProjects: false,
      loading: true // Estado inicial del loader
    }
  },
  mounted() {
    // Inicializa el carrusel sin jQuery
    const myCarousel = document.getElementById('carouselExampleIndicators');
    new Carousel(myCarousel);
  
    const cursor = document.getElementById('circularcursor');
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    document.addEventListener('mousemove', function(e) {
      if (isMobile) {
        cursor.style.display = 'none';
        return;
      }
      const cursorWidth = cursor.offsetWidth;
      const cursorHeight = cursor.offsetHeight;
      const mouseX = e.clientX - (cursorWidth / 2);
      const mouseY = e.clientY - (cursorHeight / 2);
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });

    document.addEventListener('click', function(e) {
      if (isMobile) {
        cursor.style.display = 'none';
        return;
      }
      const cursorWidth = cursor.offsetWidth;
      const cursorHeight = cursor.offsetHeight;
      const mouseX = e.clientX - cursorWidth / 2 - 5; // Ajuste a la izquierda
      const mouseY = e.clientY - cursorHeight / 2 - 5; // Ajuste hacia arriba
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
      cursor.style.height = '40px';
      cursor.style.width = '40px';
      cursor.style.display = 'block';
      setTimeout(function() {
        cursor.style.height = '70px';
        cursor.style.width = '70px';
        setTimeout(function() {
          cursor.style.height = '40px';
          cursor.style.width = '40px';
        }, 100);
      }, 10);
    });

    // Simula la carga de datos
    setTimeout(() => {
      this.loading = false; // Oculta el loader después de 3 segundos
    }, 3000);
  }
}
</script>

<style>


.slider-container {
  cursor: none !important;
  margin: 0;
    width: 100%;
    /* background-color: #181818; */
    padding: 0;

}
.slider-container{
  cursor: none !important;

    padding-left: 0;}

.carousel-inner{
  cursor: none !important;

  margin: 0;
    padding: 0;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  cursor: none !important;
    background-image: none; /* Elimina el ícono por defecto */
    background-color: #09de97; /* Fondo verde del círculo */
    border: 2px solid #09de97; /* Borde verde alrededor del ícono */
    border-radius: 50%; /* Hacer el borde redondo */
    padding: 15px; /* Espacio alrededor del ícono dentro del borde */
    width: 70px; /* Ancho del círculo */
    height: 70px; /* Alto del círculo */
    color: #000000;
    display: flex; /* Para centrar el icono */
    justify-content: center; /* Para centrar el icono */
    align-items: center; /* Para centrar el icono */
}



.carousel-control-prev-icon,
.carousel-control-next-icon {
  cursor: none !important;

}
.carousel-control-next{
  cursor: none !important;

}


[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
  cursor: none !important;
}



.carousel-control-prev,
.carousel-control-next {
  cursor: none !important;

    width: 5%; /* Ajusta el ancho de los controles si es necesario */
}

.carousel-item{
    background-color: #181818;
    border-radius: 15px;
    cursor: none !important;

}
.carousel-indicators button {
  cursor: none !important;

    width: 5px; /* Ancho del indicador */
    height: 10px; /* Alto del indicador */
    border-radius: 50%; /* Hacer el borde redondo */
    background-color: rgba(255, 255, 255, 0.5); /* Color blanco apagado para los indicadores inactivos */
}

.carousel-indicators .active {
    cursor: none;

    background-color: #ffffff; /* Color blanco para el indicador activo */
}

.carousel-indicators [data-bs-target] {
    cursor: none;

    height: 15px;
    width: 15px;
}

.d-block{
    cursor: none;

    width: 100px;
    height: 100px;
}
#app.blurred {
  filter: blur(50px);
}

::selection {
    background-color: #09de85; /* Cambia el color de fondo de la selección a verde */
    color: #fff; /* Cambia el color del texto seleccionado a blanco */
}

#clickcursor {
    background-color: #00000088;
    border: 3px solid #09de85;
        height: 10px;
    width: 10px;
    border-radius: 50%;
    position: fixed;
    z-index: 9999;
    pointer-events: none;
    display: none;
    transition: height 0.6s, width 0.6s; /* Transición suave para cambiar el tamaño */
}
    .circularcursor{
        background-color: #00000088;
        border: 3px solid #09de8500;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        position: fixed;
        z-index: 9999;
        pointer-events: none;
        transition: height 0.6s, width 0.6s;
    }
#circularcursor{
  background-color: #00000088;
    border: 3px solid #09de85;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    position: fixed;
    z-index: 9999;
    pointer-events: none;
    transition: height 0.6s, width 0.6s; /* Transición suave para cambiar el tamaño */}

* {
  cursor: none;
}
body {
  background-color: black;
}
.skills{
    padding: 15px;
    width: 84px;
}

.blurred {
  filter: blur(45px);
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.899);
  z-index: 90;
  overflow-y: auto;
}

*::-webkit-scrollbar {
  height: 11px;
  width: 11px;
}
*::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #171818;
}

*::-webkit-scrollbar-track:hover {
  background-color: #000000;
}

*::-webkit-scrollbar-track:active {
  background-color: #2D2E2F;
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #08D28E;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #09DE97;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #07AE76;
}
@media (max-width: 1090px) {
  #circularcursor{
    display: none;

  }
  .circularcursor{
    display: none;

  }

  #clickcursor {
    display: none;
}
}
</style>

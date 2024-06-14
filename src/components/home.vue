<template>
  <div class="home-view" :class="{ 'fixed': showProjects || selectedProject !== null }">

  <div class="all">
    <div class="blur-background" :class="{ 'blurred': showProjects }">

    <div class="margincont">
      <div class="container-fluid">
        <div class="row">
          <div class="bar footer containerCom col-md-12 animate__animated animate__fadeInDownBig">
            <p>Àlex Ventura</p>
          </div>
        </div>
        <div class="row primer">
          <div class="introcont col-md-9 col-sm-12 animate__animated animate__fadeInTopLeft">
            <div class="intro ">
              <div class="image-container">
                <!-- <div class="gradient">
                
                <img src="./images/alex.svg" class="img-fluid aleximg" alt="Imagen de Àlex Ventura">
              </div> -->
              </div>
              <div class="text-container">
                <h1 class="introtext introtit">Àlex Ventura</h1>
                <h2 class="greenText introtext subtitintro">IT Specialist & Web developer</h2>
                <p class="contentText introtext parrftit">Offering efficient solutions
through versatile skills. I hold up
at the forefront of the latest technologies.</p>
              </div>
            </div>
          </div>

          <div class="lengcont col-md-4 col-sm-12 animate__animated  animate__fadeInTopLeft">
            <div class="lenguages">
              <!-- Aquí se pueden colocar las imágenes de los lenguajes -->
            </div>
          </div>
        </div>

        <div class="col-md-12 ">
          <div class="row groups ">
            <div class="group1 col-md-6 animate__animated animate__fadeInTopLeft">
              <div class="threeaps">
              <div class="row">
                <div class="compdt1 col-md-4">
                  <a href="https://www.linkedin.com/in/%C3%A0lex-ventura-vilalta-491607271/" target="_blank">
                    <img class="iconPro img-fluid" src="./images/linked.svg" alt="LinkedIn">
                    <img src="./images/link.png" class="top-right-link" alt="Link icon">
                  </a>
                </div>
                <div class="compdt2 col-md-4">
                  <a href="https://github.com/Ventu00?tab=repositories" target="_blank">
                    <img class="iconPro img-fluid" src="./images/github.svg" alt="GitHub">
                    <img src="./images/link.png" class="top-right-link" alt="Link icon">
                  </a>
                </div>
                <div class="compdt3 col-md-4 img-fluid">
                  <!-- <a class="cvtext" href="https://drive.google.com/file/d/1mLNDIuirqW9Bz0fGC4xWMdhxx1WLqk8N/view" target="_blank"> -->
                    <div class="textexp">
                      <h2 id="numberexp" class="numberexp" ></h2><p class="parexp" >Years in IT/Dev</p>

                    </div>


                    <!-- <img class="iconPro img-fluid" src="./images/download.png" alt="Download CV"> -->
                    <!-- <img src="./images/link.png" class="top-right-link" alt="Link icon"> -->
                  <!-- </a> -->
                </div>
              </div>
              <div class="mail containerCom col-md-12">
                <img class="iconPro mailImage img-fluid" src="./images/mail.png" alt="Email icon">
                <div class="textmail">
                  <h2 class="titmail">Something on mind?</h2>
                  <p class="contentText maildir">alexventvv@gmail.com <img class="copyimage img-fluid" src="./images/copy.png" alt="Copy icon"></p>
                  <a href="#" class="top-right-link">
                    <img src="./images/link.png" alt="Link icon">
                  </a>
                </div>
              </div>
              </div>
            </div>
            <div class="projects colcover containerComProject col-md-6 col-sm-12 animate__animated  animate__fadeInTopLeft" @click="toggleProjects" tabindex="0" @keydown="handleKeyPress">
              <video autoplay muted loop class="video-background">
                <source src="./images/projectvideo.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
              <a href="your-link-here" class="top-right-go">
                <img src="./images/go.png" alt="Go icon">
              </a>
              <div class="conTxtProj">
                <h1>Projects</h1>
                <p class="contentText">Explore my creations and see how I transform ideas into effective and functional solutions.</p>
              </div>
            </div>

          </div>
        </div>
        <div class="row">
          <a class="linkmap" href="
          https://www.google.es/maps/place/Barcelona/@41.3926384,2.0576165,12z/data=!3m1!4b1!4m6!3m5!1s0x12a49816718e30e5:0x44b0fb3d4f47660a!8m2!3d41.3873974!4d2.168568!16zL20vMDFmNjI?entry=ttu">
           <div class="col-md-12 map containerCom animate__animated  animate__fadeInTopLeft">
            <img src="./images/mark.svg" alt="Map marker icon">
          </div>
        </a>
       
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-12 slider-container animate__animated  animate__fadeInTopLeft">
                <div id="carouselExampleIndicators" class="carousel slide">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <!-- <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> -->
                  </div>
                  <div class="carousel-inner ">
                    <div class="carousel-item active">
                      
                      <img src="./images/ralarsa.png" class="imgSlider" alt="Ralarsa IT Specialist">
                      <div class="textSlider">
                        <h2><span class="green-text">IT Specialist</span> in <span class="white-text">Ralarsa</span></h2>
                        <h3>2020-2021</h3>
                        <p class="contentText">  Provided technical support to departments and workshops, resolving<br> hardware and software issues efficiently.
                    Installed and configured <br>new Windows and Linux operating systems, ensuring smooth operations.<br>
                    Handled both physical and remote troubleshooting for Windows and Linux systems.</p>
                    <a class="linkslider" target="blank" href="https://www.ralarsa.com/">Website Here</a>
                    <br>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src="./images/nvpm.png" class="imgSlider pnvimg" alt="Perfumery Nuria Vilalta CMS Developer">

                      <div class="textSlider">
                        <h2><span class="green-text">CMS Developer</span> in <span class="white-text">Perfumery Nuria Vilalta</span></h2>
                        <h3>2023</h3>
                        <p class="contentText">I developed and managed a CMS page using WordPress for Perfumery Núria Vilalta, aimed at establishing their online presence.</p>
                        <a class="linkslider" target="blank" href="https://perfumerianuriavilalta.com/">Website Here</a>

                      </div>
                      <br>

                    </div>
                    <!-- <div class="carousel-item">
                      
                      <img src="" class="d-block w-100" alt="">
                    </div> -->
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true">
                      <img src="./images/left.png" alt="Previous slide icon">
                    </span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true">
                      <img src="./images/rigth.png" alt="Next slide icon">
                    </span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="bar containerCom footer col-md-12">
            <p>Àlex Ventura</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div v-if="showProjects && !selectedProject" class="overlay animate__animated animate__fadeIn">
    <projects-view @close-projects="closeProjects" @select-project="showProjectDetail"></projects-view>
  </div>

  <div v-if="selectedProject !== null" class="overlay" >
    <project-detail :project="selectedProject" @back-to-projects="backToProjects"></project-detail>
  </div>

    </div>

</template>


<script>
import ProjectsView from './projectsView.vue';
import ProjectDetail from './ProjectDetail.vue';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

export default {
  name: 'HomeView',
  components: {
    ProjectsView,
    ProjectDetail
  },
  data() {
    return {
      showProjects: false,
      selectedProject: null
    };
  },
  methods: {
    
    handleKeyPress(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggleProjects();
    }
  },
    sendEmail() {
      const email = 'alexventvv@gmail.com';
      window.location.href = `mailto:${email}?subject=Subject&body=Body`;
    },
    closeProjects() {
    this.showProjects = false;
    console.log("durum");
  },
    toggleProjects() {
      this.showProjects = !this.showProjects;
      this.selectedProject = null; // Reset selected project when toggling projects
      
    },
    showProjectDetail(project) {
      this.selectedProject = project;
    },
    backToProjects() {
    console.log('Back to Projects button clicked');
    this.selectedProject = null; // Limpiar el selectedProject
  }
  },
  mounted() {

    const startYear = 2020; // Cambia esto al año de inicio real

// Obtiene el año actual
const currentYear = new Date().getFullYear();

// Calcula los años de experiencia
const yearsOfExperience = currentYear - startYear;

// Actualiza el contenido del elemento HTML con el ID 'numberexp'
document.getElementById('numberexp').textContent = yearsOfExperience;

    const images = [
      "APIs.svg",
      "Mapbox.svg",
      "Java.png",
      "PHP.png",
      "HTML.png",
      "Vue.js.png",
      "Laravel.png",
      "Bash.png",
      "Bootstrap.png",
      "JSON.png",
      "Git.png",
      "XML.png",
      "Javascript.png",
      "CSS.png",
      "SQL.svg"
    ];

    const skillsContainer = document.querySelector(".lenguages");

    images.forEach(function(imageName) {
      const img = document.createElement("img");
      img.src = require(`@/assets/images/${imageName}`); // Utilizando require para cargar la imagen
      img.alt = "";
      img.classList.add("skills", "no-select"); // Añadir la clase 'no-select'

      // Añadir tooltip usando Tippy.js
      tippy(img, {
        content: imageName.replace(/\.[^/.]+$/, ""), // Eliminar la extensión del nombre del archivo para el tooltip
      });

      skillsContainer.appendChild(img);
    });

    document.addEventListener("DOMContentLoaded", function() {
  // Obtener el elemento div
  var divElement = document.querySelector(".mail");

  // Agregar evento click al div
  divElement.addEventListener("click", function(event) {
    // Obtener el correo electrónico
    var email = document.querySelector(".maildir").textContent.trim();

    // Si se hizo clic en la imagen de copiar
    if (event.target.classList.contains("copyimage")) {
      // Copiar el correo electrónico al portapapeles
      navigator.clipboard.writeText(email).then(function() {
        alert("Email copied to clipboard: " + email);
      }, function() {
        alert("Unable to copy email to clipboard");
      });
    } else {
      // Si se hizo clic en cualquier lugar dentro del div, enviar correo electrónico
      window.location.href = "mailto:" + email + "?subject=Subject&body=Body";
    }
  });
});

  }
}




</script>

<style scoped>
.linkslider{
  color:#09de97ba;
}

.linkmap{
  width:100%;
  padding:0;
  margin:0;
}

.aleximg {
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;  position: absolute;
  height: 345px;
  margin: 0; /* Elimina cualquier margen */
  object-fit: cover; /* Asegura que la imagen cubra el área sin distorsión */
  display: block; /* Asegura que la imagen sea un bloque para que las propiedades de margin y padding funcionen correctamente */
  position: relative;
}

.gradient{
  
  height:100%;
  position: relative; /* Necesario para posicionar el pseudo-elemento ::after correctamente */
  display: flex;
  justify-content: flex-start; /* Asegura que los elementos dentro del contenedor se alineen a la izquierda */
  align-items: center; /* Centra verticalmente los elementos si el contenedor tiene altura */
  overflow: hidden;
}

.gradient::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 192px;
  background: linear-gradient(to right, transparent, #0e0e0ef0); /* Degradado sutil hacia la derecha */
  pointer-events: none; /* Asegura que el pseudo-elemento no interfiera con la interacción */
}

.fixed {
  position: fixed;
  width: 100%;
  height: 100%;
}
.pnvimg{
  max-width: 500px;
  max-height: 285px;
}

.projects {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Esto empuja el contenido hacia la parte inferior */
  height: 336px; /* Altura fija según tu especificación */
  overflow: hidden; /* Asegura que el contenido no se desborde */
}

.projects:hover .video-background {
  opacity: 0.1;
}

.video-background {
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Para que el video cubra todo el contenedor sin deformarse */
  z-index: -1; /* Para que el video esté detrás del texto y otros elementos */
    transition: opacity 0.5s ease; /* Transición de 0.5 segundos */
    -webkit-user-select: none;  /* Safari */
    -moz-user-select: none;     /* Firefox */
    -ms-user-select: none;      /* Internet Explorer/Edge */
    user-select: none;
}

.conTxtProj {
  margin-top: 22%;
  padding: 10px;
  width: 100%;
}



.blurred {
  filter: blur(5px);
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 90;
  overflow-y: auto;
}

.cvtext{
  text-align: center;
  text-decoration: none;
  color: #ffffff;
}
.containerCom {
  
  position: relative; /* Asegura que el div actúe como un contenedor */
  overflow: hidden; /* Evita que la imagen sobresalga */
}

.full-width {
  width: 100%; /* Establece el ancho de la imagen al 100% del contenedor */
  display: block; /* Asegura que la imagen se comporte correctamente */
  margin: 0; /* Elimina los márgenes */
  padding: 0; /* Elimina el relleno */
}


.all{
    background-color: #000000;
}

body{
    background-color: #000000;
}
.col-md-12,
.col-md-10,
.col-md-2,
.col-md8,
.col-sm-12{
    border-radius: 15px;
    color:rgb(255, 255, 255);
    margin-top: 10px;
}

.containerCom{
    background-color: #1a1a1aae;

}

.containerComProject{
    background-color: #1a1a1aae;

}

.margincont{
    margin-left: 17%;
    margin-right: 17%;

}



h1 {
    font-family: "Poppins", sans-serif !important;
    font-size: 77px;
}
h2{
    font-family: "Poppins", sans-serif !important;
    font-weight: 600;
}
p{
    font-family: "Poppins", sans-serif !important;
    font-weight: 600;
}


.contentText{
color: #BCBCBC;
}

.greenText{
color: #09de97 ;
}

.introtext{
    flex:1;
    text-align: left;
}

.subtitintro{
  font-size: 40px;
}

.parrftit{
  font-size: 21px;
  margin-right: 25px;
  margin-top: 13px;

}

.numberexp{
  font-size:65px;
}

.textexp{
  padding-top:1px;
}

.colcover{
    position: relative;
    overflow: hidden;
    margin: 0;

}



.groups{
    
}
.group1{
    margin: 0;
}

.bar{
    height: 38px;
}

.footer{
    text-align: center;
    align-items: center;
    padding: 8px;
}

.introcont{
    background-color: #131313ec;

}

.top-right-link {
    position: absolute;
    top: 10px; /* Ajusta la distancia desde la parte superior */
    right: 10px; /* Ajusta la distancia desde la parte derecha */
}

.top-right-go {
    float: right;
    top: 30px; /* Ajusta la distancia desde la parte superior */
    right: 15px; /* Ajusta la distancia desde la parte derecha */
}

.group1 .compdt1, .group1 .compdt2, .group1 .compdt3, .group1 .mail {
    position: relative;
    
}


.intro {
    display: flex;
    align-items: center;
}

.image-container {
  height:100%;
  margin-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  padding-top: 0;
  padding-bottom: 0;
    flex: 0 0 auto; /* La imagen no crecerá */
    margin-right: 55px; /* Espacio entre la imagen y el texto */
}

.text-container {
    flex: 1; /* El texto ocupará todo el espacio disponible */
    text-align: left;
}

.primer {
    display: flex;
    flex-wrap: wrap;
}

.introcont {
    flex: 0 0 72.999%; /* Para que ocupe 2/3 del ancho */
    max-width: 80.66667%;
}



.col-md-8,
.col-md-4 {
    background-color: #131313ec;
    border-radius: 15px;
    color: rgb(255, 255, 255);

}

.compdt2{
  text-align: center;
    flex: 0 0 30%; /* Para que ocupe 1/3 del ancho */
    max-width: 53.33333%;
    margin-right: 20px;
    background-color: #131313ec;
}
.compdt1{
  text-align: center;

    flex: 0 0 30%; /* Para que ocupe 1/3 del ancho */
    max-width: 53.33333%;
    margin-right: 20px;
    background-color: #131313ec;
}
.compdt3 {
    flex: 0 0 30%; /* Para que ocupe 1/3 del ancho */
    max-width: 100%;
    text-align: center;
    padding-top: 17px;
    padding-right: 0;
}


.mail{

  margin-left: -2%;
    flex: 0 0 100%; /* Para que ocupe 1/3 del ancho */
    max-width: 100%;
    display: flex;
    align-items: center;
    padding: 35px;
    height: 100%;
}

.projects, .compdt1, .compdt2, .compdt3, .mail, .lengcont, .map, .slider-container {
    border: 2px solid #09de8500; /* Borde verde al pasar el mouse sobre el div */

    padding: 17.5px; /* Agrega un relleno para separar el borde del contenido */
    transition: border-color 0.6s; /* Transición suave para el cambio de color del borde */
    transition: border 0.6;
}

.projects:hover, .compdt1:hover, .compdt2:hover, .compdt3:hover, .mail:hover, .lengcont:hover, .introcont:hover, .map:hover, .slider-container:hover {
    border: 2px solid #09de97; /* Borde verde al pasar el mouse sobre el div */
  }

.introcont{
  border: 2px solid #09de8500; /* Borde verde al pasar el mouse sobre el div */
padding-left:0;
transition: border-color 0.6s; /* Transición suave para el cambio de color del borde */
transition: border 0.6;
}





.titmail{
    font-size: 37px;
}

.mailImage {
    margin-right: 20px; /* Espacio entre la imagen y el texto */
}

.textmail {
    flex: 1; /* El texto ocupará todo el espacio disponible */
    height: 110px;
    margin: 0;
}


.map {
            position: relative;
            text-align: center;
            width: 100%;
            height: 100px; /* Esto hará que el div tenga la altura del viewport */
            background-image: url('./images/mapl.svg'); /* Ruta de tu imagen */
            background-size: cover; /* La imagen cubrirá todo el div */
            background-position: center; /* Centra la imagen */
            background-repeat: no-repeat; /* Evita que la imagen se repita */
        }

.textSlider{
    margin: 15px;
    margin-right: 55px;
}

.green-text {
    color: #09de97;
}

.white-text {
    color: white;
}

.imgSlider{
  padding: 0;
    float: left;
    margin-right: 40px;
    height: 100%;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
}

.slider-container {
  cursor: none !important;
  margin: 0;
    width: 100%;
    background-color: #131313ec;
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
    background-color: #131313ec;
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


.skills{
    padding: 15px;
    width: 84px;
    -webkit-user-select: none;  /* Safari */
    -moz-user-select: none;     /* Firefox */
    -ms-user-select: none;      /* Internet Explorer/Edge */
    user-select: none;  
}
.lengcont {
    flex: 0 0 25.33333%; /* Para que ocupe 1/3 del ancho */

width: 100%;
    margin-left: 14px; /* Separación entre columnas */
    align-items: center;
    text-align: center;
    overflow:hidden;
    max-height:450px;

}

.lenguages{
  overflow: auto; /* Hace que el div sea scrollable cuando el contenido excede su tamaño */
  max-height: 310px;
    padding: 5px;
    overflow-y: auto;
}

.copyimage{
    width: 25px;
}


.introtit{
  font-size: 85px;
  margin-top:35px;
}



@media (max-width: 1667px) {
/* .copyimage{
  display: none;
} */

.introtit{
  font-size: 85px;
  margin-top:25px;

}
.introtext{
}


/* .aleximg{
  margin-right: 5px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;  position: absolute;
} */

.text-container{

padding: 30px;
padding-left: 0;
width: 100%;
height:100%
  }

  
    .image-container {
      margin-right: 50px;
      padding: 0;
    }


    .group1 .compdt1, .group1 .compdt2, .group1 .compdt3 {
        flex: 1 1 30%;
        max-width: 31%;
        padding: 5px;
        margin-right: 8px;
    }
    .introcont{
        flex: 0 0 100%; /* Cambiar a ancho completo en dispositivos móviles */

        max-width: 67.66667%;

    }
    .lengcont {
        flex: 0 0 100%; /* Cambiar a ancho completo en dispositivos móviles */
        max-width: 30%;
        max-height:405px;

    }

    .margincont{
        margin-left: 13%;
        margin-right: 13%;
    }

    .projects {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Esto empuja el contenido hacia la parte inferior */
  height: 312px; /* Altura fija según tu especificación */
  overflow: hidden; /* Asegura que el contenido no se desborde */
}

}
@media (max-width: 1450px) {
  .lengcont {
        flex: 0 0 100%; /* Cambiar a ancho completo en dispositivos móviles */
        max-width: 30%;
        max-height:485px;

    }
    .lenguages{

      max-height: 375px;

    }

  .introtit{
  font-size: 85px;
}
  .text-container{
    margin-left: 40px;
  }
  .image-container {
     display: none;
    }
    

}
@media (max-width: 1300px) {

  .textSlider{
    margin: 25px;
    margin-right: 23px;
}
.group1{
  align-content: center;
  padding: 0;
  padding-left: 12px;
  padding-right: 7px;

}

  body{
    cursor: none !important;
  }
  #circularcursor{
    display: none;

  }
  .circularcursor{
    display: none;

  }

  #clickcursor {
    display: none;
}

  .top-right-go {
display: none;
}

.map{
  height: 110px;
}
.mapimg{
  height:100%;
  display: block;
  background-size: cover; /* Hace que la imagen cubra todo el div */
  background-position: center; /* Centra la imagen */
}
/* .threeaps{
} */
  .margincont{
        margin-left: 2%;
        margin-right: 2%;
    }
.compdt3 {
}


.mail{
  
  margin-right:0;
  width:100%;
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
    .imgSlider{
        border-radius: 15px;
        width: 100%;
        overflow: hidden;
        margin-right: 0;
        margin-bottom: 15px;
    }

.parexp{
  font-size: 14px;
}

    .maildir{

        font-size: 10px;
    }

    .colcover{
        margin-top: 10px;
        width: 100%;
    }
    .copyimage{
        display: none;
    }
 
      
    .mail .top-right-link {
        display: block;
        position: absolute;
        top: 6px; /* Ajusta la distancia desde la parte superior */
        right: 6px; /* Ajusta la distancia desde la parte derecha */
    }
    
    /* Asegúrate de que fuera del contenedor .mail, el enlace esté oculto */
    .top-right-link {
        display: none;
    }
    

    h1{
        font-size: 66px;
    }
    .margincont{
        margin-left: 3%;
        margin-right: 3%;
    }

    .group1 {
      margin: 0;
        gap: 10px;
        width: 100%; /* Ajusta el espacio entre elementos para móviles */
    }

    .group1 .compdt1, .group1 .compdt2, .group1 .compdt3 {
        flex: 1 1 30%;
        max-width: 100%;
        margin-left:0;


    }
    .compdt3{
      margin-right: 0;
    }

    .group1 .mail {
        max-width: 100%;
    }

    .textmail {
        width: 100%;
        box-sizing: border-box;
    }
    
    .textmail{
        padding-top: 17px;
    }

    .textmail p {
        text-align: left;
        word-wrap: break-word;
        font-size: 16px;
        line-height: 1.2;
        margin: 10px 0;
        max-width: 100%;
    }
    .textmail h2{
      font-size: 22px;

    }
    .iconPro {
        max-width: 100%;
        -webkit-user-select: none;  /* Safari */
    -moz-user-select: none;     /* Firefox */
    -ms-user-select: none;      /* Internet Explorer/Edge */
    user-select: none;
    }

    .text-container {
      margin-left: 10px;

        text-align: center;
        padding: 20px;
    }

    .image-container {
        display: none;
    }

    .introcont {
        flex: 0 0 100%; /* Cambiar a ancho completo en dispositivos móviles */
        flex-direction: column;
        max-width: 100%;
    }

    .lengcont {
        flex: 0 0 100%; /* Cambiar a ancho completo en dispositivos móviles */
        max-width: 100%;
        margin-left: 0; /* Eliminar margen para que ocupe todo el ancho */
        max-height: 200px;
    }

    .lenguages{
        width: 100%;
        height: 100%;
    }
    .skills{
        padding: 15px;
        width: 74px;
    }

    .primer {
        display: flex;
        flex-wrap: wrap;
    }

    .groups {
        order: 1; /* Cambiar el orden de .groups para que aparezca primero en móviles */
        
    }

    .lengcont {
        order: 2; /* Cambiar el orden de .lengcont para que aparezca después de .groups en móviles */
    }


    .mailImage{
      margin-left:10px
    }
}


.margincont{
    position: absolute;
}




/* space  */

@keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  html, body {
    height: 100%;
    margin: 0;
    overflow-x: hidden; /* Evitar desplazamiento horizontal */
  }
  
  .wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden; /* Mantener el contenido dentro de la vista */
  }
  
  .limited-height {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200vw;
    height: 200vh;
    margin-top: -100vh;
    margin-left: -100vw;
    overflow: hidden; /* Evitar scroll innecesario */
  }
  
  .space {
    position: absolute;
    width: 400vw;
    height: 400vh;
    top: 50%;
    left: 50%;
    margin-top: -200vh;
    margin-left: -200vw;
    animation: spin 640s linear infinite;
    background-size: 240px;
    backface-visibility: visible;
    
    /* Had to base64 SVG background for FF compatibility */
    background-image: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0MCAyNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxyZWN0IHg9IjEwNiIgeT0iOTAiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz48cmVjdCB4PSI3NCIgeT0iNjMiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSIyMyIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSI1MCIgeT0iMTEwIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PHJlY3QgeD0iNjMiIHk9IjEyOCIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjxyZWN0IHg9IjQ1IiB5PSIxNDkiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSI5MiIgeT0iMTUxIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PHJlY3QgeD0iNTgiIHk9IjgiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSIxNDciIHk9IjMzIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+PHJlY3QgeD0iOTEiIHk9IjQzIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PHJlY3QgeD0iMTY5IiB5PSIyOSIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjxyZWN0IHg9IjE4MiIgeT0iMTkiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSIxNjEiIHk9IjU5IiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PHJlY3QgeD0iMTM4IiB5PSI5NSIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjxyZWN0IHg9IjE5OSIgeT0iNzEiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIzIiBoZWlnaHQ9IjMiLz48cmVjdCB4PSIyMTMiIHk9IjE1MyIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPjxyZWN0IHg9IjEyOCIgeT0iMTYzIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PHJlY3QgeD0iMjA1IiB5PSIxNzQiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSIxNTIiIHk9IjIwMCIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjxyZWN0IHg9IjUyIiB5PSIyMTEiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz48cmVjdCB5PSIxOTEiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSIxMTAiIHk9IjE4NCIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjwvc3ZnPg==);
  }
  
  
  body {
    cursor: none; /* Oculta el cursor predeterminado del sistema */
}

#circularcursor {
    background-color: #00000088;
    border: 3px solid #09de97;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    position: fixed;
    z-index: 9999;
    pointer-events: none;
    transition: height 0.6s, width 0.6s; /* Transición suave para cambiar el tamaño */
}

#clickcursor {
    background-color: #00000088;
    border: 3px solid #09de97;
        height: 10px;
    width: 10px;
    border-radius: 50%;
    position: fixed;
    z-index: 9999;
    pointer-events: none;
    display: none;
    transition: height 0.6s, width 0.6s; /* Transición suave para cambiar el tamaño */
}

.clickable {
    cursor: none;
    background-color: #00000088;
    border: 3px solid #09de97;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    position: fixed; /* Posición fija para que siga el ratón incluso al desplazarse */
    z-index: 9999; /* Asegura que esté por encima de otros elementos */
    pointer-events: none; /* Evita que el cursor bloquee eventos del mouse */ /* Define un cursor personalizado para elementos clicables */
}

a{
    cursor: none;
}

button{
    cursor: none;
}

</style>

<template>
  <div class="all">
    

    <div class="margincont">
      <div class="container-fluid">
        <div class="row">
          <div class="bar containerCom col-md-12">
            <p>navbar</p>
          </div>
        </div>
        <div class="row primer">
          <div class="introcont col-md-9 col-sm-12">
            <div class="intro">
              <div class="image-container">
                <img src="./images/alex.png" class="img-fluid aleximg" alt="">
              </div>
              <div class="text-container">
                <h1 class="introtext introtit">Àlex Ventura</h1>
                <h2 class="greenText introtext">IT Specialist & Web developer</h2>
                <p class="contentText introtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Lorem ipsum sit amet, consectetur adipis</p>
              </div>
            </div>
          </div>

          <div class="lengcont col-md-4 col-sm-12">
            <div class="lenguages">
              <!-- Aquí se pueden colocar las imágenes de los lenguajes -->
            </div>
          </div>
        </div>

        <div class="col-md-12">
          <div class="row groups">
            <div class="group1 col-md-6">
              <div class="row">
                <div class="compdt1 col-md-4">
                 <a href="https://github.com/Ventu00?tab=repositories" >
                  <img class="iconPro img-fluid" src="./images/linkedin.png" alt="">

                    <img src="./images/link.png" class="top-right-link" alt=" ">
                  </a>
                </div>
                <div class="compdt2 col-md-4 ">
                  <a href="https://github.com/Ventu00?tab=repositories" >
                    <img class="iconPro img-fluid" src="./images/github.png" alt="">

                    <img src="./images/link.png" class="top-right-link" alt=" ">
                  </a>
                </div>
                <div class="compdt3 col-md-4 img-fluid">
                 
                  <a class="cvtext" href="your-link-here" >
                    <h2  >CV</h2>
                  <img class="iconPro img-fluid" src="./images/download.png" alt="">
                    <img src="./images/link.png" class="top-right-link" alt=" ">
                  </a>
                </div>
                <div class="mail containerCom col-md-12">
                  <img class="iconPro mailImage img-fluid" src="./images/mail.png" alt="">
                  <div class="textmail">
                    <h2 class="titmail">Something on mind?</h2>
                    <p class="contentText maildir">alexventvv@gmail.com <img class="copyimage img-fluid" src="./images/copy.png" alt=""></p>
                    <a href="your-link-here" class="top-right-link">
                      <img src="./images/link.png" alt=" ">
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="projects colcover containerComProject col-md-6 col-sm-12" @click="toggleProjects">
    <video autoplay muted loop class="video-background">
        <source src="./images/projectvideo.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <a href="your-link-here" class="top-right-go">
        <img src="./images/go.png" alt="">
    </a>
    <h1>Projects</h1>
    <p class="contentText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>


          </div>
        </div>
        <div class="row">
          <div class="col-md-12 map containerCom">
<img src="./images/location.svg" class="img-fluid" alt="">          
</div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="row ">
              <div class="col-md-12 slider-container">
                <div id="carouselExampleIndicators" class="carousel slide">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="./images/ralarsa.png" class="imgSlider" alt="">
                      <div class="textSlider">
                        <h2><span class="green-text">IT Specialist</span> in <span class="white-text">Ralarsa</span></h2>
                        <h3>2020-2021</h3>
                        <p class="contentText">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit.</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      aaaaaaaa
                      <img src="" class="d-block w-100" alt="">
                    </div>
                    <div class="carousel-item">
                      aaaaaaa
                      <img src="" class="d-block w-100" alt="">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true">
                      <img src="./images/left.png" alt="">
                    </span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true">
                      <img src="./images/rigth.png" alt="">
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
            <p>Àlex Ventrua</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView', // Cambiar el nombre del componente a una palabra compuesta
  props: {
    
  },
  methods:{
  toggleProjects() {
      this.$emit('toggle-projects');
    }
  },
  mounted() {
    const images = [
      "image 46.png",
      "image 47.png",
      "image 48.png",
      "image 49.png",
      "image 50.png",
      "image 51.png",
      "image 52.png",
      "image 53.png",
      "image 55.png",
      "image 67.png",
      "image 68.png",
      "image 69.png"
    ];

    const skillsContainer = document.querySelector(".lenguages");

    images.forEach(function(imageName) {
      const img = document.createElement("img");
      img.src = require(`@/assets/images/${imageName}`); // Utilizando require para cargar la imagen
      img.alt = "";
      img.classList.add("skills");
      skillsContainer.appendChild(img);
    });

    // Script para el cursor personalizado

  }

}
</script>

<style scoped>



.cvtext{
  text-decoration: none;
  color: #09DE85;
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
    border-radius: 25px;
    color:rgb(255, 255, 255);
    margin-top: 10px;
}

.containerCom{
    background-color: #1a1a1ae9;

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
color: #09DE85 ;
}

.introtext{
    flex:1;
    text-align: left;
}



.colcover{
    position: relative;
    overflow: hidden;
    margin: 0;

}

.video-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
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
    background-color: #121212f0;

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
    flex: 0 0 auto; /* La imagen no crecerá */
    margin-right: 20px; /* Espacio entre la imagen y el texto */
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

.lengcont {
    flex: 0 0 25.33333%; /* Para que ocupe 1/3 del ancho */
    max-width: 33.33333%;
    margin-left: 14px; /* Separación entre columnas */
    align-items: center;
    text-align: center;
}

.col-md-8,
.col-md-4 {
    background-color: #1a1a1af0;
    border-radius: 25px;
    color: rgb(255, 255, 255);

}

.compdt2{
    flex: 0 0 28.33333%; /* Para que ocupe 1/3 del ancho */
    max-width: 53.33333%;
    margin-right: 20px;
    background-color: #8d577e;
}
.compdt1{
    flex: 0 0 28.33333%; /* Para que ocupe 1/3 del ancho */
    max-width: 53.33333%;
    margin-right: 20px;
    background-color: #4071b1;
}
.compdt3 {
    flex: 0 0 30.33333%; /* Para que ocupe 1/3 del ancho */
    max-width: 100.33333%;
    text-align: center;
    padding-top: 17px;
    margin-right: 1vw; /* Margen ajustable según el ancho de la pantalla */
}


.mail{
    flex: 0 0 98%; /* Para que ocupe 1/3 del ancho */
    max-width: 100%;
    display: flex;
    align-items: center;
    padding: 35px;
    height: 100%;
    margin-right: 1vw;
}

.projects, .compdt1, .compdt2, .compdt3, .mail, .lengcont, .introcont, .map, .slider-container {
    border: 2px solid #09de8500; /* Borde verde al pasar el mouse sobre el div */

    padding: 17.5px; /* Agrega un relleno para separar el borde del contenido */
    transition: border-color 0.6s; /* Transición suave para el cambio de color del borde */
    transition: border 0.6;
}

.projects:hover, .compdt1:hover, .compdt2:hover, .compdt3:hover, .mail:hover, .lengcont:hover, .introcont:hover, .map:hover, .slider-container:hover {
    border: 2px solid #09de85; /* Borde verde al pasar el mouse sobre el div */
}

::selection {
    background-color: #09de85; /* Cambia el color de fondo de la selección a verde */
    color: #fff; /* Cambia el color del texto seleccionado a blanco */
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


.map{
    width: 100%;
    align-items: center;
    text-align: center;
    padding: 0;
    margin-top: 10px;
}

.textSlider{
    margin: 15px;
}

.green-text {
    color: #09DE85;
}

.white-text {
    color: white;
}

.imgSlider{
    float: left;
    margin-right: 40px;
    height: 100%;
}

.slider-container {
  margin: 0;
    width: 100%;
    background-color: #181818;

}
.slider-container{
    padding-left: 0;}

.carousel-inner{
  margin: 0;
    padding: 0;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
    cursor: none;
    background-image: none; /* Elimina el ícono por defecto */
    background-color: #09DE85; /* Fondo verde del círculo */
    border: 2px solid #09DE85; /* Borde verde alrededor del ícono */
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
    cursor: none;

}
.carousel-control-next{
    cursor: none;

}


[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: none;
}



.carousel-control-prev,
.carousel-control-next {
    cursor: none;

    width: 5%; /* Ajusta el ancho de los controles si es necesario */
}

.carousel-item{
    background-color: #181818;
    border-radius: 20px;
}
.carousel-indicators button {
    cursor: none;

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
}

.lenguages{

    padding: 5px;
    overflow-y: auto;
}

.copyimage{
    width: 25px;
}




@media (max-width: 1667px) {
.copyimage{
  display: none;
}

.introtit{
  font-size: 90px;
}
.introtext{
}


.aleximg{
  width: 320px;
}

  .text-container{
    padding: 30px;
padding-left: 0;
width: 100%;
height:100%
  }

  
    .image-container {
      margin-right: 0;
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
    }

    .margincont{
        margin-left: 13%;
        margin-right: 13%;
    }

}
@media (max-width: 1277px) {

  
  .image-container {
     display: none;
    }
    

}
@media (max-width: 1090px) {
.compdt3 {
margin-right: 0;
}


.mail{
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
        border-radius: 20px;
        width: 100%;
        overflow: hidden;
        margin-right: 0;
        margin-bottom: 15px;
    }
    .mailImage {
        margin-right: 10px; /* Espacio entre la imagen y el texto */
    }
    .maildir{

        font-size: 10px;
    }

    .colcover{
        margin-top: 10px;
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
        gap: 10px; /* Ajusta el espacio entre elementos para móviles */
    }

    .group1 .compdt1, .group1 .compdt2, .group1 .compdt3 {
        flex: 1 1 30%;
        max-width: 29%;
        padding: 5px;
    }

    .group1 .mail {
        flex: 1 1 100%;
        max-width: 100%;
        text-align: left;
        padding: 10px;
    }

    .textmail {
        width: 100%;
        padding: 0 10px;
        box-sizing: border-box;
    }
    
    .textmail{
        padding-top: 17px;
    }

    .textmail h2, .textmail p {
        text-align: left;
        word-wrap: break-word;
        font-size: 16px;
        line-height: 1.2;
        margin: 10px 0;
        max-width: 100%;
    }

    .iconPro {
        max-width: 100%;
    }

    .text-container {
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
    }

    .lenguages{
        width: 100%;
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
    border: 3px solid #09de85;
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

.clickable {
    cursor: none;
    background-color: #00000088;
    border: 3px solid #09de85;
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

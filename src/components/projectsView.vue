<template>
  <div class="projects-view container animate__animated animate__fadeInUp">
    <div class="projectbar">
      <button @click="closeProjects" class="btn goback  mb-4"></button>
    <h1 class="text-center text-white my-4">Projects</h1>
    </div>

    <div class="row">
      <div 
        class="col-md-4 col-sm-6 mb-4" 
        v-for="(project, index) in projects" 
        :key="index" 
        @click="selectProject(project)"
      >
        <div class="card h-100">
          <div class="image-container">

          <img :src="project.image" class="card-img-top" :alt="project.title">
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
          </div>
          <p class="tecnologies">{{project.lenguages}}</p>

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
    title: 'Bitiby "Table4All"',
    description: 'A charitable application with an interactive map aimed at helping the homeless population.',
    image: 'btbm1.png', // Updated image path
    initialProblem: 'We were confronted with a pressing issue: How could we offer assistance to the homeless community on a day-to-day basis?',
    solution: "To address this, my team and I developed Bitiby, an innovative application featuring an interactive map. Users can make reservations at participating restaurants that donate meals and discover nearby locations for donations.",
    link:"https://github.com/Joel26m/table4all.git",
    lenguages:" Javascript · Bootstrap · Vue.js · Laravel · APIs · MapBox",
    process: 'Throughout the project, we employed Agile methodologies such as Scrum, ensuring efficient collaboration and development. Additionally, we utilized GitHub for version control, enabling seamless management of project components.'
  },
  { 
    title: 'El mon de la Laia',
    description: 'An educational web game designed for children aged 11, focusing on counting running children in a schoolyard setting.',
    image: 'laia.png',
    initialProblem: 'As a group of developers, we embarked on a project consisting of 4 mini web games using JavaScript.',
    solution: 'My contribution to the project was a game tailored for 11-year-old children, requiring players to count the running children on the screen. Players must use the spacebar to count them, and upon completing a level, the game displays the number of children who passed and how many times the spacebar was pressed.',
    link:"https://github.com/pizza2223/M12.git",
    lenguages:" Javascript · Bootstrap",
    process: 'Throughout the development process, we collaborated as a team of programmers to brainstorm ideas, design the game mechanics, and implement the features. We iteratively tested and refined the game to ensure an engaging and educational experience for our target audience.'
  },
  { 
    title: 'Pokedex',
    description: 'A Pokemon management application built using the PokeAPI and the Vue.js framework.',
    image: 'poke.png',
    initialProblem: 'The challenge we faced with project 3 was creating a comprehensive Pokemon management application.',
    solution: 'To address this challenge, we utilized the PokeAPI to fetch and display Pokemon data, and Vue.js for the frontend development. Our solution allows users to manage their teams, favorite Pokemon, and explore various other functionalities related to the Pokemon universe.',
    link:"https://github.com/Ventu00/pokedex.git",
    lenguages:" Javascript · Bootstrap · Vue.js ",
    process: 'During the development process, we seamlessly integrated the PokeAPI into our application, ensuring smooth data retrieval and manipulation. Additionally, we leveraged the capabilities of Vue.js to create an intuitive and responsive user interface. We iteratively tested and refined the application to ensure optimal performance and user experience.'
  
  },
  { 
  title: 'Dungeons',
  description: 'A game developed in Java utilizing Java Swing, featuring enemy evasion and item collection mechanics.',
  image: 'dungeons.png',
  initialProblem: 'The challenge we encountered with this project was to create an engaging game experience using Java Swing.',
  solution: 'To address this challenge, we utilized Java Swing for graphical user interface development and implemented various game mechanics such as enemy evasion and item collection. Our game allows players to navigate through dungeons, avoiding enemies while collecting items and coins scattered throughout the map.',
  link:"https://github.com/Ventu00/RolePlayJava.git",
  lenguages:" Java",
  process: 'Throughout the development process, we employed different techniques in Java programming to implement the game mechanics effectively. We iteratively tested and refined the game to ensure smooth gameplay and an immersive experience for players.'
},
{ 
  title: 'Self-Assessment Program',
  description: 'A comprehensive web application developed using Vue.js and Laravel.',
  image: 'evaluation.png',
  initialProblem: 'The challenge we faced with this project was to develop a user-friendly self-assessment platform with secure database integration.',
  solution: 'To address this challenge, we employed Vue.js for frontend development and Laravel for backend operations, ensuring seamless communication with the database. Additionally, we integrated APIs for database interaction, leveraging Postman and Axios for efficient data retrieval and management. Our application provides an intuitive interface for admin users to perform CRUD operations, allows teacher users to access student grades, and offers a self-assessment page for users to review criteria and publish their evaluations.',
  link:"https://github.com/Ventu00/autoavaluacio_alexventuravilalta.git",
  lenguages:" Javascript · Bootstrap · Vue.js · Laravel · APIs",
  process: 'Throughout the development process, we utilized various techniques in Vue.js and Laravel to implement the desired functionalities effectively. We conducted thorough testing and validation to ensure data security, smooth user experience, and optimal performance of the application.'
}


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


.image-container {
            position: relative;
        }
        .image-container::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 30%;
            background: linear-gradient(to top, #25252578, transparent);
            z-index: 1;
        }
        .card-img-top {
            display: block;
            width: 100%;
            height: auto;
            position: relative;
            z-index: 0;
        }


h1 {
    font-family: "Poppins", sans-serif !important;
}
h2{
    font-family: "Poppins", sans-serif !important;
}
p{
    font-family: "Poppins", sans-serif !important;
    font-weight: 600;
}

.card-title{
font-weight: bolder;
}

.card-text{
color:#BCBCBC;

}

    .tecnologies {
      font-size: 13.5px;
            color: #09de97;
            background-color: #00000046;
            padding: 2px;
            border-radius: 20px;
            text-align: center;
            bottom: 0; /* Pegado al fondo */
            margin: 0; /* Margen opcional */
        }

.projectbar {
            background-color: #242424ab;
            padding: 25px;
            border-radius: 20px;
            margin-bottom: 20px;
            margin-top: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative; /* Para posicionamiento absoluto del botón */
        }
        h1 {
            font-size: 75px;
            margin: 0; /* Eliminar margen extra del h1 */
            flex-grow: 1; /* Permite al título ocupar el espacio central */
            text-align: center;
        }
        .goback {
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

.projects-view {
  color: white;
}
.card {
  border: 0px solid #09de8500; /* Borde verde al pasar el mouse sobre el div */
  border-bottom: 2px solid #00000070; /* Borde verde al pasar el mouse sobre el div */

  overflow: hidden;
  background-color: #252525ce;
  color: white;
  border-radius: 30px;
  transition: border-color 0.15s; /* Transición suave para el cambio de color del borde */
    transition: border 0.15;
  transition: transform 0.5s; /* Agregamos una transición suave para una animación más fluida */
}

.card:hover {
  transform: scale(1.02); /* Aumentamos ligeramente el tamaño en un 5% */
  border: 2px solid #09de97; /* Borde verde al pasar el mouse sobre el div */
}

.card img {
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 30px; /* Aplicar radio de borde solo en la esquina superior izquierda */
  border-top-right-radius: 30px; /* Aplicar radio de borde solo en la esquina superior derecha */
}

</style>

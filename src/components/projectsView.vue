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
    title: 'Bitiby "Table4All"',
    description: 'A charitable application with an interactive map aimed at helping the homeless population.',
    image: 'btbm1.png', // Updated image path
    initialProblem: 'We were confronted with a pressing issue: How could we offer assistance to the homeless community on a day-to-day basis?',
    solution: "To address this, my team and I developed Bitiby, an innovative application featuring an interactive map. Users can make reservations at participating restaurants that donate meals and discover nearby locations for donations.",
    link:"https://github.com/Joel26m/table4all.git",
    process: 'Throughout the project, we employed Agile methodologies such as Scrum, ensuring efficient collaboration and development. Additionally, we utilized GitHub for version control, enabling seamless management of project components.'
  },
  { 
    title: 'El mon de la Laia',
    description: 'An educational web game designed for children aged 11, focusing on counting running children in a schoolyard setting.',
    image: 'laia.png',
    initialProblem: 'As a group of developers, we embarked on a project consisting of 4 mini web games using JavaScript.',
    solution: 'My contribution to the project was a game tailored for 11-year-old children, requiring players to count the running children on the screen. Players must use the spacebar to count them, and upon completing a level, the game displays the number of children who passed and how many times the spacebar was pressed.',
    link:"https://github.com/pizza2223/M12.git",
    process: 'Throughout the development process, we collaborated as a team of programmers to brainstorm ideas, design the game mechanics, and implement the features. We iteratively tested and refined the game to ensure an engaging and educational experience for our target audience.'
  },
  { 
    title: 'Pokedex',
    description: 'A Pokemon management application built using the PokeAPI and the Vue.js framework.',
    image: 'poke.png',
    initialProblem: 'The challenge we faced with project 3 was creating a comprehensive Pokemon management application.',
    solution: 'To address this challenge, we utilized the PokeAPI to fetch and display Pokemon data, and Vue.js for the frontend development. Our solution allows users to manage their teams, favorite Pokemon, and explore various other functionalities related to the Pokemon universe.',
    link:"https://github.com/Ventu00/pokedex.git",
    process: 'During the development process, we seamlessly integrated the PokeAPI into our application, ensuring smooth data retrieval and manipulation. Additionally, we leveraged the capabilities of Vue.js to create an intuitive and responsive user interface. We iteratively tested and refined the application to ensure optimal performance and user experience.'
  
  },
  { 
  title: 'Dungeons',
  description: 'A game developed in Java utilizing Java Swing, featuring enemy evasion and item collection mechanics.',
  image: 'dungeons.png',
  initialProblem: 'The challenge we encountered with this project was to create an engaging game experience using Java Swing.',
  solution: 'To address this challenge, we utilized Java Swing for graphical user interface development and implemented various game mechanics such as enemy evasion and item collection. Our game allows players to navigate through dungeons, avoiding enemies while collecting items and coins scattered throughout the map.',
  link:"https://github.com/Ventu00/RolePlayJava.git",
  process: 'Throughout the development process, we employed different techniques in Java programming to implement the game mechanics effectively. We iteratively tested and refined the game to ensure smooth gameplay and an immersive experience for players.'
},
{ 
  title: 'Self-Assessment Program',
  description: 'A comprehensive web application developed using Vue.js and Laravel.',
  image: 'evaluation.png',
  initialProblem: 'The challenge we faced with this project was to develop a user-friendly self-assessment platform with secure database integration.',
  solution: 'To address this challenge, we employed Vue.js for frontend development and Laravel for backend operations, ensuring seamless communication with the database. Additionally, we integrated APIs for database interaction, leveraging Postman and Axios for efficient data retrieval and management. Our application provides an intuitive interface for admin users to perform CRUD operations, allows teacher users to access student grades, and offers a self-assessment page for users to review criteria and publish their evaluations.',
  link:"https://github.com/Ventu00/autoavaluacio_alexventuravilalta.git",

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
  border: 2px solid #09de8500; /* Borde verde al pasar el mouse sobre el div */

  background-color: #252525ce;
  color: white;
  border-radius: 30px;
  transition: border-color 0.8s; /* Transición suave para el cambio de color del borde */
    transition: border 0.9;
  transition: transform 0.5s; /* Agregamos una transición suave para una animación más fluida */
}

.card:hover {
  transform: scale(1.05); /* Aumentamos ligeramente el tamaño en un 5% */
  border: 2px solid #09de85; /* Borde verde al pasar el mouse sobre el div */
}

.card img {
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 30px; /* Aplicar radio de borde solo en la esquina superior izquierda */
  border-top-right-radius: 30px; /* Aplicar radio de borde solo en la esquina superior derecha */
}

</style>

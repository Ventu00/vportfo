<template>
  <div id="app">
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
import Home from './components/home.vue'
import ProjectsView from './components/projectsView.vue'

export default {
  name: 'App',
  components: {
    Home,
    ProjectsView
  },
  data() {
    return {
      showProjects: false
    }
  },
  mounted() {
    const cursor = document.getElementById('circularcursor');

document.addEventListener('mousemove', function(e) {
  const cursorWidth = cursor.offsetWidth;
  const cursorHeight = cursor.offsetHeight;
  const mouseX = e.clientX - (cursorWidth / 2);
  const mouseY = e.clientY - (cursorHeight / 2);
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

document.addEventListener('click', function(e) {
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
  }
}
</script>

<style>
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
</style>

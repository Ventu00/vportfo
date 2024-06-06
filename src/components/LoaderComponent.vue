<template>
    <div class="loader-container">
      <img src="AV.svg" alt="Loading..." class="loader-logo pulse" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoaderComponent',
  }
  </script>
  
  <style scoped>
  .loader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 10000;
  }
  
  .loader-logo {
    width: 100px;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  
  .pulse {
    animation: pulse 1.5s infinite;
  }
  </style>
  
import Vue from 'vue'
import VueRouter from 'vue-router'
import ProjectsView from '../views/ProjectsView.vue'
import ProjectDetail from '../views/ProjectDetail.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: ProjectsView },
  { path: '/project/:index', name: 'ProjectDetail', component: ProjectDetail }
]

const router = new VueRouter({
  routes
})

export default router

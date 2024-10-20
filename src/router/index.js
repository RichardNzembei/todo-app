import dashboard from "@/views/dashboard.vue";
import sidebar from "@/components/sidebar.vue";
import me from "@/components/me.vue";
import goals from "@/components/goals.vue";
import tasks from "@/components/tasks.vue";
import todosCard from "@/components/todosCard.vue";

import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/sidebar',
    name: 'sidebar',
    component: sidebar
  },
  {
    path: '/me',
    name: 'me',
    component: me
  },
  {
    path: '/goals',
    name: 'goals',
    component: goals
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: tasks
  },
  {
    path: '/all',
    component: todosCard,
  },
  {
    path: '/active',
    component: todosCard,
  },
  {
    path: '/completed',
    component: todosCard,
  },

  {
    path: '/:pathMatch(.*)*',
    redirect: '/all',
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router;
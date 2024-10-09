import dashboard from "@/views/dashboard.vue";
import schedules from "@/components/schedules.vue";
import events from "@/components/events.vue";
import goals from "@/components/goals.vue";
import calender from "@/components/calender.vue";
import todosCard from "@/components/todosCard.vue";

import { createRouter, createWebHashHistory } from "vue-router";
const routes=[
    {
        path:'/',
        name:'dashboard',
        component:dashboard
    },
    {
        path:'/schedules',
        name:'schedules',
        component:schedules
    },
    {
        path:'/events',
        name:'events',
        component:events
    },
    {
        path:'/goals',
        name:'goals',
        component:goals
    },
    {
        path:'/calender',
        name:'calender',
        component:calender
    },
    {
        path: '/all',
        component: todosCard,  // Adjust component if needed
      },
      {
        path: '/active',
        component: todosCard,
      },
      {
        path: '/completed',
        component: todosCard,
      },
      // Default to 'all'
      {
        path: '/:pathMatch(.*)*',
        redirect: '/all',
      },
]
const router =createRouter({
    history:createWebHashHistory(),
    routes
})
export default router;
<script setup>
import { useRouter } from 'vue-router';
const router=useRouter()
</script>
<template>
     <footer class="fixed bottom-0 left-0 right-0 bg-gray-50 shadow-xl py-4">
      <div class="flex justify-around space-x-4 text-blue-500 shadow-xl p-2">
        <span><router-link class="bg-white rounded-xl shadow-xl p-1 hover:bg-gray-500 hover:text-white" to="/schedules">Schedules</router-link></span>
        <span><router-link class="bg-white rounded-xl shadow-xl p-1  hover:bg-gray-500 hover:text-white" to="/events">Events</router-link></span>
        <span><router-link class="bg-white rounded-xl shadow-xl p-1  hover:bg-gray-500 hover:text-white" to="/goals">Goals</router-link></span>
        <span><router-link class="bg-white rounded-xl shadow-xl p-1   hover:bg-gray-500 hover:text-white" to="/calender">Calender</router-link></span>
      </div>
    </footer>
</template>
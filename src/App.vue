<template>
  <div>
    <input v-model="newTodo" placeholder="Add a new task" />
    <button @click="addTodo">add</button>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
        <button @click="removeTodo(todo)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const newTodo = ref("");
const todos = ref([
  { id: 1, text: "Learn Vue" },
  { id: 2, text: "Build a To-Do App" },
]);

function addTodo() {
  if (newTodo.value.trim()) {
    todos.value.push({ id: Date.now(), text: newTodo });
    newTodo = "";
  }
}
function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo);
}
</script>

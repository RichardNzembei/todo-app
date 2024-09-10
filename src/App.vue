<script setup>
import { computed, ref } from "vue";
const NewTodo = ref("");
const todos = ref([]);
const filters = {
  all: (todos) => todos,
  active: (todos) => todos.filter((todo) => !todo.completed),
  completed: (todos) => todos.filter((todo) => todo.completed),
};
const visibility = ref("all");

const filteredTodos = computed(() => {
  const filterFunc = filters[visibility.value] || filters.all;
  return filterFunc(todos.value);
});
const remaining = computed(() => filters.active(todos.value).length);
function addTodo() {
  if (NewTodo.value.trim()) {
    todos.value.push({ id: new Date().toDateString(), text: NewTodo.value });
    NewTodo.value = "";
  }
}
function removeCompleted() {
  todos.value = filters.active(todos.value);
}
function onHashChange() {
  const route = window.location.hash.replace(/#\/?/, "");
  if (filters[route]) {
    visibility.value = route;
  } else {
    window.location.hash = "";
    visibility.value = "all";
  }
}
window.addEventListener("hashchange", onHashChange);
onHashChange();
</script>
<template >
  <div class="app">
    <div class="todoApp">
      <header class="header">
        <h1>Task's</h1>
      </header>
      <section class="sectionCard">
        <h2>Today's task</h2>
        <input
          class="input"
          type="text"
          v-model="NewTodo"
          placeholder="add a task"
        />
        <button @click="addTodo">+ New task</button>
        <br /><br /><br />
        <section class="filters">
          <ul>
            <li>
              <a href="#/all">All</a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
            <button
              class="removeCompleted"
              @click="removeCompleted"
              v-show="todos.length > remaining"
            >
              clear completed
            </button>
          </ul>
        </section>
        <br /><br />
        <div class="listCard">
          <section
            class="list"
            v-for="todo in filteredTodos"
            :key="todo.id"
            :class="{ completed: todo.completed }"
          >
            <input class="checked" type="checkbox" v-model="todo.completed" />
            <span class="todoitem">{{ todo.text }} </span>
            <p>{{ todo.id }}</p>
          </section>
        </div>
      </section>
      <br /><br />
      <footer>
        <section class="footer" v-show="todos.length">
          <strong>{{ remaining }}</strong>
          <span>{{ remaining === 1 ? "task" : "tasks" }} left</span>
        </section>
      </footer>
    </div>
  </div>
</template>
<style scoped>
.todoApp {
  background-color: white;
  margin: 10px 0 0;
  justify-content: right;
  padding: 20px 10px;
  max-width: 500px;
  border-radius: 10px;
  height: max-content;
  position: absolute;
  left: 300px;
  width: 500px;
}
h1 {
  color: aqua;
  font-display: inherit;
  font-size: 50px;
  text-align: center;
}
.header {
  text-decoration-line: underline;
}
button {
  font-size: 150%;
  position: absolute;
  left: 300px;
  border-radius: 5px;
  size: 100px;
}
h2 {
  align-content: space-around;
}
.filters {
  list-style: none;

  background-color: #f1eaea;
  max-width: 100%;
  margin: 0 0;
  justify-content: flex-end;
  padding: 10px 5px;
  border-radius: 3px;
}

.filters li {
  display: inline;
}

.filters li a {
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
}

.filters li a:hover {
  border-color: #db7676;
}

.filters li a.selected {
  border-color: #ce4646;
}
.todos {
  background-color: rgb(255, 255, 240);
  border-radius: 5px;
}
.input {
  padding: 16px 16px 16px 16px;
  height: 10px;
  border: none;
  background-color: floralwhite;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  width: 250px;
}
.app {
  background-color: grey;
  height: 1000px;
}
.list {
  background-color: white;
  border-radius: 10px;
  padding: 0;
}
.listCard {
  background-color: #f1eaea;
  max-width: 100%;
  margin: 0 0;
  justify-content: flex-end;
  padding: 10px 5px;
  border-radius: 10px;
  height: max-content;
}
.todoitem {
  font-size: 30px;
  text-align: right;
  color: darkturquoise;
  margin: 19px;
}
p {
  text-align: left;
  margin: 5px 2px 2px;
  padding: 4px 4px;
}
.completed {
  text-decoration: line-through;
  color: grey;
}
.checked {
  position: absolute;
  right: 40px;
  margin: 15px;
  size: 20px;
  shape-margin: 10px;
  border-radius: 5px;
}
.footer {
  background-color: rgb(203, 205, 207);
  margin: 8px;
  padding: 10px;

  border-radius: 10px;
  width: 100px;
}
</style>
<script setup>
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";
import footerCard from "./footerCard.vue";
const router = useRouter();
const NewTodo = ref("");
const todos = ref([]);
const visibility = ref("");

const filters = {
  all: (todos) => todos,
  active: (todos) => todos.filter((todo) => !todo.completed),
  completed: (todos) => todos.filter((todo) => todo.completed),
};

const filteredTodos = computed(() => {
  return filters[visibility.value](todos.value);
});

const remaining = computed(() => filters.active(todos.value).length);

function addTodo() {
  if (NewTodo.value.trim()) {
    todos.value.push({
      id: new Date().toISOString(),
      text: NewTodo.value,
      completed: false,
    });
    NewTodo.value = "";
  }
}

function removeCompleted() {
  todos.value = filters.active(todos.value);
}

function updateVisibilityFromRoute(route) {
  const routePath = route.path.replace("/", "") || "all";
  if (filters[routePath]) {
    visibility.value = routePath;
  } else {
    visibility.value = "all";
  }
}

watch(
  () => router.currentRoute.value,
  (newRoute) => {
    updateVisibilityFromRoute(newRoute);
  }
);

updateVisibilityFromRoute(router.currentRoute.value);
</script>
<template >
  <div
    class="md:min-h-screen lg:min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 to-blue-200"
  >
    <div class="bg-white p-4 max-w-xl w-full max-h-xl h-full">
      <header class="mt-3">
        <h1 class="text-center font-mono font-bold text-blue-700 underline">
          Task's
        </h1>
      </header>
      <section class="block mb-2">
        <input
          class="rounded-xl mb-2 mt-2 bg-slate-50 p-2 focus:ring-2 focus:outline-none focus:ring-blue-300"
          type="text"
          v-model="NewTodo"
          placeholder="add a task"
        />
        <button
          @click="addTodo"
          class="inline rounded-2xl ml-4 p-2 bg-sky-400 hover:bg-gray-300"
        >
          +
        </button>

        <section class="bg-white shadow-lg mt-4 p-2 rounded-2xl">
          <ul class="flex justify-between text-slate-700">
            <li
              class="shadow-lg bg-white rounded-lg p-1 hover:bg-gray-400 hover:text-white"
            >
              <router-link to="/all">All</router-link>
            </li>
            <li
              class="shadow-lg bg-white rounded-lg p-1 hover:bg-gray-400 hover:text-white"
            >
              <router-link to="/active">Active</router-link>
            </li>
            <li
              class="shadow-lg bg-white rounded-lg p-1 hover:bg-gray-400 hover:text-white"
            >
              <router-link to="/completed">Completed</router-link>
            </li>
          </ul>
        </section>
        <span
          class="flex items-end justify-end text-red-300 mt-3 underline hover:text-red-900"
          @click="removeCompleted"
          v-show="todos.length > remaining"
        >
          clear completed
        </span>
        <div class="shadow-lg p-3">
          <section
            class="ml-3 space-y-1"
            v-for="todo in filteredTodos"
            :key="todo.id"
            :class="{ completed: todo.completed }"
          >
            <input
              class="mr-4 rounded-lg"
              type="checkbox"
              v-model="todo.completed"
            />
            <span class="font-semibold">{{ todo.text }} </span>
            <p class="font-light text-slate-500">{{ todo.id }}</p>
          </section>
        </div>
      </section>
      <section
        class="shadow-lg w-full rounded-lg flex justify-center items-center"
        v-show="todos.length"
      >
        <strong class="mr-2">{{ remaining }}</strong>
        <span class="font-mono"
          ><span class="text-blue-400">{{
            remaining === 1 ? "task" : "tasks"
          }}</span>
          left</span
        >
      </section>
    </div>
    <footerCard />
  </div>
</template>


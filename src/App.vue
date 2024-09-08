<script setup>
import { ref } from 'vue';
const NewTodo=ref('')
const todos=ref([])
function addTodo(){
  if(NewTodo.value.trim()){
    todos.value.push({text:NewTodo.value})
    NewTodo.value=""
  }
}
</script>
<template >
  <div class="app">
    <div class="todoApp">
      <header class="header">
        <h1>Task's</h1>
      </header>
      <section class="sectionCard">
        <h2>Today's task   

          
        </h2>
        <input  class="input" type="text" v-model="NewTodo" placeholder="add a task">
        <button @click="addTodo">+ New task</button>
        <section class="list">
          <ul class="todos">
            <li v-for="todo in todos" :key="todo.id">{{ todo.text}}</li>
          </ul>

        </section>
        <br>
      <section class="filters">
        <ul>
          <li>
            <a href="#/All">All</a>
          </li>
          <li>
            <a href="#/Open">Open</a>
          </li>
          <li>
            <a href="#/Closed">Closed</a>
          </li>
          <li>
            <a href="#/Archived">Archived</a>
          </li>
        </ul>
     
        
      </section>
          
       

      </section>
    </div>
  </div>
  
  
   
    
  
</template>
<style scoped>
.todoApp{
  background-color: cornsilk;
  margin: 130px 0  0;
  justify-content: right;
  padding: 20px 10px ;
  max-width: 350px;
  border-radius: 10px;
  height:500px;
}
h1{
  color: aqua;
  font-display:inherit;
  font-size: 50px;
}
.header{
  text-decoration-line: underline;
}
button{
  font-size: 150%;
  position:fixed;
  left: 220px;
  border-radius: 5px;
  size: 100px;
  
}
h2{
  align-content: space-around;
}
.filters {
	
	list-style: none;
	
	
  background-color:darkgray
   ;
   max-width: 350px;
   margin:  0  0;
  justify-content: right;
  padding: 20px 10px ;
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
	border-color: #DB7676;
}

.filters li a.selected {
	border-color: #CE4646;
}
.todos{
  background-color: darkgray;
  border-radius: 5px;

}
.input{
  padding: 16px 16px 16px 16px;
	height: 10px;
	border: none;
	background: #f1eaea;
	box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}
</style>
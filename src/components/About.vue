<template>
  <div class="app">
    <h1>Оставьте отзыв о нас</h1>
    <div class="todo-form">
      <input type="text" v-model="newTodo" placeholder="Рады каждому отзыву">
      <button @click="addTodo">Add</button>
    </div>
    <ul class="todo-list">
      <li v-for="(todo, index) in todos" :key="index">
        <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
        <button @click="completeTodo(index)">Подтвердить</button>
        <button @click="deleteTodo(index)">Удалить</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      todos: []
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.todos.push({
          text: this.newTodo,
          completed: false
        });
        this.newTodo = '';
      }
    },
    completeTodo(index) {
      this.todos[index].completed = true;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.app {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;

}

.todo-form {
  display: flex;
  margin-bottom: 10px;
}

.todo-form input {
  flex: 1;
  padding: 5px;
  font-size: 16px;
}

.todo-form button {
  padding: 5px 10px;
  font-size: 16px;
}

.todo-list {
  list-style-type: none;
  padding: 0;
}

.todo-list li {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.todo-list li .completed {
  text-decoration: line-through;
  color: gray;
}

.todo-list li button {
  margin-left: 10px;
  padding: 3px 6px;
  font-size: 14px;
}
</style>




 







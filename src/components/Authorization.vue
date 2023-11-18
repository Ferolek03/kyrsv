<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="main">
        <p class="text_top">Вход</p>
        <p class="text_bot">Введите данные, указанные при регистрации</p>
        <input type="text" placeholder="Ваша почта">
        <input type="text" placeholder="Пароль">
        <button class="btn">Войти</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    submitForm() {
      console.log('Форма отправлена');
    }
  }
};
</script>



<style scoped>
form > div {
  width: 420px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

form > div > label {
  width: 120px;
}

form > div > input {
  margin: 10px 0;
  width: 250px;
  height: 30px;
  padding-left: 10px;
  border: 2px solid #2c3e50;
  border-radius: 5px;
}

form > div > input:focus {
  outline: none;
  border: 2px solid rgb(102, 101, 119);
}

form > input {
  margin-right: 20px;
  width: 200px;
  height: 35px;
  border: 2px solid #2c3e50;
  border-radius: 5px;
  background: rgba(91, 92, 95, 0.8);
  cursor: pointer;
}
form > div > button {
  margin: 10px 0;
  width: 250px;
  height: 30px;
  padding-left: 10px;
  border: 2px solid #2c3e50;
  border-radius: 5px;
}

form > div > button:focus {
  outline: none;
  border: 2px solid rgb(43, 36, 248);
}

form > button {
  margin: 20px 0;
  width: 200px;
  height: 35px;
  border: 2px solid #2c3e50;
  border-radius: 5px;
  background: rgba(204, 205, 211, 0.8);
  cursor: pointer;
}
</style>
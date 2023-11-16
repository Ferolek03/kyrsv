<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="main">
		<p class="text_top">Регистрация</p>
		<p class="text_bot">Убедитесь, что вы правильно заполнили все поля</p>
		<input type="text" placeholder="Ваше имя" id="name" v-model="name" required>
		<input type="text" placeholder="Ваш номер телефона"   id="number" v-model="number" required>
		<input type="text" placeholder="Дата вашего рождения"  id="data" v-model="data" required>
		<input type="text" placeholder="Ваша почта"  id="email" v-model="email" required>
		<input type="text" placeholder="Пароль"  id="password" v-model="password" required>
		<button type="submit" class="btn">Сохранить</button>
	</div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      number: '',
      data: '',
      email: '',
      password: ''
    };
  },
  methods: {
    submitForm() {
      // Здесь можно добавить логику отправки данных на сервер или выполнения других действий при отправке формы
      console.log('Форма отправлена');
    }
  }
};
</script>

<!-- <template xmlns="http://www.w3.org/1999/html">
  <form @submit.prevent="register">
    <h2>Регистрация</h2>
    <br>
    <div>
      <label htmlFor="lastName">Имя</label>
      <input id="lastName" v-model="fio" type="text" placeholder="last name">
    </div>
    <div>
      <label htmlFor="username">Email</label>
      <input id="username" v-model="email" type="text" placeholder="qwe@mail.com">
    </div>
    <div>
      <label htmlFor="password">Пароль</label>
      <input id="password" v-model="password" type="password" placeholder="password">
    </div>
    <input type="submit" value="Регистрация">
    <button @click="$router.push('catalog')">Главная</button>
  </form>
</template>

<script> // ilovedjango@mail.ru 123123
export default {
  name: "RegisterView",
  data() {
    return {
      fio: '',
      email: '',
      password: '',
    }
  },
  methods: {
    register() {
      const userData = {
        fio: this.fio,
        email: this.email,
        password: this.password,
      };
      this.$store
          .dispatch('register', userData)
    },
  }
}
</script> -->

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
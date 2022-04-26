<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <form @submit.prevent="login(user)">
      <input type="text" placeholder="Insert an email" v-model="user.email" />
      <input type="password" placeholder="Insert a password" v-model="user.password" />
      <button type="submit" @click="register">Login</button>
    </form>

  </div>
</template>

<script>
import { reactive } from 'vue';
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
  },
  setup() {
    const user = reactive({
      email: 'johndoe@gmail.com',
      password: '1234567',
    });


    return { 
      user,
      ...mapActions(["login"],)

    }
  }
}
</script>

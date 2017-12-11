<template>
  <div class="">
    <h2>{{ msg }}</h2>
    <input v-model="name" :placeholder='placeholder'></input>
    </br>
    <input type="submit" v-bind:value="btnValue" v-on:click='startGame'/>
  </div>
</template>

<script>

const data = {
  msg: 'Wprowadź swoje imię i rozpocznij grę.',
  name: '',
  placeholder: 'Twoje imię',
};

export default {
  name: 'Start',
  data() {
    return data;
  },
  computed:{
    btnValue: function() {
      return data.name + " start!";
    },
  },
  methods: {
    startGame(e) {
      this.$store.dispatch('updateUserName', {userName: this.userName});
      this.$router.push('/quiz');
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

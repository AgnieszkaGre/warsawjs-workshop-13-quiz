<template>
  <div class="hello">
    <h1>{{ gameTitle }}</h1>
    <start></start>
  </div>
</template>

<script>
import Start from '@/components/Start';

export default {
  name: 'MainPage',
  components: {
    Start,
  },
  data() {
    return {
      gameTitle: 'Milionerzy',
    };
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

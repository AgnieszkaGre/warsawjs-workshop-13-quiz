<template>
  <div class="">
    <h3>{{ title }}</h3>
    <p>{{ par1 }}</p>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data() {
    return {
      title: 'O nas:',
      par1: 'asdas asasda asdfrghe adfewe',
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

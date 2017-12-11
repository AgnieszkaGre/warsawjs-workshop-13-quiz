<template>
  <div class="">
    <div @click="highlight"> {{answer.content}} </div>
  </div>
</template>

<script>
 var data = {};

export default {
  name: 'Answer',
  props: [ 'answer' ],
  data() {
    return data;
  },
  methods: {
    highlight(e) {
      this.$emit('handleAnswer', {id:this.answer.id});
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

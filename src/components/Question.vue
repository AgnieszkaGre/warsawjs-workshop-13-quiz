<template>
  <div class="">
    <h1>{{ question.title }}</h1>
    <answer v-for="(answer, index) in question.answers" v-bind:answer="answer" :key="index" @handleAnswer="selectAnswer"></answer>
  </div>
</template>

<script>
import Answer from '@/components/Answer';

const data = {};

export default {
  name: 'Question',
  props: [ 'question' ],
  components: {
    Answer
  },
  data() {
    return data;
  },
  methods: {
    selectAnswer(answerData){
      this.$store.dispatch('updateCurrentAnswer', { questionId: this.question.id, answerId: answerData.id})
    }
  }
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

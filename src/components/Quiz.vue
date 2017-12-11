<template>
  <div class="">
    <h1></h1>
    <question :question="actualQuestion"></question>
  </div>
</template>

<script>
import Question from '@/components/Question';


const data = {
  questionList: [{
    id: 1,
    title: "best car?",
    answers: [{
            id: 1,
            content: "ford",
            correct: false
        }, {
            id: 2,
            content: "fiat",
            correct: false
        }, {
            id: 3,
            content: "tesla",
            correct: false
        }, {
            id: 4,
            content: "GM",
            correct: true
        }

    ]
  }]
};

export default {
  name: 'Quiz',
  components: {
    Question,
  },
  data() {
    return data;
  },
  computed: {
    actualQuestion() {
      return this.questionList[ this.$store.state.questionIndex ];
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

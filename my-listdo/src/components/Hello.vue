<template>
  <div class="hello">
    <h2 v-text="msg"></h2>
    <input type="text" v-model="newItem" @keyup.enter="addItem" placeholder="Pless input new item">
    <ul>
      <li v-for="item in items" v-text="item.label" :class="[list, {finish: item.isFinish}]" @click="setfinish(item)"></li>
    </ul>
    <p>child tell me: {{childWords}}</p>
    <companent-a msgfromfather="My dear!" @son-tell-me-something="listenboy"></companent-a>
  </div>
</template>

<script>
  import Vue from 'vue'
import store from '../store'
import Loading from './companentA'
  Vue.use(Loading)


export default {
  data () {
    return {
      msg: 'This is a todo list!',
      list: 'nofinish',
      items: store.fetch(),
      newItem: '',
      childWords: ''
    }
  },
  watch: {
    items: {
      handler: function(val, oldVal) {
        store.save(val)
      },
      deep: true
    }
  },
  methods: {
    setfinish (item) {
      console.log(item.isFinish)
      item.isFinish = !item.isFinish;
    },
    addItem () {
      this.items.unshift({
        label: this.newItem,
        isFinish: false
      })
      this.newItem = '';
    },
    listenboy (msg) {
      this.childWords = msg;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nofinish {
    color: #f00;
  }
  .finish {
    color: #0f0;
  }
/*h1, h2 {*/
  /*font-weight: normal;*/
/*}*/

/*ul {*/
  /*list-style-type: none;*/
  /*padding: 0;*/
/*}*/

/*li {*/
  /*display: inline-block;*/
  /*margin: 0 10px;*/
/*}*/

a {
  color: #42b983;
}
</style>

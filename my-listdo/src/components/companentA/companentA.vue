<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <h2>{{msgfromfather}}</h2>
    <button @click="onClickMe">click</button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'Hello Word!'
      }
    },
    props: [ 'msgfromfather' ],
    methods: {
      onClickMe () {
        console.log(this.msgfromfather)
        this.$emit('son-tell-me-something', this.msg)
      }
    }
  }
</script>
<style>

</style>

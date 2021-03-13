<template>
  <div  class="card">
   <span @click="Close" class="material-icons closingButton">
    close
    </span>
   <h5 class="title">{{persons}}</h5>
 <slot></slot>
 </div>
</template>

<script>
export default {
  methods: {
    Close () {
      this.$emit('Closing')
    }
  },
  props: {
    persons: {
      type: String,
      return: ''
    }
  }
}
</script>

<style>
 .card {
  position: relative;
  width: 530px ;
  height: 45%;
  z-index: 2;
 }

 .closingButton {
  margin-left: 90%;
  padding-top: 20px;
 }
 h5 {
  color:#007bff;
  font-size: 36px;
  text-align: center;
 }
</style>

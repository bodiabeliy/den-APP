<template>
 <div class="Edit_container" id="Edit">
  <span @click="Close" class="material-icons closingButton white">
   close
   </span>
 <div class="menu">
  <div class="Edit_exist">
   <h4>Edit exist</h4>
   <div class="content_field">
   <div class="ChangeDiagnosis">
    <p class="Edit"> Diagnosis:</p>
    <input class="time" type="text" placeholder="Enter your diagnosis:">
   </div>
   <div class="ChangeTime">
    <p class="Edit"> Time:</p>
    <input class="time" type="text" placeholder="Enter your time:">
   </div>
   <a href="#" class="btn btn-secondary btn-lg"><i class="fad fa-pencil-alt"  style="font-size: 7px; padding-bottom: 3px; padding-right: 2px; color: whitesmoke;"></i> Apply</a>
   </div>
  </div>
  <div class="Add_new">
   <h4>Add new</h4>
   <div class="content_field">
    <div class="content_field">
     <div class="ChangeDiagnosis">
      <p class="Edit"> Diagnosis:</p>
      <input :value="diag" @input="diag = $event.target.value" class="time" type="text" placeholder="Enter your diagnosis:">
     </div>
     <div class="ChangeTime">
      <p class="Edit"> Time:</p>
      <input required :value="times" @input="times = $event.target.value" class="time" type="text" placeholder="Enter your time:">
     </div>
     <a @click="Apply" href="#" class="btn btn-secondary btn-lg"><i class="fal fa-calendar-alt"  style="font-size: 7px; padding-bottom: 3px; margin-right: 10px; color: whitesmoke;"></i> Adding</a>
     </div>
   </div>
  </div>
  <div class="alert_srction">
    <div class="warnning">
      <i class="fal fa-exclamation-circle" style="margin-top:35px; margin-left: 30px; color: white !important;"></i> <span style="font-size: 25px; color: white;">Error! Record not adding</span>
    </div>
    <div class="success">
      <i class="fad fa-spell-check" style="margin-top:35px; margin-left: 30px; color: white !important;"></i> <span style="font-size: 25px; color: white;">recording are adding cuccessfully!</span>
    </div>
  </div>
 </div>
 </div>
</template>

<script>
export default {
  props: {
    Times: {
      return: {}
    }
  },
  methods: {
    Close () {
      this.$emit('ClosingEdit')
    },
    Apply () {
      const success = document.querySelector('.success')
      const addTime = this.times
      const addDiag = this.diag
      this.storeTime = addTime
      this.storeDiag = addDiag
      console.log(this.storeDiag)
      if (this.storeDiag.length === 0 || this.storeTime.length === 0) {
        const warnning = document.querySelector('.warnning')
        warnning.style.opacity = 1
        setTimeout(() => {
          warnning.style.opacity = 0
        }, 2000)
      }
      if (this.storeDiag.length === 0 || this.storeTime !== 0) {
        setTimeout(() => {
          success.style.opacity = 1
        }, 2200)
        setTimeout(() => {
          success.style.opacity = 0
        }, 4200)
      }
    }
  },
  data: () => ({
    times: '',
    diag: '',
    storeTime: [],
    storeDiag: []
  })
}
</script>
<style>
  span {
    padding-left: 40px;
    font-family: 'Prompt', sans-serif;
  }
 h1 {
  display: flex;
  justify-content: center;
  color: whitesmoke;
  line-height:1.8
 }
 h4 {
  text-align: center;
  color: whitesmoke;
 }
 .Edit {
  font-size: 20px;
  padding-top: 10px;
  padding-left: 15px;
  color: whitesmoke;
 }
 .Edit_container {
  align-items: center;
  margin-top: 40px;
  position: absolute;
  width: 100%;
  justify-content: center;
  height: 470px;
  background: rgb(14, 70, 107);
  z-index: 4;
 }
 .white {
  color: whitesmoke;
 }
 .menu {
  display: flex;
  justify-content: space-around;
 }
 .ChangeTime {
  margin-bottom: 20px;
 }
 .content_field {
  width: 220px;
  height: 350px;
  box-shadow:0 0 8px 0 #9e9d9d;
 }
 .time {
  line-height: 3;
  margin-left: 10px;
  border: 1.5px solid whitesmoke
 }
 .btn {
  margin-left: 50px;
 }
 .alert_srction {
 position: absolute;
 width: 100%;
 margin: 0 auto;
 }
 .success {
   position: absolute;
   width: 100%;
   height: 90px;
   background: rgb(21, 104, 4);
   opacity: 0;
   z-index: 6;
 }
 .warnning {
  position: absolute;
   width: 100%;
   height: 90px;
   background: rgb(156, 8, 27);
   opacity: 0;
   z-index: 6;
 }
</style>

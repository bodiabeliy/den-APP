<template>
 <div class="addNew">
   <router-link  :to="{name: 'DataList'}">
     <h3 style="padding: 30px">Back</h3>
   </router-link>
  <div class="patient_list">
    <h1 style="color:black; text-align:center">Add new contact</h1>
    <form @submit.prevent="submit()"
      style="margin: 0 auto">
    <img class="imageAdd" :src=" require('../assets/images/empty-ava.jpg')" alt="img">
    <input
      v-model="title"
      class="styles"
      type="text"
      placeholder="Enter your name...">
    <input
      v-model="body"
      class="styles"
      type="text"
      placeholder="Enter your phone...">
    <button class="button_styles" type="submit"> Add contact</button>
  </form>
  <div class="massege">
     <span class="material-icons" style="font-size: 90px; margin-right: 30px">
      check_circle_outline
      </span>
      <h1 style="align-items: center">New conrtact add!</h1>
  </div>
  </div>
 </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data: () => ({
    name: '',
    phone: '',
    avatar: 'Max-Stiven.jpg',
    id: 100
  }),
  props: {
  },
  methods: {
    ...mapMutations([
      'ADDING_NEW_CONTACT'
    ]),
    submit () {
      const masege = document.querySelector('.massege')
      this.ADDING_NEW_CONTACT({
        title: this.name,
        body: this.phone,
        avatar: this.avatar,
        id: this.id
      })
      masege.style.opacity = 1
      setTimeout(() => {
        masege.style.opacity = 0
      }, 2000)
      this.id++
    }
  }
}
</script>
<style>
.patient_list {
  width: 700px;
  display: flex;
  flex-direction: column;
}
.addNew {
  position: relative;
  width: 100%;
  justify-content: center;
}
 img{
   display: flex;
   justify-content: center;
  width: 300px;
  height: 300px;
  padding: 20px;
  margin: 0 auto;
}
.styles {
  border: 2px solid #007bff;
    border-radius: 14px;
  width: 90%;
  padding: 10px;
  margin: 10px;
}
.button_styles {
  color: white;
  font-size: 24px;
  border-radius: 14px;
  vertical-align: middle;
  font-size: 20px;
  width: 90%;
  padding: 20px;
  margin: 15px;
  background: #007bff;
}
.button_styles:hover {

  background: #0d4a8b;
}
.massege {
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-left: 30px;
  margin-right: 30px;
  color: white;
  font-size: 30px;
  margin: 0 auto;
  position: fixed;
  width: 100%;
  height: 150px;
  background: rgb(7, 58, 15);
  opacity: 0;
}
</style>

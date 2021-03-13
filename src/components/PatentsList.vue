<template>
 <div class="vWrapper">
  <div class="v-list-item">
    <img class="avatar" :src=" require('../assets/images/' + person_data.avatar) " alt="img">
    <div @click="showDetalies" class="flex">
      <p class="name small">{{person_data.name}}</p>
       <i @click="Add" class="fas fa-heart icon-disable" style="font-size: 5.5px;"></i>
    </div>
      <i @click="Delete" class="fas fa-user-times" style="font-size: 7px;margin-right:20px"></i>
  </div>
  <Detalize v-if="visible" @Closing="ClosingDetal" :persons ="person_data.name">
    <img class="popup" :src=" require('../assets/images/' + person_data.avatar) " alt="img">
    <div class="timeAndEdit">
    <p class="phone" style="width: 100%"><i class="fas fa-mobile-alt" style="font-size: 7px; padding-bottom: 3px;padding-right: 10px; color: black; margin-left:10%"></i>{{person_data.phone}}</p>
      <button class="around-1"></button>
      <span class="material-icons changeColor" @click="OpenEdit">
        border_color
        </span>
    </div>
  </Detalize>
  <Alert @RemoveConact="DeleteData" v-if="alertMessage" class="warning">
  </Alert>
 </div>
</template>

<script>
import Detalize from '../components/DetalizeInfo'
import Alert from '../components/Alert'
export default {
  props: {
    person_data: {
      type: Object,
      return: { }
    }
  },
  components: {
    Detalize,
    Alert
  },
  data: () => ({
    visible: false,
    show: true,
    alertMessage: false,
    chose: null
  }),
  methods: {
    Add () {
      this.$emit('AddConacts', this.person_data)
    },
    showDetalies () {
      this.visible = true
    },
    ClosingDetal () {
      this.visible = false
    },
    OpenEdit () {
      this.show = true
      const color = document.querySelector('.changeColor')
      color.classList.toggle('red')
    },
    ClosingDetalEdit () {
      this.show = false
      const color = document.querySelector('.changeColor')
      color.classList.toggle('red')
    },
    Delete () {
      this.alertMessage = true
    },
    DeleteData (data) {
      if (data === true) {
        console.log('Delete was successful!')
        setTimeout(() => {
          this.$emit('DeleteContact')
        }, 1000)
      }
      if (data === false) {
        alert('Delete was failed!')
      }
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
  .v-list-item{
    width: 520px;
    box-shadow:0 0 8px 0 #9e9d9d;
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin-left: 15px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
.v-list-item:hover{
  background: rgba(14, 70, 107, 0.144);
}
.date {
  font-family: 'Ranchers', cursive;
  font-size: 16px;
}
.name{
  font-family: 'Russo One', sans-serif;
  font-size: 18px;
}
p, .small {
  font-size: 14px;
}
.phone {
  font-size: 16px;
  color: #a19e9e;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.popup {
  display: flex;
  margin: 1% 2%;
  justify-content: center;
  width: 500px;
}
.around-1 {
  background: rgb(255, 255, 255);
  margin-left: 20px;
}
.price {
  padding-bottom: 5px;
  border-bottom: 2px solid #435351;

}
.diangosis {
  font-size: 17px;
}
.times {
  font-size: 16px;
}
.timeAndEdit {
  display: flex;
  justify-content: space-between;
}
.red {
  color: red;
}

.icon-disable {
  color: #ccc
}
.icon-active {
  color: rgb(214, 33, 72)
}
.warning {
  padding: 10px;
  margin: 0 auto;
  width: 400px;
  height: 200px;
  background: #ccc;
  z-index: 3;
}
</style>

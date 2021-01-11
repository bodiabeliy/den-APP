<template>
 <div class="vWrapper">
  <p class="date">{{product_data.day}}</p>
  <div @click="showDetalies" class="v-list-item">
    <img class="avatar" :src=" require('../assets/images/' + product_data.avatar) " alt="img">
    <div class="flex">
      <p class="name small">{{product_data.name}}</p>
    <p class="rounded">{{product_data.time}}</p>
    </div>
  </div>
  <Detalize v-if="visible" @Closing="ClosingDetal">
    <p class="name">{{product_data.name}}</p>
    <p class="phone ">{{product_data.phone}}<button class="around-1"><i class="fas fa-mobile-alt" style="font-size: 7px; padding-bottom: 3px; color: black;"></i></button> </p>
    <img class="popup" :src=" require('../assets/images/' + product_data.avatar) " alt="img">
    <button type="button" class="btn btn-outline-primary">patient anatomy<i class="fas fa-tooth" style="font-size:7.5px; padding-left: 10px;padding-bottom: 2px;" ></i></button>
    <b> <p class="diangosis">{{"Diagnosis: " + product_data.diangosis}}</p></b>
    <div class="timeAndEdit">
      <p class="times" >{{"Time: " + product_data.time}}</p>
      <span class="material-icons changeColor" @click="OpenEdit">
        border_color
        </span>
        <Edit v-if="show" @ClosingEdit="ClosingDetalEdit"></Edit>
    </div>
    <p class="price">{{"service cost: " + product_data.price +" UAH"}}</p>
  </Detalize>
 </div>
</template>

<script>
import Detalize from '../components/DetalizeInfo'
import Edit from '../components/Edit'
export default {
  props: {
    product_data: {
      type: Object,
      return: { }
    }
  },
  components: {
    Detalize,
    Edit
  },
  data: () => ({
    visible: false,
    show: true,
    data: []
  }),
  methods: {
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
    Save () {
      console.log('Successful!')
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
</style>

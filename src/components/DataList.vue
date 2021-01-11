<template>
  <div>
    <div class="header" style="background-color: #007bff; width: 520px; margin-left: 20px;">
      <h1 class="header" style="color: white; text-align: center">Patients</h1>
    </div>
    <div class="patient__list">
      <PatentsList
        v-for="patient in patients"
        :key="patient.article"
        :product_data="patient"
      >
    </PatentsList>
    </div>
   <button class="around" @click="Massege">
    <i class="far fa-plus-circle plus"></i>
   </button>
   <div class="warnning">
    <i class="fas fa-bug" style="margin-top:35px; margin-left: 30px; color: white !important;"></i> <span style="font-size: 23px; color: white;">Oops! this option not available!</span>
  </div>
  </div>
</template>

<script>
import PatentsList from './PatentsList'
export default {
  components: {
    PatentsList
  },
  methods: {
    Massege () {
      const warnning = document.querySelector('.warnning')
      warnning.style.opacity = 1
      setTimeout(() => {
        warnning.style.opacity = 0
      }, 2000)
    }
  },
  data: () => ({
    patients: [
      {
        day: '12 September',
        name: 'Franky Line',
        diangosis: 'Deleting',
        article: 'T1',
        avatar: 'Franky Line.jpg',
        time: '14:30',
        phone: '+38(067)-153-47-86',
        price: '300'
      },
      {
        day: '12 September',
        name: 'Sara Kolin',
        diangosis: 'Deleting',
        article: 'T2',
        avatar: 'Sara_Kolin.jpg',
        time: '15:00',
        phone: '+38(068)-737-47-16',
        price: '270'
      },
      {
        day: '12 September',
        name: 'Roberta Kiosaki',
        diangosis: 'Deleting',
        article: 'T3',
        avatar: 'Roberta Kiosaki.jpg',
        time: '16:30',
        phone: '+38(096)-668-11-89',
        price: '740'
      },
      {
        day: '14 September',
        name: 'Alex Winter',
        diangosis: 'Searching',
        article: 'T4',
        avatar: 'Alex Winter.jpg',
        time: '9:10',
        phone: '+38(067)-103-17-55',
        price: '120'
      },
      {
        day: '14 September',
        name: 'Elina Zilly',
        diangosis: 'Deleting',
        article: 'T5',
        avatar: 'Elina_Zilly.jpg',
        time: '14:30',
        phone: '+38(050)-253-90-18',
        price: '400'
      },
      {
        day: '16 September',
        name: 'Alis Wood',
        diangosis: 'Deleting',
        article: 'T6',
        avatar: 'Alis Wood.jpg',
        time: '18:50',
        phone: '+38(067)-153-41-86',
        price: '900'
      },
      {
        day: '19 September',
        name: 'Filimon Crazhevsky',
        diangosis: 'Deleting',
        article: 'T8',
        avatar: 'Filimon Crazhevsky.jpg',
        time: '18:50',
        phone: '+38(063)-186-47-22',
        price: '1500'
      },
      {
        day: '19 September',
        name: 'Maria Om',
        diangosis: 'Deleting',
        article: 'T9',
        avatar: 'Maria Om.jpg',
        time: '19:20',
        phone: '+38(066)-153-00-86',
        price: '650'
      },
      {
        day: '22 September',
        name: 'Bob Karten',
        diangosis: 'Deleting',
        article: 'T10',
        avatar: 'Bob Karten.jpg',
        time: '18:50',
        phone: '+38(067)-163-06-42',
        price: '1000'
      }
    ]
  })
}

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');
  .header h1{
    font-family: 'Kanit', sans-serif;
    align-items: center;
  }
.patient__list
{
  display: flex;
  flex-wrap: wrap;
  width: 700px;
}
.around {
  background:#007bff;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-top: 20px;
  margin-left: 115%;
  color: white !important;
}
i {
  transform: scale(4);
  padding-right: 0.5px;
}
.warnning {
  position: absolute;
   width: 100%;
   height: 90px;
   background: rgb(156, 8, 27);
   opacity: 0;
   z-index: 6;
 }
 .paginator {
  line-height: 150%;
}
.paginator > span {
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
}
.paginator_active {
  color: red;
}
</style>

<template>
  <div>
    <div class="header">
      <h1 class="header" style="color: black; text-align: center">Contact book</h1>
    </div>
    <div class="patient__list">
      <ContactList
        v-for="(person, index) in CONTACT_LIST"
        :key="person.id"
        :person_data="person"
        @DeleteContact="Deleting(index)"
        @AddConacts="Add"
      >
    </ContactList>
     <div v-if="CONTACT_LIST.length == 0" class="patient__list">
      <h4 style="color: #007bff; margin: 0 140px">contact list is empty!</h4>
    </div>
    </div>
    <router-link :to="{name: 'addContact', params: {person_data: FAVORITE}}">
      <button class="around">
        <i class="far fa-plus-circle plus"></i>
      </button>
    </router-link>
     <div v-if="FAVORITE.length !=0" class="favorite">
       <h2>Favorities: {{ FAVORITE.length}}</h2>
        <ContactList
        v-for="person in FAVORITE"
        :key="person.id"
         @DeleteContact="FromFavorite(index)"
        :person_data="person"
      >
    </ContactList>
     </div>
   <div class="warnning">
    <i class="fas fa-bug" style="margin-top:35px; margin-left: 30px; color: white !important;"></i> <span style="font-size: 23px; color: white;">Oops! this option not available!</span>
  </div>
  </div>
</template>

<script>
import ContactList from './PatentsList'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    ContactList
  },
  data: () => ({
  }),
  methods: {
    ...mapActions([
      'DEL',
      'ADD'
    ]),
    ...mapMutations([
      'CLEAN'
    ]),
    Deleting (index) {
      this.sum++
      console.log(this.sum)
      this.DEL(index)
    },
    FromFavorite (index) {
      this.DEL(index)
      this.FAVORITE.length--
    },
    Add (data) {
      this.ADD(data)
    }
  },
  computed: {
    ...mapGetters([
      'CONTACT_LIST',
      'FAVORITE'
    ])
  }
}

</script>

<style >
  @import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');
  .header {
   width: 520px;
  }
  .header h1{
    font-family: 'Kanit', sans-serif;
    align-items: center;
  }
.patient__list
{
  padding-top:20px;
  display: flex;
  flex-wrap: wrap;
  height: 400px;
  overflow: scroll;
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
   width: 520px;
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

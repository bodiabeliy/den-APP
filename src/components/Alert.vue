<template>
  <div  class="card">
  <h5 style="color: black">Do you really want to delete the contact?</h5>
  <div class="choseBtn">
      <button @click="Remove" class="chose yes"> Yes</button>
      <button @click="RemoveNo" class="chose no"> No</button>
    </div>
 </div>
</template>
<script>

export default {
  data: () => ({
    yes: true,
    no: false
  }),
  methods: {
    Remove () {
      this.$emit('RemoveConact', this.yes)
    },
    RemoveNo () {
      this.$emit('RemoveConact', this.no)
    }
  }
}
</script>
<style>
.choseBtn {
  width: 90%;
  display: flex;
  justify-content: space-between;
}
.chose {
  color: white;
  width: 70px;
  height: 25px;
  border-radius: 10px;
  border: 1px solid #cecece;
}
.yes {
  background: #007bff;
}
.no {
  background: rgb(214, 33, 72);
}
</style>

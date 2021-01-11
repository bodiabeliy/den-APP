<template>
  <div class="v-main-wrapper">
    <DataList>
    </DataList>
  </div>
</template>

<script>
import DataList from './DataList'
export default {

  components:
  {
    DataList
  }
}
</script>

<!-- scoped - use styles for one component-->
<style scoped>
  .v-main-wrapper {
    width:400px;
  }
</style>

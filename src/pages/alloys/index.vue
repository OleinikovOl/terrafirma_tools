<template>
  <v-container>
    <v-row justify="start">
      <v-col cols="12" class="page-title">
        <h2>Alloys</h2>
        <v-btn icon="mdi-plus" @click="addAlloy"></v-btn>
      </v-col>
      <v-col v-for="(item, index) in data" :key="item.id" :cols="$vuetify.display.smAndDown ? 12 : 6">
        <alloy-calculator @change="saveData($event, index)" :default-value="data?.[index] || {}" @remove="removeItem(index)"></alloy-calculator>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

  import {onMounted} from "vue";

  const data = ref([])
  const saveData = (e, index) => {
    data.value[index] = {...e}
    localStorage.setItem('alloys', JSON.stringify(data.value))
  }

  const loadData = () => {
    const alloysFromStorage = JSON.parse(localStorage.getItem('alloys'))
    alloysFromStorage && alloysFromStorage.length ? data.value = alloysFromStorage : data.value.push({})
  }

  const addAlloy = () => {
    data.value.push({id: Date.now()})
  }

  const removeItem = (index) => {
    data.value.splice(index, 1)
    data.value = [...data.value]
    localStorage.setItem('alloys', JSON.stringify(data.value))
  }

  onMounted(() => {
    loadData()
  })
</script>

<style scoped>
.page-title {
  display: flex;
  justify-content: space-between;
}
</style>

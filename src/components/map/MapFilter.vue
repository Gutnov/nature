<template>
  <div class="map-filter">
    <div>
      <h2 class="map-filter__title">Загрязняющее вещество</h2>
      <CustomSelect
        v-model="substance"
        :items="['Оксид углерода СО', 'Оксид водорода СО2']"
        style="margin-right: 20px; flex: 1; flex-shrink: 1"
      />
    </div>
    <div>
      <h2 class="map-filter__title">Отображать данные</h2>
      <CustomSelect v-model="time" :items="['Сегодня', 'Вчера']" style="flex: 1; flex-shrink: 1" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import CustomSelect from '../CustomSelect.vue'

const substance = ref('Оксид углерода СО')
const time = ref('Сегодня')
</script>

<style lang="scss">
.map-filter {
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  max-width: 100%;
  overflow: hidden;
  align-items: center;
}

.map-filter__title {
  margin-right: 12px;
  margin-bottom: 10px;
}
</style>

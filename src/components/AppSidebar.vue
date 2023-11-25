<template>
  <aside class="app-sidebar">
    <h2 class="app-sidebar__title">Камера</h2>
    <CustomSelect
      :label="'Выберете город'"
      v-model="location"
      style="margin-bottom: 24px"
      :items="['Нижний Новгород, пр-т Ленина 24', 'Москва', 'Санкт-Петербург']"
    />
    <ArcDiagram style="margin-bottom: 24px" />
    <h2 class="app-sidebar__title">Прогноз</h2>
    <CustomSelect
      v-model="time"
      :label="'Выберете время'"
      style="margin-bottom: 24px"
      :items="['Почасовой', 'Поминутный']"
    />
    <BarChart />
  </aside>
</template>

<script setup>
import CustomSelect from './CustomSelect.vue'
import ArcDiagram from './ArcDiagram.vue'
import BarChart from './BarChart.vue'
import { ref } from 'vue'

const location = ref('Нижний Новгород, пр-т Ленина 24')
const time = ref('Почасовой')
</script>

<style lang="scss" scoped>
.app-sidebar {
  padding-right: 14px;
  background-color: #fff;
  width: 287px;
  min-width: 320px;
  border: 1px solid #ecedf6;
  border-left: 0;
  border-bottom: none;
  padding-top: 20px;
  padding-left: 20px;
  height: calc(100vh - 65.5px);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    left: -100%;
    top: 0;
  }
}

.app-sidebar__title {
  margin-bottom: 16px;
}

@media (max-width: 900px) {
  .app-sidebar {
    width: 100%;
  }
}
</style>

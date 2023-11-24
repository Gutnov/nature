<template>
  <div class="arc-diagram">
    <div class="arc-diagram__wr">
      <div class="arc-diagram__circle"></div>
      <ArcDiagramIcon />
    </div>
    <div class="arc-diagram__text">
      <p class="arc-diagram__quality">Хорошее качество воздуха</p>
      <p class="arc-diagram__concentration">Концентрация СО - 10 г/км</p>
    </div>
  </div>
</template>

<script setup>
import ArcDiagramIcon from '../components/icons/IconArcDiagram.vue'
</script>

<style lang="scss">
.arc-diagram {
  position: relative;
  box-shadow: 0px 4px 25px 0px #00000012;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12px;
}
.arc-diagram__text {
  width: 100%;
  text-align: center;
  position: relative;
  top: -17px;
  p {
    margin-bottom: 0;
  }
}
.arc-diagram__wr {
  position: relative;
  line-height: 0;
}
.arc-diagram__circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid #daddef;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 1px;
  z-index: 1;
  transform-origin: 116px 8px;
  transform: rotate(45deg);
  display: block;
}

.arc-diagram__quality {
  font-weight: 500;
  font-size: 14px;
}

.arc-diagram__concentration {
  color: #75808a;
}
</style>

<template>
  <div class="custom-select">
    <q-select
      use-input
      input-debounce="0"
      :hide-dropdown-icon="!!value"
      :options="items"
      @filter="filterFn"
      style="width: '100%'"
      bg-color="white"
      outlined
      borderless
      hide-bottom-space
      popup-content-class="custom-select__popup"
      v-model="value"
      :model-value="value"
      width="auto"
    >
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey"> No results </q-item-section>
        </q-item>
      </template>
      <template v-if="modelValue" v-slot:append>
        <q-icon
          name="close"
          @click.stop.prevent="value = null"
          class="cursor-pointer custom-select__reset"
        />
      </template>
    </q-select>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const stringOptions = [
  'Нижний Новгород, пр-т Ленина 24',
  'Facebook',
  'Twitter',
  'Apple',
  'Oracle',
  'Google',
  'Faceboo'
]

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  label: String,
  modelValue: {
    type: String,
    default: 'Нижний Новгород, пр-т Ленина 24'
  },
  items: {
    type: Array,
    default: () => [
      'Нижний Новгород, пр-т Ленина 24',
      'Facebook',
      'Twitter',
      'Apple',
      'Oracle',
      'Google',
      'Faceboo'
    ]
  }
})

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    console.log(value)
    emit('update:modelValue', value)
  }
})
const options = ref(stringOptions)

const filterFn = (val, update) => {
  if (val === '') {
    update(() => {
      options.value = stringOptions

      // here you have access to "ref" which
      // is the Vue reference of the QSelect
    })
    return
  }

  update(() => {
    const needle = val.toLowerCase()
    options.value = stringOptions.filter((v) => v.toLowerCase().indexOf(needle) > -1)
  })
}
</script>

<style lang="scss">
.custom-select {
  .q-field__native span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 213px;
  }

  .q-field__native {
    flex-wrap: nowrap !important;
  }

  .q-field__append {
    &:first-child {
      display: none;
    }
    padding-left: 8px;

    .custom-select__reset {
      font-size: 15px;
    }
  }

  .q-field__input {
    flex: 0;
    flex-shrink: 2;
  }
}
.custom-select__popup {
  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 250px;
    display: block;
  }
}
</style>

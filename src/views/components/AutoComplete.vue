<template>
  <a-auto-complete
      v-model:value="value"
      :options="options"
      style="width: 200px"
      placeholder="input here"
      @select="onSelect"
      @search="onSearch"
  />
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

interface MockVal {
  value: string;
}
const mockVal = (str: string, repeat = 1): MockVal => {
  return {
    value: str.repeat(repeat),
  }
}
export default defineComponent({
  setup() {
    const value = ref('')
    const options = ref<MockVal[]>([])
    const onSearch = (searchText: string) => {
      console.log('searchText')
      options.value = !searchText
          ? []
          : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    }
    const onSelect = (value: string) => {
      console.log('onSelect', value)
    }
    watch(value, () => {
      console.log('value', value.value)
    })
    return {
      value,
      options,
      onSearch,
      onSelect,
    }
  },
})
</script>


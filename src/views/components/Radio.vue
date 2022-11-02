<template>
  <a-radio v-model:checked="checked">Radio</a-radio>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const checked = ref<boolean>(false)
    return {
      checked
    }
  }
})
</script>

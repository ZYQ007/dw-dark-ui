<template>
  <div>
    <a-button type="primary" @click="showModal">Open Modal</a-button>
    <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const visible = ref<boolean>(false)

    const showModal = () => {
      visible.value = true
    }

    const handleOk = (e: MouseEvent) => {
      console.log(e)
      visible.value = false
    }
    return {
      visible,
      showModal,
      handleOk
    }
  }
})
</script>

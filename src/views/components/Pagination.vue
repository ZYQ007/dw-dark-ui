<template>
  <a-pagination v-model:current="current" :total="50" show-less-items />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      current: ref(2),
    };
  },
});
</script>

<style scoped>

</style>

<template>
  <a-avatar :size="64">
    <template #icon><UserOutlined /></template>
  </a-avatar>
  <a-avatar size="large">
    <template #icon><UserOutlined /></template>
  </a-avatar>
  <a-avatar>
    <template #icon><UserOutlined /></template>
  </a-avatar>
  <a-avatar size="small">
    <template #icon><UserOutlined /></template>
  </a-avatar>
  <br />
  <a-avatar shape="square" :size="64">
    <template #icon><UserOutlined /></template>
  </a-avatar>
  <a-avatar shape="square" size="large">
    <template #icon><UserOutlined /></template>
  </a-avatar>
  <a-avatar shape="square">
    <template #icon><UserOutlined /></template>
  </a-avatar>
  <a-avatar shape="square" size="small">
    <template #icon><UserOutlined /></template>
  </a-avatar>
</template>
<script lang="ts">
import { UserOutlined } from '@ant-design/icons-vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    UserOutlined
  }
})
</script>

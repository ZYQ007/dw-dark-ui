<template>
  <div class="cascader">
    <a-cascader
        v-model:value="value"
        :options="options"
        placeholder="Please select"
      />
  </div>

</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

import type { CascaderProps } from 'ant-design-vue'
const options: CascaderProps['options'] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
]
export default defineComponent({
  setup() {
    return {
      value: ref<string[]>([]),
      options
    }
  }
})
</script>

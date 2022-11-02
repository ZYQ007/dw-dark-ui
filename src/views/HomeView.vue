<template>
  <div class="container">
    <a-layout has-sider>
      <a-layout-sider
          :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }"
          :width="280"
      >
        <a-menu
            v-model:selectedKeys="state.selectedKeys"
            style="width: 256px"
            class=""
            mode="inline"
            :open-keys="openKeys"
            @click="onToAnchor"
        >
          <a-menu-item v-for="item in list" :key="item.key">
            <router-link :to="`#${item.id}`">
              {{ item.type }} {{ item.name }}
            </router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout :style="{ marginLeft: '242px' }">
        <a-layout-content :style="{ margin: '0px 0px', overflow: 'initial' }">
          <Comp class='Main' ref="ChildFun"></Comp>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import Comp from './main/index.vue'
import { reactive, ref } from 'vue'
import { list } from './data'

const state = reactive({
  rootSubmenuKeys: [],
  openKeys: [],
  selectedKeys: []
})
const ChildFun: any = ref(null)

const onToAnchor = () => {
  ChildFun.value.onToAnchor()
}
</script>

<style scoped>
.ant-menu-item a {
  display: block;
}
.container {
  display: flex;
  justify-content: flex-start;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #fff;
}
</style>

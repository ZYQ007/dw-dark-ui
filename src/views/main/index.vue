<template>
  <div id="Main">
    <div id="Button">
      <p class="title">Button 按钮</p>
      <div>
        <Button></Button>
      </div>
    </div>
    <div id="Dropdown">
      <p class="title">Dropdown 下拉菜单</p>
      <div>
        <Dropdown></Dropdown>
      </div>
    </div>
    <div id="Pagination">
      <p class="title">Pagination 分页</p>
      <div>
        <Pagination></Pagination>
      </div>
    </div>
    <div id="AutoComplete">
      <p class="title">AutoComplete 自动完成</p>
      <div>
        <AutoComplete></AutoComplete>
      </div>
    </div>
    <div id="Cascader">
      <p class="title">Cascader 级联选择</p>
      <div>
        <Cascader></Cascader>
      </div>
    </div>
    <div id="Checkbox">
      <p class="title">Checkbox 多选框</p>
      <div>
        <Checkbox></Checkbox>
      </div>
    </div>
    <div id="DatePicker">
      <p class="title">DatePicker 日期选择框</p>
      <div>
        <DatePicker></DatePicker>
      </div>
    </div>
    <div id="Input">
      <p class="title">Input 输入框</p>
      <div>
        <Input/>
      </div>
    </div>
    <div id="Radio">
      <p class="title">Radio 单选框</p>
      <div>
        <Radio/>
      </div>
    </div>
    <div id="Select">
      <p class="title">Select 选择器</p>
      <div>
        <Select/>
      </div>
    </div>
    <div id="Slider">
      <p class="title">Slider 滑动输入条</p>
      <div>
        <Slider/>
      </div>
    </div>
    <div id="Switch">
      <p class="title">Switch 开关</p>
      <div>
        <Switch/>
      </div>
    </div>
    <div id="TimePicker">
      <p class="title">TimePicker 时间选择框</p>
      <div>
        <TimePicker/>
      </div>
    </div>
    <div id="TreeSelect">
      <p class="title">TreeSelect 树选择</p>
      <div>
        <TreeSelect/>
      </div>
    </div>
    <div id="Upload">
      <p class="title">Upload 上传</p>
      <div>
        <Upload/>
      </div>
    </div>
    <div id="Card">
      <p class="title">Card 卡片</p>
      <div>
        <Card/>
      </div>
    </div>
    <div id="Avatar">
      <p class="title">Avatar 头像</p>
      <div>
        <Avatar/>
      </div>
    </div>
    <div id="Carousel">
      <p class="title">Carousel 走马灯</p>
      <div>
        <Carousel/>
      </div>
    </div>
    <div id="Empty">
      <p class="title">Empty 空状态</p>
      <div>
        <Empty/>
      </div>
    </div>
    <div id="Image">
      <p class="title">Image 图片</p>
      <div>
        <Image/>
      </div>
    </div>
    <div id="List">
      <p class="title">List 列表</p>
      <div>
        <List/>
      </div>
    </div>
    <div id="Statistic">
      <p class="title">Statistic 统计数值</p>
      <div>
        <Statistic/>
      </div>
    </div>
    <div id="Table">
      <p class="title">Table 表格</p>
      <div>
        <Table/>
      </div>
    </div>
    <div id="Tabs">
      <p class="title">Tabs 标签页</p>
      <div>
        <Tabs/>
      </div>
    </div>
    <div id="Tree">
      <p class="title">Tree 树形控件</p>
      <div>
        <Tree/>
      </div>
    </div>
    <div id="Alert">
      <p class="title">Alert 警告提示</p>
      <div>
        <Alert/>
      </div>
    </div>
    <div id="Message">
      <p class="title">Message 全局提示</p>
      <div>
        <Message/>
      </div>
    </div>
    <div id="Modal">
      <p class="title">Modal 对话框</p>
      <div>
        <Modal/>
      </div>
    </div>
    <div id="Notification">
      <p class="title">Notification 通知提醒框</p>
      <div>
        <Notification/>
      </div>
    </div>
    <div id="Popconfirm">
      <p class="title">Popconfirm 气泡确认框</p>
      <div>
        <Popconfirm/>
      </div>
    </div>
    <div id="Progress">
      <p class="title">Progress 进度条</p>
      <div>
        <Progress/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import Button from '@/views/components/Button.vue'
import Dropdown from '@/views/components/Dropdown.vue'
import Pagination from '@/views/components/Pagination.vue'
import AutoComplete from '@/views/components/AutoComplete.vue'
import Cascader from '@/views/components/Cascader.vue'
import DatePicker from '@/views/components/DatePicker.vue'
import Input from '@/views/components/Input.vue'
import Radio from '@/views/components/Radio.vue'
import Select from '@/views/components/Select.vue'
import Slider from '@/views/components/Slider.vue'
import Switch from '@/views/components/Switch.vue'
import TimePicker from '@/views/components/TimePicker.vue'
import TreeSelect from '@/views/components/TreeSelect.vue'
import Upload from '@/views/components/Upload.vue'
import Card from '@/views/components/Card.vue'
import Avatar from '@/views/components/Avatar.vue'
import Carousel from '@/views/components/Carousel.vue'
import Empty from '@/views/components/Empty.vue'
import Image from '@/views/components/Image.vue'
import List from '@/views/components/List.vue'
import Statistic from '@/views/components/Statistic.vue'
import Table from '@/views/components/Table.vue'
import Tabs from '@/views/components/Tabs.vue'
import Tree from '@/views/components/Tree.vue'
import Alert from '@/views/components/Alert.vue'
import Message from '@/views/components/Message.vue'
import Modal from '@/views/components/Modal.vue'
import Notification from '@/views/components/Notification.vue'
import Checkbox from '@/views/components/Checkbox.vue'
import Popconfirm from '@/views/components/Popconfirm.vue'
import Progress from '@/views/components/Progress.vue'


import { useRouter } from 'vue-router'
const router = useRouter()
let hash = ref(router.currentRoute.value.hash)
watchEffect(() => {
  hash = ref(router.currentRoute.value.hash)
})
const onToAnchor = () => {
  const target: any = document.querySelector(`${hash.value}`)
  target.scrollIntoView({
    behavior: 'smooth' //平滑滚动
  })
}
defineExpose({
  onToAnchor
})
</script>

<style scoped lang="less">
#Main{
  padding: 20px;
  background: url(@/assets/images/background1.png);
  //display: flex;
  //height: fit-content;
  //flex-direction: column;
  width: 100%;
  >div{
    margin-bottom: 50px;
    //min-height: 400px;
  }
}
.title{
  line-height: 40px;
  font-weight: bold;
  color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
}
</style>

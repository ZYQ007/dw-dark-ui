<template>
  <a-progress :percent="30" />
  <a-progress :percent="50" status="active" />
  <a-progress :percent="70" status="exception" />
  <a-progress :percent="100" />
  <a-progress :percent="50" :show-info="false" />
</template>

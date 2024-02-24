<template>
  <el-row>
    <el-col :span="24">
      <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router>
        <el-menu-item>
          <span slot="title">实验室预约系统</span>
        </el-menu-item>
        <el-menu-item index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>首页</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'index',
}
</script>

<style scoped>
.el-menu {
  border-right: 0px;
  .is-active {
    background-color: blue !important;
  }
}

</style>

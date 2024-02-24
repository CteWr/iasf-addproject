<template>
  <el-container>
    <el-header>
      <el-row >
        <el-col :span="15" class="head-logo">
          <div >
            <p class="setlogo"></p>
          </div>
        </el-col>
        <el-col :span="9">
          <div class="head-breadcrumb">
            <h1>这个是用户信息</h1>
          </div>
        </el-col>
      </el-row>
    </el-header>
  </el-container>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
body > .el-container {
  margin-bottom: 40px;
}
.el-header {
  background-color: blue;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding-left: 0;
  padding-right: 0;
}

.el-row {
  margin-bottom: 0px;
}

.setlogo {
  height: 60px;
  background: url("~@/assets/img/logo.png") center no-repeat;
  -o-background-size: contain;
}
.setlogo:before{
  content: "dog";                                    /*before属性中的content文本是用来占位的,必须有*/
  font-size: 50px;                                   /*可以设置字体大小来确定图标大小*/
  visibility: hidden;                                /*使用visibility: hidden;来隐藏文字*/
}






</style>

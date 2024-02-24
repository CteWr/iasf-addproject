<template>
  <div class="layout">
    <!--头部子组件-->
    <div class="Header">
      <Header></Header>
    </div>

    <!--内容子组件 -->
    <div class="lists">
      <!-- 导航子组件 -->
      <div class="list_sildbar">
        <div class="list_sildbar_navlist">
          <Navmenu></Navmenu>
        </div>
      </div>

      <!--内容组件的主要内容-->
      <div class="list_Content">
        <div class="list_Content_MainContent">
          <Content></Content>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navmenu from '@/views/layout/Navmenu/index.vue'
import Content from '@/views/layout/Content/index.vue'
import Header from './Header/index.vue'

export default {
  name: 'index',
  components: {
    Navmenu,
    Content,
    Header
  },
}
</script>

<style scoped>
.layout{
  display: block;

  .Header{
    display: block;
  }

  .lists{

    .list_sildbar{
      width: 200px;
      background: #888;
      position: fixed;
      left: 0px;
      top: 60px;
      bottom: 0px;
    }

    .list_Content{
      padding-left: 200px;
    }
  }

}


</style>

<template>
   <el-aside width="200px"  >
        <!-- <el-menu 
           default-active="1"
           class="el-menu-vertical-demo"  router>

           <el-menu-item  :index="v.url"  v-for="v in items"  :key="v.url">
              <el-icon><icon-menu /> </el-icon>
              <span >{{v.name}}</span>
           </el-menu-item>
       </el-menu>      -->

          <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group> -->
        <el-menu 
           default-active="3"
           class="el-menu-vertical-demo"  router
           >

           <el-menu-item index="/home">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
           </el-menu-item>

           <el-menu-item index="/baseRule">
              <i class="el-icon-menu"></i>
              <span slot="title">基础设置</span>
           </el-menu-item>

           <el-menu-item index="/users">
              <i class="el-icon-menu"></i>
              <span slot="title">成本查询</span>
           </el-menu-item>

           




         </el-menu>
    

   </el-aside>





  
</template>
  







<script>

export default { 
      name: 'NavMenu',

      data(){  
        return{ 

 

        } 
      },
      components:{

      },
      created(){

      },
      methods:{

      }
}
</script>

<style  class="less" scoped>
  .el-header, .el-footer {
    background-color: #14c8ce;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

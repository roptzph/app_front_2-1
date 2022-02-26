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

        <el-menu 
           default-active="3"
           class="el-menu-vertical-demo"  router>

           <el-menu-item index="/home">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
           </el-menu-item>

           <el-menu-item index="/baseRule">
              <i class="el-icon-menu"></i>
              <span slot="title">基础设置</span>
           </el-menu-item>

           <el-menu-item-group>
             <el-menu-item index="/users">成本项目</el-menu-item>
             <el-menu-item index="3-2">台帐查询</el-menu-item>
             <el-menu-item index="3-3">资料管理</el-menu-item>
             <el-menu-item index="3-4">导入导出</el-menu-item>
             <el-menu-item index="3-4">打印管理</el-menu-item>
           </el-menu-item-group>




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

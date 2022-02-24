<template>
   <el-aside width="200px">
         <el-menu 
          default-active="3"
          class="el-menu-vertical-demo"  router>

          <el-menu-item index="/home">
             <i class="el-icon-menu"></i>
             <span slot="title">首页</span>
          </el-menu-item>

          <el-menu-item index="2">
             <i class="el-icon-menu"></i>
             <span slot="title">基础设置</span>
          </el-menu-item>

          <el-menu-item-group>
           <template slot="title">====人事管理中心====</template>
            <el-menu-item index="/users">人事档案</el-menu-item>
            <el-menu-item index="3-2">合同管理</el-menu-item>
            <el-menu-item index="3-3">培训档案</el-menu-item>
            <el-menu-item index="3-4">奖罚档案</el-menu-item>
          </el-menu-item-group>


          <el-menu-item-group>
           <template slot="title">====工资管理中心====</template>
            <el-menu-item index="4-1">工资数据</el-menu-item>
            <el-menu-item index="4-2">工资变动</el-menu-item>
            <el-menu-item index="4-3">奖金数据</el-menu-item>
            <el-menu-item index="4-4">年度汇总</el-menu-item>
          </el-menu-item-group>

        </el-menu>


   </el-aside>




  
</template>







<script>
//import UserList from '@/components/UserList.vue'
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
    background-color: #B3C0D1;
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

<template>
  

    <el-container>
      <NavMenu />
      <el-container>
    <el-header>Header</el-header>
            <LayoutMain />
      </el-container>
    </el-container>

        <el-menu
          default-active="3"
          class="el-menu-vertical-demo">

          <el-menu-item index="1">
             <i class="el-icon-menu"></i>
             <span slot="title">首页</span>
          </el-menu-item>

          <el-menu-item index="2">
             <i class="el-icon-menu"></i>
             <span slot="title">基础设置</span>
          </el-menu-item>

          <el-submenu index="3">
            <template slot="title">人事管理</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项1</el-menu-item>
            <el-menu-item index="3-3">选项1</el-menu-item>
            <el-menu-item index="3-4">选项1</el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">工资管理</template>
            <el-menu-item index="4-1">选项1</el-menu-item>
            <el-menu-item index="4-2">选项1</el-menu-item>
            <el-menu-item index="4-3">选项1</el-menu-item>
            <el-menu-item index="4-4">选项1</el-menu-item>
          </el-submenu>

        </el-menu>

  
</template>







<script>
//import UserList from '@/components/UserList.vue'
export default { 
      name: '',

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

</style>

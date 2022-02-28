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
  
</style>

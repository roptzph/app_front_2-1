<template>

    <el-container  >
      <NavMenu />
      <el-container  direction="vertical">
        <LayoutHeader >   </LayoutHeader >
        <LayoutMain >        </LayoutMain>
      </el-container>
    </el-container>



</template>



<script>
import NavMenu from      '@/views/layout/NavMenu.vue'
import LayoutHeader from '@/views/layout/layoutHeader.vue'
import LayoutMain from   '@/views/layout/layoutMain.vue'

export default { 
      name: 'index',

      data(){  
        return{ 

        } 
      },
      created(){

      },
      components:{
          NavMenu,
          LayoutMain,
          LayoutHeader





      },
      methods:{
        

      }
}
</script>

<style  class="less" scoped>

  .el-header{
    background: #281af3e1;
    color: #fff;
    text-align: right;
    line-height: 45px;
    height: 45px !important;
    




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
    text-align: left;
    line-height: 10px;
  }
  
  body > .el-container {
    margin-bottom: 10px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
   

</style>

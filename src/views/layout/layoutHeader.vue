<template>
  
      <el-header>
      <div class="user">
          <span > 欢迎：admin </span> &nbsp
          <i class="el-icon-switch-button" @click="loginout"></i>
      </div>

      </el-header>

  
</template>



<script>
//import UserList from '@/components/UserList.vue'
import { mapState, mapMutations } from "vuex";
//import  from  '../../store/modules/loginModule'
export default { 
      name: 'layoutHeader',

      data(){  
        return{ 

        } 
      },
      components:{

      },
      created(){

      },
      methods:{
       ...mapMutations('loginModule',['clearUser']),    
      loginout() {
      //退出登录
      //清空vuex数据
      this.clearUser();
      this.token = ''
      //清空本地存储
      localStorage.removeItem("user");
      //返回登录
      this.$router.push("/login");
    },

      }
}
</script>

<style  class="less" scoped>

      .el-icon-switch-button{
            font-size: 20px;
      }

</style>

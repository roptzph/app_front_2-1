<template>
   <el-card class="box-card" width="30%">
  <div slot="header" class="clearfix">
    <span><h3>用户详情</h3></span>
    <el-button style="float: right; padding: 3px 0" type="text" @click="goBack">返回</el-button>
  </div>
  <div  class="text item">
  <!--<div v-for="(item,id) in userInfo" :key="id" class="text item">  -->
    <p>姓名: {{ userInfo.name }} </p>
    <p>性别: {{ userInfo.sex }} </p>
    <p>年龄: {{ userInfo.age }} </p>
    <p>生日: {{  dayjs(userInfo.birthday).format('YYYY-MM-DD') }} </p>
  </div>
</el-card>
</template>

<script>
  export default {
      name: 'UserDetail',
      props: ['id'],
      data(){  
          return{ 
              userInfo: []
          } 
      },
      created(){
          this.getUserInfo()
      },
      methods:{
        async getUserInfo(){
         await this.axios.get("/v1/getstaff_id",{
            params:{id: this.id}
         },{})   //注意v1与后端app.use('/v1',router) 对应
           .then(res => {
                this.userInfo =res.data[0]
             })
            .catch(err => {
                console.log(err)
            })
        },
        goBack(){
            this.$router.go(-1)
        }  
      }
  }

</script>

<style lang ="less" scoped>
    .box-card {
    width: 480px;
  }
</style>



<template>
   <el-card class="box-card" width="30%">
  <div slot="header" class="clearfix">
    <span>用户详情</span>
    <el-button style="float: right; padding: 3px 0" type="text" @click="goBack">返回</el-button>
  </div>
  <div class="text item">
    <p>姓名: {{ x.name }} </p>
    <p>年龄: {{  }} </p>
    <p>生日: {{ }} </p>
  </div>
</el-card>
</template>

<script>
  export default {
      name: 'UserDetail',
      props: ['id'],
      data(){
          return {
              x: []
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
                let y =res.data
                this.x = y

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



<template>
  <div>
  <el-table :data="userList" stripe  border  style="width: 50%" >
      <el-table-column prop="id"        label="编号"  width="100">  </el-table-column>
      <el-table-column prop="name"      label="姓名"  width="180"></el-table-column>
      <el-table-column prop="sex"       label="姓别"  width="50"></el-table-column>
      <el-table-column prop="birthday"  label="生日"  width="250"></el-table-column>
      <el-table-column prop="other"    filter-multiple label="其他"> </el-table-column>
 </el-table>
 
  </div>
</template> 

<script>


export default {
  name: 'UserList',
  data(){
    return{
      userList: []
    }
  },
  created(){
    this.getUserList()
  },
  methods: {
    getUserList() {  
      //因为不是在此页引入axios,所以要加this.axios  
      this.axios.get("/v1/getstaff")
        .then(res => {
           this.userList = res.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  } 
  
}
 </script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
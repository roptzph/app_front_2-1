<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true">添加用户</el-button>
  <el-table :data="userList" stripe  border  style="width: 50%" >
      <el-table-column prop="id"        label="编号"  width="100">  </el-table-column>
      <el-table-column prop="name"      label="姓名"  width="140"></el-table-column>
      <el-table-column prop="sex"       label="姓别"  width="50"></el-table-column>
      <el-table-column prop="birthday"  label="生日"  width="250"></el-table-column>
      <el-table-column prop="other"    filter-multiple label="其他"> </el-table-column>
      <el-table-column prop=""    filter-multiple label="操作"> 
        <template>
          <div>
            <a href="#">详情</a>  &nbsp
            <a href="#">删除</a>
          </div>
        </template>
      </el-table-column>

  </el-table>

  <!--增加对话框-->

  <el-dialog  title="添加新用户"  :visible.sync="dialogVisible"  width="30%" @close="onDialogClose" >
  
  <!--在对话框内增加表单-->
  <el-form ref="form" :model="form" :rules="rules" label-width="80px" >
  <el-form-item label="代号"  prop="id">
    <el-input v-model.number="form.id"></el-input>
  </el-form-item>
  <el-form-item label="用户名"  prop="name">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="生日" prop="birthday">
    <el-input v-model="form.birthday"></el-input>
  </el-form-item>
  <el-form-item label="年龄" prop="age">
    <el-input v-model.number="form.age"></el-input>
  </el-form-item>

  </el-form>

  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
 
  </div>
</template> 

<script>


export default {
  name: 'UserList',
  data(){

     //声明校验年龄的函数
     let checkAge = (rule,value,callback) =>{
       if (!Number.isInteger(value)){
         return callback(new Error("请填写整数！"))
       }
       if (value > 100 || value < 1){
         return callback(new Error("年龄必须在1到100之间"))
       }
       callback()
     }
    return{
      userList: [],
      dialogVisible:false,
      form : {
        id: '',
        name: '',
        sex:'',
        birthday:'',
        age:''

      },
      rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max:15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
          ],
          birthday: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'blur' }
          ],
          age: [
            { type: 'number', required: true, message: '请输入年龄', trigger: 'blur' },
            { validator: checkAge, trigger: 'blur'}
          ]
      }
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
    },
    onDialogClose(){
      this.$refs.form.resetFields()
    }
  } 
  
}
 </script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true">添加用户</el-button>
  <el-table :data="userList"    stripe  border  style="width: 50%" >
      <el-table-column prop="id"      label="编号"  width="100">  </el-table-column>
      <el-table-column prop="name"      label="姓名"  width="140"></el-table-column>
      <el-table-column prop="sex"       label="姓别"  width="50"></el-table-column>
      <el-table-column prop="age"       label="年龄"  width="50"></el-table-column>
      <el-table-column prop="birthday"  label="生日"  width="250"></el-table-column>
      <el-table-column prop="other"    filter-multiple label="其他"> </el-table-column>
      <el-table-column prop="work"    filter-multiple label="操作"> 
        <template v-slot="scope">  <!--v-slot:defult or  #defult    ;   "{row}"  对应  row.id-->
          <div>
            <router-link :to="'/users/' + scope.row.id">详情</router-link>  &nbsp
            <a href="#"  @click="putShow(scope.row.id)">修改</a> &nbsp <!--prevent事件修饰符防跳转-->
            <!--<a href="#" @click.prevent="putUser(scope.row.id)">修改</a> &nbsp --> <!--prevent事件修饰符防跳转-->
            <a href="#" @click.prevent="delUser(scope.row.id)">删除</a>  <!--prevent事件修饰符防跳转-->
          </div>
        </template>
      </el-table-column>

  </el-table>

  <!--增加添加用户的对话框-->

  <el-dialog  title="添加新用户"  :visible.sync="dialogVisible"  width="30%" @close="onDialogClose" >
  
  <!--在对话框内增加表单-->
  <el-form ref="form" :model="form" :rules="rules" label-width="80px" >
  <el-form-item label="代号"  prop="id">
    <el-input v-model="form.id"></el-input>
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
   <el-form-item label="性别"  prop="sex">
    <el-input v-model="form.sex"></el-input>
  </el-form-item>
   <el-form-item label="其他"  prop="other">
    <el-input v-model="form.other"></el-input>
  </el-form-item>
   <el-form-item label="部门号"  prop="poid">
    <el-input v-model="form.poid"></el-input>
  </el-form-item>

  </el-form>

  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="NewAddUser">确 定</el-button>
  </span>
</el-dialog>
 
  <!--增加修改用户的对话框-->

  <el-dialog  title="修改用户资料"  :visible.sync="putDialogVisible"  width="30%" @close="onDialogClose" >
  
  <!--在对话框内增加表单v-for="(item,id) in putForm" :key= "id"-->
  <el-form 
      ref="putFormref" 
      :model="putForm" 
      :rules="putRules" 
      label-width="80px" >
  <el-form-item label="代号"  prop="id">
    <el-input v-model="putForm.id"></el-input>
  </el-form-item>
  <el-form-item label="用户名"  prop="name">
    <el-input v-model="putForm.name"></el-input>
  </el-form-item>
  <el-form-item label="生日" prop="birthday">
    <el-input v-model="putForm.birthday"></el-input>
  </el-form-item>
  <el-form-item label="年龄" prop="age">
    <el-input v-model.number="putForm.age"></el-input>
  </el-form-item>
   <el-form-item label="性别"  prop="sex">
    <el-input v-model="putForm.sex"></el-input>
  </el-form-item>
   <el-form-item label="其他"  prop="other">
    <el-input v-model="putForm.other"></el-input>
  </el-form-item>
   <el-form-item label="部门号"  prop="poid">
    <el-input v-model="putForm.poid"></el-input>
  </el-form-item>

  </el-form>

  <span slot="footer" class="dialog-footer">
    <el-button @click="putDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="putUser">确 定</el-button>
  </span>
</el-dialog>
 
  </div>
</template> 

<script>

import { Message } from 'element-ui';
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
      putDialogVisible:false,
      form : {
        id: '',
        name: '',
        sex:'',
        birthday:'',
        age:'',
        other:'',
        poid:''

      },
      putForm : {
        id: '',
        name: '',
        sex:'',
        birthday:'',
        age:'',
        other:'',
        poid:''
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
      },
      putRules: {
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
      this.axios.get("/v1/getstaff")   //注意v1与后端app.use('/v1',router) 对应
        .then(res => {
           this.userList = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    onDialogClose(){
      this.$refs.form.resetFields()
    },
    isAddUser(){
      this.dialogVisible = false
      this.$message.success('添加用户成功！')
    },
    //新增用户
    NewAddUser() {  
      //因为不是在此页引入axios,所以要加this.axios  
      //id, name, sex, birthday, other, age, poid
      // let id = this.form.id
      // let name = this.form.name
      // let sex = this.form.sex
      // let birthday = this.form.birthday
      // let other = this.form.other
      // let age = this.form.age
      // let poid = this.form.poid
      this.axios.post("/v1/poststaff",this.form   //全部就方便，用数组对象就行
      // {
            
      //       id: id,
      //       name: name,
      //       sex: sex,
      //       birthday: birthday,
      //       other: other,
      //       age: age,
      //       poid: poid
           
      // }
      ,{})   //注意v1与后端app.use('/v1',router) 对应
        .then(res => {
           this.userList = res.data
           this.isAddUser()
           this.getUserList()
        })
        .catch(err => {
          console.log(err)
        })
    },
    //删除用户  
 
      //因为不是在此页引入axios,所以要加this.axios  
      //id, name, sex, birthday, other, age, poid
      //如何获取到删除记录的ID?要用插槽 v-slot="scope"  scope.row.id
      //后边怎么接收？三种方法都不行
    async delUser(id) { 
      const confirmResult = await this.$confirm(`此操作将永久删除编号为 "${id}" 用户的记录，是否继续？`,'提示',{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).catch(err => err)
      if(confirmResult !== 'confirm') return this.$message.info('取消了删除！')
      this.$message.success('删除成功！')


      this.axios.delete("/v1/delstaff",{
        params:{
          id: id
        }
      },{})   //注意v1与后端app.use('/v1',router) 对应
        .then(res => {
           this.userList = res.data
           this.getUserList()
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 展示编辑员工对话框
    putShow(id) {
      // 请求该员工的数据
      console.log("请求该员工的数据" + id);
      this.axios
        .get("/v1/getstaff_id", {
          params: {
            id: id
          }
        })
        .then(res => {
          this.putForm = res.data[0]   //Invalid prop: type check failed for prop "model". Expected Object, got Array
        })
        .catch(error => {
          console.log(error)
        });
      // 展示编辑对话框
      this.putDialogVisible = true
    },

    //提交修改用户
    putUser() { 
      let id = this.putForm.id
      let name = this.putForm.name
      let sex = this.putForm.sex
      //let birthday = this.formateDate(this.putFrom.birthday)
      let other = this.putForm.other
      let age = this.putForm.age
      let poid = this.putForm.poid
      this.axios.get("/v1/putstaff",{
        params:{    
            id: id,
            name: name,
            sex: sex,
            //birthday: birthday,
            other: other,
            age: age,
            poid: poid
        }   
      },{})   //注意v1与后端app.use('/v1',router) 对应
        .then(res => {
           this.userList = res.data
           this.getUserList()
        })
        .catch(err => {
          console.log(err)
        })
      }
    //修改用户
     
    //多条件查询 
    
    }    
  }


 </script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
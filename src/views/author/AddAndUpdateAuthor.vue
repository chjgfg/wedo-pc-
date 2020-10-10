<template>
  <div id="add-and-update-author">
    <el-dialog :title="title" :visible="addAndUpdateVisible" :close-on-click-modal="false" :before-close="handleClose">
      <el-form :model="authorData" status-icon ref="authorData" label-width="100px" class="demo-ruleForm">
        <el-form-item label="id" prop="id">
          <el-input type="text" v-model="authorData.id" auto-complete="off"/>
        </el-form-item>
        <el-form-item label="作者名" prop="type_name">
          <el-input type="text" v-model="authorData.name" auto-complete="off"/>
        </el-form-item>
        <el-form-item label="作者信息" prop="type_info">
          <el-input type="text" v-model="authorData.introduce" auto-complete="off"/>
        </el-form-item>
        <el-form-item label="作者近照" prop="icon_url">
          <el-input type="text" v-model="authorData.a_photo" auto-complete="off"/>
        </el-form-item>
        <el-form-item>
          <el-button @click="cancel">取 消</el-button>
          <!--          <el-button @click="resetForm('categoryData')">重置</el-button>-->
          <el-button type="primary" @click="submitForm('authorData')">提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "AddAndUpdateAuthor",
    props: ['addAndUpdateVisible', 'authorId'],
    data() {
      return {
        authorData: {},
        title:""
      };
    },
    methods: {

      handleClose(done) {
        this.$emit("update:addAndUpdateVisible", false);
        /*this.$confirm('确认关闭？').then(_ => {
          this.$notify({
            message: '操作成功',
            type: 'success'
          });

        }).catch(_ => {
          this.$notify({
            message: '已取消操作',
            type: 'success'
          });
        });*/
      },
      cancel() {
        this.$emit("update:addAndUpdateVisible", false);
      },

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.authorData);
            this.$notify({
              message: '操作成功',
              type: 'success'
            });
            this.$emit("update:addAndUpdateVisible", false);
          } else {
            this.$notify({
              message: '已取消操作',
              type: 'success'
            });
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    watch: {
      authorId(newValue, oldValue) {
        if (newValue !== undefined) {
          this.title = "修改";
          console.log(newValue);
          const categoryDatas = {
            id: newValue,
            name: '冰心',
            introduce: '冰心（1900年10月5日－1999年2月28日），女，原名谢婉莹，福建省福州市长乐区人 ，中国民主促进会（民进）成员。 [1]  中国诗人，现代作家、翻译家、儿童文学作家、社会活动家、散文家。笔名冰心取自“一片冰心在玉壶”。',
            a_photo: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1599007979,1484951390&fm=26&gp=0.jpg"
          };
          this.authorData = categoryDatas;
        } else {
          this.title = "添加";
          this.authorData = {};
        }
        // window.location.reload()
      }
    }

  }
</script>

<style scoped>

</style>
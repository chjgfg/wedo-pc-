<template>
  <div id="mains">
    <div class="head">
      <div class="head-ch1">WEDO后台管理</div>
      <div class="head-ch2">
        <el-dropdown @command="over">
          <span class="el-dropdown-link">
             {{form.name}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div id="navigate">
      <div class="navigate">
        <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="false" router>

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-grid"/>
              <span slot="title">分类</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/index/mains/category">管理分类</el-menu-item>
            </el-menu-item-group>
          </el-submenu>


          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-reading"/>
              <span slot="title">图书</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/index/mains/book">管理图书信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>


          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-coordinate"/>
              <span slot="title">作者</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/index/mains/author">管理作者信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-chat-dot-square"/>
              <span slot="title">评论</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/index/mains/comment">管理评论信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-user"/>
              <span slot="title">读者</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/index/mains/reader">管理读者信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

        </el-menu>
      </div>


      <div class="context">
        <router-view/>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Mains',
    data() {
      return {
        form: this.$store.state.form
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      over() {
        // sessionStorage.setItem("token", "");
        sessionStorage.removeItem("token");

        if (sessionStorage.length === 0) {
          this.$notify({
            message: "退出成功",
            type: "success"
          })
          this.$router.replace("/")
        }
        // console.log("csc")
      }
    },
    created() {
      //var obj = JSON.parse(decodeURIComponent(this.$route.query.object));
      console.log(this.form.name);
    },

  }
</script>

<style scoped>

  .head {
    height: 50px;
    background-color: #000;
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .head-ch1 {
    height: 100%;
    font-size: 30px;
    /*text-align: center;*/
    margin-left: 1%;
    color: white;
    width: 50%;
    line-height: 50px;
  }

  .head-ch2 {
    line-height: 50px;
    width: 10%;
    margin-left: 70%;
    color: white;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  #navigate {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }

  .el-menu-vertical-demo {
    height: 150%;
  }

  .navigate, .el-menu-vertical-demo {
    /*width: 20%;*/
    /*background-color: #8EC5FC;*/
  }

  .context {
    width: 80%;
    margin-left: 3%;
    margin-top: 3%;
  }


</style>
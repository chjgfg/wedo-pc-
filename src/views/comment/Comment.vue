<template>
  <div id="comment">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/index/mains/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/index/mains/comment' }">管理图书信息</el-breadcrumb-item>
    </el-breadcrumb>
    <el-tooltip class="item" effect="dark" content="添加评论" placement="top-start">
      <el-button type="success primary" size="mini" class="btn"  @click="handleEdit()" circle><i class="el-icon-plus"/></el-button>
    </el-tooltip>

    <el-table :data="comment" style="width: 100%">
      <el-table-column label="id" width="80">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="图书id" width="100">
        <template slot-scope="scope">
          {{ scope.row.b_id }}
        </template>
      </el-table-column>
      <el-table-column label="评论内容" width="600">
        <template slot-scope="scope">
          <p>{{ scope.row.text }}</p>
        </template>
      </el-table-column>
      <el-table-column label="用户id" width="100">
        <template slot-scope="scope">
          <p>{{ scope.row.u_id }}</p>
        </template>
      </el-table-column>
      <el-table-column label="评论时间" width="120">
        <template slot-scope="scope">
          <p>{{ scope.row.date }}</p>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="修改评论" placement="top-end">
            <el-button size="mini" @click="handleEdit(scope.row.id)" type="primary" circle><i class="el-icon-edit"/></el-button>&emsp;&emsp;&emsp;&emsp;
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="删除评论" placement="top-start">
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row.id)" circle><i class="el-icon-delete"/></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <add-and-update-comment :addAndUpdateVisible.sync="addAndUpdateComment" :comment-id="id"/>
  </div>
</template>

<script>
  import AddAndUpdateComment from "./AddAndUpdateComment";
  export default {
    name: "Comment",
    components:{
      AddAndUpdateComment
    },
    data() {
      return {
        comment: [],
        addAndUpdateComment: false,
        id: 0
      }
    },
    methods: {
      handleEdit(row) {
        // console.log(index, row);
        this.id = row;
        this.addAndUpdateComment = true;
      },
      handleDelete(index, row) {
        this.$confirm('确认删除？').then(_ => {
          this.$notify({
            message: '操作成功',
            type: 'success'
          });
        }).catch(_ => {
          this.$notify({
            message: '已取消操作',
            type: 'success'
          });
        });
        console.log(index, row);
      },
      /*

    Long id;
    Long b_id;      // 图书id
    String text;    // 评论内容
    Long u_id;      // 用户id
    TimeStremp date;    // 评论时间       */
      getComment() {
        const tableData = [
          {
            id: 123,
            b_id: '忘纪',
            text: '每一个强大的人，都要咬着牙度过一段没人帮忙，没人支持，没人嘘寒问暖的日子。过去了，这就是你的成人礼，过不去，求饶了，这就是你的无底洞。',
            u_id: "ddddd",
            date: "村上春树从"
          },
          {
            id: 4,
            b_id: '旧街没有你',
            text: '无论今天发生多么糟糕的事，都不应该感到悲伤。因为今天是你往后日子里最年轻的一天了。',
            u_id: "cdcd",
            date: "村上春树从"
          },
          {
            id: 5,
            b_id: '擦肩而过',
            text: '放得下就不孤独，站得远些就清楚，不幻想就没感触，不期待也就不会有在乎。世上无难事，庸人自扰之。',
            u_id: "ee",
            date: "村上春树从"
          },
          {
            id: 6,
            b_id: '狐狸未成妖',
            text: '三种值得信任的人：知道你笑容背后的悲伤，明白你怒火里掩藏的善意，了解你沉默之下的原因。',
            u_id: "fwefwf",
            date: "村上春树从"
          },
          {
            id: 7,
            b_id: '戀仩へ沵哋杺',
            text: '你喂狗三日，它记住你三年，你善待人三年，他三天就能忘记你，很多时候，人不如狗。',
            u_id: "qdqwdqw",
            date: "村上春树从"
          },
          {
            id: 8,
            b_id: '放不开尒的手',
            text: '.有些事藏在心里是莫大的委屈，话到嘴边又觉得无足挂齿不值一提。',
            u_id: "fvrfg",
            date: "村上春树从"
          },
          {
            id: 9,
            b_id: '鉴妓师',
            text: '人生，没有过不去的坎，没有离不开的人。有些难，挺一挺，就过去了；有些人，狠狠心，就忘记了；有些恨，笑一笑，就冰释了。',
            u_id: "ukyuik",
            date: "村上春树从"
          },
          {
            id: 10,
            b_id: '心盲°',
            text: '誓言再美，也比不上一颗融入生命的心。承诺再多，也比不了一直心疼你的人。',
            u_id: "juykjy",
            date: "村上春树从"
          },
          {
            id: 11,
            b_id: '扯不完的淡',
            text: '苦不苦只有自己知道，变没变只有自己才懂。最好的感觉，是有人懂你的欲言又止。',
            u_id: "hqwerd",
            date: "村上春树从"
          }, {
            id: 12,
            b_id: '〤 一个の 生活',
            text: '真正的忘记，并非不再想起，而是偶尔想起，心中却不再有波澜。',
            u_id: ".inyh",
            date: "村上春树从"
          }, {
            id: 13,
            b_id: '野味少女',
            text: '时间会告诉你一切真相。有些事情，要等到你渐渐清醒了，才明白它是个错。',
            u_id: "uik",
            date: "村上春树从"
          },
        ];
        tableData.forEach((item, index) => {
          this.comment.push(item);
        })
      }
    },
    created() {
      this.getComment();
    }


  }
</script>

<style scoped>
  .btn {
    margin-left: 90%;
  }
</style>
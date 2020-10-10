<template>
  <div id="book">
    <div class="head">
      <div class="head-ch1">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/index/mains/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/index/mains/book' }">管理图书信息</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="head-ch2">
        <div class="select">
          <el-dropdown @command="handleCommand" disabled>
            <el-button type="mini" class="mini-btn">
              {{name.name}}<i class="el-icon-arrow-down el-icon--right"/>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :command="item" v-for="(item,index) in category">{{item.name}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="input">
          <el-input v-model="input" placeholder="请输入书名" size="mini "/>
        </div>
        <div class="btn">
          <el-button type="mini" class="btn-ch1" @click="search">搜索</el-button>
        </div>
      </div>

    </div>

    <el-row :gutter="20" class="el-row">
      <el-col :span="8" v-for="(item,index) in book" class="el-col">
        <el-card shadow="hover">
          <div class="hover-ch1" @click="goToBookInfo(item)">
            <div class="hover-ch1-ch1">
              <el-image :src="item.icon_url" class="image"/>
            </div>
            <div class="item">
              <div>
                {{item.title}}
              </div>
              <div class="intro">
                {{item.intro.substr(0,100)+"..."}}
              </div>

            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: "book",
    data() {
      return {
        book: [],
        category: [],
        name: {},
        input: ""
      }
    },
    methods: {
      handleCommand(command) {
        if (command === null) {
          this.name.name = "请选择分类";
          return;
        }
        this.name = command;
        // console.log(command);
      },
      getBook() {
        const tableData = [
          {
            id: 1,
            title: '我师兄实在太稳健了',
            intro: '重生在封神大战之前的上古时代，李长寿成了一个小小的炼气士，没有什么气运加身，也不是什么注定的大劫之子，他只有一个想要长生不老的修仙梦。\n' +
              '为了能在残酷的洪荒安身立命，他努力不沾因果，杀人必扬其灰，凡事谋而后动，从不轻易步入危险之中。\n' +
              '藏底牌，修遁术，炼丹毒，掌神通，不动稳如老狗，一动石破天惊，动后悄声走人。\n' +
              '本来李长寿规划中，自己会一直躲在山中平安无事的修行成仙，直到有一年，他的老师父静极思动，又给他……收了个师妹回来……',
            a_id: "言归正传 ",
            book_comment: "修仙觅长生，热血任逍遥，踏莲曳波涤剑骨，凭虚御风塑圣魂！",
            icon_url: "https://bookcover.yuewen.com/qdbimg/349573/1016572786/180",
            creatDate: "起始更新时间",
            chapter_number: "章节数量",
            updateDate: "最后更新时间",
            state: "状态",
            protagonist: "李长寿"
          },
          {
            id: 55,
            title: '不会真有人觉得修仙难吧',
            intro: '仙武纪元，三月三。\n' +
              '　　在掌门的不懈努力之下，青云道宗终于迎来了第八位弟子叶平。\n' +
              '　　为了能让叶平留下，也为了能够得到叶平的尊重，宗门上下用尽各种手段哄骗。\n' +
              '　　吹嘘自己是绝世剑道天才，绝世修行天才，绝世炼丹天才，绝世炼器天才，绝世占卜天才，绝世阵法天才，绝世鉴宝天才，绝世气运之子。\n' +
              '　　而且为了维持天才形象，更是一通乱教。\n' +
              '　　随便划一道剑痕就让叶平领悟绝世剑意。\n' +
              '　　随便拿出个大锅就让叶平炼出极品丹药。\n' +
              '　　随便拿出一枚铜钱就让叶平算出绝世天机。\n' +
              '　　本只是希望叶平能够晚点发现真相，多在宗门待一待。\n' +
              '　　可让所有人都没想到的是。\n' +
              '　　这个新来的小师弟.......居然真学会了。',
            a_id: "黑夜弥天",
            book_comment: "【2020年网文之王之一帝四皇征文大赛】",
            icon_url: "https://bookcover.yuewen.com/qdbimg/349573/1022899262/180",
            creatDate: "起始更新时间",
            chapter_number: "章节数量",
            updateDate: "最后更新时间",
            state: "状态",
            protagonist: "叶平"
          },
          {
            id: 666,
            title: '轮回乐园 ',
            intro: '　苏晓签订轮回契约，进入各个世界执行任务。\n' +
              '　　他曾目睹一个世界崩灭为尘粒，也曾与被遗忘的王者持刃而战。\n' +
              '　　暗鸦在低语，黑渊下巨兽咆哮。\n' +
              '　　欢迎来到，轮回乐园……',
            a_id: "那一只蚊子 ",
            book_comment: "热血的少年，为打破次元壁一往无前！",
            icon_url: "https://bookcover.yuewen.com/qdbimg/349573/1009817672/180",
            creatDate: "起始更新时间",
            chapter_number: "章节数量",
            updateDate: "最后更新时间",
            state: "状态",
            protagonist: "苏晓"
          },
          {
            id: 3,
            title: '诡秘之主',
            intro: '蒸汽与机械的浪潮中，谁能触及非凡？历史和黑暗的迷雾里，又是谁在耳语？我从诡秘中醒来，睁眼看见这个世界：\n' +
              '　　枪械，大炮，巨舰，飞空艇，差分机；魔药，占卜，诅咒，倒吊人，封印物……光明依旧照耀，神秘从未远离，这是一段“愚者”的传说。',
            a_id: "爱潜水的乌贼",
            book_comment: "心潮澎湃，无限幻想，迎风挥击千层浪，少年不败热血！",
            icon_url: "https://bookcover.yuewen.com/qdbimg/349573/1010868264/180",
            creatDate: "起始更新时间",
            chapter_number: "章节数量",
            updateDate: "最后更新时间",
            state: "状态",
            protagonist: "周明瑞"
          },
          {
            id: 22,
            title: '超凶女友找上门',
            intro: '被女妖缠上了怎么办？ 而且是超凶的那种。 面色苍白的少女对着夏渝微微一笑，“你是想满足我一个愿望呢，还是想满足我一辈子的愿望？” 夏渝：“……” 我选择不满足。 有本事就缠我一辈子啊。 欢迎来',
            a_id: "梦三万",
            book_comment: "重生过去、畅想未来、梦幻现实，再塑传奇人生！",
            icon_url: "https://bookcover.yuewen.com/qdbimg/349573/1023858092/180",
            creatDate: "起始更新时间",
            chapter_number: "章节数量",
            updateDate: "最后更新时间",
            state: "状态",
            protagonist: "夏渝"
          },
          {
            id: 8,
            title: '我老婆是女学霸',
            intro: '相亲遇到个女学霸，还不小心得罪了她...\n' +
              '而且她竟然就住在对门！',
            a_id: "太白猫",
            book_comment: "重生过去、畅想未来、梦幻现实，再塑传奇人生！",
            icon_url: "https://bookcover.yuewen.com/qdbimg/349573/1023029576/180",
            creatDate: "起始更新时间",
            chapter_number: "章节数量",
            updateDate: "最后更新时间",
            state: "状态",
            protagonist: "林帆"
          },
          {
            id: 65,
            title: '长夜行 ',
            intro: '　昆仑雪殿，曾有仙人言，逝者流离，生者不释。魂魄一去，将同草秋。尸者重生，游离人间，当为仙家百门所不容，尸魔伏诛。\n' +
              '这一日，少年自棺中醒来，血枯骨寒，睁眼已是百年人。\n' +
              '仙人一泪，长相守，可解前尘一梦。\n' +
              '不修长生修凡死，不为万古同悲寻恨，只愿此生终老温柔，白云不羡仙乡。',
            a_id: "北獠",
            book_comment: "修仙觅长生，热血任逍遥，踏莲曳波涤剑骨，凭虚御风塑圣魂！",
            icon_url: "https://bookcover.yuewen.com/qdbimg/349573/1023891389/180",
            creatDate: "起始更新时间",
            chapter_number: "章节数量",
            updateDate: "最后更新时间",
            state: "状态",
            protagonist: "司尘"
          },
          {
            id: 34,
            title: '行走在超神学院的巫 ',
            intro: '一个行走在超神学院的巫凭借着强硬的肉身和耍赖般的空间能力横冲直撞的故事。\n' +
              '帝空：一个能打的都没有！\n' +
              '不知道武器才是老子的封印吗！',
            a_id: "早起的胖鸟",
            book_comment: "热血的少年，为打破次元壁一往无前！",
            icon_url: "https://bookcover.yuewen.com/qdbimg/349573/1023594488/180",
            creatDate: "起始更新时间",
            chapter_number: "章节数量",
            updateDate: "最后更新时间",
            state: "状态",
            protagonist: "帝空"
          },
          {
            id: 0,
            title: '斗罗之失恋就能变强 ',
            intro: '　秦剑穿越成了一只百万年魂兽。\n' +
              '　　他化形后出现了神位九考，每失恋一次才能获得下一个魂环，直到成神。\n' +
              '　　第一考，指定失恋对象，宁荣荣。\n' +
              '　　第二考，……',
            a_id: "啸沧溟",
            book_comment: "热血的少年，为打破次元壁一往无前！",
            icon_url: "https://bookcover.yuewen.com/qdbimg/349573/1023347970/180",
            creatDate: "起始更新时间",
            chapter_number: "章节数量",
            updateDate: "最后更新时间",
            state: "状态",
            protagonist: "秦剑"
          },

        ];
        tableData.forEach((item, index) => {
          this.book.push(item);
        })
      },

      goToBookInfo(item) {
        this.$router.push({
          path: "/index/mains/bookInfo",
          query: {
            "item": encodeURIComponent(JSON.stringify(item))
          }
        });
      },

      getCategory() {
        const categorys = [
          {
            'id': 1,
            'name': '玄幻'
          },
          {
            'id': 2,
            'name': '奇幻'
          },
          {
            'id': 3,
            'name': '武侠'
          },
          {
            'id': 4,
            'name': '仙侠'
          },
          {
            'id': 5,
            'name': '都市'
          },
          {
            'id': 6,
            'name': '现实'
          },
          {
            'id': 7,
            'name': '军事'
          },
          {
            'id': 8,
            'name': '历史'
          },
          {
            'id': 9,
            'name': '游戏'
          },
          {
            'id': 10,
            'name': '体育'
          },
          {
            'id': 11,
            'name': '科幻'
          },
          {
            'id': 12,
            'name': '悬疑'
          },
          {
            'id': 13,
            'name': '女生'
          },
          {
            'id': 14,
            'name': '轻小说'
          }
        ];

        this.category = categorys.concat();

      },
      search(){
        if(this.name.name === "" || this.input === ''){
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
          this.$notify({
            message: '输入为空, 请重新输入!!!',
            type: 'success',
          });
          return;
        }
        console.log(this.name.name + "----"+ this.input)
      }
    },
    created() {
      this.name.name = "请选择分类";
      this.getBook();
      this.getCategory();
    }
  }
</script>

<style scoped>
  .head {
    display: flex;
    flex-direction: row;
  }

  .head-ch1 {
    width: 30%;
  }

  .head-ch2 {
    width: 70%;
    display: flex;
    flex-direction: row;
    height: 20px;
  }

  .select{
    width: 8%;
  }

  .input, .btn {
    margin-left: 5%;
  }

  .select, .input {
    vertical-align: middle;
  }

  .el-row {
    margin-top: 2%;
  }

  .el-col {
    margin-bottom: 2%;
  }

  .hover-ch1 {
    display: flex;
    cursor: pointer;
    height: 180px;
  }

  .hover-ch1-ch1 {
    width: 30%;
  }

  .image {
    width: 100%;
    border-radius: 0.5em;
  }

  .item {
    width: 65%;
    margin-left: 4%;
  }

  .intro {
    margin-top: 15%;
  }

</style>
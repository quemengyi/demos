<template>
  <el-container>
    <el-header height="60px">
      <h1>科技资讯</h1>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="12" class="col1">
          <List :msg="msg1"/>
        </el-col>
        <el-col :span="12" class="col2">
          <List :msg="msg2"/>
        </el-col>
      </el-row>
    </el-main>
    <el-footer height="30px">&copy;科技人</el-footer>
  </el-container>
</template>

<script>
import List from "../components/list.vue";
export default {
  components: { List },
  data() {
    return {
      msg1: "知识",
      msg2: "技能",
    };
  },
};
</script>

<style>
.el-header {
  background-color: royalblue;
  color: white;
  text-align: center;
}
.el-footer {
  background-color: #909399;
  color: black;
  text-align: center;
}
.el-main {
  background-color: thistle;
}
.el-col {
  height: 400px;
}
.col1 {
  background-color: #409eff;
}
.col2 {
  background-color: skyblue;
}
.head {
  text-align: center;
}
.article_list {
  margin: auto;
}
</style>

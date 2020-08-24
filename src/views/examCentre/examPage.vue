<!--  -->
<template>
  <div class="class-centre-container">
    <h1 class="class-centre-title">{{ title }}</h1>
    <el-card class="class-centre-card">
      <p class="stems">{{ index }}. {{ description }}</p>
      <div class="img-container">
        <img
          class="image"
          :src="testpic1"
        >
      </div>
      <el-table
        style="width: 80%;margin:0 auto;margin-bottom:30px;"
        :data="answerList"
      >
        <el-table-column
          label="步骤"
          align="center"
          min-width="120"
          prop="index"
        >
          <template slot-scope="scope">
            步骤{{ scope.row.index +1 }}
          </template>
        </el-table-column>
        <el-table-column
          label="答案"
          min-width="120"
          align="center"
          prop="answer"
        >
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              circle
            />
            <el-button
              v-show="buttonStatus[scope.row.status]"
              type="success"
              icon="el-icon-phone-outline"
              circle
              @click="handleRecord(scope.row.index)"
            />
            <el-button
              v-show="buttonStatus[scope.row.status]"
              type="danger"
              icon="el-icon-delete"
              circle
            />
          </template>
        </el-table-column>
      </el-table>
      <div class="button">
        <div style="margin:30px;">
          <el-button
            type="primary"
            icon="el-icon-edit"
            circle
          /> 添加/修改答案
          <el-button
            type="success"
            icon="el-icon-phone-outline"
            circle
          /> 试听答案
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
          /> 删除答案
        </div>
        <el-button-group>
          <el-button
            type="primary"
            icon="el-icon-arrow-left"
          >上一题</el-button>
          <el-button type="primary">下一题<i class="el-icon-arrow-right el-icon--right" /></el-button>
        </el-button-group>
      </div>
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'ExamPage',
  data() {
    return {
      title: 'ExamPage',
      index: '1',
      buttonStatus: [false, true],
      description: '题干题干题干题干题干题干题干题干题干题干题干题干题干题干题干题干题干题干题干题干题干题干题干题干题干题干题干题干',
      testpic1: require('@/icons/img/testpic1.jpg'),
      answerList: [{ index: 0, answer: '2432', status: '1' }, { index: 1, answer: '56546', status: '0' }]
    }
  },
  methods: {
    handleRecord(index) {
      this.answerList[index].status = 1
    }
  }
}
</script>
<style lang='scss' scoped>
.class-centre {
  &-container {
    margin: 30px;
    .class-centre-title {
      font-size: 25px;
      line-height: 46px;
      color: #409eff;
      border-bottom: solid 2px #409eff;
      margin-bottom: 30px;
    }
    .class-centre-card {
      margin-right: 30px;
      margin-left: 30px;
      .img-container {
        text-align: center;
        margin: 30px;
        .image {
          margin: 0 auto;
        }
      }
      .button {
        text-align: center;
      }
    }
  }
}
</style>

<template>
  <div class="class-centre-container">
    <h1 class="class-centre-title">考试中心</h1>
    <el-tabs
      v-model="activeName"
      style="margin-top:15px;margin-left:60px;margin-right:60px"
    >
      <el-tab-pane
        label="全部"
        name="All"
      >
        <ExamTabPane :examlist="all" />
      </el-tab-pane>
      <el-tab-pane
        label="正在进行"
        name="Now"
      >
        <ExamTabPane :examlist="now" />
      </el-tab-pane>
      <el-tab-pane
        label="即将开始"
        name="Wait"
      >
        <ExamTabPane :examlist="wait" />
      </el-tab-pane>
      <el-tab-pane
        label="已结束"
        name="Fin"
      >
        <ExamTabPane :examlist="fin" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ExamTabPane from '../examCentre/components/tabPane'
import { getExamList } from '@/api/exam'
// import { getter } from '@/store/getters'
import { mapGetters } from 'vuex'

export default {
  name: 'ExamCentre',
  components: { ExamTabPane },
  data() {
    return {
      now: [{ exam_id: '2020082601', title: '考试1' }, { title: '14322' }],
      wait: [{ exam_id: '2020082801', title: '考试2' }, { title: '14322' }],
      fin: [{ exam_id: '2020082802', title: '考试3' }, { title: '14322' }],
      all: [{ exam_id: '2020082802', title: '考试4' }]
    }
  },
  computed: {
    ...mapGetters([
      'user_id',
      'name'
    ])
  },
  created() {
    // init the default selected tab
    const tab = 'Now'
    if (tab) {
      this.activeName = tab
    }
    // console.log('user_id' + this.user_id)
    // console.log('name' + this.name)
    // get examlist
    this.handleGetList('Now')
    this.handleGetList('Wait')
    this.handleGetList('Fin')
  },
  methods: {
    // TODO--获取list
    handleGetList(type) {
      const data = { type: type }
      getExamList(data)
    }
  }
}
</script>

<style lang="scss" scoped>
.class-centre {
  &-container {
    margin: 30px;
    .class-centre-title {
      font-size: 25px;
      line-height: 46px;
      color: #409eff;
      border-bottom: solid 2px #409eff;
      margin: 30px;
    }
  }
}
</style>

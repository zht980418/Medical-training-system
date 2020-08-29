<template>
  <div class="class-centre-container">
    <h1 class="class-centre-title">课程中心</h1>
    <el-tabs
      v-model="activeName"
      style="margin-top:15px;margin-left:60px;margin-right:60px"
    >
      <el-tab-pane
        label="全部"
        name="All"
      >
        <CourseTabPane :courselist="all" />
      </el-tab-pane>
      <el-tab-pane
        label="正在进行"
        name="Now"
      >
        <CourseTabPane :courselist="now" />
      </el-tab-pane>
      <el-tab-pane
        label="即将开始"
        name="Wait"
      >
        <CourseTabPane :courselist="wait" />
      </el-tab-pane>
      <el-tab-pane
        label="已结束"
        name="Fin"
      >
        <CourseTabPane :courselist="fin" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import CourseTabPane from '../courseCentre/components/tabPane'

export default {
  name: 'CourseCentre',
  components: { CourseTabPane },
  data() {
    return {
      user_id: '',
      now: [{ course_id: '2020082601', title: '课程1', sum: '10', completed: '2' }, { title: '14322' }],
      wait: [{ course_id: '2020082801', title: '课程2', sum: '10', completed: '6' }, { title: '14322' }],
      fin: [{ course_id: '2020082602', title: '课程3', sum: '10', completed: '3' }, { title: '14322' }],
      all: [{ course_id: '2020082602', title: '14322' }]
    }
  },
  created() {
    // init the default selected tab
    const tab = 'Now'
    if (tab) {
      this.activeName = tab
    }
    this.user_id = this.$route.params.user_id
  },
  methods: {
    // TODO--获取Courselist
    handleGetCourseList() {

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

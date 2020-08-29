<template>
  <div class="class-centre-container">
    <h1 class="class-centre-title">课程中心</h1>
    <el-tabs
      v-model="activeName"
      style="margin-top:15px;margin-left:60px;margin-right:60px"
    >
      <el-tab-pane
        v-for="item in tabMapOptions"
        :key="item.key"
        :label="item.label"
        :name="item.key"
      >
        <keep-alive>
          <CourseTabPane
            v-if="activeName==item.key"
            :type="item.key"
          />
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import CourseTabPane from '../courseCentre/components/tabPane'

export default {
  name: 'CourseCentre',
  components: { CourseTabPane },
  data() {
    return {
      tabMapOptions: [
        { label: '全部', key: 'All' },
        { label: '正在进行', key: 'Now' },
        { label: '即将开始', key: 'Wait' },
        { label: '已结束', key: 'Fin' }
      ],
      user_id: ''
    }
  },
  watch: {
    activeName(val) {
      this.$router.push(`${this.$route.path}?tab=${val}`)
    }
  },
  created() {
    // init the default selected tab
    const tab = 'All'
    if (tab) {
      this.activeName = tab
    }
    this.user_id = this.$route.params.user_id
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

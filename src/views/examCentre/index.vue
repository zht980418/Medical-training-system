<template>
  <div class="class-centre-container">
    <h1 class="class-centre-title">考试中心</h1>
    <el-tabs
      v-model="activeName"
      style="margin-top:15px;margin-left:30px;margin-right:30px"
    >
      <el-tab-pane
        v-for="item in tabMapOptions"
        :key="item.key"
        :label="item.label"
        :name="item.key"
      >
        <keep-alive>
          <tab-pane
            v-if="activeName==item.key"
            :type="item.key"
            @create="showCreatedTimes"
          />
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
    <div>
      <ul class="course-list">
        <CourseItem
          :icon="img1"
          :title="aaa"
          :office="Office"
          start-time="2020/7/20"
          end-time="2020/10/12"
        />
        <CourseItem
          :icon="img1"
          title="hhhhh"
          office="另一个XXXXXXXXX"
          start-time="2020/4/6"
          end-time="2020/11/11"
        />
        <CourseItem
          :icon="img1"
          title="eiruewirow"
          office="yige"
        />
        <CourseItem
          :icon="img1"
          title="title4"
          office="office4"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CourseItem from '@/layout/components/ExamCentre/Item'

export default {
  name: 'Dashboard',
  components: { CourseItem },
  data() {
    return {
      tabMapOptions: [
        { label: '全部', key: 'CN' },
        { label: '正在进行', key: 'US' },
        { label: '即将开始', key: 'JP' },
        { label: '已结束', key: 'EU' }
      ],
      img1: require('@/icons/img/test2.jpg'),
      aaa: '第一场考试',
      Office: '某XXXX科室'

    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
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
    div {
      .course-list {
        list-style-type: none;
        display: flex;
        direction: row;
        flex-wrap: wrap;
      }
    }
  }
}
</style>

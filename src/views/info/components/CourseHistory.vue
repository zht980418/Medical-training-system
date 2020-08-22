<template>
  <div class="course-history">
    <el-timeline>
      <el-timeline-item
        v-for="(item,index) of historyList"
        :key="index"
        :timestamp="item.timestamp"
        placement="top"
      >
        <el-card>

          <CourseHistoryItem
            :icon="item.icon"
            :title="item.title"
            :office="item.office"
            :sum="item.sum"
            :completed="item.completed"
            :starttime="item.starttime"
            :endtime="item.endtime"
          />
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import CourseHistoryItem from '../components/CourseHistoryItem'

export default {
  components: { CourseHistoryItem },
  data() {
    return {
      historyList: [{ title: '课程记录1', office: '科室1', timestamp: '2020-7-9' }, { title: '课程记录2', office: '科室2', timestamp: '2020-7-10' }]
    }
  }
}
</script>

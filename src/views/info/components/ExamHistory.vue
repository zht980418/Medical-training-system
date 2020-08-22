<template>
  <div class="exam-history">
    <el-timeline>
      <el-timeline-item
        v-for="(item,index) of historyList"
        :key="index"
        :timestamp="item.timestamp"
        placement="top"
      >
        <el-card>
          <ExamHistoryItem
            :icon="item.icon"
            :title="item.title"
            :office="item.office"
            :starttime="item.starttime"
            :endtime="item.endtime"
          />
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import ExamHistoryItem from '../components/ExamHistoryItem'

export default {
  components: { ExamHistoryItem },
  data() {
    return {
      historyList: [{ title: '考试记录1', office: '科室1', timestamp: '2020-7-9' }, { title: '考试记录2', office: '科室2', timestamp: '2020-7-10' }]
    }
  }
}
</script>

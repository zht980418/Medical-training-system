<template>
  <div class="exam-history">
    <el-timeline>
      <el-timeline-item
        v-for="(item,index) of historyList"
        :key="index"
        :timestamp="item.time_stamp"
        placement="top"
      >
        <el-card>
          <ExamHistoryItem
            :icon="item.icon"
            :title="item.exam_title"
            :office="item.office"
            :start="item.start_time"
            :end="item.end_time"
          />
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import ExamHistoryItem from '../components/ExamHistoryItem'
import { getExamHistory } from '@/api/exam'

export default {
  components: { ExamHistoryItem },
  data() {
    return {
      historyList: [{ exam_title: '考试记录1', office: '科室1', start_time: '考试', time_stamp: '2020-7-9' }]
    }
  },
  created() {
    console.log(this.historyList)
    console.log('获取考试记录数据')
    this.handleGetHistory()
  },
  methods: {
    // 获取考试记录数据
    handleGetHistory() {
      const data = { type: 'getExamHistory', user_id: '1' }
      getExamHistory(data).then((response) => {
        console.log(response)
        this.historyList = response.data
        console.log(response.data)
        console.log(this.historyList)
      })
    }
  }
}
</script>

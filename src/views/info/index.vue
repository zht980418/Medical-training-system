<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">
        <el-col
          :span="6"
          :xs="24"
        >
          <user-card :user="user" />
        </el-col>
        <el-col
          :span="18"
          :xs="24"
        >
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane
                label="学习记录"
                name="CourseHistory"
              >
                <CourseHistory />
              </el-tab-pane>
              <el-tab-pane
                label="考试记录"
                name="ExamHistory"
              >
                <ExamHistory />
              </el-tab-pane>
              <el-tab-pane
                label="修改信息"
                name="infoModify"
              >
                <infoModify :user="user" />
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from './components/UserCard'
import CourseHistory from './components/CourseHistory'
import ExamHistory from './components/ExamHistory'
import infoModify from './components/InfoModify'

export default {
  name: 'Profile',
  components: { UserCard, CourseHistory, ExamHistory, infoModify },
  data() {
    return {
      user: {},
      activeTab: 'CourseHistory'
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      this.user = {
        name: this.name,
        role: this.roles.join(' | '),
        email: 'admin@test.com',
        avatar: this.avatar
      }
    }
  }
}
</script>

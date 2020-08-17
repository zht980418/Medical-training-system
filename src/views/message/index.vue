<template>
  <div style="padding:30px;">
    <el-table style="width: 100%;padding-top: 15px;">
      <el-table-column
        label="Title"
        min-width="200"
        prop="title"
      >
        <!-- <template slot-scope="scope">
          {{ scope.row.title | titleNoFilter }}
        </template> -->
      </el-table-column>
      <el-table-column
        label="Author"
        width="195"
        align="center"
        prop="author"
      >
        <!-- <template slot-scope="scope">
          {{ scope.row.author | authorFilter }}
        </template> -->
      </el-table-column>
      <el-table-column
        label="Time"
        width="100"
        align="center"
        prop="time"
      >
        <!-- <template slot-scope="{row}">
          <el-tag :type="row.time | timeFilter">
            {{ row.time }}
          </el-tag>
        </template> -->
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  filters: {
    titleFilter(title) {
      return title
    },
    authorFilter(author) {
      return author
    },
    timeFilter(time) {
      return time
    }
  },
  data() {
    return {
      list: [{ id: '0', title: '12313', author: 'wewqewq', time: '2332r' }]
    }
  }
}
</script>

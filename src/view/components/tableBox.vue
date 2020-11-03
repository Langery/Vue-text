<template>
  <i-table row-key="id" :columns="columns" :data="data" border>
    <template slot-scope="{ row, index }" slot="last">
      <div
        v-if="!row['layout']"
        class="float-right actionBtns"
        style="float: right;"
      >
        <Button
          size="small"
          type="success"
          @click="handleAddSonRow(row, index)"
          >+</Button
        >
      </div>
      <div class="float-right actionBtns" style="float: right;">
        <Button size="small" type="error" @click="handleDeleteRow(row, index)"
          >X</Button
        >
      </div>
    </template>
  </i-table>
</template>
<script>
export default {
  data () {
    return {
      columns: [
        {
          title: "Name",
          key: "name",
          tree: true
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address",
          slot: "last"
        }
      ],
      data: [
        {
          id: "100",
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park"
        },
        {
          id: "101",
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          children: [
            {
              id: "10100",
              name: "John Brown",
              age: 18,
              address: "New York No. 1 Lake Park"
            },
            {
              id: "10101",
              name: "Joe Blackn",
              age: 30,
              address: "Sydney No. 1 Lake Park"
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleAddSonRow (row, index) {
      console.log(row, index)
    },
    handleDeleteRow (row, index) {
      console.log(row, index)
    }
  }
}
</script>

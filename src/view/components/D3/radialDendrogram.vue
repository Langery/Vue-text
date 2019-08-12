<template>
  <svg></svg>
</template>

<script>
import * as d3 from 'd3'
import { multiExpand } from '@/server/index'
import { intranetPost } from '@/common/commonFun'

export default {
  data () {
    return {}
  },
  mounted () {
    this.getSampleGraph()
    // this.drawArc()
  },
  methods: {
    getSampleGraph () {
      const sendOther = {
        graphName: 'Knowledge',
        limitNum: 5,
        hopNum: 3,
        arrayV: [1]
      }
      intranetPost(multiExpand, sendOther)
        .then(data => {
          // console.log(data.result)
          // this.recursTraver(data.result)
          this.init(this.recursTraver(data.result))
        })
        .catch(reason => { console.log(reason) })
    },
    // 饼状图
    drawArc () {
      var marge = {top: 0, bottom: 100, left: 120, right: 100}
      var svg = d3.select('svg')
      svg.attr('width', 300)
          .attr('height', 300)
      var width = svg.attr('width')
      var height = svg.attr('500px')
      var g = svg.append('g')
                .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')')

      var sendData = [15, 20, 25, 40]

      // ???
      var colorScale = d3.scaleOrdinal()
                        .domain(d3.range(sendData.length))
                        .range(d3.schemeSet3) // https://github.com/d3/d3-scale-chromatic/blob/v1.3.3/README.md
      console.log(colorScale)

      var arc = d3.arc()
                  .innerRadius(0)
                  .outerRadius(100)
      var pie = d3.pie()
      var pieData = pie(sendData)
      console.log(pieData)
      var gs = g.selectAll('.g')
                .data(pieData)
                .enter()
                .append('g')
                .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

      gs.append('path')
        .attr('d', (d) => {
          return arc(d)
        })
        .attr('fill', (d, i) => {
          return colorScale(i)
        })
    },
    init (data) {
      console.log(data)
      // console.log(d3)
      // (a.height - b.height) || a.data.name.localeCompare(b.data.name)
      var cluster = d3.hierarchy(data)
                      .sort((a, b) => {
                        (a.height - b.height) || a.data.name.toString().localeCompare(b.data.name.toString())
                      })
      
      var width = 975
      var height = 500
      var radius = width / 2
      // var tree = d3.cluster().size([2 * Math.PI, radius - 100])
      var tree = d3.cluster()
                  .size([Math.PI * 2, radius - 100])
      var treeData = tree(cluster)
      console.log(cluster)
      const svg = d3.select('svg')
                    .style('width', '1000px')
                    .style('height', '500px')
                    .style('font', '10px sans-serif')
                    .style('margin', '5px')

      const link = svg.append('g')
                      .attr('fill', 'none')
                      .attr('stroke', '#555')
                      .attr('stroke-opacity', 0.4)
                      .attr('stroke-width', 1.5)
                      .selectAll('path')
                      .data(treeData.links())
                      .enter().append('path')
                      .attr('d', d3.linkRadial()
                          .angle(d => d.x)
                          .radius(d => d.y))
      const node = svg.append('g')
                      .attr('stroke-linejoin', 'round')
                      .attr('stroke-width', 3)
                      .selectAll('g')
                      .data(treeData.descendants().reverse())
                      .enter().append('g')
                      .attr('transform', d => `
                        rotate(${d.x * 180 / Math.PI - 90})
                        translate(${d.y}, 0)
                      `)
      node.append('circle')
          .attr('fill', d => d.children ? '#555' : '#999')
          .attr('r', 2.5)
  
      node.append('text')
          .attr('dy', '0.31em')
          .attr('x', d => d.x < Math.PI === !d.children ? 6 : -6)
          .attr('text-anchor', d => d.x < Math.PI === !d.children ? 'start' : 'end')
          .attr('transform', d => d.x >= Math.PI ? 'rotate(180)' : null)
          .text(d => d.data.name)
          .filter(d => d.children)
          .clone(true).lower()
          .attr('stroke', 'white')
    },
    project (x, y) {
      var angle = (x - 90) / 180 * Math.PI, radius = y
      return [radius * Math.cos(angle), radius * Math.sin(angle)]
    },
    recursTraver (data) {
      var links = data.links
      var treeList = []
      links.map(item => {
        var pushT = {
          id: item.__s,
          children: item.__d
        }
        treeList.push(pushT)
      })
      
      var graph = treeList.reduce((r, a) => {
        r[a.id] = r[a.id] || []
        r[a.id].push(a)
        return r
      }, Object.create(null))

      var already_append = []
      function new_child (nodeId) {
        var child = {
          name: nodeId,
          children: []
        }
        return child
      }
      var new_root = new_child(links[0].__s)
      already_append.push(links[0].__s)

      var inArray = function isInArray (arr, value) {
        for (var i = 0; i < arr.length; i++) if (value === arr[i]) return true
        return false
      }
      function do_bfs (already_append, graph, node_dict) {
        var Flag = false
        var list = graph[node_dict['name']]
        for (var i in list) {
          if (!inArray(already_append, list[i].children)) {
            already_append.push(list[i].children)
            node_dict['children'].push(new_child(list[i].children))
            Flag = true
          }
        }

        // console.log(node_dict)
        if (!Flag) return
        for (var index in node_dict['children']) do_bfs(already_append, graph, node_dict['children'][index])
        return
      }

      do_bfs(already_append, graph, new_root)
      // console.log(new_root) // 最终值
      return new_root
    }
  }
}
</script>

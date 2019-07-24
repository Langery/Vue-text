<template>
  <div id="skill">
  </div>
</template>

<script>
import * as d3 from 'd3'
import { multiExpand } from '@/server/index' // sampleGraph
import { intranetPost } from '@/common/commonFun'

export default {
  data () {
    return {}
  },
  mounted () {
    this.getSampleGraph()
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
          console.log(data.result)
          // this.recursTraver(data.result)
          this.init(data.result)
        })
        .catch(reason => { console.log(reason) })
    },
    init (sendData) {
      var data = this.recursTraver(sendData)
      console.log(data)
      var width = document.getElementById('skill').clientWidth
      var height = document.getElementById('skill').clientHeight
      var radius = width / 2
      var treeType = d3.cluster().size([2 * Math.PI, radius - 100])
      const root = treeType(d3.hierarchy(data)
                          .sort((a, b) => {
                            return (a.height - b.height) || a.data.name.toString().localeCompare(b.data.name.toString())
                          }))
      console.log(root)
      const svg = d3.create('svg')
        .style('max-width', '100%')
        .style('height', 'auto')
        .style('font', '10px sans-serif')
        .style('margin', '5px')
    
      const link = svg.append('g')
        .attr('fill', 'none')
        .attr('stroke', '#555')
        .attr('stroke-opacity', 0.4)
        .attr('stroke-width', 1.5)
        .selectAll('path')
        .data(root.links())
        .enter().append('path')
        .attr('d', d3.linkRadial()
                    .angle(d => d.x)
                    .radius(d => d.y))
    
      const node = svg.append('g')
        .attr('stroke-linejoin', 'round')
        .attr('stroke-width', 3)
        .selectAll('g')
        .data(root.descendants().reverse())
        .enter().append('g')
        .attr('transform', d => `
          rotate(${d.x * 180 / Math.PI - 90})
          translate(${d.y},0)
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

      return svg.node()

      svg.attr('viewBox', this.autoBox)
    },
    autoBox() {
      const {x, y, width, height} = this.getBBox()
      return [x, y, width, height]
    },
    // 处理数据
    recursTraver (data) {
      // console.log(data)
      var links = data.links
      var newLinks = []
      var treeList = []
      links.map(item => {
        var pushI = {
          name: item.__s,
          children: [ {name: item.__d} ]
        }
        newLinks.push(pushI)
        var pushT = {
          id: item.__s,
          children: item.__d
        }
        treeList.push(pushT)
      })
      console.log(treeList)

      var linksMap = new Map()
      newLinks.forEach(item => { linksMap.set(item.children, item.name) })
      // console.log(linksMap)
      
      var graph = treeList.reduce((r, a) => {
        r[a.id] = r[a.id] || []
        r[a.id].push(a)
        return r
      }, Object.create(null))

      // console.log(graph)

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

      // console.log(new_root)
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

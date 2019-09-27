<template>
  <div class="skill">
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
    // this.init()
  },
  methods: {
    getSampleGraph () {
      // http://10.61.2.206:8123/?query=select * from out(Knowledge,1,3) limit 100 format Graph
      // graphName: 'Knowledge', limitNum: 10, hopNum: 3, arrayV: 1
      // const sendData = { graphName: 'Knowledge' }
      const sendOther = {
        graphName: 'Knowledge',
        limitNum: 5,
        hopNum: 3,
        arrayV: [1]
      }
      // intranetPost(sampleGraph, sendData)
      //   .then(data => {
      //     // console.log(data)
      //     // this.forData(data.result)
      //     this.init(data.result)
      //   })
      //   .catch(reason => { console.log(reason) })
      intranetPost(multiExpand, sendOther)
        .then(data => {
          console.log(data.result)
          // this.recursTraver(data.result)
          this.init(data.result)
        })
        .catch(reason => { console.log(reason) })
    },
    init (sendData) {
      var marge = {
        top: 50,
        bottom: 0,
        left: 10,
        right: 0
      }

      // console.log(d3)

      var svg = d3.select('.skill')
                  .append('svg')
                  .attr({'width': 900, 'height': 1400})
      var width = svg.attr('width')
      var height = svg.attr('height')
      var g = svg.append('g')
                  .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')')
      /* var setData = {
        'name': '中国',
        'children':
        [
          { 
            'name': '浙江',
              'children':
              [
                {'name': '杭州'},
                {'name': '宁波'},
                {'name': '温州'},
                {'name': '绍兴'}
              ]
            },
            
          { 
            'name': '广西',
            'children':
            [
              {
              'name': '桂林',
              'children':
              [
                {'name': '秀峰区'},
                {'name': '叠彩区'},
                {'name': '象山区'},
                {'name': '七星区'}
              ]
              },
              {'name': '南宁'},
              {'name': '柳州'},
              {'name': '防城港'}
            ] 
          },
          
          { 
            'name': '黑龙江',
            'children':
            [
              {'name': '哈尔滨'},
              {'name': '齐齐哈尔'},
              {'name': '牡丹江'},
              {'name': '大庆'}
            ] 
          },
          
          { 
            'name': '新疆',
            'children':
            [
              {'name': '乌鲁木齐'},
              {'name': '克拉玛依'},
              {'name': '吐鲁番'},
              {'name': '哈密'}
            ]
          }
        ]
      } */
      // console.log(setData)
      var postData = this.recursTraver(sendData)
      console.log(postData)

      // var hierarchyData = d3.hierarchy(setData)
      var hierarchyData = d3.hierarchy(postData)
      // var hierarchyData = d3.hierarchy(markData)

      var tree = d3.tree()
                  .size([height - 100, width - 100])
                  .separation((a, b) => {
                    return (a.parent === b.parent ? 1 : 2) / a.depth
                  })

      var treeData = tree(hierarchyData)
      // console.log(treeData)
      var nodes = treeData.descendants()
      // console.log(nodes)
      var links = treeData.links()
      // console.log(links)

      var berGenerator = d3.linkHorizontal()
                            .x((d) => { return d.y })
                            .y((d) => { return d.x })

      g.append('g')
        .automatch('path', links)
        .attr('d', (d) => {
          var start = { x: d.source.x, y: d.source.y }
          var end = { x: d.target.x, y: d.target.y }
          return berGenerator({ source: start, target: end })
        })
        .attr({
          'fill': 'none',
          'stroke': 'rgb(148, 70, 183)',
          'stroke-width': 1
        })

      var gs = g.append('g')
                .automatch('g', nodes)
                .attr('transform', (d) => {
                  return 'translate(' + d.y + ',' + d.x + ')'
                })
      // 圆圈
      gs.append('circle')
        .attr({
          'r': 6,
          'fill': 'white',
          'stroke': 'blue',
          'storke-width': 1
        })
      // 文本
      gs.append('text')
        .attr({
          'x': (d) => { return d.children ? -40 : 8 },
          'y': -5,
          'dy': 10,
          'fill': 'red'
        })
        .text((d) => { return d.data.name })
    },
    recursTraver (data) {
      console.log(data)
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
      // console.log(newLinks)
      // console.log(treeList)
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
          id: nodeId,
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
        var list = graph[node_dict['id']]
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
        // return
      }

      do_bfs(already_append, graph, new_root)
      console.log(new_root) // 最终值
      return new_root
    },
    forData (data) {
      var links = data.links
      var newLinks = []
      var newObj = {
        name: '',
        children: []
      }
      var newArr = []

      links.map(item => {
        var pushI = {
          name: item.__s,
          children: [ {name: item.__d} ]
        }
        newLinks.push(pushI)
      })

      function returnFun (arr) {
        arr.reduce((prev, cur, index) => {
          if (cur.name === prev.name) {
            newObj.name = cur.name
            if (newObj.length === 0) newObj.children.push(prev.children[0])
            newObj.children.push(cur.children[0])
            return cur
          } else {
            newArr.push(newObj)
            newObj = {
              name: '',
              children: []
            }
            return cur
          }
        })
        newArr.push(newObj)
      }
      returnFun(newLinks)
      console.log(newArr)
      newArr = newArr.filter(item => { return item.name !== '' })

      var deleteKey = []

      var newMap = new Map()
      newArr.forEach(item => { newMap.set(item.name, item.children) })
      // console.log(newArr)
      // console.log(newMap)

      newMap._c.forEach(item => {
        for (var index in item) { // name
          const mapIndex = item[index]
          mapIndex.children = []
          if (newMap.size > 1) {
            newMap.forEach((value, key) => {
              if (mapIndex.name === key) {
                mapIndex.children = value
                deleteKey.push(key)
              }
            })
            deleteKey = Array.from(new Set([...deleteKey]))
            for (var i in deleteKey) newMap.delete(deleteKey[i])
            deleteKey = []
          }
        }
      })

      newMap = [...newMap]
      var otherObj = []
      
      for (var item in newMap) {
        const objP = {
          name: newMap[item][0],
          children: newMap[item][1]
        }
        otherObj.push(objP)
      }
      console.log(otherObj)

      return otherObj
    }
  }
}
</script>

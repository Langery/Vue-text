<template>
  <div class="skill">
  </div>
</template>

<script>
import * as d3 from 'd3'
import { sampleGraph } from '@/server/index'
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
      const sendData = {  
        graphName: 'Knowledge'
      }
      intranetPost(sampleGraph, sendData)
        .then(data => {
          // console.log(data)
          this.forData(data.result)
          // this.init(data.result)
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
                  .attr({'width': 900, 'height': 500})
      var width = svg.attr('width')
      var height = svg.attr('height')
      var g = svg.append('g')
                  .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')')
      var setData = {
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
      }
      // console.log(sendData)
      // console.log(setData)
      var postData = this.forData(sendData)
      // console.log(postData[0])

      // var hierarchyData = d3.hierarchy(setData)
      var hierarchyData = d3.hierarchy(postData)

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
          // console.log(prev, cur, index)
          if (cur.name === prev.name) {
            newObj.name = cur.name
            newObj.children.push(prev.children[0])
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
      }
      var getT = returnFun(newLinks)
      newArr = newArr.filter(item => { return item.name !== '' })
      // console.log(newArr)
      var newMap = new Map()
      newArr.forEach(item => { newMap.set(item.name, item.children) })
      console.log(newMap)
      console.log(newMap._c)
      // console.log(newMap.get(96))
      newMap.get(96).forEach(item => {
        newMap.forEach((value, key) => {
          console.log(key)
          console.log(item)
        })
      })
      console.log(newMap.get(96))
    }
  }
}
</script>

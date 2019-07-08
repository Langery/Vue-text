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
          this.dealData(data.result)
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
      // var postData = this.dealData(sendData)

      var hierarchyData = d3.hierarchy(setData)

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
    dealData (data) {
      // console.log(data)
      // var links = data.links
      // var nodes = data.nodes
      // var newArr = []

      // var linkFun = (links) => {
      //   link.forEach(item => {
      //     item.children.forEach((i) => {
      //       i.children.forEach((p) => {
      //         p.children.forEach((o) => {})
      //       })
      //     })
      //   })
      // }
      // console.log(links)

      // function add (a, b) {
      //   return a + b
      // }
      // function addcurry (a) {
      //   return function (b) {
      //     return a + b
      //   }
      // }
      // addcurry(2)(3)

      // function curry (fn, arrty = fn.length) {
      //   return (function nextCurry (pre) {
      //     return function curried (...nex) {
      //       var args = [...pre, ...nex]
      //       return args.length >= arrty ? fn(...args) : nextCurry(args)
      //     }
      //   })([])
      // }

      // links.forEach(item => {
      //                     开始      结束
      //   console.log([item.__s, item.__d])
      // })
    }
  }
}
</script>

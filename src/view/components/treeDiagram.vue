<template>
  <div class="skill">
  </div>
</template>

<script>
import * as d3 from 'd3'

export default {
  data () {
    return {}
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
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

      var hierarchyData = d3.hierarchy(setData)

      var tree = d3.tree()
                  .size([height - 100, width - 100])
                  .separation((a, b) => {
                    return (a.parent === b.parent ? 1 : 2) / a.depth
                  })

      var treeData = tree(hierarchyData)

      var nodes = treeData.descendants()
      var links = treeData.links()

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
      
      gs.append('circle')
        .attr({
          'r': 6,
          'fill': 'white',
          'stroke': 'blue',
          'storke-width': 1
        })
      
      gs.append('text')
        .attr({
          'x': (d) => { return d.children ? -40 : 8 },
          'y': -5,
          'dy': 10,
          'fill': 'red'
        })
        .text((d) => { return d.data.name })
    }
  }
}
</script>

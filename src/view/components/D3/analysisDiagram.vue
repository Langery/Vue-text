<template>
  <div id='canvas'>
    <svg />
  </div>
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
          this.init(this.recursTraver(data.result))
          // this.init()
        })
        .catch(reason => {
          console.log(reason)
        })
    },
    init (data) {
      console.log(data)
      var finalData = {
        name: 'd3ApiModules',
        children: [
          {
            name: 'dataViz',
            children: [
              {
                name: 'Axes (d3-axis)',
                children: [
                  {
                    name: 'd3.axisTop',
                    value: 1
                  }, {
                    name: 'd3.axisRight',
                    value: 1
                  }, {
                    name: 'd3.axisBottom',
                    value: 1
                  }
                ],
                methodCount: 3
              },
              {
                name: 'Brushes (d3-brush)',
                children: [
                  {
                    name: 'd3.brush',
                    value: 1
                  }, {
                    name: 'd3.brushX',
                    value: 1
                  }, {
                    name: 'd3.brushY',
                    value: 1
                  }
                ],
                methodCount: 3
              },
              {
                name: 'Chords (d3-color)',
                children: [
                  {
                    name: 'd3.color',
                    value: 1
                  }, {
                    name: '*color*.copy',
                    value: 1
                  }, {
                    name: '*color*.rgb',
                    value: 1
                  }
                ],
                methodCount: 3
              }
            ]
          },
          {
            name: 'animation',
            children: [
              {
                name: 'Easings (d3-ease)',
                children: [
                  {
                    name: '*ease*',
                    value: 1
                  }, {
                    name: 'd3.easeLinear',
                    value: 1
                  }, {
                    name: 'd3.easePolyIn',
                    value: 1
                  }
                ],
                methodCount: 3
              },
              {
                name: 'Transitions (d3-transition)',
                children: [
                  {
                    name: '*selection*.transition',
                    value: 1
                  }, {
                    name: '*selection*.interrupt',
                    value: 1
                  }, {
                    name: 'd3.transition',
                    value: 1
                  }
                ],
                methodCount: 3
              }
            ]
          },
          {
            name: 'analysis',
            children: [
              {
                name: 'Delimiter-Separated Values (d3-dsv)',
                children: [
                  {
                    name: 'd3.dsvFormat',
                    value: 1
                  }, {
                    name: '*dsv*.parse',
                    value: 1
                  }, {
                    name: '*dsv*.parseRows',
                    value: 1
                  }
                ],
                methodCount: 3
              },
              {
                name: 'Quadtrees (d3-quadtree)',
                children: [
                  {
                    name: 'd3.quadtree',
                    value: 1
                  }, {
                    name: '*quadtree*.x',
                    value: 1
                  }, {
                    name: '*quadtree*.y',
                    value: 1
                  }
                ],
                methodCount: 3
              }
            ]
          },
          {
            name: 'dataUtilities',
            children: [
              {
                name: 'Arrays (d3-array)',
                children: [
                  {
                    name: 'Statistics',
                    children: [
                      {
                        name: 'd3.min',
                        value: 1
                      }, {
                        name: 'd3.max',
                        value: 1
                      }, {
                        name: 'd3.extent',
                        value: 1
                      }
                    ]
                  },
                  {
                    name: 'Search',
                    children: [
                      {
                        name: 'd3.scan',
                        value: 1
                      }, {
                        name: 'd3.bisect',
                        value: 1
                      }, {
                        name: 'd3.bisectRight',
                        value: 1
                      }
                    ]
                  },
                  {
                    name: 'Transformations',
                    children: [
                      {
                        name: 'd3.cross',
                        value: 1
                      }, {
                        name: 'd3.merge',
                        value: 1
                      }, {
                        name: 'd3.pairs',
                        value: 1
                      }
                    ]
                  }
                ],
                methodCount: 3
              },
              {
                name: 'Collections (d3-collection)',
                children: [
                  {
                    name: 'Objects',
                    children: [
                      {
                        name: 'd3.keys',
                        value: 1
                      }, {
                        name: 'd3.values',
                        value: 1
                      }, {
                        name: 'd3.entries',
                        value: 1
                      }
                    ]
                  },
                  {
                    name: 'Maps',
                    children: [
                      {
                        name: 'd3.map',
                        value: 1
                      }, {
                        name: '*map*.has',
                        value: 1
                      }, {
                        name: '*map*.get',
                        value: 1
                      }
                    ]
                  },
                  {
                    name: 'Sets',
                    children: [
                      {
                        name: 'd3.set',
                        value: 1
                      }, {
                        name: '*set*.has',
                        value: 1
                      }, {
                        name: '*set*.add',
                        value: 1
                      }
                    ]
                  }
                ],
                methodCount: 3
              }
            ]
          },
          {
            name: 'domUtilities',
            children: [
              {
                name: 'Dispatches (d3-dispatch)',
                children: [
                  {
                    name: 'd3.dispatch',
                    value: 1
                  }, {
                    name: '*dispatch*.on',
                    value: 1
                  }
                ],
                methodCount: 2
              },
              {
                name: 'Dragging (d3-drag)',
                children: [
                  {
                    name: 'd3.drag',
                    value: 1
                  },
                  {
                    name: '*drag*',
                    value: 1
                  }
                ],
                methodCount: 2
              }
            ]
          }
        ]
      }
      console.log(finalData)
      var pack = data =>
        d3
          .pack()
          .size([width - 2, height - 2])
          .padding(3)(
          d3
            .hierarchy(data)
            .sum(d => d.value)
            .sort((a, b) => b.value - a.value)
        )
      var format = d3.format(',d')
      let color = d3.scaleOrdinal().range(d3.schemeCategory10)

      // var width = document.getElementById('canvas').clientWidth
      // var height = document.getElementById('canvas').clientHeight
      var height = 945
      var width = height
      // const root = pack(data)
      const root = pack(finalData)
      let focus = root
      // let shadow = true
      // let multicolor = true
      // let hexcolor = '#0099cc'

      let view
      // function setColorScheme (multi) {
      //   if (multi) {
      //     let color = d3.scaleOrdinal()
      //                   .range(d3.schemeCategory10)
      //     return color
      //   }
      // }

      // let color = setColorScheme(multicolor)

      function setCircleColor (obj) {
        let depth = obj.depth
        while (obj.depth > 1) obj = obj.parent
        // let newcolor = multicolor ? d3.hsl(color(obj.data.name)) : d3.hsl(hexcolor)
        let newcolor = d3.hsl(color(obj.data.name))
        newcolor.l += depth === 1 ? 0 : depth * 0.1
        return newcolor
      }

      const svg = d3
        .select('svg')
        .attr('viewBox', `-${width / 2} -${height / 2} ${width} ${height}`)
        .style('font', '10px sans-serif')
        .style('display', 'block')
        .style('margin', '0 -14px')
        .style('background', color(0))
        .style('cursor', 'pointer')
        .on('click', () => zoom(root))
        .attr('text-anchor', 'middle')

      const node = svg
        .append('g')
        .selectAll('circle')
        .data(root.descendants().slice(1))
        .join('circle')
        .attr('fill', setCircleColor)
        .attr('pointer-events', d => (!d.children ? 'none' : null))
        // .on('mouseover', () => {
        //   var that = this
        //   d3.select(that).attr('stroke', '#000')
        // })
        // .on('mouseout', () => {
        //   var that = this
        //   d3.select(this).attr('stroke', null)
        // })
        .on('click', d => focus !== d && (zoom(d), d3.event.stopPropagation()))

      node.append('title').text(
        d =>
          `${d
            .ancestors()
            .map(d => d.data.name)
            .reverse()
            .join('/')}\n${format(d.value)}`
      )

      const label = svg
        .append('g')
        .style('font-family', 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif')
        .style('overflow', 'hidden')
        .attr('pointer-events', 'none')
        .attr('text-anchor', 'middle')
        .selectAll('text')
        .data(root.descendants())
        .join('text')
        // .style('fill-opacity', d => (d.parent === root ? 1 : 0))
        // .style('display', d => (d.parent === root ? 'inline' : 'none'))
        .text(d => d.data.name)

      const leaf = node.filter(d => !d.children)
      console.log(leaf)
      leaf.append("text")
          .attr("clip-path", d => d.clipUid)
          .selectAll("tspan")
          .data(d => d.data.name.split(/(?=[A-Z][^A-Z])/g))
          .join("tspan")
          .attr("x", 0)
          .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
          .style('fill-opacity', d => (d.parent === root ? 1 : 0))
          .style('display', d => (d.parent === root ? 'inline' : 'none'))
          .text(d => d)

      zoomTo([root.x, root.y, root.r * 2])

      function zoomTo (v) {
        const k = width / v[2]
        view = v
        label.attr(
          'transform',
          d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`
        )
        node.attr(
          'transform',
          d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`
        )
        node.attr('r', d => d.r * k)
      }

      function zoom (d) {
        // const focus0 = focus

        focus = d

        const transition = svg
          .transition()
          .duration(d3.event.altKey ? 7500 : 750)
          .tween('zoom', d => {
            const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2])
            return t => zoomTo(i(t))
          })

        label
          .filter(d => {
            return (d.parent === focus || this.style.display === 'inline')
          })
          .transition(transition)
            .style('fill-opacity', d => (d.parent === focus ? 1 : 0))
            .on('start', d => {
              if (d.parent === focus) this.style.display = 'inline'
            })
            .on('end', d => {
              if (d.parent !== focus) this.style.display = 'none'
            })
            // .text(d => d)
      }
    },
    recursTraver (data) {
      // console.log(data)
      var links = data.links
      var newLinks = []
      var treeList = []
      links.map(item => {
        var pushI = {
          name: item.__s,
          children: [{ name: item.__d }]
        }
        newLinks.push(pushI)
        var pushT = {
          name: String(item.__s),
          children: String(item.__d)
        }
        treeList.push(pushT)
      })
      // console.log(newLinks)
      // console.log(treeList)
      console.log(treeList)

      var linksMap = new Map()
      newLinks.forEach(item => {
        linksMap.set(item.children, item.name)
      })
      // console.log(linksMap)

      var graph = treeList.reduce((r, a) => {
        r[a.name] = r[a.name] || []
        r[a.name].push(a)
        return r
      }, Object.create(null))

      // console.log(graph)

      var already_append = []
      function new_child (nodeId) {
        var child = {
          name: String(nodeId),
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
        for (var index in node_dict['children']) {
          do_bfs(already_append, graph, node_dict['children'][index])
        }
        // return
      }

      do_bfs(already_append, graph, new_root)
      console.log(new_root) // 最终值
      return new_root
    }
  }
}
</script>

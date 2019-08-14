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
          this.dataDeal(data.result)
        })
        .catch(reason => { console.log(reason) })
    },
    init (data) {
      // console.log(data)
      // var data = [
      //   [11975,  5871, 8916, 2868],
      //   [ 1951, 10048, 2060, 6171],
      //   [ 8010, 16145, 8090, 8045],
      //   [ 1013,   990,  940, 6907]
      // ]
      var data = data.slice(0, 5)
      console.log(data)

      var height = 960
      var width = 960
      var outerRadius = Math.min(width, height) * 0.5 - 30
      var innerRadius = outerRadius - 20
      
      const svg = d3.select('svg')
                    .attr("viewBox", [-width / 2, -height / 2, width, height])
                    .attr("font-size", 20)
                    .attr("font-family", "sans-serif")

      var chord = d3.chord()
                    .padAngle(0.06)
                    // .sortSubgroups(d3.descending)

      const chords = chord(data)
      console.log(chords)

      const group = svg.append("g")
                        .selectAll("g")
                        .data(chords.groups)
                        .enter().append("g")
      
      var color = d3.scaleOrdinal()
                    .domain(d3.range(data.length))
                    .range(["#000000", "#FFDD89", "#957244", "#F26223", '#F2CAC9', '#F4A83A', '#bbb5ac', '#f2e6ce', '#393733', '#bacf65', '#e2d849', '#c0c4c3', '#248067', '#737c7b', '#7cabb1', '#2e317c', '#815c94'])
      var arc = d3.arc()
                  .innerRadius(innerRadius)
                  .outerRadius(outerRadius)
      var ribbon = d3.ribbon()
                      .radius(innerRadius)
      var formatValue = d3.formatPrefix(",.0", 1e3)
      function groupTicks (d, step) {
        const k = (d.endAngle - d.startAngle) / d.value;
        return d3.range(0, d.value, step).map(value => {
          return {value: value, angle: value * k + d.startAngle};
        })
      }
      group.append("path")
          .style("fill", d => { return color(d.index) } )
          .style("stroke", d => { return d3.rgb(color(d.index)).darker() })
          .attr("d", arc)
      
      let r0 = Math.min(width, height) * .37

      group.append('text')
          .each(d => {
            console.log(d)
            d.angle = (d.startAngle + d.endAngle) / 2
          })
          .attr('dy', '.40em')
          .attr('text-anchor', d => {
            return d.angle > Math.Pi ? 'end' : null
          })
          .attr('transform', d => {
            return  "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
              + "translate(" + (r0 + 20) + ")"
              + (d.angle > Math.PI ? "rotate(180)" : "")
          })
          .attr('stroke', '#000')
          .text(d => {
            return d.index
          })
      // const groupTick = group.append("g")
      //   .selectAll("g")
      //   .data(d => groupTicks(d, 1e3))
      //   .join("g")
      //   .attr("transform", d => { `rotate(${d.angle * 180 / Math.PI - 90}) translate(${outerRadius},0` })
      
      // groupTick
      //   .filter(d => d.value % 5e3 === 0)
      //   .append("text")
      //   .attr("x", 8)
      //   .attr("dy", ".35em")
      //   .attr("transform", d => d.angle > Math.PI ? "rotate(180) translate(-16)" : null)
      //   .attr("text-anchor", d => d.angle > Math.PI ? "end" : null)
      //   .text(d => formatValue(d.value));

      svg.append("g")
          .attr("fill-opacity", 0.67)
          .selectAll("path")
          .data(chords)
          .join("path")
          .attr("d", ribbon)
          .attr("fill", d => color(d.target.index))
          .attr("stroke", d => d3.rgb(color(d.target.index)).darker());

    },
    dataDeal (data) {
      let nested = d3.nest().key(d => d.__s)
                      .entries(data.links)
      // console.log(nested)
      let n = d3.max(nested, d => d3.max(d.values, x => x.__d)) + 1
      let m = nested.length
      // console.log(n, m)
      let matrix = []
      nested.forEach((x, i) => {
        if (!matrix[+x.key % m]) matrix[+x.key % m] = Array.from({length: n}).fill(0)
        x.values.forEach((d, j) => {
          // console.log(d)
          // console.log(j)
          matrix[d.__s % m][d.__d % n] = d.__e
        })
      })
      
      var newMat = []
      matrix.map(item => {
        item = item.filter(Boolean)
        newMat.push(item)
      })

      // console.log(newMat)
      // this.init(matrix)
      this.init(newMat)
    }
  }
}
</script>

<template>
  <div id="canvas">
    <svg></svg>
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
        limitNum: 3,
        hopNum: 1,
        arrayV: [1]
      }
      intranetPost(multiExpand, sendOther)
        .then(data => {
          console.log(data.result)
          this.dataDeal(data.result)
        })
        .catch(reason => { console.log(reason) })
    },
    init (data, keyName) {
      console.log(keyName)
      // console.log(data)
      // var data = [
      //   [11975,  5871, 8916, 2868, 2000],
      //   [ 1951, 10048, 2060, 6171, 4512],
      //   [ 8010, 16145, 8090, 8045, 1236],
      //   [ 1013,   980,  194,  907, 8521],
      //   [ 1013,  1990,  940, 6907, 8521]
      // ]
      // var data = data.slice(0, 11)
      console.log(data)

      // var width = document.getElementById('canvas').clientWidth
      // var height = document.getElementById('canvas').clientHeight
      var width = 480
      var height = 480
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
          .attr("fill", d => { return color(d.index) } )
          .attr("stroke", d => { return color(d.index) })
          .attr("d", arc)
      
      let r0 = Math.min(width, height) * .37

      group.append('text')
          .each((d, i) => {
            // console.log(d)
            d.angle = (d.startAngle + d.endAngle) / 2
            d.name = keyName[i]
          })
          .attr('dy', '.35em')
          .attr('text-anchor', d => {
            return d.angle > Math.Pi ? 'end' : null
          })
          .attr('transform', d => {
            // return  "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
            //   + "translate(" + (r0 + 20) + ")"
            //   + (d.angle > Math.PI ? "rotate(180)" : "")
            var result =  "rotate(" +　(d.angle*180/Math.PI) + ")";
            result += "translate(0," + -1 * (outerRadius + 10) + ")";
            if (d.angle > Math.PI * 3 / 4 && d.angle < Math.PI * 5 / 4 )
                result += "rotate(180)";
            return result
          })
          .attr('stroke', '#000')
          .text(d => {
            return d.name
          })

      // group.selectAll('text')
      //       .enter()
      //       .append('text')
      //       .each((d,i) => {
      //         d.angle = (d.startAngle +　d.endAngle) / 2
      //         d.name = keyName[i]
      //       })
      //       .attr("dy",".35em")
      //       .attr('transform', (d) => {    // 平移属性
      //           var result =  "rotate(" +　(d.angle*180/Math.PI) + ")";
      //           result += "translate(0," + -1 * (outerRadius + 10) + ")";
      //           if (d.angle > Math.PI * 3 / 4 && d.angle < Math.PI * 5 / 4 )
      //               result += "rotate(180)";
      //           return result;
      //       })
      //       .text((d) => {
      //         console.log(d)
      //         return d.name;
      //       })

      const groupTick = group.append("g")
        .selectAll("g")
        .data(d => groupTicks(d, 1e3))
        .join("g")
        .attr("transform", d => { `rotate(${d.angle * 180 / Math.PI - 90}) translate(${outerRadius},0` })
      
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
      var keyName = []
      data.nodes.forEach(item => { keyName.push(item.__v) })

      data.links.forEach(item => {
        data.nodes.forEach((jtem, index) => {
          if (item.__s == jtem.__v) item.sourceIndex = index
          if (item.__d == jtem.__v) item.targetIndex = index
        })
      })

      // var newLinks = []
      // data.links.forEach(item => {
      //   var pushI = {
      //     __s: item.__d,
      //     __d: item.__s,
      //     src: item.dst,
      //     dst: item.src,
      //     src_type: item.dst_type,
      //     dst_type: item.src_type,
      //     type: item.type,
      //     __e: item.__e,
      //     sourceIndex: item.targetIndex,
      //     sourceIndex: item.sourceIndex
      //   }
      //   newLinks.push(pushI)
      // })
      // console.log(newLinks)
      // var sendLinks = data.links.concat(newLinks)
      // console.log(sendLinks)

      // .entries(data.links)
      let nested = d3.nest().key(d => d.sourceIndex)
                      .entries(data.links)
      console.log(nested)
      let n = d3.max(nested, d => d3.max(d.values, x => x.targetIndex)) + 1
      let m = nested.length
      console.log(n, m)
      let matrix = []
      let trueMatrix = []

      nested.forEach((x, i) => {

        if (!matrix[+x.key % m]) {
          matrix[+x.key % m] = Array.from({length: n}).fill(0)
        } else {
          trueMatrix[+x.key % m] = matrix[+x.key % m]
        }

        x.values.forEach((d, j) => {
          matrix[d.sourceIndex % m][d.targetIndex % n] = 1
        })
      })
      // console.log(nested)
      // console.log(matrix)
      // console.log(trueMatrix)
      var newMatrix = []
      matrix.forEach(item => newMatrix.push(item))
      trueMatrix.forEach(item => newMatrix.push(item))
      console.log(newMatrix)
      
      var max = newMatrix[0].length
      for (var i = 0; i < newMatrix.length; i++) {
        // console.log(newMatrix[i])
        if (max < newMatrix[i].length) max = newMatrix[i].length
      }
      console.log(max)

      if (newMatrix.length > max || newMatrix.length == max) {
        max = newMatrix.length
        newMatrix.forEach(item => {
          if (item.length < max) {
            var addN = max - item.length
            for (var i = 0; i < addN; i++) item.push(0)
          }
        })
      } else if (newMatrix.length < max) {
        var lessN = max - newMatrix.length
        var newArr = []
        for (var j = 0; j < max; j++) newArr.push(0)
        newMatrix.push(newArr)
      }

      console.log(newMatrix)

      // this.init(matrix)
      this.init(newMatrix, keyName)
    }
  }
}
</script>

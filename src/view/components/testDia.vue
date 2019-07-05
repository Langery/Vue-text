<template>
  <div class="skill">
    <svg></svg>
  </div>
</template>

<script>
import * as d3 from 'd3'
import automatch from '@/common/automatch'
export default {
  data () {
    return {}
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      var margin = {
        top: 60,
        bottom: 60,
        left: 60,
        right: 60
      }
      var dataset = [250, 120, 170, 210, 90]
      var svg = d3.select('svg')
      svg.attr({'width': 500,'height': 500})

      var rectHeight = 30
      var g = svg.append('g')
        .attr('transform', 'translate(' + margin.top + ',' + margin.left + ')')
        .automatch('rect', dataset)
    }
  }
}
</script>

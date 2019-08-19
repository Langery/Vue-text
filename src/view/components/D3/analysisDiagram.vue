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
          // this.init(this.recursTraver(data.result))
          this.init()
        })
        .catch(reason => { console.log(reason) })
    },
    init () {
      var sendData = [
        {name: "dataViz", children: [
          {
            name: 'Axes (d3-axis)',
            children: [
              {
                name: "d3.axisTop",
                value: 1
              }, {
                name: "d3.axisRight",
                value: 1
              }
            ],
            methodCount: 14
          },
          {
            name: "Brushes (d3-brush)",
            children: [
              {
                name: "d3.brush",
                value: 1
              }, {
                name: "d3.brushX",
                value: 1
              }
            ],
            methodCount: 10
          }
        ]},
        {name: "animation", children: [
          {
            name: "Easings (d3-ease)",
            children: [
              {
                name: "*ease*",
                value: 1
              }, {
                name: "d3.easeLinear",
                value: 1
              }
            ],
            methodCount: 41
          }, {
            name: "Transitions (d3-transition)",
            children: [
              {
                name: "*selection*.transition",
                value: 1
              }, {
                name: "*selection*.interrupt",
                value: 1
              }
            ],
            methodCount: 29
          }
        ]},
        {name: "analysis", children: [
          {
            name: "Delimiter-Separated Values (d3-dsv)",
            children: [
              {
                name: "d3.dsvFormat",
                value: 1
              }, {
                name: "*dsv*.parse",
                value: 1
              }
            ],
            methodCount: 17
          }, {
            name: "Quadtrees (d3-quadtree)",
            children: [
              {
                name: "d3.quadtree",
                value: 1
              }, {
                name: "*quadtree*.x",
                value: 1
              }
            ],
            methodCount: 16
          }
        ]},
        {name: "dataUtilities", children: [
          {
            name: "Arrays (d3-array)",
            children: [
              {
                name: "Statistics",
                children: [
                  {
                    name: "d3.min",
                    value: 1
                  }, {
                    name: "d3.max",
                    value: 1
                  }
                ]
              }
            ],
            methodCount: 37
          },
          {
            name: "Collections (d3-collection)",
            children: [
              {
                name: "Objects",
                children: [
                  {
                    name: "d3.keys",
                    value: 1
                  }, {
                    name: "d3.values",
                    value: 1
                  }
                ]
              }
            ],
            methodCount: 32
          }
        ]},
        {name: "domUtilities", children: [
          {
            name: "Dispatches (d3-dispatch)",
            children: [
              {
                name: "d3.dispatch",
                value: 1
              }, {
                name: "*dispatch*.on",
                value: 1
              }
            ],
            methodCount: 5
          },
          {
            name: "Dragging (d3-drag)",
            children: [
              {
                name: "d3.drag",
                value: 1
              }, {
                name: "*drag*",
                value: 1
              }
            ],
            methodCount: 11
          }
        ]}
      ]
      var finalData = {
        name: "d3ApiModules",
        children: [
          {name: "dataViz", children: [
            {
              name: 'Axes (d3-axis)',
              children: [
                {
                  name: "d3.axisTop",
                  value: 1
                }, {
                  name: "d3.axisRight",
                  value: 1
                }
              ],
              methodCount: 14
            },
            {
              name: "Brushes (d3-brush)",
              children: [
                {
                  name: "d3.brush",
                  value: 1
                }, {
                  name: "d3.brushX",
                  value: 1
                }
              ],
              methodCount: 10
            }
          ]},
          {name: "animation", children: [
            {
              name: "Easings (d3-ease)",
              children: [
                {
                  name: "*ease*",
                  value: 1
                }, {
                  name: "d3.easeLinear",
                  value: 1
                }
              ],
              methodCount: 41
            }, {
              name: "Transitions (d3-transition)",
              children: [
                {
                  name: "*selection*.transition",
                  value: 1
                }, {
                  name: "*selection*.interrupt",
                  value: 1
                }
              ],
              methodCount: 29
            }
          ]},
          {name: "analysis", children: [
            {
              name: "Delimiter-Separated Values (d3-dsv)",
              children: [
                {
                  name: "d3.dsvFormat",
                  value: 1
                }, {
                  name: "*dsv*.parse",
                  value: 1
                }
              ],
              methodCount: 17
            }, {
              name: "Quadtrees (d3-quadtree)",
              children: [
                {
                  name: "d3.quadtree",
                  value: 1
                }, {
                  name: "*quadtree*.x",
                  value: 1
                }
              ],
              methodCount: 16
            }
          ]},
          {name: "dataUtilities", children: [
            {
              name: "Arrays (d3-array)",
              children: [
                {
                  name: "Statistics",
                  children: [
                    {
                      name: "d3.min",
                      value: 1
                    }, {
                      name: "d3.max",
                      value: 1
                    }
                  ]
                }
              ],
              methodCount: 37
            },
            {
              name: "Collections (d3-collection)",
              children: [
                {
                  name: "Objects",
                  children: [
                    {
                      name: "d3.keys",
                      value: 1
                    }, {
                      name: "d3.values",
                      value: 1
                    }
                  ]
                }
              ],
              methodCount: 32
            }
          ]},
          {name: "domUtilities", children: [
            {
              name: "Dispatches (d3-dispatch)",
              children: [
                {
                  name: "d3.dispatch",
                  value: 1
                }, {
                  name: "*dispatch*.on",
                  value: 1
                }
              ],
              methodCount: 5
            },
            {
              name: "Dragging (d3-drag)",
              children: [
                {
                  name: "d3.drag",
                  value: 1
                }, {
                  name: "*drag*",
                  value: 1
                }
              ],
              methodCount: 11
            }
          ]}
        ]
      }
    }
  }
}
</script>

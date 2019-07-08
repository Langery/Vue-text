export default function (node, arr) {
  console.log(this.selectAll(node))
  const nodelistsize = this.selectAll(node)._groups[0].length
  if (Array.prototype.isPrototypeOf(arr)) {
    const datasize = arr.length
    if (nodelistsize <= datasize) {
      console.log('节点不够')
      return this.selectAll(node)
        .data(arr)
        .enter()
        .append(node)
    } else {
      console.log('节点多余')
      var update = this.selectAll(node).data(arr)
      // var exit = update.exit().remove()
      return update
    }
  } else {
    console.log('参数错误' + arr)
  }
}

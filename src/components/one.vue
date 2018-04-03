<template>
  <div id="one">
      <h1>数字增加或移除</h1>
      <div id="demo10" class="text2">
            <button v-on:click="shuffle">Shuffle</button>
            <button v-on:click="add">Add</button>
            <button v-on:click="remove">Remove</button>
            <transition-group name="list-complete" tag="p">
                <span v-for="item in items" v-bind:key="item" class="list-complete-item">
                    {{ item }}
                </span>
            </transition-group>
        </div>
      <a href="/#/" class="uppage">上一页</a>
      <a class="authorname">作者：{{ author }}</a>
      <a href="/#/new" class="downpage">下一页</a>
  </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return{
                items: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
				nextNum: 10,
                author: 'story'
            }
        },
        methods: {
            randomIndex: function () {
                return Math.floor(Math.random() * this.items.length)
            },
            add: function () {
                this.items.splice(this.randomIndex(), 0, this.nextNum++)
            },
            remove: function () {
                this.items.splice(this.randomIndex(), 1)
            },
            shuffle: function () {
                this.items = _.shuffle(this.items)
            }
        }
    }
    
</script>
<style>
h1{
    font-weight: normal;
    font-size: 22px;
    margin-bottom: 20px;
}
.authorname{
    color: orange;
}
.uppage{
    color: pink;
    margin: 0 5%;
}
.downpage{
    color: pink;
    margin: 0 5%;
}
.list-complete-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
}
button{
    display: inline-block;
    margin:0 4%;
}
</style>


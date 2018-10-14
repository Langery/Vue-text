<template>
  <div class="component_text">
    <a href="#" class="badge badge-primary">Primary</a>
    <a href="#" class="badge badge-secondary">Secondary</a>
    <a href="#" class="badge badge-success">Success</a>
    <a href="#" class="badge badge-danger">Danger</a>
    <a href="#" class="badge badge-warning">Warning</a>
    <a href="#" class="badge badge-info">Info</a>
    <a href="#" class="badge badge-light">Light</a>
    <a href="#" class="badge badge-dark">Dark</a>
  </div>
</template>

<script>
export default {
  name: 'ComponentText',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
@import 'bootstrap/dist/css/bootstrap.min.css';

.component_text{
  width: 100%;
  height: 100%;
  background: #FEDFE1;
}
</style>

<template>
    <ul class="breadcrumbs">
      <li><nuxt-link to="/"><i class="fa fa-home fa-2x" /></nuxt-link></li>
      <li>{{elemtree}}</li>
    </ul>
</template>

<script>
    export default {
        name: "BreadCrumb",
      props: {
        'path': String
      },
      computed: {
        elemtree() {
          return this.path
        }
      },

    }
</script>

<style scoped lang="scss">
  .breadcrumbs {
    margin: 2rem 0 0 0;
    padding: 0;
    display: flex;
    align-items: center;
  }
  .breadcrumbs li {
    display: inline-block;
  }
  .breadcrumbs li::before {
    content: '→'; /* Разделитель */
    margin-left: 5px;
    margin-right: 5px;
  }
  .breadcrumbs li:first-child::before {
    content: ''; /* Убираем разделитель для первого пункта */
  }

</style>

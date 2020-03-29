<template>
  <div class="container">
    <main class="main_row">
      <aside class="aside_bar">
        <AsideBar />
      </aside>
      <section class="page_content">
        <TopPanel />
        <nuxt />
      </section>
    </main>
  </div>
</template>

<script>
  import AsideBar from "@/components/AsideBar"
  import TopPanel from "../components/TopPanel";
  export default {
    components: {
      AsideBar,
      TopPanel
    }
  }
</script>

<style>

.container {
  margin: 0 auto;
  padding-top: 10%;
  max-width: 80%;
  min-height: 100vh;
  display: flex;
}
.main_row {
  display: flex;
  width: 100%;

}
.aside_bar {
  max-width: 20%;

}
.page_content {
  max-width: 80%;
  width: 100%;
  padding: 20px 40px 20px 40px;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

</style>

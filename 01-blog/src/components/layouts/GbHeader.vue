<template>
  <header id="gb-header">
    <div class="container">
      <div class="container-logos">
        <h1>Codelândia</h1>
        <h2>blog</h2>
      </div>

      <SearchPostBlog @set-search="$emit('setSearch', $event)" />
    </div>
  </header>
</template>

<script>
import SearchPostBlog from '@/components/SearchPostBlog.vue'

export default {
  components: {
    SearchPostBlog
  },
}
</script>

<style lang="scss" scoped>
#gb-header {
  background: $gradient-brand-color;
  height: 250px;
  padding: 2.5rem 0;

  .container-logos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4.2rem;

    h1,
    h2 {
      color: $dark-40;
      font: $weight-400 $size-large $family-primary;
    }
  }
}
</style>

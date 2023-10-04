<template>
  <GbHeader v-once @set-search="setSearch" />

  <main>
    <section class="container" id="posts">
      <template v-if="postsFilter.length > 0">
        <PostBlog v-for="post in postsFilter" :key="post.id" :post="post" />
      </template>
      <template v-else>
        <p class="post-null">Ops... Nenhum post encontrado com esse título ou descrição.</p>
      </template>
    </section>
  </main>

  <GbFooter v-once />
</template>

<script>
import '@style/main.scss';
import GbHeader from '@/components/layouts/GbHeader.vue'
import GbFooter from '@/components/layouts/GbFooter.vue';
import PostBlog from '@/components/PostBlog.vue';

import dbPosts from '@/db/posts.json';

export default {
  components: {
    GbHeader,
    GbFooter,
    PostBlog
  },
  data() {
    return {
      posts: dbPosts,
      postsFilter: dbPosts,
      search: '',
    }
  },
  methods: {
    setSearch(event) {
      this.search = event.target.value.toLowerCase();
      const posts = this.posts.filter(post => {
        return post.nome.toLowerCase().includes(this.search) || post.descricao.toLowerCase().includes(this.search);
      });
      this.postsFilter = posts;
    }
  }
}
</script>

<style lang="scss" scoped>
#posts {
  padding-top: 6.25rem;
  padding-bottom: 6.25rem;

  .post-null {
    font: $weight-400 $size-normal $family-primary;
    color: $dark-10;
  }
}

.highlight {
  background-color: yellow;
  font-weight: bold;
}
</style>

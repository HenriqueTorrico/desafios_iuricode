<template>
  <footer>
    <h6>
      Desenvolvido por <a href="https://www.torricodev.net.br" target="_blank">Henrique Torrico</a>
    </h6>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  background: $gradient-brand-color;

  a,
  h6 {
    color: $dark-40;
  }

  h6 {
    font: $weight-400 $size-small $family-primary;
    line-height: 1.25rem;
  }
}
</style>

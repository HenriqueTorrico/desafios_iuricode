<template>
  <form>
    <img src="../../public/img/icons/search.svg" alt="Ícone de pesquisa">
    <input type="text" @keyup="$emit('setSearch', $event)" placeholder="Pesquisar no blog (Título ou Descrição)">
  </form>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
form {
  position: relative;

  img {
    position: absolute;
    left: 1rem;
    top: 1.1rem;
  }

  input {
    width: 100%;
    height: 65px;
    outline: none;
    border: 0;
    border-radius: .3rem;
    padding: 1.3rem 1.3rem 1.3rem 4rem;
    font: $weight-400 $size-normal $family-secondary;
    line-height: 1.3rem;
    color: $dark-40;
    background: $dark-40-opacity;

    &::placeholder {
      color: $placeholder-opacity;
    }
  }
}
</style>

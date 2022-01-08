<template>
  <footer>
    <p>Todos os direitos reservados &copy;CopyWrite</p>
    <div id="links">
      <a href="https://github.com/Pedro-Augusto-Barbosa-Aparecido?tab=repositories">
        <i class="bi bi-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/pedro-augusto-195247217/">
        <i class="bi bi-linkedin"></i>
      </a>
      <a href="mailto:pedro007augustobarbosa@gmail.com">
        <i class="bi bi-google"></i>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
footer {
  width: 100%;
  height: 150px;

  background-color: #222;

  color: #FFF;

  display: flex;

  flex-direction: column;

  justify-content: center;
  align-items: center;

}

#links {
  margin-top: 30px;

}

#links>a:not(:last-child) {
  margin-right: 20px;

}

</style>
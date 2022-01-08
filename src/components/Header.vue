<template>
  <nav id="navbar">
    <span id="home">School - ADMIN part</span>
    <div id="buttons">
      <span>Course</span>
      <span><router-link to="/admin/subjects">Subjects</router-link></span>
      <span>Greats Students</span>
      <span>Students</span>
      <span>Employees</span>
      <span>Teachers</span>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  #navbar {
    width: 100%;
    height: 60px;

    display: flex;

    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    background-color: mediumpurple;

    color: #FFF;

  }

  #home {
    margin-left: 50px;

  }

  #buttons {
    margin-right: 50px;

  }

  #buttons>span>a {
    color: #FFF;

    text-decoration: none;

  }

  #buttons>span:not(:last-child) {
    margin-right: 30px;
    transition: .2s opacity;

    color: #FFF;

  }

  #buttons>span>a:hover, #home:hover {
    cursor: pointer;

    color: lightgray;

  }

</style>
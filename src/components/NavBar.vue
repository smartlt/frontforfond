<template>
    <b-navbar toggleable="md" variant="light" class="navbar" sticky="true">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-brand class="logo" href="#" >
          <img class="logo-image" src="../assets/1-logo-head.png" >
        </b-navbar-brand>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form> -->
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
    height: 55px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12),
            0 2px 4px 0 rgba(0,0,0,0.08);
}
.logo {
  position: absolute;
  left: 50%;
}

.logo-image {
    width: 35px;
    height: auto;
    margin-left: -17px !important;
    margin-top: 5px;
}
</style>

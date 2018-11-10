<template>
    <b-navbar class="navbar" v-bind:class ="{header:isHeader,}" sticky=true>

        <b-navbar-brand class="logo" href="#" >
          <img class="logo-image" src="../assets/1-logo-head.png" >
        </b-navbar-brand>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form> -->
            <div class="group-links">
              <b-button href="#" class="button-content-facebook" ></b-button>
              <b-button href="#" class="button-content-twitter"></b-button>
              <b-button href="#" class="button-content-youtube"></b-button>
            </div>
        </b-navbar-nav>

    </b-navbar>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isHeader: true,
    }
  },

methods: {
    handleScroll () {

        this.isHeader = window.scrollY > window.innerHeight*0.7 ? false: true
    }
},
created () {
    window.addEventListener('scroll', this.handleScroll);
},
destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
    height: 80px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12),
            0 2px 4px 0 rgba(0,0,0,0.08);
    transition:0.8s ease-out;
    background-color: white;
    top: 0px;
    padding: 0;
}

.navbar.header{
  all: unset;
  padding: 0;
  position: absolute;
  width: 100%;
  height: 55px;
  top: -20px;

}
.group-links{
  margin-right: 40px;
}

.header > .ml-auto > .group-links{
  margin-top: 300px;
  right: 0;
  position: absolute;
  margin: 70px 40px auto auto;
}

.button-content-facebook,.button-content-twitter,.button-content-youtube{
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: auto;
}

.button-content-facebook{
  background-image: url('../assets/facebook-black.svg');
}

.button-content-twitter{
  background-image: url('../assets/twitter-black.svg');
}

.button-content-youtube{
  background-image: url('../assets/youtube-black.svg');
}

.header > .ml-auto > .group-links >.button-content-facebook{
  background-image: url('../assets/facebook-white.svg');
}
.header > .ml-auto > .group-links >.button-content-twitter{
  background-image: url('../assets/twitter-white.svg');
}
.header > .ml-auto > .group-links >.button-content-youtube{
  background-image: url('../assets/youtube-white.svg');
}

.header > .logo > .logo-image{
  display: none;
}

/*'translate(0)': 'translate(-100%)*/
.logo {
  position: absolute;
  left: 50%;
}

.logo-image {
    width: 35px;
    height: auto;
    margin-left: -17px !important;

}

.footer-link-icon{
  width: 1rem;
  position: absolute;
}

.btn-secondary, .btn-secondary:hover, .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:focus{
  background-color: transparent ;
  border-color: transparent ;

}

.btn-group{
  position: absolute; 
  right: 0;
  display: -webkit-inline-box;
  margin: 60px 30px auto auto;
}

@media only screen and (min-width: 768px) {
  .btn-group{
    margin: 60px 5vw auto auto;
  }
}
</style>

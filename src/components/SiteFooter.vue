
<template>
  <footer class="site-footer">
    <b-container fluid class="site-footer-container">
      <div class="footer-logo">
        <img class="logo-image" src="../assets/fff-rect-gray-1200px.png" >
      </div>
      <b-container fluid class="main-footer">
        <b-row>
          <b-col class="footer-copyright" cols="12" md="6">
            © 2018 Front For Fond. All rights reserved.
          </b-col>
          <b-col class="footer-links" cols="12" md="6">
              <b-button href="#" class="btn btn-secondary">
                <div id="button-content-facebook">
                  <img class="footer-link-icon" src="../assets/facebook-black.svg" >
                </div>
              </b-button>
              <b-button href="#" class="btn btn-secondary">
                <div id="button-content-twitter">
                  <img class="footer-link-icon" src="../assets/twitter-black.svg" >
                </div>
              </b-button>
              <b-button href="#" class="btn btn-secondary">
                <div id="button-content-yotube">
                  <img class="footer-link-icon" src="../assets/youtube-black.svg" >
                </div>
              </b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </footer>
</template>

<script>
  export default {
    name: 'SiteFooter',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .site-footer{
    height: auto;
    margin-top: 55px;
    padding-bottom: 90px;
    background-color: #f3f3f3;

  }

  .site-footer-container{
    padding-top: 50px;
    width: 80%;
  }

  .logo-image{
      width: 10em;
      height: auto;
  }

  .b-col{
    width: 100%;
  }

   .footer-copyright{
    font-size: 0.8rem;
    color: #919191;
  }

  .footer-links{
    margin-top: 20px;
  }

  .footer-link-icon{
    width: 1rem;
    float: right;
  }

  .btn-secondary, .btn-secondary:hover, .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:focus{
    background-color: transparent ;
    border-color: transparent ;
    float: none;
  }


@media only screen and (min-width: 768px) {
  .site-footer-container{
      width: 720px;
    }
  .footer-links{
    margin-top: 0px;
  }
  .btn-secondary, .btn-secondary:hover, .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:focus{
    float: right;
  }
}
  
@media only screen and (min-width: 992px) {
    .site-footer-container{
      width: 960px;
    }
}

@media only screen and (min-width: 1200px) {
    .site-footer-container{
      width: 1140px;
    }
}

</style>

<template>
    <div class="before-footer">
        <div class="fond-container">
            <img class="over" src="../assets/6-fond3.png" >
            <div  class="under"></div>
        </div>
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
            <b-button-group>
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
            </b-button-group>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </footer>
    </div>

    
</template>

<style scoped>
.under
{
    min-height: 100vh;
    max-width: 100vw;
    background-image: url('../assets/fond-line-blue.svg');
    background-repeat: no-repeat;
    background-position: 50% 20%;
    background-size: 60%;
    top: 5%;
    left: 45%;
}
.over
{
    max-width: 450px;
    width: 100%;
    position:absolute;
    top: 110px; 
    left: 45%;
    transform: translate(-50%,0);
    z-index:1;

}
.fond-container{
    position: relative;
    margin: 0 auto;
    height: 500px;
    overflow: hidden;
}
  .before-footer{
      width: 100%;
      height: 500px;
  }
  .site-footer{
    height: auto;
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
    position: absolute; right: 0;
  }

  .btn-secondary, .btn-secondary:hover, .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:focus{
    background-color: transparent ;
    border-color: transparent ;

  }

  .btn-group{
    position: absolute; 
    right: 0;
    display: -webkit-inline-box;
  }


@media only screen and (min-width: 768px) {
  .site-footer-container{
      width: 720px;
    }
  .footer-links{
    margin-top: 0px;
  }
  .under
  {

    background-size: 320px;

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

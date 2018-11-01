<template>
  <div id="header-container">
    <div class="parallax-container container-fluid p-0">
      <div class="layer-bg" data-type="parallax" data-depth="0.1"></div>      
      <div class="layer-logo-fff" data-type="parallax" data-depth="0.4"></div> 
      <div class="layer-fond-stand" data-type="parallax" data-depth="1.1"></div>
      <div class="layer-title" data-type="parallax" data-depth="1.0"></div>
      <div class="layer-cloud-line" data-type="parallax" data-depth="0.1"></div>
      <div class="layer-cloud-2" data-type="parallax" data-depth="0.7"></div>
      <div class="layer-cloud-3" data-type="parallax" data-depth="0.7"></div>
      <div class="layer-cloud-4" data-type="parallax" data-depth="0.6"></div>
      <div class="layer-cloud-5" data-type="parallax" data-depth="0.6"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSection",
  methods: {
    parallax1: function() {
      var depth, i, layer, layers, len, movement, topDistance, translate3d;
      topDistance = pageYOffset;
      layers = document.querySelectorAll("[data-type='parallax']");
      for (i = 0, len = layers.length; i < len; i++) {
        layer = layers[i];
        depth = layer.getAttribute("data-depth");
        movement = -(topDistance * depth);
        translate3d = "translate3d(0, " + movement + "px, 0)";
        layer.style["-webkit-transform"] = translate3d;
        layer.style["-moz-transform"] = translate3d;
        layer.style["-ms-transform"] = translate3d;
        layer.style["-o-transform"] = translate3d;
        layer.style.transform = translate3d;
        var vpheight = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        );
        layer.style.height =
          (vpheight - pageYOffset - movement).toString() + "px";
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.parallax1);
  },
  destroyed() {
    window.removeEventListener("scroll", this.parallax1);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header-container {
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  z-index: -1;
}

.parallax-container {
  position: absolute;
  height: inherit;
  width: inherit;
  overflow: hidden;
}

.layer-bg {
  background: url("../assets/1-BG-1.jpg");
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: inherit;
  position: fixed;
  z-index: -1;
}

.layer-cloud-line {
  background: url("../assets/1-cloud-line.png");
  background-position: center bottom 0vh;
  background-size: 100vw 20vh;
  background-repeat: no-repeat;
  width: 100%;
  height: inherit;
  position: fixed;
  z-index: -1;
}

.layer-logo-fff {
  background: url("../assets/1-logo-head.png");
  background-position: top center;
  background-size: 10% auto;
  background-repeat: no-repeat;
  width: 100%;
  height: inherit;
  position: fixed;
  z-index: -1;
}

.layer-fond-stand {
  background: url("../assets/1-fond-1.png");
  background-position-x: center;
  background-position-y: top 40vh;
  background-size: 60%;
  background-repeat: no-repeat;
  width: 100%;
  height: inherit;
  position: fixed;
  z-index: -1;
}

.layer-cloud-2 {
  background: url("../assets/1-cloud-2.png");
  background-position: right center;
  background-size: 40% auto;
  background-repeat: no-repeat;
  width: 100%;
  height: inherit;
  position: fixed;
  z-index: -1;
}

.layer-cloud-3 {
  background: url("../assets/1-cloud-3.png");
  background-position: left center;
  background-size: 30% auto;
  background-repeat: no-repeat;
  width: 100%;
  height: inherit;
  position: fixed;
  z-index: -1;
}

.layer-cloud-4 {
  background: url("../assets/1-cloud-4.png");
  background-position: left 15vw top 20%;
  background-size: 20% auto;
  background-repeat: no-repeat;
  width: 100%;
  height: inherit;
  position: fixed;
  z-index: -1;
}

.layer-cloud-5 {
  background: url("../assets/1-cloud-5.png");
  background-position: right 15vw top 20%;
  background-size: 20% auto;
  background-repeat: no-repeat;
  width: 100%;
  height: inherit;
  position: fixed;
  z-index: -1;
}

.layer-title {
  background: url("../assets/1-fff-title.png");
  background-position: center 70vh;
  background-size: 100vw auto;
  background-repeat: no-repeat;
  width: 100%;
  height: inherit;
  position: fixed;
  z-index: -1;
}

@media only screen and (min-width: 400px) {
  .layer-fond-stand {
    background-size: 40%;
    background-position-y: top 50vh;
  }
}

</style>
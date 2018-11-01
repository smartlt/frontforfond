<template>
  <div id="header-container">
    <div class="parallax-container container-fluid p-0">
      <!-- 0 is default + is faster - is slower-->
      <div class="layer-bg" data-type="parallax" data-depth="0">
        <img :src="img_bg">
      </div>      
      <div class="layer-logo-fff" data-type="parallax" data-depth="0.1">
        <img :src="img_logo_fff">
      </div>
      <div class="layer-cloud-2" data-type="parallax" data-depth="0.2">
        <img :src="img_cloud_2">
      </div>
      <div class="layer-cloud-3" data-type="parallax" data-depth="0.2">
        <img :src="img_cloud_3">
      </div>
      <div class="layer-cloud-4" data-type="parallax" data-depth="-0.1">
        <img :src="img_cloud_4">
      </div>
      <div class="layer-cloud-5" data-type="parallax" data-depth="-0.1">
        <img :src="img_cloud_5">
      </div>
      <div class="layer-fond-stand" data-type="parallax" data-depth="0.3">
        <img :src="img_fond_stand">
      </div>
      <div class="layer-title" data-type="parallax" data-depth="0.7">
        <img :src="img_title">
      </div>
      <div class="layer-cloud-line" data-type="parallax" data-depth="0">
        <img :src="img_cloud_line">
      </div>     
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSection",
  data() {
    return {
      img_bg: require("../assets/1-BG-1.jpg"),
      img_logo_fff: require("../assets/1-logo-head.png"),
      img_fond_stand: require("../assets/1-fond-1.png"),
      img_title: require("../assets/1-fff-title.png"),
      img_cloud_line: require("../assets/1-cloud-line.png"),
      img_cloud_2: require("../assets/1-cloud-2.png"),
      img_cloud_3: require("../assets/1-cloud-3.png"),
      img_cloud_4: require("../assets/1-cloud-4.png"),
      img_cloud_5: require("../assets/1-cloud-5.png")
    };
  },
  methods: {
    parallax1: function() {
      let depth, i, layer, layers, len, movement, topDistance, translate3d;
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
img {
  width: 100%;
  height: 100%;
}

#header-container {
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}

.parallax-container {
  position: relative;
  height: inherit;
  width: inherit;
  overflow: hidden;
  display: block;
}

.layer-bg {
  position: absolute;
  width: inherit;
  height: inherit;
}

.layer-cloud-line {
  position: absolute;
  width: 100vw;
  height: auto;
  top: auto;
  bottom: 0;
  left: 0;
  right: 0;
}

.layer-logo-fff {
  position: absolute;
  width: calc(244 / 1920 * 100vw);
  height: auto;
  top: 0;
  bottom: auto;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}

.layer-fond-stand {
  position: absolute;
  width: calc(730 / 1920 * 100vw);
  height: auto;
  top: calc(339 / 1080 * 100vh);
  bottom: auto;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}

.layer-cloud-2 {
  position: absolute;
  width: calc(927 / 1920 * 100vw);
  height: auto;
  top: calc(478 / 1080 * 100vh);
  bottom: auto;
  left: auto;
  right: 0;
}

.layer-cloud-3 {
  position: absolute;
  width: calc(561 / 1920 * 100vw);
  height: auto;
  top: calc(448 / 1080 * 100vh);
  bottom: auto;
  left: 0;
  right: auto;
}

.layer-cloud-4 {
  position: absolute;
  width: calc(156 / 1920 * 100vw);
  height: auto;
  top: calc(176 / 1080 * 100vh);
  bottom: auto;
  left: calc(252 / 1920 * 100vw);
  right: auto;
}

.layer-cloud-5 {
  position: absolute;
  width: calc(188 / 1920 * 100vw);
  height: auto;
  top: calc(235 / 1080 * 100vh);
  bottom: auto;
  left: auto;
  right: calc(342 / 1920 * 100vw);
}

.layer-title {
  position: absolute;
  width: calc(1164 / 1920 * 100vw);
  height: auto;
  top: auto;
  bottom: 0;
  left: calc(378 / 1920 * 100vw);
  right: auto;
}

/* ipad pro breakpoint*/
@media only screen and (max-width: 1025px) {
  .layer-fond-stand {
    width: 50vw;
    height: auto;
    top: auto;
    bottom: -25vh;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }

  .layer-cloud-line {
    height: 15vh;
  }

  .layer-logo-fff {
    width: 30vw;
    height: auto;
  }

  .layer-title {
    width: 100vw;
    left: 0;
    right: auto;
  }

  .layer-cloud-2 {
    width: 40vw;
    height: auto;
    top: 70vh;
    bottom: auto;
  }
  .layer-cloud-3 {
    width: 40vw;
    height: auto;
    top: 70vh;
    bottom: auto;
  }

  .layer-cloud-4 {
    width: 20vw;
    height: auto;
    top: 50vh;
    bottom: auto;
    left: 10vw;
    right: auto;
  }

  .layer-cloud-5 {
    width: 20vw;
    height: auto;
    top: 50vh;
    bottom: auto;
    left: auto;
    right: 10vw;
  }
}
</style>
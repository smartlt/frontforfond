<template>
  <div id="header-container">
    <div class="parallax-container">
      <div class="layer-1" data-type="parallax" data-depth="0.3"></div>
      <div class="layer-2" data-type="parallax" data-depth="1.0"></div>
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
        var vpheight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        console.log(vpheight);
        layer.style.height = (vpheight - pageYOffset - movement).toString() + 'px';
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
  z-index: -1;
}

.parallax-container {
  position: relative;
  height: 100vh;
  width: 100%;    
  overflow: hidden;
}

.layer-1 {
  background: url('../assets/1-BG-1.jpg');
  background-position: top center;
  background-size: 100vw auto;
  background-repeat: no-repeat;
  width: 100%;
  height: inherit;
  position: fixed;
  z-index: -1;
}

.layer-2 {
  background: url('../assets/1-cloud-line.png');
  background-position: bottom center;
  background-size: 100vw auto;
  background-repeat: no-repeat;
  width: 100%;
  height: inherit;
  position: fixed;
  z-index: -1;
}

</style>
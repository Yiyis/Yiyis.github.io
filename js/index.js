// ----------Logo Animation-------------
var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'data.json'
})
// ----------Name Animation-------------
var square = document.getElementsByClassName('square');

for(var i = 0; i<square.length; i++){
  square[i].addEventListener('mouseenter', function(){
    this.classList.add("rubberBand");
    this.addEventListener("animationend", function(){
      this.classList.remove("rubberBand");
    }, false);
  })
}
// ----------Particle Animation-------------
particlesJS("particles-js",
{"particles":
{"number":
{"value":200,"density":
{"enable":true,"value_area":1000}},
"color":{"value":"#ffffff"},
"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},
"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},
"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},
"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},
"line_linked":{
  "enable":false,
  "distance":150,
  "color":"#ffffff",
  "opacity":0.4,
  "width":0.5},
  "move":{
    "enable":true,
    "speed":1.5,
    "direction":"none",
    "random":true,
    "straight":false,
    "out_mode":"out",
    "bounce":false,
    "attract":{
      "enable":false,
      "rotateX":600,
      "rotateY":600}}},
      "interactivity":{
        "detect_on":
        "canvas",
        "events":{
          "onhover":{
            "enable":true,
            "mode":"repulse"},
            "onclick":{"enable":false,
            "mode":"repulse"},
            "resize":true},
            "modes":{
              "grab":{
                "distance":400,
                "line_linked":{
                  "opacity":1}},
                  "bubble":{
                    "distance":200,
                    "size":0,
                  "duration":2,
                  "opacity":0,
                  "speed":3},
                  "repulse":{
                    "distance":200,
                    "duration":0.4},
                    "push":{
                      "particles_nb":4},
                      "remove":{
                        "particles_nb":2}}},
                        "retina_detect":true});

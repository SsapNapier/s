var Vue = require('vue')
var hello = require("vue!./components/HeaderBar.vue")
var hello1 = require('vue!./components/SideBar.vue')

new Vue({
    el: 'body',
    components: {
        hello: hello
    }
})

new Vue({
    el: 'body',
    components: {
      hello1: hello1
    }
})

document.getElementById('menu').onclick = function(event) {
  var target = event.target;
  if (target.className == 'header-bar link') {
  var s = document.getElementsByClassName('header-bar');
  for(var i = 0; i < s.length; i++){
    s[i].classList.remove("active");
  }
  target.classList.add('active');
}
}

// COMO FUNCIONA
let controller_como_funciona = new ScrollMagic.Controller();
let timeline_como_funciona = new TimelineMax()
  .from('.como-funciona .anim-titulo', 1, {
    y: 200,
    opacity: 0
  })

  // anim-1
  .from('.como-funciona .anim-1', 1, {
    y: 200,
    opacity: 0
  })

  .from('.como-funciona .anim-1 .bloco-imagem', 3, {
    y: 200,
    opacity: 0,
  }, '-=0')
  // .to('.como-funciona .anim-1 .bloco-imagem', 1, {
  //   backgroundColor: 'black'
  // })

  .to('.como-funciona', 1, {
    opacity: 1,
  })

  .staggerFrom('.como-funciona .anim-1 .bloco-conteudo .pontos span', .5, {
    opacity: 0,
    scale: -1,
    ease: Elastic.easeOut,
  }, .1)



  // anim-2
  .from('.como-funciona .anim-2', 1, {
    y: 200,
    opacity: 0
  }, '-=1')

  .from('.como-funciona .anim-2 .bloco-imagem', 3, {
    y: 200,
    opacity: 0,
  }, '-=0')
  // .to('.como-funciona .anim-2 .bloco-imagem', 1, {
  //   backgroundColor: 'black'
  // })

  .to('.como-funciona', 1, {
    opacity: 1,
  })

  .staggerFrom('.como-funciona .anim-2 .bloco-conteudo .pontos span', .5, {
    opacity: 0,
    scale: -1,
    ease: Elastic.easeOut,
  }, .1)



  // anim-3
  .from('.como-funciona .anim-3', 1, {
    y: 200,
    opacity: 0
  }, '-=1')

  .from('.como-funciona .anim-3 .bloco-imagem', 3, {
    y: 200,
    opacity: 0,
  }, '-=0')
  // .to('.como-funciona .anim-3 .bloco-imagem', 1, {
  //   backgroundColor: 'black'
  // })

  .to('.como-funciona', 1, {
    opacity: 1,
  })

  .staggerFrom('.como-funciona .anim-3 .bloco-conteudo .pontos span', .5, {
    opacity: 0,
    scale: -1,
    ease: Elastic.easeOut,
  }, .1)



  // anim-4
  .from('.como-funciona .anim-4', 1, {
    y: 200,
    opacity: 0
  }, '-=1')

  .from('.como-funciona .anim-4 .bloco-imagem', 3, {
    y: 200,
    opacity: 0,
  }, '-=0')
  // .to('.como-funciona .anim-4 .bloco-imagem', 1, {
  //   backgroundColor: 'black'
  // })
  ;



var scene_como_funciona = new ScrollMagic.Scene({
    triggerElement: '.como-funciona',
    triggerHook: .3,
    duration: 1500,
    offset: 0
  })
  .setTween(timeline_como_funciona)
  // .addIndicators()
  .addTo(controller_como_funciona);







// VANTGAGENS
let controller_vantagens = new ScrollMagic.Controller();
let timeline_vantagens = new TimelineMax()
  .staggerFrom('.vantagens .vantagem', 1, {
    opacity: 0,
    y: 100,
  }, 1);

var scene_vantagens = new ScrollMagic.Scene({
    triggerElement: '.vantagens',
    // triggerHook: 0.3,
    duration: 200,
    // offset: -200
  })
  .setTween(timeline_vantagens)
  // .addIndicators()
  .addTo(controller_vantagens);






// MENU

let menu = ['home', 'como-funciona', 'vantagens', 'resgate'];

for (let index = 0; index < menu.length; index++) {
  const el = menu[index];
  let btn = document.getElementById(el);
  btn.onclick = function() {
    TweenMax.to(window, 1, {
      scrollTo: '.' + el
    });
  };
}



let controller_menu_home = new ScrollMagic.Controller();
let timeline_menu_home = new TimelineMax()
  .to('.menu #home', .1, {
    color: '#F7D54D'
  })
  .to('.menu #como-funciona', .1, {
    color: 'black'
  });

var scene_menu_home = new ScrollMagic.Scene({
    triggerElement: '.home',
  })
  .setTween(timeline_menu_home)
  // .addIndicators()
  .addTo(controller_menu_home);




let controller_menu_como_funciona = new ScrollMagic.Controller();
let timeline_menu_como_funciona = new TimelineMax()
  .to('.menu #home', .1, {
    color: 'black'
  })
  .to('.menu #como-funciona', .1, {
    color: '#F7D54D'
  });

var scene_menu_como_funciona = new ScrollMagic.Scene({
    triggerElement: '.como-funciona',
  })
  .setTween(timeline_menu_como_funciona)
  // .addIndicators()
  .addTo(controller_menu_como_funciona);




let controller_menu_vantagens = new ScrollMagic.Controller();
let timeline_menu_vantagens = new TimelineMax()
  .to('.menu #vantagens', 0.1, {
    color: '#F7D54D'
  }).to('.menu #como-funciona', 0.1, {
    color: 'black'
  });

var scene_menu_vantagens = new ScrollMagic.Scene({
    triggerElement: '.vantagens',
  })
  .setTween(timeline_menu_vantagens)
  // .addIndicators()
  .addTo(controller_menu_vantagens);





let controller_menu_resgate = new ScrollMagic.Controller();
let timeline_menu_resgate = new TimelineMax()
  .to('.menu #resgate', 0.1, {
    color: '#F7D54D'
  }).to('.menu #vantagens', 0.1, {
    color: 'black'
  });

var scene_menu_resgate = new ScrollMagic.Scene({
    triggerElement: '.resgate',
  })
  .setTween(timeline_menu_resgate)
  // .addIndicators()
  .addTo(controller_menu_resgate);

(function () {

  const data = [
    { query: 'body', tag: 'header', class: `header`, content: `<img class="left logo" src="./src/images/logo.svg" alt="logo image" /><i class="fa fa-bars mobile right selectable openModal"></i><nav class="selectable desktop"><ul class="flex-row right"><li>About</li><li>Careers</li><li>Events</li><li>Products</li><li>Support</li></ul></nav><br><h1 class="uppercase">Immersive experiences that deliver</h1>` },
    { query: 'body', tag: 'main', class: `main rel`, content: `<img class="mobile" src="./src/images/mobile/image-interactive.jpg" alt="interactive image" /><img class="desktop" src="./src/images/desktop/image-interactive.jpg" alt="interactive image" /><div class="wrapper"><h2 class="uppercase">The leader in interactive VR</h2><p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p></div><h2 class="uppercase">Our creations</h2><section class="grid-container"><span class="product-1 uppercase selectable">Deep earth</span><span class="product-2 uppercase selectable">Night arcade</span><span class="product-3 uppercase selectable">Soccer team VR</span><span class="product-4 uppercase selectable">The grid</span><span class="product-5 uppercase selectable">From up above VR</span><span class="product-6 uppercase selectable">Pocket borealis</span><span class="product-7 uppercase selectable">The curiosity</span><span class="product-8 uppercase selectable">Make it fisheye</span></section><button class="button primary selectable uppercase abs center">See all</button>` },
    { query: 'body', tag: 'footer', class: `footer center rel`, content: `<img class="logo" src="./src/images/logo.svg" alt="logo image" /><nav class="selectable"><ul class="center nav"><li>About</li><li>Careers</li><li>Events</li><li>Products</li><li>Support</li></ul><ul class="flex-row social"><li><i class="fa fa-facebook-square"></i></li><li><i class="fa fa-twitter"></i></li><li><i class="fa fa-pinterest"></i></li><li><i class="fa fa-instagram"></i></li></ul></nav><p class="copy">© 2021 Loopstudios. All rights reserved.</p>` },
    { query: 'body', tag: 'div', class: `attribution`, content: `Challenge by <a class="anchor" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a class="anchor" href="https://github.com/eserengo/" target="_blank">Federico Borzani</a>.` },
    { name: 'modal', query: 'body', tag: 'div', class: `modal mobile`, content: `<img class="left logo" src="./src/images/logo.svg" alt="logo image" /><i class="fa fa-times right selectable closeModal"></i><nav class="selectable"><ul class="flex-col"><li class="uppercase">About</li><li class="uppercase">Careers</li><li class="uppercase">Events</li><li class="uppercase">Products</li><li class="uppercase">Support</li></ul></nav>` },
  ];

  const createContent = () => {
    document.querySelector('body').classList.add('body');
    data.map(item => {
      if (Object.hasOwn(item, 'name')) {
        if (item.name == 'modal') { document.querySelector('.openModal').addEventListener('click', createModal) };
      } else {
        return document.querySelector(`.${item.query}`).insertAdjacentHTML('beforeend', `<${item.tag} class='${item.class}'>${item.content}<${item.tag}`);
      }
    });
  }

  const createModal = () => {
    data.filter(item => {
      if (Object.hasOwn(item, 'name')) {
        if (item.name == 'modal') {
          return document.querySelector(`.${item.query}`).insertAdjacentHTML('beforeend', `<${item.tag} class='${item.class}'>${item.content}<${item.tag}`);
        }
      }
    })
    document.querySelector('.closeModal').addEventListener('click', () => {
      document.querySelector('.modal').remove()
    });
  }
 
  const displayOnResize = () => {
    if (window.matchMedia("(width<=375px)").matches) {
      // RULES
      document.querySelectorAll('.desktop').forEach(item => {
        item.classList.add('hidden');
      })
      document.querySelectorAll('.mobile').forEach(item => {
        item.classList.remove('hidden');
      })
      document.querySelector('.footer').classList.add('flex-col');
      document.querySelector('.footer').classList.add('center');
      document.querySelector('.nav').classList.remove('flex-row');
      document.querySelector('.nav').classList.add('flex-col');
      document.querySelector('.footer').querySelectorAll('.logo, .nav, .social, .copy').forEach(item => {
        item.classList.remove('abs');
      })
      document.querySelector('.primary').classList.add('center');
    }
    if (window.matchMedia("(width>375px)").matches) {
      // RULES
      document.querySelectorAll('.mobile').forEach(item => {
        item.classList.add('hidden');
      })
      document.querySelectorAll('.desktop').forEach(item => {
        item.classList.remove('hidden');
      })
      document.querySelector('.footer').classList.remove('flex-col');
      document.querySelector('.footer').classList.remove('center');
      document.querySelector('.nav').classList.remove('flex-col');
      document.querySelector('.nav').classList.add('flex-row');
      document.querySelector('.footer').querySelectorAll('.logo, .nav, .social, .copy').forEach(item => {
        item.classList.add('abs');
      })
      if (document.querySelector('.modal') != null) { document.querySelector('.modal').remove() };
      document.querySelector('.primary').classList.remove('center');
    }
  }

  window.addEventListener('resize', () => {
    let timer;
    window.clearTimeout(timer);
    timer = window.setTimeout(displayOnResize(), 500);
  });

  window.addEventListener('DOMContentLoaded', () => {
    // FUNCTIONS
    createContent();
    displayOnResize();   // MUST BE THE LAST FUNCTION TO LOAD
  })
})();
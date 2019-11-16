import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["I don't drink alchool, I drink distilled spirits. <br> Therefore I am not an alcoolic, I am Spititual"],
    typeSpeed: 90,
    loop: false
  });
}

export { loadDynamicBannerText };

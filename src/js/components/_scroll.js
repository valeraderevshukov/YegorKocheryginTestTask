import { DOC, WIN } from '../_constants';
import { SCROLL_WIDTH } from '../_utils';
import smoothWheel from '../lib/_smoothWheel';
import { TimelineMax } from 'gsap';

DOC.ready(function() {
  const headerOverlay = $('.js-header-overlay');
  let timeOut;
  headerOverlay.css('right', SCROLL_WIDTH());
  WIN.resize(() => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      headerOverlay.css('right', SCROLL_WIDTH());
    }, 100);
  });

  const outInner = $('.js-out-inner');
  const outInnerHeight = outInner.outerHeight();
  
  const logosWrap = $('.js-logos-wrap');
  logosWrap.height(outInnerHeight);

  const container = $('.js-smooth-wheel');
  container.smoothWheel();

  const logoInner = $('.js-logos-inner');
  container.on('scroll', function() { 
    var top = container.scrollTop();
    logoInner.scrollTop(top);
  });

  const logoTimeLime = new TimelineMax({ paused: true });
  const headerTimeLime = new TimelineMax({ paused: true });
  const logoSmall = $('.js-logo-m');
  const staggerContainer = $('.js-logo-m-text');
  const menu = $('.js-menu');
  const menuBtn = $('.js-btn-menu');
  const logos = $('.js-logos');
  logoTimeLime
    .staggerTo(staggerContainer, 0.8, {
      x: 0,
      opacity: 1,
      ease: 'cubic-bezier(0.23, 1, 0.32, 1)'
    }, 0.1);

  headerTimeLime
    .to(logoSmall, 0.4, {
      y: 18,
      ease: Power0.easeNone
    }, 0)
    .to(headerOverlay, 0.4, {
      y: -30,
      ease: Power0.easeNone
    }, 0)
    .to(logos, 0.4, {
      y: -30,
      ease: Power0.easeNone
    }, 0)
    .to(menu, 0.4, {
      y: -15,
      ease: Power0.easeNone
    }, 0)
    .to(menuBtn, 0.4, {
      y: -13,
      ease: Power0.easeNone
    }, 0);

  const fullLogo = $('.js-full-logo');
  const fullLogoHeight = fullLogo.outerHeight();
  const fullLogoTop = fullLogo.offset().top - fullLogoHeight + 12;
  logoInner.on('scroll', function(e) { 
    const offsetTop = $(this).scrollTop();
    if (offsetTop >= fullLogoTop) {
      fullLogo.addClass('is-fixed');
      logoTimeLime.play();
      headerTimeLime.play();
    }
    else {
      fullLogo.removeClass('is-fixed');
      logoTimeLime.reverse();
      headerTimeLime.reverse();
    }
  });




});

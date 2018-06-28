import { DOC, WIN } from '../_constants';
import { SCROLL_WIDTH } from '../_utils';
import { TimelineMax } from 'gsap';

const logo = $('.js-logo');
const descrription = $('.js-logo-descrription');
const text = $('.js-logo-text');
const headerOverlay = $('.js-header-overlay');
const menu = $('.js-menu');
const menuBtn = $('.js-btn-menu');
const logoTimeLime = new TimelineMax({ paused: true });

logoTimeLime
  .to(descrription, 0.3, {
    opacity: 0,
    ease: 'cubic-bezier(0.23, 1, 0.32, 1)'
  }, 0)
  .to(headerOverlay, 0.4, {
    y: -30,
    ease: Power0.easeNone
  }, 0)
  .to(logo, 0.4, {
    y: -15,
    ease: Power0.easeNone
  }, 0)
  .to(menu, 0.4, {
    y: -15,
    ease: Power0.easeNone
  }, 0)
  .to(menuBtn, 0.4, {
    y: -13,
    ease: Power0.easeNone
  }, 0)
  .staggerTo(text, 0.8, {
    x: 0,
    opacity: 1,
    ease: 'cubic-bezier(0.23, 1, 0.32, 1)'
  }, 0.1)
  .eventCallback('onReverseComplete', () => {
    TweenMax.set([descrription, headerOverlay, logo, menu, menuBtn, text], { clearProps:'all' });
  });

WIN.on('scroll', function() { 
  let top = DOC.scrollTop();
  console.log(top);
  (top >= 1)
    ? logoTimeLime.play()
    : logoTimeLime.reverse();
});

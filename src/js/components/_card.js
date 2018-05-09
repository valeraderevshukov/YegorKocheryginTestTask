import { ACTIVE } from '../_constants';
import { TimelineMax } from 'gsap';

const toggleDuration = 0.20;
const TRANSPARENT = 'is-transparent';

$('.js-card').each((i, card) => {
  card = $(card);
  const toggle = card.find('.js-card-toggle');
  const toggleButton = card.find('.js-card-toggle-button');
  const overlay = card.find('.js-card-overlay');
  const title = card.find('.js-card-title');
  const subtitle = card.find('.js-card-subtitle');
  const cover = card.find('.js-card-cover');
  const control = card.find('.js-card-control');
  const thumb = card.find('.js-card-thumb');
  const progressDefault = card.find('.js-card-progress-default');
  const progressActive = card.find('.js-card-progress-active');

  const line = new TimelineMax({ paused: true })
    .addLabel('start')
    .to(toggle, toggleDuration, {
      x: 60,
      ease: Power1.easeOut
    }, 'start')
    .to(toggleButton, toggleDuration, {
      y: -115,
      ease: Power1.easeIn
    }, 'start')
    .addLabel('startSubtitle', '-=0.08')
    .addLabel('startTitle', '-=0.04')
    .addLabel('startOverlay', '+=0.05')
    .addLabel('startControls', '+=0.12')
    //show overlay
    .add(() => { 
      overlay.toggleClass(ACTIVE);
      toggleButton.toggleClass(TRANSPARENT);
    })
    .to(overlay, 0.45, {
      scale: 10
    }, 'startOverlay')
    //hide titles
    .to(subtitle, 0.15, {
      opacity: 0,
      y: 15,
      ease: Power1.easeIn
    }, 'startSubtitle')
    .to(title, 0.15, {
      opacity: 0,
      y: 15,
      ease: Power1.easeIn
    }, 'startTitle')
    //hide cover
    .to(cover, 0.35, {
      scale: 2,
      ease: Power1.easeIn
    }, 'startSubtitle')
    .to(cover, 0.25, {
      opacity: 0,
      ease: Power1.easeIn
    }, 'startSubtitle')
    //show controls and thumb
    .to([control, thumb], 0.2, {
      scale: 1,
      ease: Circ.easeOut
    }, 'startControls')
    //show progress
    .to(progressDefault, 0.2, {
      x: 0,
      ease: Power1.easeIn
    }, '-=0.07')
    .add(() => progressActive.toggleClass(ACTIVE))
    //show titles
    .add(() => {
      title
        .add(subtitle)
        .toggleClass(ACTIVE);
    })
    .staggerTo([title, subtitle], 0.25, {
      opacity: 1,
      y: 0,
      ease: Power2.easeOut
    }, 0.05, '+=0.1')
    .eventCallback('onReverseComplete', () => {
      toggleButton
        .add(control)
        .attr('disabled', false);
      toggleButton.removeClass(ACTIVE);
    })
    .eventCallback('onComplete', () => {
      toggleButton
        .add(control)
        .attr('disabled', false);
    });

  toggleButton.on('click', e => {
    e.preventDefault();

    toggleButton
      .add(control)
      .attr('disabled', true);

    if (toggleButton.hasClass(ACTIVE)) {
      line.reverse(0);
    } else {
      toggleButton.addClass(ACTIVE);
      line.play(0);
    }

    
  });
});

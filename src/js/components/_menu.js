import { BODY } from '../_constants';

const header = $('.js-header');
const btnMenu = $('.js-btn-menu');
const navigation = $('.js-navigation');
const openMenu = 'is-open-menu';

btnMenu.on('click', () => header.toggleClass(openMenu));

BODY.on('click', e => {
  if ($(e.target).closest(navigation).length || !header.hasClass(openMenu) || $(e.target).closest(btnMenu).length) return;
  header.removeClass(openMenu);
});

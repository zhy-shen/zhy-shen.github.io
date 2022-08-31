"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector('.header');
  const content = document.querySelector('.header-elements');
  const close = document.querySelector('.close');
  const ocean = document.querySelector('.ocean');
  const enter = document.querySelector('.enter');
  let last;
  let source;
  let active = false;

  document.getElementById('list').onclick = function(evt) {
    source = evt.srcElement;

    if (!content.classList.contains('panel-open')) {
      source.classList.add('active');
      let className = source.id;

      if (document.querySelector('.' + className + '.popout') !== null) {
        document.querySelector('.' + className + '.popout').classList.add('visible');
        content.classList.add('panel-open');
        close.classList.add('panel-open');
        ocean.classList.add('panel-open');
        header.style.background = source.getAttribute('data-color');
        active = true;
        last = source;
      }
    } else if (source.classList.contains('active')) {
      source.classList.remove('active');
      let className = source.id;
      header.style.background = '#4285f4';
      document.querySelector('.' + className + '.popout').classList.remove('visible');
      content.classList.remove('panel-open');
      close.classList.remove('panel-open');
      ocean.classList.remove('panel-open');
      active = false;
    } else if ((source.tagName == 'LI' || source.tagName == 'UL' || source.classList.contains('header-inner')) && active) {
      last.classList.remove('active');
      let className = last.id;
      header.style.background = '#4285f4';
      document.querySelector('.' + className + '.popout').classList.remove('visible');
      content.classList.remove('panel-open');
      close.classList.remove('panel-open');
      ocean.classList.remove('panel-open');
      active = false;
    } else if (source.tagName == 'A') {
      last.classList.remove('active');
      source.classList.add('active');
      header.style.background = source.getAttribute('data-color');
      document.querySelector('.' + last.id + '.popout').classList.remove('visible');
      document.querySelector('.' + source.id + '.popout').classList.add('visible');
      last = source;
    }
  };

  close.onclick = function(evt) {
    if (active) {
      last.classList.remove('active');
      let className = last.id;
      header.style.background = '#4285f4';
      document.querySelector('.' + className + '.popout').classList.remove('visible');
      content.classList.remove('panel-open');
      close.classList.remove('panel-open');
      ocean.classList.remove('panel-open');
    }
  };

  enter.onclick = function(evt) {
    document.querySelector('.warning').classList.toggle('inactive');
  };
});

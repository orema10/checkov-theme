'use strict';

var elHeader = document.querySelector('header');
if(elHeader) {
    window.onscroll = function() {
        if(window.scrollY === 0) {
            elHeader.style.backgroundColor = 'transparent';
        } else {
            elHeader.style.backgroundColor = '#fff';
        }
    }
}
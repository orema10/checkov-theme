'use strict';
console.log('Script Loaded!');

var elDropdowns = document.querySelectorAll('nav .dropdown');
if(elDropdowns.length > 0) {
    elDropdowns.forEach(function(dropdown) {
        var elDropdownContent = dropdown.querySelector('.dropdown-content');
        if(dropdown.querySelector('.current')) {
            elDropdownContent.style.height = 'auto';
            dropdown.classList.add('open');
        }
        dropdown.querySelector('.dropdown-title').addEventListener('click', function(e) {
            e.preventDefault();
            if(dropdown.classList.contains('open')) {
                elDropdownContent.style.height = 0 + 'px';
                dropdown.classList.remove('open');
            } else {
                var currHeight = elDropdownContent.querySelector('.dropdown-content-container').offsetHeight;
                elDropdownContent.style.height = currHeight + 'px';
                dropdown.classList.add('open');
            }
        })
    })
}
'use strict'

const $profile = document.querySelectorAll('.profile')
const $details = document.getElementById('details')
const $close = document.getElementById('close')

/**
 * Change class details
 * @returns {void}
 */
function toggleDetails() {
    $details.classList.toggle('active')
}

$close.addEventListener('click', toggleDetails)

Array.prototype.forEach.call($profile, function (element) {
    element.addEventListener('click', toggleDetails)
})
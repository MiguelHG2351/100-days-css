const $uploadFile = document.getElementById('upload-file')
const $content = document.getElementById('content-upload')
const $filename = document.getElementById('filename')
const $inputFile = document.getElementById('input-file')
const $btnUpload = document.getElementById('btn-upload')

$inputFile.addEventListener('change', function (event) {
    try {
        const filename = event.currentTarget.files[0].name
        $filename.textContent = filename
        $content.classList.add('active-fileName')
        $content.classList.remove('is-draggable')
    } catch(err) {
        console.log('._.XD')
    }

})

function changeBackgroundDrag(e) {
    e.preventDefault();
	e.stopPropagation();
    $content.classList.toggle('is-draggable')
    console.log(e)
}

$inputFile.addEventListener('dragenter', changeBackgroundDrag)
$inputFile.addEventListener('dragleave', changeBackgroundDrag)
$inputFile.addEventListener('drop', event => {
    try {
        const filename = event.dataTransfer.files[0].name
        $filename.textContent = filename
        $content.classList.add('active-fileName')
    } catch(err) {
        console.log('._.XD')
    }
})

$btnUpload.addEventListener('click', () => {
    $content.classList.remove('active-image')
    $content.classList.remove('active-fileName')
    $content.classList.add('submit-file')
    $uploadFile.style.border = 'none'
})

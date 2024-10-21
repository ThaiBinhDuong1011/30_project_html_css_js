const uploadImage = document.getElementById('upload-image')
const preview = document.querySelector('.preview')

uploadImage.addEventListener('change', function () {
    const file = this.files[0]

    if (!file) return
    
    const img = document.createElement('img')
    img.src = URL.createObjectURL(file)

    preview.appendChild(img)
})
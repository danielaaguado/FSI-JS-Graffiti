
// Select some elements...
/* 1. define and select header */
var header = document.querySelector('#page-header')

/* 2. update the header's style */
header.style.textAlign = 'left'
header.style.color = 'white'
header.style.backgroundColor = 'purple'


/* 3. define and select multiple elements (dog images) */
var dogImages = document.querySelectorAll('.dog-image')

/* 4. modify the multiple elements (dog images) */
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
    dogImages[i].style.transform = 'scaleX(-1)'
}

/* 5.a define and select multiple elments (dog names)
       modify the multiple elements (dog names) */
var dogName = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogName.length; i++){
    dogName[i].style.color = 'purple'
}

/* 5.b define and select multiple elments (dog description)
       modify the multiple elements (dog description) */
var dogDescription = document.querySelectorAll('.dog-description')
for(let i = 0; i < dogDescription.length; i++){
    dogDescription[i].style.color = 'purple'
    dogDescription[i].style.textAlign = 'justify'
}

/* 5.c define and select footer
        apply styling to the footer */
var footer = document.querySelector('.footer')
footer.style.textAlign = 'left'
footer.style.backgroundColor = 'purple'
footer.style.color = 'white'
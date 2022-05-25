const GALLERY_API = 'https://jsonplaceholder.typicode.com/albums/';
const ALBUM_API = 'https://jsonplaceholder.typicode.com/photos?albumId=';
const STORAGE_KEY = 'galleryList';
const ALBUM_CLASS = 'list_elements';
const PHOTO_CLASS = 'photo_elements';
const ONE_GALLERY = 'album_link';

const galleruListEl = document.querySelector('.gallery_list');
const listTemplate = document.querySelector('.gallery_template').innerHTML;
const albumTemplate = document.querySelector('.album_template').innerHTML;
const albumEl = document.querySelector('.photo_block');

let galleryList = {};
let photoList = {};

document.addEventListener('click', onGalleryListClick);

init();

function init() {
    fetchList();

    fetch(ALBUM_API + 1)
    .then((res) => res.json())
    .then((data) => {
        photoList = data;
        addPhoto();
        renderPhotoList();        
    })
}

function fetchList() {
        fetch(GALLERY_API)
        .then((res) => res.json())
        .then((data) => {
            galleryList = data;
            renderList();        
    })
}

function addListEL(list) {
    const newElementHtml = generateGalleryHtml(list);
    galleruListEl.insertAdjacentHTML('beforeend', newElementHtml);

    renderList();
}

function generateGalleryHtml(list) {
    return listTemplate.replace('{{id}}', list.id)
        .replace('{{title}}', list.title);
}

function renderList() {
    galleruListEl.innerHTML = galleryList.map(generateGalleryHtml).join('\n');
}

function getGalleryID(el) {
    return +el.closest('.' + ALBUM_CLASS).dataset.id;
}

function onGalleryListClick(e) {
    const id = getGalleryID(e.target);

    if (e.target.classList.contains(ONE_GALLERY)) {
            fetch(ALBUM_API + id)
            .then((res) => res.json())
            .then((data) => {
                photoList = data;
                addPhoto();
                renderPhotoList();        
            })
        e.preventDefault();
    }
}

function addPhoto() {
    const photo = {};

    photoList.forEach((inp) => {
        photo[inp.name] = inp.value;
    });

    return photo;
}

function generateAlbumHtml(photo) {
    return albumTemplate.replace('{{id}}', photo.id)
        .replace('{{title}}', photo.title)
        .replace('{{source}}', photo.thumbnailUrl);
}

function renderPhotoList() {
    albumEl.innerHTML = photoList.map(generateAlbumHtml).join('\n');
}
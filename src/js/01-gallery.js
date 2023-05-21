// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallaryContainer = document.querySelector('.gallery'); 

const images = galleryItems.map(({preview, original, description}) => ` 
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>`).join(''); 
 
gallaryContainer.insertAdjacentHTML('beforeend', images);  
 
const gallaryLightboxContainer = new SimpleLightbox('.gallery a', { 
  captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 
});

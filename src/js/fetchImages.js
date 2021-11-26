import axios from 'axios';
export { fetchImages, firstPage };

    
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = `24425918-1c58292ec38f4df582c31de2d`;
export const RENDER_IMAGES_NUMBERS = 40
let page = 1;
export let imagesCount = 0;

async function fetchImages(pictureName) {
  const FULL_URL =
    `${BASE_URL}?key=${API_KEY}&q=${pictureName}
    &image_type=photo&orientation=horizontal&safesearch=true&page=${page}
    &per_page=${RENDER_IMAGES_NUMBERS}`;
  
  try {
    const images = await axios.get(FULL_URL);
    page += 1;
    // console.log(images);
    
    imagesCount += images.data.hits.length

    return await images;  
  }
  catch (error) {
    console.log(error);
  }
}

function firstPage() {
  page = 1;
}

// async function fetchImages(pictureName) {
//   try {
//     const response = await axios.get(
//       `${BASE_URL}?key=${API_KEY}&q=${pictureName}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`,
//     );
//     // page += 1;
//     //     return await response;
//   }
//   catch (error) {
//     console.log(error);
//   }
// }


// var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
// $.getJSON(URL, function(data){
// if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
// else
//     console.log('No hits');
// });

// Ваш ключ API: 24425918-1c58292ec38f4df582c31de2d
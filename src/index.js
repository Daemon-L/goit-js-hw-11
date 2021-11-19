import './css/styles.css';
import debounce from 'lodash.debounce';
import axios from 'axios';
import Notiflix from 'notiflix';

import {fetchImages} from "./js/fetchImages";

// const DEBOUNCE_DELAY = 300;

// const refs = {
//     countryInput: document.querySelector("#search-box"),
//     countryList: document.querySelector('.country-list'),
//     countryInfo: document.querySelector('.country-info'),
// }


// Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
// Notiflix.Notify.failure("Oops, there is no country with that name");
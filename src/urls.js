import {API_KEY, base_url} from './constants/constants'

export const netflix_originals = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`
export const action = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
export const comedy = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
export const Horror = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
export const romance = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const documentry = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`
export const trending = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
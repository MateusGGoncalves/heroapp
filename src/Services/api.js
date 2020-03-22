import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/2122356974522136'
})
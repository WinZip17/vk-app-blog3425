import * as axios from "axios-jsonp-pro";

const token= "7f129085d2f372833fcc5e2116e4d0a4"
const instance = axios.create({
    baseURL: 'https://kodikapi.com/'
});

export const API = {
    getMovieList(sort = 'updated_at', order = 'desc', types = 'foreign-movie',  camrip = true,  year,  genres = null){
        let limit = 33;
        if (camrip === true) {camrip=""};
        let genresUrl = `&genres=${genres}`;
        if (genres === null) {genresUrl=""};
        return instance.get(`list?token=${token}&limit=${limit}&sort=${sort}&order=${order}&types=${types}&camrip=${camrip}${genresUrl}&with_material_data=true&with_page_links=true`)
            .then(response => {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    searchMovie(title){
        return instance.get(`search?token=${token}&title=${title}&with_material_data=true&with_page_links=true`)
            .then(response => {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    AddMovieList(url){
        return axios.get(`${url}&with_material_data=true&with_page_links=true`)
            .then(response => {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};

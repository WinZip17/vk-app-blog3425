import * as axios from "axios-jsonp-pro";

const token= "b36e2c01d03db7050e348d03d32f10a7"
const instance = axios.create({
    baseURL: 'https://moonwalk.cc/api/'
});

export const API = {
    getNewFilms1() {
        return instance.get(`serials_foreign.json?api_token=${token}`)
            .then(response => {
                debugger
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                debugger
                console.log(error);
            });
    },
    // getNewFilms2() {
    //     return fetch( "../db/serials_russian")
    //         .then(function (response) {
    //             debugger
    //             return response.json();
    //         })
    //         .then(function (data) {
    //             debugger
    //             if (data) {
    //
    //             } else {
    //                 // proccess server errors
    //             }
    //         })
    //         .catch(function (error) {
    //             debugger
    //             // proccess network errors
    //         });
    // },
    getNewFilms(type) {

        return fetch(`/db/${type}.json`, {headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }})
            .then((response) => response.json())
    },
    getToken() {
        return instance.get(`token`)
            .then(response => {
                return response.data.token;
            })
    },
    // postUsers(data, setIsVisible, resetList, getUsers, token, accountSaveSuccess, updatePhoto) {
    //
    //     let formData = new FormData();
    //     formData.append('position_id', data.position);
    //     formData.append('name', data.name);
    //     formData.append('email', data.email);
    //     formData.append('phone', data.phone);
    //     formData.append('photo', data.photo[0]);
    //
    //     fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
    //         method: 'POST',
    //         body: formData,
    //         headers: {
    //             'Token': token, // get token with GET api/v1/token method
    //         },
    //     })
    //         .then(function (response) {
    //             return response.json();
    //         })
    //         .then(function (data) {
    //             if (data.success) {
    //                 RegistResult(setIsVisible, resetList, getUsers, accountSaveSuccess, updatePhoto)
    //             } else {
    //                 // proccess server errors
    //             }
    //         })
    //         .catch(function (error) {
    //             // proccess network errors
    //         });
    //
    // }
};

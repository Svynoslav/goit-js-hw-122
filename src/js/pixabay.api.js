'use strict';

import axios from 'axios';

// async function fetchData(url, params) {
//     const response = await fetch(`${url}?${params}`)
//     if(!response.ok) {
//         throw new Error(response.statusText);
//     }
//     return await response.json();
// }

async function fetchData(url, params) {
    const { data } = await axios(url, { params });
    return data;
}

// gpt
// async function fetchData(url, params) {
//     try {
//         const response = await axios.get(url, { params });
//         return response.data;
//     } catch (err) {
//         alert(err.message);
//     }
// }

export { fetchData };



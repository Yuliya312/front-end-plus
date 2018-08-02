function load(URL) {

    return fetch(URL, method)
        .then(response => {
            return response.json();
        })
} 

module.exports = {
    load
};


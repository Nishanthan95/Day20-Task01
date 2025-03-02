document.getElementById('fetch-cat').addEventListener('click', fetchRandomCat);

function fetchRandomCat() {
    const statusCodes = [100, 101, 102, 200, 201, 202, 203, 204, 205, 206, 300, 301, 
                        302, 303, 304, 305, 307, 400, 401, 402, 403, 404, 405, 406, 
                        407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 
                        422, 423, 424, 425, 426, 429, 431, 444, 450, 451, 500, 501, 
                        502, 503, 504, 505, 506, 507, 508, 509, 510, 511];
    const randomIndex = Math.floor(Math.random() * statusCodes.length);
    const randomStatusCode = statusCodes[randomIndex];

    displayCatInfo(randomStatusCode);
}

function displayCatInfo(statusCode) {
    const catInfo = document.getElementById('cat-info');
    catInfo.innerHTML = `
        <img src="https://http.cat/${statusCode}" alt="HTTP Status Cat">
        <p>HTTP Status Code: ${statusCode}</p>
    `;
}

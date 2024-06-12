const accessKey = 'beQ9UQM9cmUCj6MZhVIfd4iiPvnHSEfR9MPQeyLhGUE';
let currentPage = 1;
let totalPages = 0;
let currentImages = [];


async function fetchImages(page = 1) {
    try {
        const apiUrl = `https://api.unsplash.com/search/photos?query=fashion%20model&per_page=15&page=${page}&client_id=${accessKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        currentImages = data.results;
        totalPages = data.total_pages;
        renderImages();
    } catch (error) {
        console.error('Erro ao buscar imagens:', error);
    }
}


function renderImages() {
    const productContainer = document.getElementById('product-container');

   
    if (productContainer) {
        productContainer.innerHTML = '';

        currentImages.forEach((result, index) => {
            const productDiv = document.createElement('div');
            productDiv.className = 'produto';

            const productImg = document.createElement('img');
            productImg.src = result.urls.regular;
            productImg.alt = `Produto ${index + 1}`;

            const productTitle = document.createElement('h2');
            productTitle.textContent = (generateProductName(result.alt_description) || 'Nome do Produto');

            const productPrice = document.createElement('p');
            productPrice.textContent = `R$ ${generateRandomPrice()}`;

            productDiv.appendChild(productImg);
            productDiv.appendChild(productTitle);
            productDiv.appendChild(productPrice);

            productContainer.appendChild(productDiv);
        });
    } else {
        console.error('Elemento productContainer não encontrado.');
    }
}

function generateProductName(description) {
    const cleanDescription = description.replace(/(?:woman|man)\s?in\s/i, '');
        const translationMap = {
            'dress': 'vestido',
            'shirt': 'camisa',
            'pants': 'calça',
            'shoes': 'sapatos',
            'jacket': 'jaqueta',
            // Adicione mais traduções conforme necessário
        };
    const translatedDescription = translationMap[cleanDescription.toLowerCase()] || cleanDescription;

    return translatedDescription;
}

function generateRandomPrice() {
    return (Math.random() * (1000 - 100) + 10).toFixed(2);
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        fetchImages(currentPage);
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        fetchImages(currentPage);
    }
}

fetchImages();

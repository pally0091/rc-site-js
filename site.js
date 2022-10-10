const list = ('./db.json');

const items = 
    fetch(list)
        .then(res => res.json())
        .then(data => loadProducts(data))

const loadProducts = products => {
    const productContainer = document.getElementById("products")
            
    productContainer.innerHTML='';
    products.forEach(product => {
        console.log(product)
     
        const productBox =document.createElement('div');
        
        productBox.classList.add('box')
        productBox.innerHTML = `
            <div>
                <img src="${product.pimage}"
                <div>
                    <h3 class="text-xl text-red-800">${product.name}</h3>
                    <p class="text-justify p-2">${product.details}</p>
                    <p>Price : ${product.price}</p>
                </div>
            </div>
        `
        productContainer.appendChild(productBox)
    });
}


const data = fetch("http://localhost:3000/products")
.then(response =>{
	if (!response.ok){
		throw new Error("Network response was not ok " + response.statusText);
		
	}
	return response.json();
})
.then(data => {
	const container = document.getElementById("product-list");
	container.innerHTML = data
	.map(
		(product, index) => `
		<div class="product col-lg-4 col-md-6 mb-4">
		<div class="card h-100">
			<a href="#"
				><img
					class="card-img-top"
					src=${product.image}
					alt="عنوان محصول"
			/></a>
			<div class="card-body">
				<h4 class="card-title">
				${product.title}
				</h4>
				<h5 class="product-price">${Number(product.price).toLocaleString("en-US")} تومان</h5>
				<p class="card-text">
				    ${product.description}
				</p>
			</div>
			<div class="card-footer">
				<button class="btn btn-light add-to-cart" data-product-id="${product.id}">
					افزودن به سبد خرید
				</button>
			</div>
		</div>
	</div>
		`
	)
	.join("")
	console.log("fetched data:", data)
})
.catch(error =>{
	console.error("fetch error:", error);
});



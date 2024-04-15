function filterProduct(value) {
    let products = document.querySelectorAll('.pro');

    products.forEach(product => {
        if(value === 'all') {
            product.style.display = 'block';
        }else{
            if(product.classList.contains(value)) {
                product.style.display = 'block';
            }else {
                product.style.display = 'none';
            }
        }
    })

}

document.getElementById('searchButton').addEventListener('click', () => {
  let searchInput = document.getElementById("searchInput").value.trim().toLowerCase();
  let products = document.querySelectorAll(".pro");
  let found = false;

  products.forEach(product => {
    let productName = product.querySelector('h5').textContent.toLowerCase();
    if (productName.includes(searchInput)) {
      product.style.display = 'block';
      found = true;
    } else {
      product.style.display = 'none';
    }
  });

  let searchMessage = document.getElementById('searchMessage');
  if (!found) {
    searchMessage.textContent = alert('No search results found.');
    searchMessage.style.display = 'block';
  } else {
    searchMessage.style.display = 'none';
      // Clear the search input
    //document.getElementById("searchInput").value = '';
  }

});

/* Single product clicked to toggle outlayed images */

let MainImg = document.getElementById("MainImg");
let smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function() {
  MainImg.src = smallImg[0].src;
}

smallImg[1].onclick = function() {
  MainImg.src = smallImg[1].src;
}

smallImg[2].onclick = function() {
  MainImg.src = smallImg[2].src;
}

smallImg[3].onclick = function() {
  MainImg.src = smallImg[3].src;
}
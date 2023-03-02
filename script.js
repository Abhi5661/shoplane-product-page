var productData = {
  id: "1",
  name: "Men Navy Blue Solid Sweatshirt",
  preview:
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  photos: [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",

    "undefined",
  ],
  description:
    "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  size: [1, 1, 0, 1, 0],
  isAccessory: false,
  brand: "United Colors of Benetton",
  price: 2599,
};

const leftContainer = document.querySelector(".leftContainer");
const productDetails = document.querySelector(".productDetails");
const photos = document.querySelector(".photos");

function productPage(productData) {
  let previewImg = document.createElement("img");
  previewImg.classList.add("previewImg");
  previewImg.src = productData.preview;
  leftContainer.append(previewImg);

  let productName = document.createElement("h1");
  productName.classList.add("productName");
  productName.innerHTML = productData.name;
  productDetails.append(productName);

  let brandName = document.createElement("h2");
  // brandName.classList.add("brandName");
  brandName.innerHTML = productData.brand;
  productDetails.append(brandName);

  let productPrice = document.createElement("h2");
  productPrice.innerHTML = "Price: Rs ";
  productDetails.append(productPrice);

  let priceValue = document.createElement("span");
  priceValue.classList.add("span");
  priceValue.innerHTML = `${productData.price}`;
  productPrice.append(priceValue);

  let description = document.createElement("h2");
  description.innerHTML = "Description";
  productDetails.append(description);

  let productDescription = document.createElement("h3");
  productDescription.classList.add("description");
  productDescription.innerHTML = productData.description;
  productDetails.append(productDescription);

  let productPreview = document.createElement("h2");
  productPreview.innerHTML = "Product Preview ";
  productDetails.append(productPreview);

  productDetails.append(photos);

  let pics = productData.photos;
  for (let i = 0; i < pics.length; i++) {
    let photo = document.createElement("img");
    photo.classList.add("photo" + i);
    photo.src = pics[i];
    photos.append(photo);

    if (i == 0) {
      photo.classList.add("active");
    }

    photos.addEventListener("click", (e) => {
      let targetSrc = e.target.getAttribute("src");
      previewImg.setAttribute("src", targetSrc);
      // previewImg.src = targetSrc;  --> LIne 73 and 74 both having same meaning.

      let activeImg = document.querySelector(".active");
      activeImg.classList.remove("active");
      e.target.classList.add("active");
    });
  }

  // let photo1 = document.createElement("img");
  // photo1.classList.add("photo");
  // photo1.classList.add("active");
  // photo1.src = productData.photos[0];
  // photos.append(photo1);

  // let photo2 = document.createElement("img");
  // photo2.classList.add("photo");
  // photo2.src = productData.photos[1];
  // photos.append(photo2);

  // let photo3 = document.createElement("img");
  // photo3.classList.add("photo");
  // photo3.src = productData.photos[2];
  // photos.append(photo3);

  // let photo4 = document.createElement("img");
  // photo4.classList.add("photo");
  // photo4.src = productData.photos[3];
  // photos.append(photo4);

  // let photo5 = document.createElement("img");
  // photo5.classList.add("photo");
  // photo5.src = productData.photos[4];
  // photos.append(photo5);

  // let photo6 = document.createElement("img");
  // photo6.classList.add("photo");
  // photo6.src = productData.photos[5];
  // photos.append(photo6);

  let button = document.createElement("button");
  button.classList.add("btn");
  button.innerHTML = "Add to Cart";
  productDetails.append(button);
}

console.log(productPage(productData));

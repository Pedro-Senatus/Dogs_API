const randomDog = async () =>{

    const url = 'https://dog.ceo/api/breeds/image/random'
    const fetchDog = await fetch(url)
    const data = await fetchDog.json()
    const dogImgUrl = data.message;

    const dogImg = document.querySelector("#dogImg");
    const dogBreed = document.querySelector("#dogBreed")

    const breed = dogImgUrl.split("/")[4].toUpperCase().replace("-" , " ");

    dogBreed.innerText = breed
    dogImg.src = dogImgUrl
    
}

const dogButton = document.querySelector('#buttonRandom')
dogButton.addEventListener("click", randomDog)



export default async function getData() {
    let result = await fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => data.results)
    return result;
}




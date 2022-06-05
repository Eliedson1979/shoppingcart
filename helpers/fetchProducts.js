const fetchProducts = async (endpoint) => {
  // seu código aqui
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${endpoint}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
//fetchProducts('endpoint').then((data) => console.log(data));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

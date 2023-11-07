async function getData(request) {
    // Récupération des données provenant du back-end pour les catégories
    const response = await fetch(request);
    // const datas = await response.json();
    const datas= response.json()
    return datas;
};

export default getData
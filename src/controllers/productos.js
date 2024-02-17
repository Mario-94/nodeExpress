const { productosModule } = require("../models")
const { handleError } = require("../utils/handleError")


const getItems = async (req, res) => {


    try {
        /* NOTE: en este caso no utilizare matchedData, ya que no quiero que valide que me envie offSet y limit, debido a que no es necesario que me mande estos parametros
         req = matchedData(req)
         console.log(req); */
        /* NOTE:
        page =el número de la página que me solicita
        perPage =la cantidad de elementos a mostrar 
        offSet= la cantidad de elementos que se deben saltar antes de mostrar la pagina solicidada (ejemplo, si la página 3 muetra 10 elementos por página, offset sería 20)*/
        const page = parseInt(req.query.page);//request
        const perPage = parseInt(req.query.perPage);//request

        // calculamos los elementos a saltar por pagina
        const offSet = (page - 1) * perPage;
        // Obtener el total de productos y calcular el número de páginas
        const totalProducts = await productosModule.countDocuments();
        const totalPages = Math.ceil(totalProducts / perPage);

        // Calcular la URL de la página siguiente
        const nextPage = offSet + perPage < totalProducts
            ? `${req.protocol}://${req.get('host')}${req.originalUrl.split('?')[0]}?page=${page + 1}&perPage=${perPage}`
            : null;

        // Calcular la URL de la página anterior
        const prevPage = offSet > 0
            ? `${req.protocol}://${req.get('host')}${req.originalUrl.split('?')[0]}?page=${Math.max(page - 1, 0)}&perPage=${perPage}`
            : null;

        // Obtener los datos de la página actual
        const data = await productosModule.find({}).skip(offSet).limit(perPage);

        // Enviar la respuesta
        res.send({
            info: {
                page,
                count: totalProducts,
                totalPages,
                perPage,
                nextPage,
                prevPage

            },
            data
        });

    } catch (error) {
        console.log(error);
        handleError(res, "ERROR_GET_ITEMS_PRODUCTS")
    }
}
const getItem = async (req, res) => {
    try {
        const data = await productosModule.findById(id)
        res.send({ data })
    } catch (error) {
        handleError(req, "ERROR_GET_ITEM_PRODUCTS")
    }
}
const createItem = (req, res) => {
    const { body } = req
    console.log(body);
    res.send({ algo: "NO PODEMOS CREAR" })

}
const updateItem = (req, res) => {
    res.send({ message: "no podemos actualizar los datos" })
}
const deleteItem = (req, res) => {

    res.send({ message: "no podemos eliminar registros" })
}
module.exports = { getItems, getItem, createItem, updateItem, deleteItem }
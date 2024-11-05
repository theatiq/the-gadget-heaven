// import { toast } from "react-toastify"

const getAllCarts = () => {
    const all = localStorage.getItem("carts")

    if (all) {
        const carts = JSON.parse(all)
        return carts
    } else {
        return []
    }
}



const addCarts = (gadget) => {
    const carts = getAllCarts()
    const isExist = carts.find(item => item.product_id === gadget.product_id)
    if (isExist) { return alert("Gadget Already exists") }
    carts.push(gadget)
    localStorage.setItem('carts', JSON.stringify(carts))
    alert("Successfully added ")
}


// const removeFavorite = (id) => {
//     const favorites = getAllFavorites()
//     const remaining = favorites.filter(coffee => coffee.id != id)
//     localStorage.setItem("favorites", JSON.stringify(remaining))
//     toast.success("Successfully Removed")
// }


// export { getAllFavorites, addFavorite, removeFavorite }
export { getAllCarts, addCarts }
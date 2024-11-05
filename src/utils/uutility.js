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


const removeCart = (id) => {
    const carts = getAllCarts()
    const remaining = carts.filter(gadget => gadget.product_id != id)
    localStorage.setItem("carts", JSON.stringify(remaining))
    alert("Successfully Removed")
}


// export { getAllFavorites, addFavorite, removeFavorite }
export { getAllCarts, addCarts, removeCart }
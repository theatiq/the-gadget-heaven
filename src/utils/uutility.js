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

// Wishlists

const getAllWishes = () => {
    const all = localStorage.getItem("wish")

    if (all) {
        const wish = JSON.parse(all)
        return wish
    } else {
        return []
    }
}

const addWishes = (gadget) => {
    const wish = getAllWishes()
    const isExist = wish.find(item => item.product_id === gadget.product_id)
    if (isExist) { return alert("Gadget Already exists") }
    wish.push(gadget)
    localStorage.setItem('wish', JSON.stringify(wish))
    alert("Successfully added ")
}

const removeWish = (id) => {
    const wish = getAllWishes()
    const remaining = wish.filter(gadget => gadget.product_id != id)
    localStorage.setItem("wish", JSON.stringify(remaining))
    alert("Successfully Removed")
}





// export { getAllFavorites, addFavorite, removeFavorite }
export { getAllCarts, addCarts, removeCart, removeWish, addWishes, getAllWishes }
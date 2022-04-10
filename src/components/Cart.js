import { useContext } from "react"
import { CartContext } from "./CartContext"
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom"


const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useContext(CartContext)

    if(cart.length === 0) {
      return <div>
        <h2>Tu carrito esta vacio</h2>
        <hr/>
        <h5>Vuelve al shop para comprar</h5>
        <Link to={"/"} className="btn btn-primary">Volver</Link>
      </div>
    }

   return(
    <div className="container my-5">
      <h2> Tu compra</h2>
      <hr/>
      {
        cart.map((item) => (
          <div key={item.id}>
          <h4>{item.nombre}</h4>
          <p>Cantidad: {item.contador}</p>
          <h5> Precio: ${item.precio * item.contador}</h5>
          <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
            <BsFillTrashFill/></button> 
          <hr/>
           </div>
        ))
      }
       <h3>Total: ${cartTotal()}</h3>
       <hr/>
       <button className="btn btn-danger" onClick={emptyCart}>Vaciar carrito</button>
       
</div>
    )
}

export default Cart
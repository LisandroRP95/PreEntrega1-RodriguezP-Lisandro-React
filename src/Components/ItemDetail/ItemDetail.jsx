import { useState, useContext } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext/CartContext";


const ItemDetail = ({ producto }) => {

  const [cart, setCart] = useState(false)

  const {agregarCarrito} = useContext(CartContext)

  const onAdd = (counter) => {
    
    setCart(true)
    
    agregarCarrito(producto, counter)

  }

  return (
    <div>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={producto.imagen} />
            <Card.Body>
              <Card.Title>
                {producto.id} {producto.nombre}
              </Card.Title>
              <Card.Text>${producto.precio}</Card.Text>
              <Card.Text>Categoria: {producto.categoria}</Card.Text>
              <Card.Text>Stock: {producto.stock}</Card.Text>
              <Card.Text>Descripción: {producto.descripcion}</Card.Text>
            </Card.Body>
          </Card>

        {cart ? <Link to={'/cart'}>Ir al carrito</Link> : <ItemCounter initial={1} stock={producto.stock} onAdd={onAdd} /> }

      
    </div>
  );
};

export default ItemDetail;

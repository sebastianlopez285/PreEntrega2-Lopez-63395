import Item from "./Item"; // Importa el componente Item

const ItemList = ({ products }) => {
    return (
        <div className="itemlist">
            { /* Mapeamos los productos y renderizamos un componente Item para cada uno */}
            {products.map((product) => (
                <Item product={product} key={product.id} />
            ))}
        </div>
    );
};

export default ItemList;

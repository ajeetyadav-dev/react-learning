function ProductCard(props){
    return(
        <div className="Card">
            <h2>{props.name}</h2>
            <p>{props.price}</p>
        </div>
    );
}
export default ProductCard;
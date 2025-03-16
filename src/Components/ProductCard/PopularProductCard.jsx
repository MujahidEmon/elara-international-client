const PopularProductCard = ({ product }) => {
  const { name, image, price } = product;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Movie"
          className="h-44 rounded-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Grab The Offer </p>
        <p className="font-medium">Price: {price} Taka</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard;

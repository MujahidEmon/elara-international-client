

const ProductCard = ({ product }) => {
  const { name, image } = product;
  return (
    <div className="card bg-base-100 p-7 w-96 shadow-sm hover:shadow-2xl">
      <figure>
        <img
          src={image}
          alt="Movie"
          className="h-72 w-full object-cover rounded-lg"
        />
      </figure>
      <div className="mt-6">
        <h2 className="card-title">{name}</h2>
        <p>Grab The Offer </p>
      </div>
    </div>
  );
};

export default ProductCard;

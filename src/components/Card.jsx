function Card({ beer }) {
  
  return (
    <div className="card mt-3" style={{width: '18rem'}}>
      <img src={beer.image} className="card-img-top" alt={beer.name} />
      <div className="card-body">
        <h5 className="card-title">{beer.name}</h5>
        <div className="">
        <p>{beer.price}</p>
        <p>{beer.rating.average}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

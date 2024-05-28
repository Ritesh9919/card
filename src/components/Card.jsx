function Card({ data }) {
  console.log("**********", data);
  return (
    <div className="card mt-3" style={{width: '18rem'}}>
      <img src={data.image} className="card-img-top" alt={data.name} />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <div className="">
        <p>{data.price}</p>
        <p>{data.rating.average}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

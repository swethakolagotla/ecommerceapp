import React from 'react'

const Product = (props) => {
  return (
    <div>
      <div class="card" style={{width: "18rem"}}>
        <img src={props.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text"> {props.description}</p>
          <a
            href="javascript:void(0)"
            class="btn btn-primary"
            onClick={() => props.Addtocart(props.title)}
          >
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product
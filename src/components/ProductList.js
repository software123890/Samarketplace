import React, { Fragment, useEffect } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { requestGetProductList } from "../redux/actions/actions";
import { Link } from "react-router-dom";
import "./productlist.css";
const ProductList = () => {
  const dispatch = useDispatch();
  let { loading, ProductList } = useSelector((state) => state.productList);

  const temp = [
    {
      'category': "men's clothing",
      'description': "Novice.	Gathers	a	flock	of	new	prospects.	Begins	to	grow	a	new	Susu	Family",
      'id':1,
      "image": "https://cdn.pixabay.com/photo/2022/02/10/09/39/nft-7004985__340.jpg",
      "name":'Shepherd'
    },
    {
      'category': "men's clothing",
      'description': "Secured	his	turf	and	seJling	into	his	territory.	Plants	seeds,	nurtures	them	and	feeds	his	flock.",
      'id':2,
      "image": "https://cdn.pixabay.com/photo/2022/02/10/09/39/nft-7004985__340.jpg",
      "name":'Farmer'
    },
    {
      'category': "men's clothing",
      'description': "Mo'vated	and	energe'c.	Successfully	established	a	flock,	now	is	out	seeking	to	build	structures	to	accommodate	a	network	as	quickly	as	possible",
      'id':3,
      "image": "https://cdn.pixabay.com/photo/2022/02/10/09/39/nft-7004985__340.jpg",
      "name":'Builder'
    },
    {
      'category': "men's clothing",
      'description': "Called	to	service,	the Member	is	now	ready	to	go	out	and	fish	for	as	many	prospects	as	he	can	get	into	his	network.",
      'id':4,
      "image": "https://cdn.pixabay.com/photo/2022/02/10/09/39/nft-7004985__340.jpg",
      "name":'Fisherman'
    },
    {
      'category': "men's clothing",
      'description': "A	FiVh	Susu.	Has	shown	commitment	as	a	Member.	Now	a	leader	of	a	small	team",
      'id':5,
      "image": "https://cdn.pixabay.com/photo/2022/02/10/09/39/nft-7004985__340.jpg",
      "name":'Captain'
    },
    {
      'category': "men's clothing",
      'description': "Diligent	Susuist.	Able	to	devolve	and	coordinate	group	ac'vity	to	a	common	goal	–	Growth",
      'id':6,
      "image": "https://cdn.pixabay.com/photo/2022/02/10/09/39/nft-7004985__340.jpg",
      "name":'Officer'
    },
    {
      'category': "men's clothing",
      'description': "Susu	Strategist.	Fully conversant	with	the	system.	Manages	resources,	develops systems	for	the	whole	Susu	family",
      'id':7,
      "image": "https://cdn.pixabay.com/photo/2022/02/10/09/39/nft-7004985__340.jpg",
      "name":'Manager'
    },
    {
      'category': "men's clothing",
      'description': "Secure	in	his	environment.	Achieves	his	goals	at	faster	than	the	Novice	members.",
      'id':8,
      "image": "https://cdn.pixabay.com/photo/2022/02/10/09/39/nft-7004985__340.jpg",
      "name":'Master'
    },
    {
      'category': "men's clothing",
      'description': "Accomplished	Susuist,	well	established	in	the	Community.",
      'id':9,
      "image": "https://cdn.pixabay.com/photo/2022/02/10/09/39/nft-7004985__340.jpg",
      "name":'Elder'
    }, {
      'category': "men's clothing",
      'description': "The	10th	Susu	Rank	is	the	threshold	between	the	lower	material	level	of	Susu	and	the	higher	spiritual	level	of	Susu.	The	Counsellor	is	an	Ethicist.",
      'id':10,
      "image": "https://cdn.pixabay.com/photo/2022/02/10/09/39/nft-7004985__340.jpg",
      "name":'Counsellor'
    },
    {
      'category': "men's clothing",
      'description': "The	Susuist	Baron	is	a Member	of	the	upper	Cadre.	He	can	organise	and	earn	at	the	Community	Level.",
      'id':11,
      "image": "https://cdn.pixabay.com/photo/2022/02/10/09/39/nft-7004985__340.jpg",
      "name":'Baron/Baroness'
    },
    {
      'category': "men's clothing",
      'description': "Owns	a	Susu	business	with	a	consistent	income	stream",
      'id':12,
      "image": "https://cdn.pixabay.com/photo/2022/02/10/09/39/nft-7004985__340.jpg",
      "name":'Director'
    },
    {
      'category': "men's clothing",
      'description': "Susu	Business	Mentor. Minimum	of	300	Susu	Family	Members",
      'id':13,
      "image": "https://cdn.pixabay.com/photo/2022/02/10/09/39/nft-7004985__340.jpg",
      "name":'Ambassad or'
    },
    {
      'category': "men's clothing",
      'description': "Badge/Shield	Holder	and	Reference	point.",
      'id':14,
      "image": "https://cdn.pixabay.com/photo/2022/02/10/09/39/nft-7004985__340.jpg",
      "name":'Mogul'
    },
    {
      'category': "men's clothing",
      'description': "A	fulfilled	Susuist.	Has	got	his	eyes	set	on	legacy	and	the	Big	Picture",
      'id':15,
      "image": "https://cdn.pixabay.com/photo/2022/02/10/09/39/nft-7004985__340.jpg",
      "name":'Oracle'
    },
    {
      'category': "men's clothing",
      'description': "Owns	a	Network	and	earns	recurrent	life'me	income	as	a	partner.",
      'id':16,
      "image": "https://cdn.pixabay.com/photo/2022/02/10/09/39/nft-7004985__340.jpg",
      "name":'Tribal Chief'
    },
  ]

  useEffect(() => {
    dispatch(requestGetProductList());

    console.log("feeeeeeeeeeeeeeee",ProductList)
  }, []);

  return (
    <Fragment>
      {temp.map((product) => {
        return (
          <div className="col-md-6 col-lg-4 g-5">
            <Link to="#" className="cardLink">
              <div class="card">
                <div className="imgWrapper">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    height={250}
                    width={350}
                  />
                </div>
                <div class="card-body">
                <span className="smallProductType">Rank{product.id}-{product.name}</span>  
                  <p class="card-text">{product.description}</p>
                  <div class="productType">
                    <span class="btnGo">Go SomeWhere</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </Fragment>
  );
};

export default ProductList;

import React, { useState, useEffect } from "react";
import Axios from "axios";
import Linkify from 'react-linkify';
import Checkbox from "@material-ui/core/Checkbox";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  h1 {
    color: #a21717;
  }
  h2 {
    color: #a21717;
  }
  input {
    width: 300px;
    height: 60px;
    margin: 10px;
    align-self: center;
    border-radius: 5px;
  }
  button {
    display: inline-block;
    text-align: center;
    border-radius: 2px;
    line-height: 19px;
    cursor: pointer;
    margin-left: -1px;
    padding: 4px 15px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    background-image: -webkit-linear-gradient(top,#f8f8f8,#f1f1f1);
    border: 1px solid #c6c6c6;
    color: #000;
    text-decoration: none;
    font-family: sans-serif;
}

.button:hover {
}

.button:active {
    background-color: #f6f6f6;
    background-image: -webkit-linear-gradient(top,#f6f6f6,#f1f1f1);
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
}
  }
`;

const Profile = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const [reviewList, setReviewList] = useState([]);
  const [checked, setChecked] = useState(true);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleChangeUrl = (event) => {
    setUrl(event.target.value);
  };

  useEffect(() => {

  Axios.get("http://localhost:3001/list")
      .then((res) => {
        setReviewList(res.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);


  const submitReview = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3001/list", {
      name,
      price,
      url,
    })
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));

  }
    
    

  const deleteReview = (id) => {
    Axios.delete(`http://localhost:3001/list/${id}`)
    .then((res) => res.data)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));;
  };

  return (
    <DIV>
      <h1 className="title">Ton Profile</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            Créer ta liste
          </label>
        </h2>
        <input
          type="text"
          value={name}
          id="name"
          className="input-name"
          name="text"
          placeholder="Nom"
          onChange={handleChangeName}
        />
        <input
          type="text"
          value={price}
          id="price"
          className="input-price"
          name="text"
          placeholder="Prix en €"
          onChange={handleChangePrice}
        />
        <input
          type="link"
          value={url}
          id="url"
          className="input-url"
          name="url"
          placeholder="https://example.com"
          onChange={handleChangeUrl}
        />
        <button type="submit" onClick={submitReview}>
          Enregistrer
        </button>
      </form>
      <h2>Ma Liste</h2>
      <div className="card-list">
        {reviewList.map((value) => {
          return (
            <div key={value.idlist} className="list">
              <label>
                {value.name}, {value.price + "€"}, <Linkify>{value.url}</Linkify>
              </label>
              <Checkbox value={name} />
              <div className="remove-button">
              <button onClick={() => deleteReview(value.idlist)}>Delete</button>
              </div>
            </div>
          );
        })}
        <button>Partager ma liste</button>
      </div>
  </DIV>
  );
};

export default Profile;

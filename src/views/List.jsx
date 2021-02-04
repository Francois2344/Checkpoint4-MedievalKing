import React, { useState, useEffect } from "react";
import Axios from "axios";
import Checkbox from "@material-ui/core/Checkbox";
import styled from "styled-components";

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
    Axios.get("http://localhost:3001/list").then((response) => {
      setReviewList(response.data);
      console.log(response);
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
        console.log();
      })
      .catch((error) => console.error(error));
  };

  const deleteReview = () => {
    Axios.delete('http://localhost:3001/list/:id')
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
          className="input name"
          name="text"
          placeholder="Nom"
          onChange={handleChangeName}
        />
        <input
          type="text"
          value={price}
          id="price"
          className="input price"
          name="text"
          placeholder="Prix en €"
          onChange={handleChangePrice}
        />
        <input
          type="link"
          value={url}
          id="url"
          className="input url"
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
            <div key={value.id} className="list">
              <label>
                {value.name}, {value.price + "€"}, {value.url}
              </label>
              <Checkbox value={name} />
              <div className="remove-button">
              <button onClick={deleteReview}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
      
    </DIV>
  );
};

export default Profile;

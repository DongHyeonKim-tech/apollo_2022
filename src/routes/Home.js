import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks'

const Home = () => {
  console.log("Home")
  return (
    <div>
      <h2>{"Home"}</h2>
    </div>
  )
};

const getMovies = gql`
  query {
    movies {
      id
      medium_cover_image
      }
  }
`

export default () => {
  const { loading, error, data } = useQuery(getMovies);
  console.log(loading, error, data);
};
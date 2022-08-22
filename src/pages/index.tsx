import { useEffect, useState } from "react";
import { Card } from "../components/Cards";
import { Header } from "../components/Header";
import { api } from "../services/api";
import { GridBox } from "../components/Cards/styled";

export default function Home () {
  const [ product, setProduct ] = useState([]);

  useEffect(() => {
    const response = api.get('?page=1&rows=10&sortBy=name&orderBy=DESC').then(response => {
      setProduct(response.data);
    }).catch(error => {
      alert(error);
    }).finally(() => {
      console.log('finally');
    })
  } , []);
  
  console.log(product.products);
  

  return (
    <>
      <Header />
      <GridBox >
      
      {
        product.products?.map(product => (
            <Card 
              key={product.id} 
              image={product.photo} 
              title={product.name} 
              description={product.description} 
              price={product.price} 
              buttonText="Comprar" 
              buttonLink="/product" 
            />
        ))
      }
      </GridBox>

    </>
  )
}
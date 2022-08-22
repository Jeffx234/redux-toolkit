import { CardContainer, CardImage, CardTitle, CardDescription, CardButton, CardContent } from './styled';

export function Card( { image, title, description, price, buttonText, buttonLink } ) {
  return (
    <CardContainer>
      <CardContent>
        <CardImage>
          <img src={image} alt={title} />
        </CardImage>
        <CardTitle>
          <h1>{title}</h1>
          <p> {price } </p>
        </CardTitle>
        <CardDescription>
          <p> {description} </p>
        </CardDescription>
      </CardContent>
      <CardButton>
        <button>
          <a href={buttonLink}>
            Comprar
          </a>
        </button>
      </CardButton>
    </CardContainer>
  );
}
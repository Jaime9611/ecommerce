import Grid from '@mui/material/Grid';
import CardItem from '../molecules/CardItem';
import { Product } from '../../../../models/product';
import { useNavigate } from 'react-router-dom';

type CardListProps = {
  data: Product[];
};

const CardList = ({ data }: CardListProps) => {
  const navigate = useNavigate();

  const handleCardClick = (itemId: string) => {
    navigate(`/product/${itemId}`);
  };

  return (
    <Grid container spacing={2}>
      {data.map(product => (
        <Grid item xs={2} key={product.id}>
          <CardItem item={product} onClick={() => handleCardClick(product.id)} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;

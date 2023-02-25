import CardItem from '../molecules/CardItem';
import { Product } from '../../../../models/product';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

type CardListProps = {
  data: Product[];
};

const CardList = ({ data }: CardListProps) => {
  const navigate = useNavigate();

  const handleCardClick = (itemId: string) => {
    navigate(`/product/${itemId}`);
  };

  return (
    <Box
      margin='0 auto'
      display='grid'
      gridTemplateColumns='repeat(auto-fill, 220px)'
      justifyContent='space-around'
      rowGap='1.25rem'
      columnGap='1%'
    >
      {data.map(product => (
        <CardItem
          key={`card-item-${product.id}`}
          item={product}
          onClick={() => handleCardClick(product.id)}
        />
      ))}
    </Box>
  );
};

export default CardList;

import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getProductById } from '../../api/products';
import { Product } from '../../models/product';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState({} as Product);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(prev => !prev);
      const { data } = await getProductById(id as string);

      if (data) {
        setLoading(prev => !prev);
        setProduct(data);
      }
    };

    fetchProduct();
  }, []);

  // TODO: Loading Component.
  if (loading) {
    return <p>Loading...</p>;
  }

  // if (error) {
  //   // TODO: Not found page for products
  //   return <Navigate to='/not-found-product' />;
  // }

  return (
    <Container>
      <h1>{product?.title}</h1>
    </Container>
  );
};

export default ProductDetails;

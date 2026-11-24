import type { Product } from '../types/product';
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const [loading, setLoading] = useState(false);

    function handleAddToCart() {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }

  return (
    <Card>
      {product.isNew && <Badge>Новинка</Badge>}
      <h3>{product.title}</h3>

      <strong>{product.price} руб</strong>

      {product.quantity > 0 ? (
        <Badge variant="success">
          В наличии {product.quantity} штук
        </Badge>
      ) : (
        <Badge variant="danger">Нет в наличии</Badge>
      )}

        <Button
            loading={loading}
            disabled={product.quantity === 0}
            onClick={handleAddToCart}
        >
            В корзину
        </Button>
    </Card>
  );
}
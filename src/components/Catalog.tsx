import { products } from '../data/products';
import { ProductCard } from './ProductCard';
import { Grid } from './ui/Grid';
import { useState, useMemo } from 'react';
import type { Category } from '../types/product';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import styled from 'styled-components'

const categories: { value: Category | 'all'; label: string }[] = [
  { value: 'all', label: 'Все категории' },
  { value: 'electronics', label: 'Электроника' },
  { value: 'home', label: 'Для дома' },
  { value: 'accessories', label: 'Аксессуары' },
];

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => theme.spacing.md} 0;
`;

export function Catalog() {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState<Category | 'all'>('all');

    const filteredProducts = useMemo(() => {
    return products.filter(product => {
        const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

        const matchesCategory = category === 'all' || product.category === category;
        return matchesSearch && matchesCategory;
    });
    }, [search, category]);

  return (
    <>
        <Input
            placeholder="Поиск товаров..."
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
        <Filters>
            {categories.map(item => (
                <Button
                    key={item.value}
                    variant={category === item.value ? 'primary' : 'outline'}
                    onClick={() => setCategory(item.value)}
                >
                    {item.label}
                </Button>
            ))}
        </Filters>
        {filteredProducts.length === 0 ? (
            <p>Товары не найдены</p>
        ) : (
        <Grid>
            {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </Grid>
        )}
    </>
  );
}
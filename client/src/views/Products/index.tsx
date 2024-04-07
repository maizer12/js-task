import { FC, useState, useEffect } from 'react';
import './Products.scss';
import { HTag, PTag, Select } from '../../common';
import { Product } from '../../components';
import { typeProduct, statusProduct } from '../../components/Modals/CreateProductModal/_constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProducts } from '../../store/slices/productSlice/asyncActions';

const Products: FC = () => {
  const [productType, setProductType] = useState<string | number>('');
  const [productStatus, setProductStatus] = useState<string | number>('');
  const { items } = useAppSelector((state) => state.productSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <main>
      <div className="products-header d-flex align-items-center">
        <HTag tag="h1">Продукты / 25</HTag>
        <div className="products-header__item d-flex align-items-center">
          <PTag>Тип:</PTag>
          <Select items={typeProduct} setSelect={setProductType} text="Выбрать" />
        </div>
        <div className="products-header__item d-flex align-items-center">
          <PTag>Статус:</PTag>
          <Select items={statusProduct} setSelect={setProductStatus} text="Выбрать" />
        </div>
      </div>
      <ul className="product-table scroll-style">
        {items.map((e) => (
          <Product className="block table-item" key={e._id} moreInfo={true} item={e} />
        ))}
      </ul>
    </main>
  );
};

export default Products;

import { FC, useEffect } from 'react';
import { OpenProduct, OrderTable, DeleteOrderModal, CreateOrderModal, CreateProductModal } from '../../components';
import { HTag, Loader } from '../../common';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchOrders } from '../../store/slices/orderSlice/asyncActions';
import './Home.scss';
import { setCreateOrderModal, setOpenProduct, updateOrder } from '../../store/slices/orderSlice';
import { useTranslation } from 'react-i18next';

const Home: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.optionsSlice.search);
  const { openOrder, createOrderModal, deleteOrderItem, count, isLoading, openPage } = useAppSelector(
    (state) => state.orderSlice,
  );
  const { createProductModal } = useAppSelector((state) => state.productSlice);
  const className = cn({ ['show-product']: !!openOrder }, 'anim-opacity', 'home');

  useEffect(() => {
    dispatch(fetchOrders());
  }, [search, openPage]);

  useEffect(() => {
    return () => {
      dispatch(setOpenProduct(null));
      dispatch(updateOrder([]));
    };
  }, []);

  const openCreateModal = () => {
    dispatch(setCreateOrderModal(true));
  };

  return (
    <main className={className}>
      <div className="d-flex align-items-center">
        <button className="add-btn" onClick={openCreateModal}>
          +
        </button>
        <HTag tag="h1" className="home__title">
          {t('home.title')} / {!!count && isLoading ? <Loader /> : count}
        </HTag>
      </div>
      <div className="order-content">
        <OrderTable />
        {!!openOrder && <OpenProduct />}
      </div>

      {!!deleteOrderItem && <DeleteOrderModal item={deleteOrderItem} />}
      {createOrderModal && <CreateOrderModal />}
      {createProductModal && <CreateProductModal />}
    </main>
  );
};

export default Home;

import React, {useEffect } from 'react';
import {Routes , Route} from 'react-router-dom'
import { useDispatch } from 'react-redux';


import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionsContainer from '../collection/collection.container';

import {fetchCollectionStart}  from "../../reducer/shop/shop.action"





const ShopPage = () => {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchCollectionStart())
  }, [dispatch])
 
    return (
      <>
        <Routes>
            <Route path={":categoryId"} element={<CollectionsContainer/>} />
            <Route index element={<CollectionsOverviewContainer />} />
        </Routes>
      </>
   )
  }



export default (ShopPage);
import React, {useEffect, useState } from 'react';
import {Routes , Route} from 'react-router-dom'
import { useDispatch } from 'react-redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';


import { getCollectionsAndDocuments } from '../../firebase/firebase.utils';
import {UpdateCollections}  from "../../reducer/shop/shop.action"


const CollectionOverViewWithSpanner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpanner = WithSpinner(CollectionPage)


const ShopPage = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    const getCollectionsMap = async () => {
      const collections = await getCollectionsAndDocuments("collections")
       dispatch(UpdateCollections(collections))
       setLoading(false)
    }
    
      getCollectionsMap();
  }, [dispatch])
 
    return (
      <>
        <Routes>
            <Route index Component={(props) => <CollectionOverViewWithSpanner isLoading={loading} {...props} />} />
            <Route path={":categoryId"} Component={(props) => <CollectionPageWithSpanner isLoading={loading} {...props} />} />
        </Routes>
      </>
   )
  }



export default (ShopPage);
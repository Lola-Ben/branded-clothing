import {Routes , Route} from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../../components/category/categories.component';

import './shop.styles.scss';

const ShopPage = () => (
   <>
     <Routes>
         <Route index element={<CollectionsOverview />} />
         <Route path={":categoryId"} element={<CollectionPage />} />
     </Routes>
   </>
)


export default (ShopPage);
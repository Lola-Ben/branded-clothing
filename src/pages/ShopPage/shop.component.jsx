import React from 'react';
import './shop.styles.scss';
import SHOP_DATA from './shop_data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(){
            super();

            this.state = {
                shopData: SHOP_DATA,
            }

        }

     render(){
        
        const collection = this.state.shopData;

        return(
            
           <div className='collection'>
              {
                collection.map(({id, ...otherCollectionProps}) => (
                  <CollectionPreview key={id} {...otherCollectionProps} />                    
                ))
              }
           </div>
        )
     }   
}
export default ShopPage;
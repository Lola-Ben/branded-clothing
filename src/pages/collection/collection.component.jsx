
import React from "react";
import { useParams } from "react-router";
// import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import {selectCollections} from "../../reducer/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { CollectionItemContainer, CollectionPageContainer,  CollectionTitle } from "./collection.styles";



const CollectionPage = ({collections}) => { 
    const {categoryId} = useParams();
    collections = collections ? Object.keys(collections).map(key => collections[key]) : null
    collections = collections.filter(collection => collection["routeName"] === categoryId)
    
  
    collections = collections[0]
    const {items, title} = collections
    return(
        <CollectionPageContainer className="category-page">
            <CollectionTitle className="title">{title.toUpperCase()}</CollectionTitle>
            <CollectionItemContainer className="collection-item">
                {
                    items.map(item => 
                        <CollectionItem key={item.id} item={item} />
                    )
                }
            </CollectionItemContainer>
        </CollectionPageContainer>
    )

}


const mapStateToProps = createStructuredSelector({
  collections: selectCollections  
})



export default connect(mapStateToProps)(CollectionPage);
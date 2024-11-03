import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

import selectCategory from "../../reducer/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { CollectionItemContainer, CollectionPageContainer,  CollectionTitle } from "./collection.styles";



const CollectionPage = () => { 
    const {categoryId} = useParams();
    let categories = useSelector( state => selectCategory(state));
    
    const category =  categories.find(cat => cat["routeName"] === categoryId)
    const { items, title} = category
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




export default CollectionPage;
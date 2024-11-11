import React from "react";
import { useSelector } from "react-redux";

import selectCollections from "../../reducer/shop/shop.selector";
import CollectionPreview from "../collection-preview/collection-preview.component";

import { CollectionOverViewContiner } from "./collections-overview.styles";


const CollectionOverView = () => {
    let collections = useSelector(selectCollections)
    collections = collections ? Object.keys(collections).map(key => collections[key]) : [];
    return (
    <CollectionOverViewContiner >
    {
       collections.map(({id, ...otherCollectionProps}) => (
       <CollectionPreview key={id} {...otherCollectionProps} />                    
       ))
    }
    </CollectionOverViewContiner>
)}

export default (CollectionOverView);
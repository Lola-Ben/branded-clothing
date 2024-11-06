import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import selectCollections from "../../reducer/shop/shop.selector";
import CollectionPreview from "../collection-preview/collection-preview.component";

import { CollectionOverViewContiner } from "./collections-overview.styles";


const CollectionOverView = ({collections}) => {
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

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionOverView);
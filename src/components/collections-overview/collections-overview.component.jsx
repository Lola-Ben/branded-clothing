import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import selectCollections from "../../reducer/shop/shop.selector";
import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss"

const CollectionOverView = ({collections}) => {
    collections = Object.keys(collections).map(key => collections[key]);
    return (
    <div className='collection-overview'>
    {
       collections.map(({id, ...otherCollectionProps}) => (
       <CollectionPreview key={id} {...otherCollectionProps} />                    
       ))
    }
    </div>
)}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionOverView);
import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import './category-preview.styles.scss';

const CategoryPreview = ({title, items}) => {
   return (
    <div className="category-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="items">
            {
                items.map(item => (  
                <CollectionItem  key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
   )
}

export default CategoryPreview;
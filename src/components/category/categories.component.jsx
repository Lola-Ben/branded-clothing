import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

import selectCollections from "../../reducer/shop/shop.selector";
import CategoryPreview from "./category-preview.component";
import "./categories.styles.scss"



const CategoryPage = () => { 
    const {categoryId} = useParams();
    let categories = useSelector( state => selectCollections(state));
    categories =  categories[categoryId]
    const {id, items, title} = categories
    return(
        <div className="category-page">
            <CategoryPreview key={id} title={title} items={items} />
        </div>
    )

}




export default CategoryPage;
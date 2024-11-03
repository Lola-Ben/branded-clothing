import React from "react";
import CollectionItem from "../collection-item/collection-item.component";


import { CollectionPreviewContainer, LinkTitle, PreviewContainer } from "./collection-preview.styles";

const CollectionPreview = ({title, items}) => {
   return (
    <CollectionPreviewContainer className="collection-preview">
        <LinkTitle to={`${title.toLowerCase()}`}>
                {title.toUpperCase()}
        </LinkTitle>
        <PreviewContainer className="preview">
            {
                items.filter((_, index) => index < 4).map(item => (  
                <CollectionItem className="collection-item" key={item.id} item={item}/>
                ))
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
   )
}

export default CollectionPreview;
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import collectionsOverviewComponent from "./collections-overview.component";
import WithSpinner from "../with-spinner/with-spinner.component";
import { selectIsFetching, selectIsCollectionsLoaded } from "../../reducer/shop/shop.selector";


const mapStateToProps = createStructuredSelector({
    isloading: state => selectIsFetching(state) || !selectIsCollectionsLoaded(state)

})




const CollectionsOverviewContainer =  compose(connect(mapStateToProps), WithSpinner)(collectionsOverviewComponent)


export default CollectionsOverviewContainer;
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "redux";

import { selectIsCollectionsLoaded } from "../../reducer/shop/shop.selector";
import collectionComponent from "./collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !(selectIsCollectionsLoaded(state))
})

const CollectionsContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(collectionComponent)


export default CollectionsContainer;
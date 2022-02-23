import React, { useState, useMemo } from 'react';
import Reviews from './reviews/Reviews';
import ReviewModal from './reviews/modal/Modal';
// eslint-disable-next-line import/no-named-as-default
import Related from './related/Related';
import Overview from './overview/Overview';
import AppContext from './AppContext';
import ReviewPhotoModal from './reviews/reviewPhotos/modal/ReviewPhotoModal';
import { Modal } from './related/Modal';
import MyOutfit from './related/MyOutfit';

function App() {
  // const [globalProductId, setGlobalProductId] = useState(40344);
  // const [globalProductStyle, setGlobalProductStyle] = useState();
  // const [globalTheRelatedInfo, setGlobalTheRelatedInfo] = useState('hello');
  // const [modalClicked, setModalClicked] = useState(false);
  // const [globalProductInfo, setGlobalProductInfo] = useState(40344);
  // const [globalAverage, setGlobalState] = useState(0);
  // const [currentSize, setCurrentSize] = useState(0);
  // const [currentQuantity, setCurrentQuantity] = useState(0);
  // console.log(globalProductStyle);

  // const productIdSetting = {
  //   productId: globalProductId,
  //   productInfo: globalProductInfo,
  //   productStyle: globalProductStyle,
  //   theRelatedInfo: globalTheRelatedInfo,
  //   modalStatus: modalClicked,
  //   currentSize: currentSize,
  //   currentQuantity: currentQuantity,
  //   setGlobalProductInfo,
  //   setGlobalProductId,
  //   setGlobalProductStyle,
  //   setGlobalTheRelatedInfo,
  //   setModalClicked,
  //   setCurrentSize,
  //   setCurrentQuantity,
  // };

  const [globalProductId, setGlobalProductId] = useState(40344);
  const [globalProductStyle, setGlobalProductStyle] = useState();
  const [globalTheRelatedInfo, setGlobalTheRelatedInfo] = useState('hello');
  const [modalClicked, setModalClicked] = useState(false);
  const [globalProductInfo, setGlobalProductInfo] = useState(40344);
  const [globalAverage, setGlobalAverage] = useState(0);
  const [modalReviewClicked, setModalReviewClicked] = useState(false);
  const [metaCharacteristics, setMetaCharacteristics] = useState(null);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [photoModal, setPhotoModal] = useState(false);
  const [reviewPhotos, setReviewPhotos] = useState([]);

<<<<<<< HEAD
  const productIdSetting = {
    productId: globalProductId,
    productInfo: globalProductInfo,
    productStyle: globalProductStyle,
    theRelatedInfo: globalTheRelatedInfo,
    modalStatus: modalClicked,
    currentSize: currentSize,
    currentQuantity: currentQuantity,
    modalReviewClicked,
    globalAverage,
    metaCharacteristics,
    setGlobalProductInfo,
    setGlobalProductId,
    setGlobalProductStyle,
    setGlobalTheRelatedInfo,
    setModalClicked,
    setCurrentSize,
    setCurrentQuantity,
    setModalReviewClicked,
    setGlobalAverage,
    setMetaCharacteristics,
  };

  return (
    <div>
      <AppContext.Provider value={productIdSetting}>
      {modalReviewClicked && <ReviewModal />}
        <Overview />
        <Related />
        <MyOutfit />
=======
  const value = useMemo(() => (
    {
      productId: globalProductId,
      productInfo: globalProductInfo,
      productStyle: globalProductStyle,
      theRelatedInfo: globalTheRelatedInfo,
      modalStatus: modalClicked,
      modalReviewClicked,
      globalAverage,
      metaCharacteristics,
      reviewSubmitted,
      photoModal,
      reviewPhotos,
      setGlobalProductInfo,
      setGlobalProductId,
      setGlobalProductStyle,
      setGlobalTheRelatedInfo,
      setModalClicked,
      setModalReviewClicked,
      setGlobalAverage,
      setMetaCharacteristics,
      setReviewSubmitted,
      setPhotoModal,
      setReviewPhotos,
    }
  // eslint-disable-next-line max-len
  ), [globalProductId, globalProductInfo, globalProductStyle, globalTheRelatedInfo, modalClicked, modalReviewClicked, globalAverage, metaCharacteristics, reviewSubmitted, photoModal, reviewPhotos]);

  return (
    <div>
      <AppContext.Provider value={value}>
        {modalReviewClicked && <ReviewModal />}
        {photoModal && <ReviewPhotoModal />}
<<<<<<< HEAD
        {/* <Overview />
        <Related /> */}
>>>>>>> 56a8222 (photo review posting and modal completed)
=======
        <Overview />
        <Related />
>>>>>>> b1dcda2 (review completed)
        <Reviews />
        {modalClicked && (
        <Modal
          imgUrl1={globalProductStyle.photos[0].url}
          imgUrl2={globalTheRelatedInfo.results[3].photos[0].url}
          currentProduct={globalProductInfo}
          comparedProduct={globalTheRelatedInfo}
        />
        )}
      </AppContext.Provider>
    </div>
  );
}

export default App;

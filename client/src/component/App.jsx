import React, { useState } from 'react';
import Reviews from './reviews/Reviews';
// eslint-disable-next-line import/no-named-as-default
import Related from './related/Related';
import Overview from './overview/Overview';
import AppContext from './AppContext';
<<<<<<< HEAD
<<<<<<< HEAD
import { Modal } from './related/Modal';

=======
import AddModal from './reviews/modal/AddModal';
>>>>>>> 8221b02 (modal in process)
=======
import Modal from './modal/Modal';
>>>>>>> 979eb96 (modal is in process)

function App() {
  const [globalProductId, setGlobalProductId] = useState(40344);
<<<<<<< HEAD
  const [globalProductInfo, setGlobalProductInfo] = useState();
  const [globalProductStyle, setGlobalProductStyle] = useState();
  const [globalTheRelatedInfo, setGlobalTheRelatedInfo] = useState('hello');
  const [modalClicked, setModalClicked] = useState(false);
=======
  const [globalProductInfo, setGlobalProductInfo] = useState(40344);
  const [globalAverage, setGlobalState] = useState(0);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d67c599 (rating star is now available to use in every widget)
=======
  const [addReviewModal, setAddreviewModal] = useState(false);
>>>>>>> 8221b02 (modal in process)
=======
  const [modalReviewclicked, setModalReviewClicked] = useState(true);
  const [modalCompareclicked, setModalCompareClicked] = useState(false);
>>>>>>> 979eb96 (modal is in process)

  const productIdSetting = {
    productId: globalProductId,
    productInfo: globalProductInfo,
<<<<<<< HEAD
    productStyle: globalProductStyle,
    theRelatedInfo: globalTheRelatedInfo,
    modalStatus: modalClicked,
    setGlobalProductInfo,
    setGlobalProductId,
    setGlobalProductStyle,
    setGlobalTheRelatedInfo,
    setModalClicked,
  };

  return (
    <div>
      <AppContext.Provider value={productIdSetting}>
        <Overview />
        <Related />
        <Reviews />
        {modalClicked && <Modal
        imgUrl2={globalTheRelatedInfo.results[3].photos[0].url}
        currentProduct={globalProductInfo}
        comparedProduct={globalTheRelatedInfo}
        />}
      </AppContext.Provider>
    </div>
=======
    average: globalAverage,
    addReviewClicked: modalCompareclicked,
    relatedCompareClicked: modalCompareclicked,
    setGlobalProductInfo,
    setGlobalProductId,
    setGlobalState,
    setModalReviewClicked,
    setModalCompareClicked,
  };

  return (
    <AppContext.Provider value={productIdSetting}>
      {modalReviewclicked && <Modal addReview />}
      {modalCompareclicked && <Modal compare />}
      <Overview />
      <Related />
      <Reviews />
    </AppContext.Provider>
>>>>>>> d67c599 (rating star is now available to use in every widget)
  );
}

export default App;

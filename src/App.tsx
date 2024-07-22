import { useState } from 'react';
import Modal from './components/Modal/Modal';
import CardCreate from './pages/CardCreate/CardCreate';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>열기</button>
      <Modal showModal={showModal} onClose={() => setShowModal(false)}>
        <CardCreate />
      </Modal>
    </>
  );
}

export default App;

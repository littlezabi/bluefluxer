import { FaTimesCircle } from "react-icons/fa";
import { useState, useContext, useEffect } from "react";
import { modalRemovingTime } from "../utils/config";
import { Store } from "../context/context";
export default function Modal() {
  const [closeModal, setCloseModal] = useState<boolean>(false);
  const { state, dispatch } = useContext<any>(Store);
  const [modal, setModal] = useState<any>({});
  const handleCloseModal = () => {
    setCloseModal(true);
    setTimeout(() => {
      dispatch({ type: "MODAL", payload: { show: false } });
    }, modalRemovingTime);
  };
  useEffect(() => {
    if (state.modal.show) setModal(state.modal);
  }, [state.modal]);
  return (
    <div className={"modal-x"} onClick={handleCloseModal}>
      <div
        className={
          !closeModal
            ? "full-size modal-x-bg  flex flex-center"
            : "full-size flex flex-center"
        }
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={closeModal === false ? "fade-in-eff" : "fade-out-eff"}
        >
          <div className='modal-x-body bg-w  c-b fade-in-eff'>
            <picture>
              <img
                className='modal-x-title-bg'
                src='/media/assets/header-bg.svg'
                alt='bg'
              />
            </picture>
            <div className='modal-x-sup'>
              <div className='modal-x-title df jc-sb ac'>
                <div>{modal.title && modal.title}</div>
                <div
                  className='modal-close'
                  title='close modal'
                  onClick={handleCloseModal}
                >
                  <FaTimesCircle />
                </div>
              </div>
              <div className='p-20'>
                <div className='max-450'>
                  {modal?.children}
                  {modal?.buttons?.length > 0 && (
                    <div className='mt-10'>
                      {modal.buttons.map((btn: any, i: number) => {
                        return (
                          <button
                            key={i}
                            className='modal-btn'
                            onClick={() => {
                              dispatch({
                                type: "BLUE-STATE",
                                payload: btn.params,
                              });
                              if (btn.closeModal) handleCloseModal();
                            }}
                          >
                            {btn.title}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

interface ModalProps {
  show: boolean;
  backdrop: any;
  onHide: any;
  animation: boolean;
  centered: boolean;
  children: JSX.Element;
  className: string;
}

interface ToastProps {
  ref: React.MutableRefObject<null>;
  key: string;
  children: JSX.Element;
  className: string;
}

const Modal = (props: ModalProps): JSX.Element => {
  const { children, className, show, backdrop, onHide, animation, centered } =
    props;

  console.log(animation);
  console.log(centered);
  return show ? (
    <div
      className={`w-screen h-screen bg-grey flex justify-center items-center ${className} ${backdrop}`}
    >
      <div className='w-1/2 h-1/2'>
        <h1 onClick={onHide}>Hello world</h1>
        {children}
      </div>
    </div>
  ) : (
    <div className='hidden'></div>
  );
};

const Toast = (props: ToastProps): JSX.Element => {
  const { children, className, ref, key } = props;
  return (
    <div ref={ref} key={key} className={className}>
      {children}
    </div>
  );
};

export default {
  Modal,
  Toast
};

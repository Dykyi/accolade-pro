import React, { FC, PropsWithChildren } from 'react';
import ReactDom from 'react-dom'; // for portals
import clsx from 'clsx';
import Spinner from '../Spinner';

interface IBackdropProps {
  onClose?: () => void;
}

const Backdrop: FC<IBackdropProps> = ({ onClose }) => {
  return (
    <div
      className='fixed top-0 left-0 w-[100%] h-[100vh] z-20 bg-black opacity-75'
      onClick={onClose}
    ></div>
  );
};

const ModalOverlay: FC<PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => {
  return (
    <div className={clsx('fixed z-30', { [`${className}`]: className })}>
      {children}
    </div>
  );
};

const modalPlaceholderElement = document.getElementById('modal');

interface IModalProps {
  isVisible?: boolean;
  loading?: boolean;
  onClose?: () => void;
  className?: string;
}

const Sidebar: FC<PropsWithChildren<IModalProps>> = ({
  isVisible,
  loading,
  children,
  className,
  onClose,
}) => {
  if (!modalPlaceholderElement || !isVisible) return null;

  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onClose={onClose} />,
        modalPlaceholderElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay className={className}>
          {loading ? <Spinner /> : children}
        </ModalOverlay>,
        modalPlaceholderElement
      )}
    </>
  );
};

export default Sidebar;

import {FC, ReactNode, useEffect} from 'react';

const Modal: FC<{onClose: () => void; children: ReactNode}> = ({onClose, children}) => {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="max-h-full max-w-full overflow-auto rounded-lg bg-neutral-900 p-6"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;

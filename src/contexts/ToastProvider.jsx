import PropTypes from 'prop-types';
import { useState } from 'react';
import { Toast } from '@/components/ui/Toast';
import { ToastContext } from './ToastContext';

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  // fix: add useCallback
  const showToast = (message, type) => {
    setToast({ message, type });
  };

  // fix: add useCallback
  const hideToast = () => {
    setToast(null);
  };

  const success = (message) => showToast(message, 'success');
  const error = (message) => showToast(message, 'error');
  const info = (message) => showToast(message, 'info');

  // fix: add useMemo
  const value = { success, error, info };
  return (
    <ToastContext.Provider value={value}>
      {children}

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          show
          onClose={hideToast}
        />
      )}
    </ToastContext.Provider>
  );
};

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

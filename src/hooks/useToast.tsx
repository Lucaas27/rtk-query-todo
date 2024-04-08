import { useSnackbar, SnackbarKey } from 'notistack';
import { IoMdClose } from 'react-icons/io';

const useToast = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const showToast = (
    message: string,
    variant: 'success' | 'error' | 'warning' | 'info'
  ): SnackbarKey => {
    return enqueueSnackbar(message, {
      variant,
      action: (key) => (
        <button onClick={() => closeSnackbar(key)} type="button">
          <IoMdClose />
        </button>
      ),
    });
  };

  return { showToast };
};

export default useToast;

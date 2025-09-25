import { useTheme } from '@mui/material/styles';
import {
	Id,
	ToastContainer,
	ToastOptions,
	UpdateOptions,
	toast,
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useNotify = () => {
	const theme = useTheme();

	const defaultOptions: ToastOptions = {
		autoClose: 3000,
		closeButton: false,
		closeOnClick: true,
		draggable: true,
		hideProgressBar: false,
		pauseOnHover: true,
		position: 'top-center',
		style: {
			backgroundColor: theme.palette.background.default,
			color: theme.palette.text.primary,
		},
		theme: 'light',
	};

	const notify = (msg: string, options?: ToastOptions): Id => {
		return toast(msg, { ...defaultOptions, ...options });
	};

	const loading = (msg: string, options?: ToastOptions): Id => {
		return toast.loading(msg, {
			...defaultOptions,
			...options,
			autoClose: false,
		});
	};

	const update = (toastId: Id, options: UpdateOptions) => {
		toast.update(toastId, {
			...defaultOptions,
			...options,
		});
	};

	const dismiss = (toastId?: Id) => {
		toast.dismiss(toastId);
	};

	return {
		dismiss,
		loading,
		notify,
		toast,
		ToastContainer,
		update,
	};
};

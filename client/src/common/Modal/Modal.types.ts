import { ReactNode } from 'react';

export interface IModalProps {
	children: ReactNode;
	setClose: (a: boolean) => void;
}

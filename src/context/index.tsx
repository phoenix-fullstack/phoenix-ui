import { createContext } from 'react';
import { IMenuContext } from '../components/menu/menu';

export const MenuContext = createContext<IMenuContext>({ index: '0' })

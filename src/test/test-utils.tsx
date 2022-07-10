import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ReactElement } from 'react';
import { store } from '../app/store';

type AllTheProvidersProps = {
    children?: ReactElement;
};

const AllTheProviders: React.ComponentType<AllTheProvidersProps> =
    ({ children }) => (<Provider store={store}>{children}</Provider>)

const customRender = (ui: ReactElement, options?: RenderOptions): RenderResult => {
    return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from "@testing-library/react";
export { customRender as render };

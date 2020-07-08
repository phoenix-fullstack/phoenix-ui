import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from '../button';

const testProps: ButtonProps = {
    btnType: 'primary',
    size: 'lg',
    className: 'custom'
};

const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn(),
};

describe('test Button component', () => {
    it('should render the correct default button', () => {
        const wrapper = render(<Button>按钮</Button>);
        const element = wrapper.getByText('按钮');
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('btn btn-default');
    });

    it('should render the correct component based on different props', () => {
        const wrapper = render(<Button {...testProps}>按钮</Button>)
        const element = wrapper.getByText('按钮');
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('btn-primary btn-lg custom');
    });

    it('should render a link when btnType equals link and href is provided', () => {
        const wrapper = render(<Button btnType="link" href="http://dummyurl">Link</Button>)
        const element = wrapper.getByText('Link');
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('A');
        expect(element).toHaveClass('btn btn-link');
    });

    it('should render disabled button when disabled set to be true', () => {
        const wrapper = render(<Button {...disabledProps}>Disabled Button</Button>)
        const element = wrapper.getByText('Disabled Button') as HTMLButtonElement;
        expect(element).toBeInTheDocument();
        expect(element.disabled).toBeTruthy();
        fireEvent.click(element);
        expect(disabledProps.onClick).not.toHaveBeenCalled();
    });
});

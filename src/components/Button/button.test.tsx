import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Button } from "./Button";

describe('<Button />', () => {
    it('Debería renderizar el botón', () => {
        render(<Button label="clic" />);
        const button = screen.getByText('clic');
        expect(button).toBeInTheDocument();
    });

    it('Debería llamar a la función de clic', async () => {
        const handleClick = vi.fn();
        render(<Button label="clic" onClick={ handleClick } />);
        const button = screen.getByText('clic');
        await act(() => {
            fireEvent.click(button);
        });
        expect(handleClick).toHaveBeenCalledOnce()
    });
});
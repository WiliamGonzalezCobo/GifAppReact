import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
    test('should change value text box', () => {
        render(<AddCategory onNewCategory={() => { }} />);
        const inputCategory = screen.getByTestId("inputCategoryTest");
        const e = { target: { value: 'saitama' } }

        //? el evento input o change pueden cambiar el valor de la caja de texto
        // fireEvent.input(inputCategory, e)
        fireEvent.change(inputCategory, e)

        expect(inputCategory.value).toBe(e.target.value)

    })

    test('should call function onNewCategory if the input have a value', () => {
        const e = { target: { value: 'naruto' } };
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);
        const inputCategory = screen.getByTestId("inputCategoryTest");
        fireEvent.input(inputCategory, e);
        expect(inputCategory.value).toBe(e.target.value);
        const formAddCategory = screen.getByTestId('FormAddCategoryTest');
        fireEvent.submit(formAddCategory);
        expect(inputCategory.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(e.target.value)
    })

    test('should dont nothing if the input dont have a value', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);

        const formAddCategory = screen.getByTestId('FormAddCategoryTest');
        fireEvent.submit(formAddCategory);
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    })
})
import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';


let editExpense,removeExpense,wrapper,history;

beforeEach(()=> {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push : jest.fn()}
    wrapper = shallow(<EditExpensePage expense={expenses[1]} editExpense={editExpense} removeExpense={removeExpense}  history={history} />)
});

test('should render edit correctly', ()=> {
    expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[2]);
});

test('should handle remove expense',()=>{
    wrapper.find('button').simulate('click');
    expect(removeExpense).toHaveBeenCalledWith({id: expenses[1].id});
});
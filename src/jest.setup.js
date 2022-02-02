import React from "react";
import {mount, shallow} from 'enzyme';
import TodoItem from "./components/todoitems/TodoItem";

describe('TodoItem', () => {
    let props;
    beforeEach(() => {
        props = {
            taskText:'some task',
            deleteTask: jest.fn(),
            checked: false,
            checkChange: jest.fn(),
            id: 1234
        }
    })
    it('should render correctly', () => {
        const component = shallow(<TodoItem {...props}/>);
        expect(component).toMatchSnapshot();
    });
    it('should render prop taskText', () => {
        const component = mount(<TodoItem {...props}/>);
        console.log(component.debug());
        expect(component.find('div').at(1).text()).toEqual(props.taskText);
    });
    it('should render prop checked', () => {
        const component = mount(<TodoItem {...props}/>);
        console.log(component.debug());
        expect(component.find('div').at(1).text()).toEqual(props.checked);
    });
    it('should call checkChange', () => {
        const component = mount(<TodoItem {...props}/>);
        console.log(component.debug());
        component.find('input').getElement().props.onClick()
        expect(props.checkChange).toHaveBeenCalledWith(props.id);
    });
    it('should call deleteTask', () => {
        const component = mount(<TodoItem {...props}/>);
        console.log(component.debug());
        component.find('button').at(0).getElement().props.onClick()
        expect(props.deleteTask).toHaveBeenCalledWith(props.id);
    });
})
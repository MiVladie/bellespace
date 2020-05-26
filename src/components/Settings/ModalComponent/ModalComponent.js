import React, { useState } from 'react';

import { allComponents } from '../../../assets/data';

import classes from './ModalComponent.module.css';

const ModalComponent = ({ addComponent }) => {
    const [selectedComponent, setSelectedComponent] = useState(0);

    const addComponentHandler = () => {
        addComponent(false, allComponents[selectedComponent]);
    };
    
    const cancelComponentHandler = () => {
        addComponent(false, null);
    };

    return (
        <div className = { classes.ModalComponent }>
            <div className = { classes.Wrapper }>                
                <div className = { classes.Section }>
                    <h1 className = { classes.Name }>Preview</h1>
                    <div className = { classes.Icon } />
                </div>
                
                <div className = { classes.Section }>
                    <h1 className = { classes.Name }>Component</h1>
                    <select
                        className = { classes.Dropdown }
                        value = { selectedComponent }
                        onChange = { (event) => setSelectedComponent(event.target.value) }>
                        { allComponents.map((component, componentIndex) =>
                            <option
                                value = { componentIndex }
                                key = { component.type }>
                                { component.type }
                            </option>) }
                    </select>   
                </div>
           
                <div className = { classes.Section }>
                    <button className = { classes.Option } onClick = { addComponentHandler }>Add</button>
                    <button className = { classes.Option } onClick = { cancelComponentHandler }>Cancel</button>
                </div>                        
            </div>
        </div>
    )
};

export default ModalComponent;

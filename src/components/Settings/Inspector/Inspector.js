import React, { useState } from 'react';

import classes from './Inspector.module.css';

const Inspector = ({ pages, styles, selectedPage, selectedComponent, changePage, changeContent, changeStyle }) => {
    const [reveal, setReveal] = useState(true);
    const [selectedStyle, setSelectedStyle] = useState(0);

    if(selectedPage == null) 
        return null;

    const getCategoryHandler = (name) => {
        if(name === 'Page') { 
            return (
                <div className = { classes.Category }>
                    <h2 className = { classes.Name }>{ name }</h2>
                    <div className = { classes.Wrapper }>
                        <div className = { classes.Type }>
                            <p className = { classes.FieldName }>Name</p>
                            <input
                                className = { classes.Input }
                                placeholder = 'Start typing..'
                                value = { pages[selectedPage].name }
                                onChange = { (event) => changePage('name', event.target.value) } />
                        </div>

                        <div className = { classes.Type }>
                            <p className = { classes.FieldName }>URL</p>
                            <input
                                className = { classes.Input }
                                placeholder = 'Start typing..'
                                value = { pages[selectedPage].url }
                                onChange = { (event) => changePage('url', event.target.value) } />
                        </div>
                    </div>
                </div>)
        } else if(selectedComponent == null) {
            return null;
        }

        if(name === 'Content') {
            return (
                <div className = { classes.Category }>
                    <h2 className = { classes.Name }>{ name }</h2>
                    <div className = { classes.Wrapper }>
                    { pages[selectedPage].content[selectedComponent].content.map((field, fieldIndex) => {
                            let input;

                            switch (field.type) {
                                case 'textarea':
                                    input = <textarea
                                        className = { classes.Textarea }
                                        placeholder = 'Start typing..'
                                        value = { field.value }
                                        onChange = { (event) => changeContent(fieldIndex, event.target.value) } />
                                    break;

                                case 'input':
                                    input = <input
                                        className = { classes.Input }
                                        placeholder = 'Start typing..'
                                        value = { field.value }
                                        onChange = { (event) => changeContent(fieldIndex, event.target.value) } />
                                    break;

                                case 'url':
                                    input = <input
                                        className = { classes.Input }
                                        placeholder = 'Start typing..'
                                        value = { field.value }
                                        onChange = { (event) => changeContent(fieldIndex, '/' + event.target.value.substr(1)) } />
                                    break;

                                default:
                                    break;
                            }

                            return (
                                <div className = { classes.Type } key = { field.name }>
                                    <p className = { classes.FieldName }>{ field.name }</p>
                                    { input }
                                </div>
                            )
                    })}
                    </div>
                </div>)
        }

        if(name === 'Styles') { 
            return (
                <div className = { classes.Category }>
                    <h2 className = { classes.Name }>{ name }</h2>

                    <div className = { classes.Wrapper }>
                        <div className = { classes.Type }>
                            <p className = { classes.FieldName }>Element</p>
                            <select
                                className = { classes.Dropdown }
                                value = { selectedStyle }
                                onChange = { (event) => setSelectedStyle(event.target.value) }>
                                { styles[pages[selectedPage].content[selectedComponent].type].map((style, styleIndex) =>
                                    <option
                                        value = { styleIndex }
                                        key = { style.name }>
                                        { style.name }
                                    </option>) }
                            </select>                        
                        </div>

                        { styles[pages[selectedPage].content[selectedComponent].type][selectedStyle].options.map((style, styleIndex) => {
                                let input;

                                switch (style.type) {
                                    case 'text':
                                        input = <input
                                            style = {{ textAlign: 'center' }}
                                            className = { classes.Input }
                                            value = { style.value }
                                            onChange = { (event) => changeStyle(styleIndex, selectedStyle, event.target.value) } />
                                        break;
                                    
                                    default:
                                        break;
                                }

                                return (
                                    <div className = { classes.Type } key = { style.name }>
                                        <p className = { classes.FieldName }>{ style.name }</p>
                                        { input }
                                    </div>
                                )
                        })}
                        </div>
                    </div>)
        }
    };

    return (
        <div className = { [classes.Inspector, reveal ? classes.Reveal : ''].join(' ') }>
            <button className = { classes.Button } onClick = { () => setReveal(!reveal) }>
                <div className = { classes.Icon } />
            </button>
            
            <div className = { classes.Main }>
                { getCategoryHandler('Page') }            
                { getCategoryHandler('Content') }            
                { getCategoryHandler('Styles') }
            </div>
        </div>
    )
};

export default Inspector;

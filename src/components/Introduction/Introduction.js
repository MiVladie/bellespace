import React from 'react';

import classes from './Introduction.module.css';

const introduction = ({ id, meta, main, description, styles }) => {
    description = ("" + description).split('\n').flatMap((value, index, array) =>
            array.length - 1 !== index
                ? [value, <React.Fragment><br/><br/></React.Fragment>]
                : value,
    );

    return (
        <div className = { classes.Introduction } id = { id }>
            <div className = { classes.Wrapper }>
                { meta && <h2 className = { classes.Meta } style = { styles.meta }>{ meta }</h2> }
                <h1 className = { classes.Main } style = { styles.main }>{ main }</h1>
                <div className = { classes.Line } style = { styles.line } />
                { description && <p className = { classes.Description } style = { styles.description }>{ description }</p> }
            </div>
        </div>
    )
};

export default introduction;

/*

  <Introduction
    meta = 'Efficitur'
    main = 'Mauris rhoncus'
    description = { ['Fusce odio nunc, aliquam vitae vehicula non, porta vitae est. Sed consectetur, lectus sed consectetur aliquet,\ntortor velit sollicitudin eros, sit amet dictum tortor ex nec diam.'] } />

*/

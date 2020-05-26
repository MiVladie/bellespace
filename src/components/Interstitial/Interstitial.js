import React from 'react';

import { Link } from 'react-router-dom';

import classes from './Interstitial.module.css';

const interstitial = ({ id, image, meta, main, description, linkTo, linkText, newTab, styles }) => (
    <div className = { classes.Interstitial } id = { id }>
        <div className = { classes.Image } style = {{ backgroundImage: 'url(' + image + ')' }} />
            
        <div className = { classes.Wrapper }>
            { meta && <h2 className = { classes.Meta } style = { styles.meta }>{ meta }</h2> }
            <h1 className = { classes.Main } style = { styles.main }>{ main }</h1>
            { meta && <div className = { classes.Line } style = { styles.line } /> }
            <p className = { classes.Description } style = { styles.description }>{ description }</p>
        </div>

        { linkText && <Link className = { classes.Link } to = { linkTo } style = { styles.button } target = { newTab && '_blank' }>{ linkText }</Link> }
    </div>
);

export default interstitial;

/*

<Interstitial
    image = { imgInterstitial }
    meta = 'Efficitur' // Optional
    main = 'Mauris rhoncus'
    description = 'Fusce odio nunc, aliquam vitae vehicula non, porta vitae est. Sed consectetur, lectus sed consectetur aliquet, tortor velit sollicitudin eros, sit amet dictum tortor ex nec diam.'
    linkTo = 'https://letscomit.com/' // Optional
    linkText = 'Learn more' // Optional
    newTab // Optional
    />

*/

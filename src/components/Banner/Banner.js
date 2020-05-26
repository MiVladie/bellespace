import React from 'react';

import { Link } from 'react-router-dom';

import classes from './Banner.module.css';

const banner = ({ id, image, imageAlt, main, description, linkLeftTo, linkLeftText, linkRightTo, linkRightText, scrollTo, styles }) => {
    const scrollHandler = () => {
        if(document.getElementById(scrollTo) != null) {
            document.getElementById(scrollTo).scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <section className = { classes.Banner } id = { id }>
            <div className = { classes.Image }>
                <img src = { image } alt = { imageAlt } />
            </div>

            <div className = { classes.Wrapper }>
                <h1 className = { classes.Main } style = { styles.main }>{ main }</h1>
                <div className = { classes.Line } style = { styles.line } />
                <p className = { classes.Description } style = { styles.description }>{ description }</p>
            </div>

            <div className = { classes.Links }>
                { linkLeftText && <Link className = { classes.Left } to = { linkLeftTo } style = { styles['button left'] }>{ linkLeftText }</Link> }
                { linkRightText && <a className = { classes.Right } href = { linkRightTo } style = { styles['button right'] } target = '_blank' rel = 'noopener noreferrer'>{ linkRightText }</a> }
            </div>

            { scrollTo && <button className = { classes.Scroll } onClick = { scrollHandler }>
                <span className = { classes.Circle } />
                <span className = { classes.Knob } />
            </button> }
        </section>
    )
};

export default banner;

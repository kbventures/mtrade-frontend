import React from 'react';
// import './hamburger.css';
import styles from './hamburger.module.scss';

const { topNav, menuToggle, menuButtonContainer, menuButton, menu } = styles;

export default function HamburgerMenuTest() {
        const [checked, setChecked] = React.useState(false);
        // eslint-disable-next-line no-console
        console.log(checked);
        const checkHandler = () => {
                setChecked(!checked);
                // eslint-disable-next-line no-console
                console.log(checked);
        };
        return (
                <section className={topNav}>
                        <div>Logo Here</div>
                        <p>Checked? {checked.toString()}</p>
                        <input
                                className={menuToggle}
                                type="checkbox"
                                id="test"
                                checked={checked}
                                onChange={() => checkHandler()}
                        />
                        <label className={menuButtonContainer} htmlFor="test">
                                <div className={menuButton} />
                        </label>
                        <ul className={menu}>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>Four</li>
                                <li>Five</li>
                        </ul>
                </section>
        );
}

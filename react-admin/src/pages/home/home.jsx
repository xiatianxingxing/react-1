import React,{ Component } from 'react';
import { Link } from 'react-router-dom'
import styles from './home.module.css'

export default class Home extends Component {
    render (){
        return (
            <div>
                <h2 className={styles.title}>react学习与总结</h2>
                <div  className={styles.link}>
                    <Link to="/admin/super">go！</Link>
                </div>
            </div>
        )
    }
}
import React from 'react';
import styles from './SearchResult.module.css';

export default function SearchResult(props) {
  return (
    <div className={ styles.product }>
        <div>
          <div><img src={`/images/${props.image}`} alt={props.name} /></div>
          <div className= { styles.name }>{ props.name }</div>
          <div className= { styles.manufacturer }>{ props.manufacturer }</div>
          <div className= { styles.price }>${ props.price }</div>
        </div>
    </div>
  )
}

import PropTypes from 'prop-types';
import data from "./data.json"
import s from "./statistic.module.css"


export default function Statistic() {
  
  return (<section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>
      
      <ul className={s.statlist}>
        
        {data.map(({ id, label, percentage }) => 
        (<li className={s.item} key={id}>
          <span className={s.label}>{label}</span>
          <span className={s.percentage}>{percentage}%</span>
    </li>)
)}
        
   
  </ul>
</section>)
}


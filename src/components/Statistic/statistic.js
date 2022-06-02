import PropTypes from 'prop-types';
import s from "./statistic.module.css"


export default function Statistic({stats, title}) {
  
  return (<section className={s.statistics}>
    <h2 className={s.title}>{title}</h2>
      
      <ul className={s.statlist}>
        
        {stats.map(({ id, label, percentage }) => 
        (<li className={s.item} key={id}>
          <span className={s.label}>{label}</span>
          <span className={s.percentage}>{percentage}%</span>
    </li>)
)}
        
   
  </ul>
</section>)
}


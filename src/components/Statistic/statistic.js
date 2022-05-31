import PropTypes from 'prop-types';
import data from "./data.json"


export default function Statistic() {
  
    return (<section className="statistics">
  <h2 className="title">Upload stats</h2>
      
      <ul className="stat-list">
        
        {data.map(({ id, label, percentage }) => {
        return (
    <li className="item" key={id}>
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
    </li>
  )
})}
        
   
  </ul>
</section>)
}


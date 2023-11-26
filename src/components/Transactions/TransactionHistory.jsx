import PropTypes from 'prop-types';
import css from "./Transactions.module.css";



const createColor = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    0.5 +
    ')';

  return color;
};




export const TransactionHistory = ({ items }) => {
  return (
      
    <table className = {css.transactionsTable}>
      <thead >
        <tr className = {css.transactionsTr}>
          <th classname = {css.transactionsTh}>Type</th>
          <th classname = {css.transactionsTh}> Amount</th>
          <th classname = {css.transactionsTh}>Currency</th>
        </tr>
      </thead>

      <tbody classname={css.transactionsTbody}>
        {items.map(({ id, amount, currency, type }) => <tr key={id} style={{ backgroundColor: createColor() }}>
          <td className ={css.transactionsTd}>{type}</td>
          <td className ={css.transactionsTd}>{amount}</td>
          <td className ={css.transactionsTd}>{currency}</td>
        </tr>
        )}
        
      </tbody>
    </table>
        
  )
};


TransactionHistory.propTypes = {

  item: PropTypes.arrayOf(PropTypes.object)
};
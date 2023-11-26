import PropTypes from 'prop-types';
import css from "./Transactions.module.css";

export const TransactionHistory = ({ items }) => {
  return (
      
    <table className={css.transactionsTable}>
      <thead className={css.transactionsThead}>
        <tr className={css.transactionsTr}>
          <th className={css.transactionsTh}>Type</th>
          <th className={css.transactionsTh}> className={css.transactionsTh}Amount</th>
          <th className={css.transactionsTh}>Currency</th>
        </tr>
      </thead>

      <tbody classname={css.transactionsTbody}>
        {items.map(({ id, amount, currency, type }) => <tr className={css.transactionsTr} key={id}>
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
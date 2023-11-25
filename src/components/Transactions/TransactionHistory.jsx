import PropTypes from 'prop-types';


export const TransactionHistory = ({ items }) => {
  return (
      
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, amount, currency, type }) => <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
        )}
        
      </tbody>
    </table>
        
  )
};


TransactionHistory.propTypes = {

  item: PropTypes.arrayOf(PropTypes.object)
};
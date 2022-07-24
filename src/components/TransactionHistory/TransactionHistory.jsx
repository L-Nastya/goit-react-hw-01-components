import PropTypes from 'prop-types';
import styled from 'styled-components';

const TransactionHistory = ({ items }) => {
    return (
        <TransactionStyle>
             <TransactionHead >
                        <tr>
                            <TransactionTh>Type</TransactionTh>
                            <TransactionTh>Amount</TransactionTh>
                            <TransactionTh>Currency</TransactionTh>
                        </tr>
                    </TransactionHead >
            <tbody>
                 {
                items.map(item => (
                        <tr key={item.id}>
                            <TransactionItem>{item.type}</TransactionItem>
                            <TransactionItem>{item.amount}</TransactionItem>
                            <TransactionItem>{item.currency}</TransactionItem>
                            </tr>
                ))
                }
                </tbody>
        </TransactionStyle>)}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }),
  ),
};
export default TransactionHistory;
  

const TransactionStyle = styled.table`
background-color: rgb(202, 226, 245);
margin-left:50px;
margin-bottom:50px;
width: 50%;
 border-collapse: collapse; 
`;

const TransactionHead = styled.thead`
 padding: 3px; 
    border: 1px solid black;
    background-color: rgb(124, 179, 222)
`;


const TransactionTh = styled.th`
 padding: 3px; 
    border: 1px solid black;
`;
const TransactionItem = styled.td`
 padding: 3px; 
    border: 1px solid black;
    font-size: 14px;
    text-align:center;
    // background-color: rgb(124, 179, 222)
`;
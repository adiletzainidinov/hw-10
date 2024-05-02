import { useReducer, useState } from 'react';
import './App.css';
import Card from './assets/components/Card';
import styled from 'styled-components';

const INCRIMINATE = 'incriminate';
const DECREMENT = 'decrement';

function App() {
  const [isTrue, setIsTrue] = useState(false);
  const [isRemuveTrue, setIsRemuveTrue] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
    payload: 0,
  });
  const handlerClick = () => {
    dispatch({
      type: INCRIMINATE,
      payload: 1,
    });
  };

  const [array, setArray] = useState([
    {
      id: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhulESelGRnuOU_EP-f3xbEmaaxef-IuRcpw&usqp=CAU',
      producktName: 'Product 1',
      prise: 1,
      quantity: 1,
    },
    {
      id: 2,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzH_6q5vRPhHjQ_sI_rR7wG1ibDFUXd7o5OozTBJwCuDy-fIimyqFL0Ae46EZnj60A9CI&usqp=CAU',
      producktName: 'Product 2',
      prise: 2,
      quantity: 1,
    },
    {
      id: 3,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQH0ZWkrcSSOtWlR8_2lBu4UNZhi84GrJLjtsvyEDBzPMlWtVHYaxDQSq_dAA9igiANQ&usqp=CAU',
      producktName: 'Product 3',
      prise: 3,
      quantity: 1,
    },
  ]);

  const addProducts = () => {
    setIsTrue((prevIsTrue) => !prevIsTrue);

    if (!isTrue) {
      const newProduct = {
        id: array.length + 1,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhulESelGRnuOU_EP-f3xbEmaaxef-IuRcpw&usqp=CAU',
        producktName: 'Product ' + (array.length + 1),
        prise: array.length + 1,
        quantity: 1,
      };

      const newArray = [...array, newProduct];

      setArray(newArray);
    }
  };

  const deleteProduct = (productIdToDelete) => {
    setIsRemuveTrue((prev) => !prev);
    if (!isRemuveTrue) {
      const updatedProducts = array.filter(
        (product) => product.id !== productIdToDelete
      );
      setArray(updatedProducts);
    }
  };

  function reducer(state, action) {
    if (action.type === INCRIMINATE) {
      return {
        counter: state.counter + action.payload,
      };
    }
    if (action.type === DECREMENT) {
      return {
        counter: state.counter - action.payload,
      };
    }
  }

  const increment = (payload) => {
    return {
      type: INCRIMINATE,
      payload,
    };
  };

  const decrement = (payload) => {
    return {
      type: DECREMENT,
      payload,
    };
  };
  
  return (
    <>
      <div>
        <CardsPapa>
          {array.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              img={item.img}
              title={`${item.producktName} $${item.prise}`}
              onClick={addProducts}
            />
          ))}
        </CardsPapa>

        <main>
          <Table className="myTable">
            <StyledTr style={{ height: '50px' }}>
              <StyledTh>#</StyledTh>
              <StyledTh>Product</StyledTh>
              <StyledTh>Product Name</StyledTh>
              <StyledTh>Price</StyledTh>
              <StyledTh>Quantity</StyledTh>
              <StyledTh>Remove</StyledTh>
            </StyledTr>
            {array.map((item) => (
              <StyledTr key={item.id}>
                <StyledTd>{item.id}</StyledTd>
                <StyledTd>
                  <img
                    style={{ width: '50px', height: '50px' }}
                    src={item.img}
                    alt="img"
                  />
                </StyledTd>
                <StyledTd>{item.producktName}</StyledTd>
                <StyledTd>{item.id}</StyledTd>
                <StyledTd style={{ fontSize: '32px' }}>
                  <QuantityButton onClick={() => dispatch(decrement(1))}>
                    -
                  </QuantityButton>
                  {state.counter}
                  <QuantityButton onClick={() => dispatch(increment(1))}>
                    +
                  </QuantityButton>
                </StyledTd>
                <StyledTd 
                  onClick={() => deleteProduct(item.id)}
                  style={{
                    backgroundColor: '#ff4343',
                    borderRadius: '10px',
                    fontSize: '32px',
                    textAlign: 'center',
                    color: 'white',
                  }}
                >
                  Remove
                </StyledTd>
              </StyledTr>
            ))}
          </Table>
        </main>
      </div>
    </>
  );
}

export default App;

const CardsPapa = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Table = styled.table`
  border-top: 2px solid #a9a9a9;
  padding: 10px 0;
  width: 100%;
  border-collapse: collapse;
  margin-top: 50px;
`;

const StyledTr = styled.tr`
  border-bottom: 2px solid #a9a9a9;
  height: 70px;
  text-align: left;
  width: 100px;

  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const StyledTd = styled.td`
  cursor: pointer;
  width: 100px;
  &:hover {
    background-color: #d0d0d0;
  }
  &:first-child {
    text-align: center;
  }
`;

const StyledTh = styled.th`
  &:first-child {
    text-align: center;
  }
`;

const QuantityButton = styled.button`
  padding: 7px 15px;
  border: none;
  background-color: #2763c4;
  border-radius: 5px;
  color: white;
  font-size: 32px;
  cursor: pointer;
`;

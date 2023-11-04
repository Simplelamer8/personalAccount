import React, { useState } from 'react';

const DynamicTableComponent = () => {
  const [isTableVisible, setIsTableVisible] = useState(false);
  const [inputs, setInputs] = useState({
    input1: '',
    input2: '',
    input3: '',
  });

  const toggleTableVisibility = () => {
    setIsTableVisible((prevIsTableVisible) => !prevIsTableVisible);
  };

  const handleInputChange = (e, inputName) => {
    const { value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [inputName]: value }));
  };

  return (
    <div>
      <button onClick={toggleTableVisibility}>
        {isTableVisible ? 'Hide Table' : 'Show Table'}
      </button>

      {isTableVisible && (
        <table>
          <tbody>
            <tr>
              <td>Description 1:</td>
              <td>
                <input
                  type="text"
                  value={inputs.input1}
                  onChange={(e) => handleInputChange(e, 'input1')}
                />
              </td>
            </tr>
            <tr>
              <td>Description 2:</td>
              <td>
                <input
                  type="text"
                  value={inputs.input2}
                  onChange={(e) => handleInputChange(e, 'input2')}
                />
              </td>
            </tr>
            <tr>
              <td>Description 3:</td>
              <td>
                <input
                  type="text"
                  value={inputs.input3}
                  onChange={(e) => handleInputChange(e, 'input3')}
                />
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DynamicTableComponent;

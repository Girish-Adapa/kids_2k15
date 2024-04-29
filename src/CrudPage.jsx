import React, { useState } from 'react';
import './CrudPage.css';
import { Trash, Pencil } from 'react-bootstrap-icons'; // Import Bootstrap icons

const CrudPage = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    id: '',
    field1: '',
    field2: '',
    dropdown: '',
  });

  const [tableData, setTableData] = useState([
    { id: 1, field1: 'test', field2: 'test', dropdown: 'test' },
    { id: 2, field1: 'test', field2: 'test', dropdown: 'test' },
    { id: 3, field1: 'test', field2: 'test', dropdown: 'test' },
    { id: 4, field1: 'test', field2: 'test', dropdown: 'test' },
    { id: 5, field1: 'test', field2: 'test', dropdown: 'test' },
    { id: 6, field1: 'test', field2: 'test', dropdown: 'test' },
    { id: 7, field1: 'test', field2: 'test', dropdown: 'test' },
    { id: 8, field1: 'test', field2: 'test', dropdown: 'test' },
    { id: 9, field1: 'test', field2: 'test', dropdown: 'test' },
    { id: 10, field1: 'test', field2: 'test', dropdown: 'test' },
  ]);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, field1, field2, dropdown } = formData;
    if (field1.trim() === '' || field2.trim() === '' || dropdown === '') {
      alert('Please fill in all fields.');
      return;
    }
    if (id) {
      // Update existing item
      setTableData(tableData.map(item => (item.id === id ? { ...item, ...formData } : item)));
    } else {
      // Add new item
      const newId = tableData.length > 0 ? Math.max(...tableData.map(item => item.id)) + 1 : 1;
      setTableData([...tableData, { id: newId, ...formData }]);
    }
    setFormData({ id: '', field1: '', field2: '', dropdown: '' });
  };

  // Function to delete a row
  const handleDelete = (id) => {
    setTableData(tableData.filter((item) => item.id !== id));
  };

  // Function to edit a row
  const handleEdit = (item) => {
    setFormData(item);
  };

  // JSX for table rows
  const renderTableRows = () => {
    return tableData.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.field1}</td>
        <td>{item.field2}</td>
        <td>{item.dropdown}</td>
        <td>
          <button className="btn btn-sm btn-primary" onClick={() => handleEdit(item)}>
            <Pencil /> {/* Edit icon */}
          </button>
        </td>
        <td>
          <button className="btn btn-sm btn-danger" onClick={() => handleDelete(item.id)}>
            <Trash /> {/* Delete icon */}
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="crud-page">
      <h2>CRUD Page</h2>
      <div className="container">
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="field1">Field 1</label>
              <input
                type="text"
                id="field1"
                name="field1"
                value={formData.field1}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="field2">Field 2</label>
              <input
                type="text"
                id="field2"
                name="field2"
                value={formData.field2}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dropdown">Dropdown</label>
              <select
                id="dropdown"
                name="dropdown"
                value={formData.dropdown}
                onChange={handleInputChange}
              >
                <option value="">Select...</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Field 1</th>
                <th>Field 2</th>
                <th>Dropdown</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{renderTableRows()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CrudPage;

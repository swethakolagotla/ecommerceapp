import React from 'react'
const Table = (props) => {
  return (
    <div>
      <table>
        <thead>
          {
          props.columns.map(ele => (
            <th>{ele.title}</th>
          ))
          }
        </thead>
        <tbody>
          <tr>
          {
            props.dataSource.map(ele=>(
                <td>{ele.name}</td>
            ))
          }
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table
export function CoasterList(props) {

    const handleDelete = (event, coasterId) => {
      event.preventDefault();
      if (window.confirm("Are you sure?")) {
        props.deleteCoaster(coasterId);
      }
    };
  
    return (
      <div className="container mt-3">
        <h2>Coaster List</h2>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>URL</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {props.coasters?.map((coaster, index) => (
                <tr key={index}>
                  <td>{coaster.name}</td>
                  <td>{coaster.location}</td>
                  <td>
                    <a href={coaster.url} target="_blank" rel="noreferrer">
                      Visit Site
                    </a>
                  </td>
                  <td>
                    <button onClick={(e) => handleDelete(e, coaster.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );

};
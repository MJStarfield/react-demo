const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        const { id, firstName, email, message } = person;
        return (
          <div key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
            <p>{message}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;

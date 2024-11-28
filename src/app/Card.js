const Card = (props) => {
  return (
    <div key={props.user.id} className="card">
      <div className="leftSide">
        {" "}
        <h2>
          {props.user.firstName} {props.user.lastName}
        </h2>
        <p>
          <strong>Phone:</strong> {props.user.phoneNumber}
        </p>
        <p>
          <strong>Email:</strong> {props.user.email}
        </p>
        <p>
          <strong>Address:</strong> {props.user.address}
        </p>{" "}
      </div>

      <div className="company">
        <strong>Company:</strong> {props.user.companyName}
      </div>
      <img className="rightSide" src="Shape.png"></img>
      <img className="companyLogo" src="Logo.png"></img>
      <img className="qrCode" src="QR Code.png"></img>
    </div>
  );
};

export { Card };

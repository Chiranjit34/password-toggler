import React, { useState } from "react";

function Password() {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(
    "https://cdn2.iconfinder.com/data/icons/user-interface-outline-19/32/password_eye_show-512.png"
  );
  const handleToggle = () => {
    if (type === "password") {
      setType("text");
      setIcon(
        "https://th.bing.com/th/id/R.57d709f98ea72d08290b13384e3ed5e4?rik=CtXtyxLpiaGrlA&pid=ImgRaw&r=0"
      );
    } else {
      setType("password");
      setIcon(
        "https://cdn2.iconfinder.com/data/icons/user-interface-outline-19/32/password_eye_show-512.png"
      );
    }
  };

  return (
    <div
      className="wrapper"
      style={{
        marginTop: "50px",
        display: "flex",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <div>
        <lable>Password : </lable>
        <input type={type} style={{ padding: "5px", width: "250px" }} />
        <span onClick={handleToggle}>
          <img
            src={icon}
            style={{
              height: "25px",
              marginLeft: "-30px",
              marginBottom: "-8px",
            }}
            alt=""
          />
        </span>
      </div>
    </div>
  );
}

export default Password;

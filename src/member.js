import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./App.css";

export default function Member() {
  const list = [
    {
      id: 1,
      name: "Dharsan",
      email: "dharsan.genius@gmail.com",
      img: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1664620983~exp=1664621583~hmac=4c961fba43acee03968bc953ea3e6be5914814ddca2094eea445598ab19c5a25",
    },
    {
      id: 2,
      name: "John",
      email: "john@gmail.com",
      img: "https://cdn-icons-png.flaticon.com/512/1255/1255922.png?w=826&t=st=1664622084~exp=1664622684~hmac=381234339000355a03ca0750c7e2221738c95d15cf9fe1126f12b2ea6871bb01",
    },
    {
      id: 3,
      name: "Doe",
      email: "doe@gmail.com",
      img: "https://cdn-icons-png.flaticon.com/512/1255/1255974.png?w=826&t=st=1664625052~exp=1664625652~hmac=d0d2d021077b357ced538771a3cf6e3c2b67e67d1777bde456a9f345ec332ba7",
    },
    {
      id: 4,
      name: "Danies",
      email: "danies@gmail.com",
      img: "https://cdn-icons-png.flaticon.com/512/1256/1256271.png?w=826&t=st=1664625166~exp=1664625766~hmac=25f4171bab4cc00a9db836224f4dcdacdc9ae3cf21319e3b90168d7612dd4e00",
    },
    {
      id: 5,
      name: "Barath",
      email: "barath@gmail.com",
      img: "https://cdn-icons-png.flaticon.com/512/1256/1256273.png?w=826&t=st=1664625425~exp=1664626025~hmac=58358af06c076643961fae44a938710f3a1c8b8b5b334f87f10c5c35f82b1e7b",
    },
    {
      id: 6,
      name: "Raja",
      email: "raja@gmail.com",
      img: "https://cdn-icons-png.flaticon.com/512/1238/1238090.png?w=826&t=st=1664625477~exp=1664626077~hmac=0c968e18a727ea9735a7e5752c4f7ba16dc324be591954d3794e0c75f5bbfbf1",
    },
    {
      id: 7,
      name: "Dinaker",
      email: "dinaker@gmail.com",
      img: "https://cdn-icons-png.flaticon.com/512/1256/1256631.png?w=826&t=st=1664625539~exp=1664626139~hmac=1a932ed70a9b41a9d2063e3e4dda5e0c327ecd6bc9289b8faa293a3459471869",
    },
    {
      id: 8,
      name: "Giri",
      email: "giri@gmail.com",
      img: "https://cdn-icons-png.flaticon.com/512/1256/1256632.png?w=826&t=st=1664625591~exp=1664626191~hmac=b92efe6869f82e194143d6e7bdebc7b5f154370716aaa1ce0b3be1997e518534",
    },
  ];
  const [search, setSearch] = useState("");
  const [serRes, setSerRes] = useState(list);
  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const result = list.filter((elem) => {
        return elem.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setSerRes(result);
    } else {
      setSerRes(list);
    }
    setSearch(keyword);
  };

  return (
    <div className="main">
      <h1 className="header">Members</h1>
      <div>
        <div className="searchCont">
          <div className="srch">
            <FaSearch
              size={12}
              color="gray"
              style={{
                position: "absolute",
                left: "28px",
                top: "123px",
              }}
            />
          </div>
          <input
            type="text"
            placeholder="Search "
            value={search}
            onChange={filter}
            className="searchbox"
          />
        </div>

        {serRes && serRes.length > 0 ? (
          serRes.map((item, index) => (
            <div key={index} className="container">
              <div>
                <img src={item.img} className="img" alt="memberImg" />
              </div>
              <div className="name-cont">
                <div>
                  <h3 className="name">{item.name}</h3>
                </div>
                <div className="mail-cont">
                  <h5 className="mail">{item.email}</h5>
                </div>
              </div>
              <div>
                <select className="dropdown">
                  <label>Select the Role</label>
                  <option value="">Select the role</option>
                  <option value="member">Member</option>
                  <option value="admin">Team Admin</option>
                </select>
              </div>
              <div className="chkbox">
                <input type="checkbox" />
              </div>
            </div>
          ))
        ) : (
          <h3>No results found</h3>
        )}
      </div>
    </div>
  );
}

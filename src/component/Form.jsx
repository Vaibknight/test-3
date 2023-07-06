import React from "react";

const Form = () => {
  return (
    <div>
      <div>
        <div>
          Name : <input type="text" />
          <br />
          Email :
          <input type="email" /> <br />
          Number :
          <input type="number" /> <br />
          Address_1 :
          <input type="text" /> <br />
          Address_2 :
          <input type="text" /> <br />
          City :
          <input type="text" /> <br />
          State :
          <input type="text" /> <br />
          Pincode :
          <input type="number" /> <br />
          Country :
          <input type="text" /> <br />
          geolocation :
          <input type="text" /> <br />
          Single File :
          <input type="file" /> <br />
          multi_ups1 :
          <input type="file" /> <br />
          multi_ups2 :
          <input type="file" /> <br />
          multi_ups3 :
          <input type="file" /> <br />
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Form;

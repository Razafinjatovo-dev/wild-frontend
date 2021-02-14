import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Form.css";

const Form = () => {
  const [crewMembers, setCrewMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [crewMemberName, setCrewMemberName] = useState("");
  const Url = "http://localhost:3200";

  //Fetch Crew members list
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${Url}/`);
      setCrewMembers(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [crewMembers, crewMemberName]);

  const handleOnChange = (event) => {
    setCrewMemberName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const field = { name: crewMemberName };
      await axios.post(`${Url}/Add-CrewMember`, field);
      setCrewMemberName("");
      console.log(crewMemberName);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Page Loading...</p>
      ) : (
        <div className="Form_Container">
          <div className="Form_Wrapper">
            <div className="Form_upperPart">
              <h3>Ajouter un(e) Argonaute</h3>

              <p>Nom de l'Argonaute</p>
              <form onSubmit={handleSubmit}>
                <input
                  required
                  type="text"
                  placeholder="Saisir le nom "
                  value={crewMemberName}
                  onChange={handleOnChange}
                ></input>
                <button>Envoyer</button>
              </form>

              <h3>Membres de l'équipage</h3>
            </div>
            <div className="CrewListWrapper">
              <ul className="CrewList">
                {crewMembers.map((crewMember) => {
                  return <li key={crewMember._id}>{crewMember.name}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;

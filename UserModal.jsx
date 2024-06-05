// Importerer nødvendige moduler fra React og React Router
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Definerer UserModal-komponenten
export default function UserModal() {
  // State til at holde brugernavn, alder og modalens synlighed
  const [brugernavn, setBrugernavn] = useState("");
  const [age, setAge] = useState("");
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  // useEffect til at håndtere alder verificering
  useEffect(() => {
    const ageVerificationDialog = document.getElementById("ageVerificationDialog");
    const inputEl = ageVerificationDialog.querySelector("#age");
    const confirmBtn = ageVerificationDialog.querySelector("#confirmBtn");

    // Henter alder fra localStorage hvis den er gemt
    const tempAge = localStorage.getItem("age");

    if (tempAge) {
      setAge(tempAge);
      inputEl.value = tempAge;

      // Hvis alderen er 18 eller over, navigeres til hjemsiden
      if (parseInt(tempAge, 10) >= 18) {
        navigate("/home");
      } else {
        alert("Du er under 18, du kan ikke tilgå siden");
      }
    } else {
      inputEl.value = "";
      ageVerificationDialog.showModal();
    }

    // Funktion til at lukke dialogen og håndtere aldersbekræftelse
    const closeDialog = () => {
      const ageValue = inputEl.value;
      if (ageVerificationDialog.returnValue !== "cancel" && ageValue) {
        if (parseInt(ageValue, 10) >= 18) {
          localStorage.setItem("age", ageValue);
          setAge(ageValue);
          setShowModal(false);
          navigate("/home");
        } else {
          alert("Du er under 18, du kan ikke tilgå siden");
          ageVerificationDialog.showModal();
        }
      } else if (!ageValue) {
        alert("Indtast venligst din alder");
      }
    };

    // Funktion til at håndtere klik på "Bekræft" knappen
    const okDialog = (event) => {
      event.preventDefault();
      const ageValue = inputEl.value;
      if (ageValue) {
        if (parseInt(ageValue, 10) >= 18) {
          localStorage.setItem("age", ageValue);
          setAge(ageValue);
          ageVerificationDialog.close();
          setShowModal(false);
        } else {
          alert("Du kan ikke tilgå websitet, eftersom du er under aldersgrænsen 18+.");
          ageVerificationDialog.showModal();
        }
      } else {
        alert("Indtast venligst din alder");
      }
    };

    // Tilføjer event listeners til dialog og knap
    confirmBtn.addEventListener("click", okDialog);
    ageVerificationDialog.addEventListener("close", closeDialog);

    // Rydder op ved at fjerne event listeners ved unmount
    return () => {
      confirmBtn.removeEventListener("click", okDialog);
      ageVerificationDialog.removeEventListener("close", closeDialog);
    };
  }, [navigate]);

  // Funktion til at opdatere brugerdata state
  const userdata = (e) => {
    const { name, value } = e.target;
    if (name === "age") {
      setAge(value);
    }
  };

  // Funktion til at håndtere formularindsendelse og navigering
  const getdata = (e) => {
    e.preventDefault();
    if (age) {
      const userData = {
        age: age
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      if (parseInt(age, 10) >= 18) {
        navigate("/home");
      } else {
        alert("Du er under 18, du kan ikke tilgå siden");
      }
    } else {
      alert("Indtast venligst din alder");
    }
  };

  // Returnerer JSX for komponenten
  return (
    <section className="modal-bg">
      <div>
        <dialog id="ageVerificationDialog" className="dialog bg-opacity-50 text-white tracking-wide bg-darkpurple text-center">
          {/* Dialog header */}
          <h2 className="text-4xl pb-4">Baileys drikker ansvarligt</h2>
          
          {/* Form for age verification */}
          <form onSubmit={getdata}>
            <div>
              {/* Age restriction message */}
              <label className="font-body">
                <p>Konkurrencen og websitet er betinget aldersgrænsen 18+, eftersom Baileys hverken promoverer eller
                  sælger spiritus, der ikke overholder lovgivningen i Danmark.
                </p>
              </label>
            </div>
  
            <div>
              {/* Input field label */}
              <label htmlFor="age" className="font-body text-center">
                <h3 className="mt-8 mb-2">Indtast venligst din alder nedenfor:</h3>
              </label>
              
              {/* Input field for age */}
              <input
                type="number"
                className="form-input rounded-lg text-black text-xl text-center"
                id="age"
                name="age"
                value={age}
                autoComplete="off"
                onChange={userdata}
                required
              />
            </div>
  
            <div className="flex center justify-center">

              {/* Confirm button */}
              <button type="submit" id="confirmBtn" className="font-body rounded-xl mt-9 bg-gold px-5 py-2">
                Bekræft <span className=""></span>
              </button>
            </div>
          </form>
        </dialog>
      </div>
    </section>
  );
  
}

import React from "react";
import axios from "axios";
import { useState } from "react";
import HolidayCard from "./HolidayCard";
import countries from "./CountryCodes";
import { useEffect } from "react";

 
function createHoliday(holiday) {
  
  return (
    <HolidayCard
      key={holiday.uuid}
      name={holiday.name}
      date={holiday.date}
      country={holiday.country}
      day={holiday.weekday.date.name}
    />
  );
}

let loaded= false;

 

function Holidays() {
  const [country, setCountry] = useState();
  const year = new Date().getFullYear() - 1;
  const [holidays, setholidays] = useState({});
  
  
  const getData = async (e) => {
    e.preventDefault()

    let select_country = document.querySelector("select");
    let index = select_country.selectedIndex ;

    // console.log(select_country.selectedIndex);  
    // console.log(countries[index].code);
    
    // console.log(country);

    setCountry(countries[index].code);
    
    let URL = `https://holidayapi.com/v1/holidays?pretty&key=${process.env.REACT_APP_API_KEY}&country=${country}&year=${year}`;

    const response = await axios.get(URL);
    let data = response.data;
    setholidays(data.holidays);
    // console.log(country)

  };
  function populateCountry(){
    if(loaded){
      return;
    }
    loaded=true;
    try{
      let select_country = document.querySelector("select");
      
      console.log(select_country);
      countries.map((country)=>{
              select_country.options.add(new Option( country.country ,country.code  ));
      });
      select_country.selectedIndex = 73;
      setCountry("IN");
    }catch(err) {
      window.location.reload();
    }
  }  
  setTimeout(populateCountry,1000);

  return (
    <>
      <div className="heading container m-4">
        
        <div className=" container ms-5 form-section">

          <form className="row " onSubmit={getData} >
          
            <label className="col-sm">
              Select Country
            </label>

            <div className="col-sm">
              
              <select
                className="form-select countries"  
                onChange={(e)=>{
                  console.log(e.target.value);
                  setCountry(e.target.value);
                }}
              >
              </select>
              
            </div>

            <div className="col-sm">
                <button type="submit"
                 className="btn btn-dark col-sm float-start"
                >
                Search
                </button>
            </div>

            
          </form>
        </div>
      </div>
      {/* {populateCountry()} */}
      <div className="holidays">
        {
            holidays.length>0 &&  
                holidays.map(createHoliday)
        }

    </div>
    </>
  );
}

export default Holidays;

// for a custom environmental variable create an env file and write the name of the variabl
// with REACT_APP as prefix ex REACT_APP_API_KEY

// https://holidayapi.com/v1/holidays?pretty&key=f7f0fa02-093c-4031-8d35-c3e99aa50d86&country=IN&year=2022
// need to find a way for country code

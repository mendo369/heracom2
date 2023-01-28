import React,{useState, useEffect} from 'react'
import Header from '../Components/Header/Header'
import Plans from '../Components/Plans/ListOfPlans'
export default function Home() {

  const [plans, setPlans] = useState([]);

  const fetchPlans = () => {
    fetch("../public/planes.json")
      .then((res) => res.json())
      .then((plans) => setPlans(plans));
  };
 
  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <>
        <Header/>
        <Plans plans={plans}/>
    </>
  )
}

import React, { useState, useEffect } from 'react';
import {Button} from '@mui/material';
import { useHistory } from "react-router-dom";
import "./plan-picker.scss";
import { display } from '@mui/system';
import {gsap, Power2} from "gsap";
import {Alert, AlertTitle} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const PlanPicker = (props) => {

  const history = useHistory();

  const [savingsCta, setSavingsCtaState] = useState("Save 16%!");

  console.log("PlanPicker account",props.account);

  



  const goNext = (e) => {

    e.preventDefault();

    const location = {
      pathname: '/intro-payment'
    }
  
    history.push(location);
    
  }

  const yearlyCells = document.getElementsByClassName("yearly");
  const monthlyCells = document.getElementsByClassName("monthly");

  const setRecurance = (recurance) => {

    console.log("PlanPicker toggleRecurance recurance",recurance);

    const recruanceAnimation = gsap.timeline({
      defaults: { // children inherit these defaults
        duration: 0.5,
        ease: Power2.inOut 
      },
    });

    if(recurance === "monthly"){
      // toggle to monthly
      recruanceAnimation.to(yearlyCells,{
        y: -20,
        autoAlpha: 0
      })
      .to(monthlyCells,{
        y: 0,
        autoAlpha: 1
      },"-=80%");
      props.account.recurance = "monthly";
      setSavingsCtaState("Save 16%");
    } else {
       // toggle to yearly
       recruanceAnimation.to(monthlyCells,{
        y: 20,
        autoAlpha: 0
      })
      .to(yearlyCells,{
        y: 0,
        autoAlpha: 1
      },"-=80%");
      props.account.recurance = "yearly"; // does this need to be in State
      setSavingsCtaState("Pay Monthly");
    }
  }
  const toggleRecurance = () => {

    // console.log("PlanPicker toggleRecurance recurance",recurance);

    const recruanceAnimation = gsap.timeline({
      defaults: { // children inherit these defaults
        duration: 0.5,
        ease: Power2.inOut 
      },
    });

    if(props.account.recurance === "yearly"){
      // toggle to monthly
      recruanceAnimation.to(yearlyCells,{
        y: -20,
        autoAlpha: 0
      })
      .to(monthlyCells,{
        y: 0,
        autoAlpha: 1
      },"-=80%");
      props.account.recurance = "monthly";
      setSavingsCtaState("Save 16%");
    } else {
       // toggle to yearly
       recruanceAnimation.to(monthlyCells,{
        y: 20,
        autoAlpha: 0
      })
      .to(yearlyCells,{
        y: 0,
        autoAlpha: 1
      },"-=80%");
      props.account.recurance = "yearly"; // does this need to be in State
      setSavingsCtaState("Pay Monthly");
    }

  }

  useEffect(() => {

    // Premium Plan Cells
    const premiumCellsCollection = document.getElementsByClassName('item--premium');
    const premiumCellsArray = Array.prototype.slice.call( premiumCellsCollection );
    // console.log("premiumCells",premiumCellsArray);

    // Basic Plans Cells
    const basicCellsCollection = document.getElementsByClassName('item--basic');
    const basicCellsArray = Array.prototype.slice.call( basicCellsCollection );
    // console.log("basicCells",basicCellsArray);

    // Premium & Basic Plans Cells
    const allCellsArray = basicCellsArray.concat(premiumCellsArray);
    // console.log("allCells",allCellsArray);

    const setPlan = (plan) => {
      allCellsArray.map(
        cell => {
          cell.classList.remove("active");
          return
        }
      );

      if(plan === "premium"){
        props.account.plan = "premium";
        premiumCellsArray.map(
          cell => {
            cell.classList.add("active");
            return
          }
        );
      } else {
        props.account.plan = "basic";
        basicCellsArray.map(
          cell => {
            cell.classList.add("active");
          }
        );
      }
      console.log("PlanPicker setPlan", props.account);
    }

    const setHoverOnPlan = (plan) => {
      if(plan === "premium"){
        premiumCellsArray.map(
          cell => {
            cell.classList.add("hover");
          }
        );
      } else {
        basicCellsArray.map(
          cell => {
            cell.classList.add("hover");
          }
        );
      }
    }

    const setHoverOffPlans = () => {
      allCellsArray.map(
        cell => {
          cell.classList.remove("hover");
        }
      );
    }

    // Activate interactive plan pickers cells
    premiumCellsArray.map(
      cell => {
        cell.addEventListener("click", () => {setPlan("premium")});
        cell.addEventListener("mouseover", () => {setHoverOnPlan("premium")});
        cell.addEventListener("mouseout", () => {setHoverOffPlans()});
      }
    );

    basicCellsArray.map(
      cell => {
        cell.addEventListener("click", () => {setPlan("basic")});
        cell.addEventListener("mouseover", () => {setHoverOnPlan("basic")});
        cell.addEventListener("mouseout", () => {setHoverOffPlans()});
      }
    );
    
    const newRecurance = props.account.recurance ? props.account.recurance : "monthly"; 
    // const newRecurance = "monthly"; 
    const newPlan = props.account.plan ? props.account.plan : "premium"; 

    setRecurance(newRecurance);

    setPlan(newPlan);
    
    gsap.set(yearlyCells, {
      y: -20,
      autoAlpha: 0
    });


  }, []);

  return (
    <article className="center plan-picker">
      <section className="breadcrumb">
        Step 2 of 3
      </section>
      <section className="card card--wide art__stagger-in art__stagger-out">
        <div className="card__content">
          <h1>Choose the plan that's right for you</h1>
          <p>Enjoy our entire library, plus exclusive streaming access to the biggest Warner&nbsp;Bros. movies of 2022 at no extra cost.</p>
          
          <Alert onClick={toggleRecurance} className="yearly-cta" severity="success">
              Save 16% when you buy the whole year!
            <Button variant="outlined" size="small" >{savingsCta}</Button>
          </Alert>
          
          <div className="plan-compare-chart">

            <div className="sub-grid-row">
              <div className="item item--2 item--value item--basic item--first">Basic</div>
              <div className="item item--3 item--value item--premium item--first">Premium</div>
            </div>
            <div className="sub-grid-row">
              <div className="item item--label yearly-label">
                {/* <MoreVertIcon className="recurance-icon"/> */}
                <span className="monthly">Monthly</span>
                <span className="yearly">Yearly (16% Savings!!)</span>
              </div>
              <div className="item item--value item--basic">
                <span className="monthly">$9.99</span>
                <span className="yearly">$99.99</span>
              </div>
              <div className="item item--value item--premium">
                <span className="monthly">$14.99</span>
                <span className="yearly">$149.99</span>
              </div>
            </div>
            <div className="sub-grid-row">
              <div className="item item--label">Ad Free</div>
              <div className="item item--value item--basic"></div>
              <div className="item item--value item--premium">&#10003;</div>
            </div>
            <div className="sub-grid-row">
              <div className="item item--label">Entire Library</div>
              <div className="item item--value item--basic">&#10003;</div>
              <div className="item item--value item--premium">&#10003;</div>
            </div>
            <div className="sub-grid-row">
              <div className="item item--label">4k UHD</div>
              <div className="item item--value item--basic"></div>
              <div className="item item--value item--premium">&#10003;</div>
            </div>         
            <div className="sub-grid-row">
              <div className="item item--label">Watch on all your devices</div>
              <div className="item item--value item--basic">&#10003;</div>
              <div className="item item--value item--premium">&#10003;</div>
            </div>
            <div className="sub-grid-row">
              <div className="item item--label">Downloads</div>
              <div className="item item--value item--basic item--last"></div>
              <div className="item item--value item--premium item--last">&#10003;</div>
            </div>

          </div>
          
        </div>
        <div className="card__actions flex">
          <Button onClick={goNext} className="next" variant="contained" size="large">Next </Button>
        </div>
        
      </section>
      <section className="card card--wide card--sub">
        <p className="small align-left">
          *4k UHD as available
        </p>
      </section>
      {/* <section className="card card--intro art__stagger-in art__stagger-out">
        Welcome {props.account.email} Sign Up
      </section> */}
    </article>
  );

}

export default PlanPicker;

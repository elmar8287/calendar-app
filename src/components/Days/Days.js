import React from "react";
import "./Days.css";
import arr from "../data/data";

function Days() {
    return (
      <div className="main-grid">
            <div class="week-day-name">MON</div>
            <div class="week-day-name">TUE</div>
            <div class="week-day-name">WEN</div>
            <div class="week-day-name">THU</div>
            <div class="week-day-name">FRI</div>
            <div class="week-day-name">SAT</div>
            <div class="week-day-name">SUN</div>
        {
            arr.map(e=> (
                <div className="grid-item">
                    <span>{e.date}</span>
                </div>
            ))
        }
      </div>
    );
  }
  
export default Days;
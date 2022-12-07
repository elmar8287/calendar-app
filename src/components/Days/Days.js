import React from "react";
import "./Days.css";
import arr from "../data/data";
import Event from "../Event/Event";

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
                  {
                    e.day===1 ? <span>{e.day} {e.month.substring(0, 3)} </span> :
                    <div className={e.day===16 && "day-today"}>{e.day}</div>
                  }

                  {
                    e.day===16 &&
                    <div>
                      <Event />
                    </div>
                  }
                   {
                    e.day===2 &&
                    <div>
                      <Event />
                    </div>
                  }

                </div>
            ))
        }
      </div>
    );
  }
  
export default Days;
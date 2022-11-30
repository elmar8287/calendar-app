import React from "react";
import "./Days.css";

function Days() {
    const arr = [
        {
            date: "01-12-2022",
            title: "Day 1",
            status: true,
            task: "Make a gym"
        },
        {
            date: "02-12-2022",
            title: "Day 2",
            status: true,
            task: "Make a gym"
        },
        {
            date: "03-12-2022",
            title: "Day 3",
            status: true,
            task: "Make a gym"
        },
        {
            date: "04-12-2022",
            title: "Day 4",
            status: true,
            task: "Make a gym"
        },
        {
            date: "05-12-2022",
            title: "Day 5",
            status: true,
            task: "Make a gym"
        },
        {
            date: "06-12-2022",
            title: "Day 6",
            status: true,
            task: "Make a gym"
        },
        {
            date: "07-12-2022",
            title: "Day 7",
            status: true,
            task: "Make a gym"
        },
        {
            date: "08-12-2022",
            title: "Day 8",
            status: true,
            task: "Make a gym"
        },
        {
            date: "09-12-2022",
            title: "Day 9",
            status: true,
            task: "Make a gym"
        },
        {
            date: "10-12-2022",
            title: "Day 10",
            status: true,
            task: "Make a gym"
        }
    ]
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
                    <h3>{e.title}</h3>
                </div>
            ))
        }
      </div>
    );
  }
  
export default Days;
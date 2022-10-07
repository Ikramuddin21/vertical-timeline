import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setTimeline(data))
  }, []);

  return (
    <div className="content-container">
      <div className="content-wrapper">
        <div className="heading">
          <h1>Roadmap</h1>
          <p>The following roadmap lists 2022 milestones.</p>
        </div>

        <div className="timeline-area">
          <div className="timeline-wrapper">
            {
              timeline.map(item => <div className="timeline" key={item.id}>
                <div className="timeline-left">
                  <h1>{item.timelineQuestion}</h1>
                </div>
                <div className={item.boxShadow ? "box-shadow timeline-right" : "timeline-right"}>
                  <div>
                    <h5>{item.timelineHeading}</h5>
                    <ul>
                      {
                        item?.timelineItem.map((listItem, index) => <li key={index}>
                          {listItem}
                        </li>)
                      }
                    </ul>
                  </div>
                </div>
              </div>)
            }
          </div>
        </div>
        <div className="footer">
          <p>To be announced</p>
        </div>
      </div>
    </div>
  );
}

export default App;

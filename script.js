const dailyLink = document.querySelector('#daily');
const weeklyLink = document.querySelector('#weekly');
const monthlyLink = document.querySelector('#monthly');

const fetchData = async () => {
  const response = await fetch('data.json');
  const results = await response.json();
  
  return results;
}

fetchData()
  .then(results => {
    console.log("Promise resolved:", results)
    
    //Render stats dynamically
    let dailyOutput = '';
    let weeklyOutput = '';
    let monthlyOutput = '';
    
    for(let i = 0; i < results.length; i++){
      
      dailyOutput += `
        <div class="col">
        <article>
          <div class="image image_1">
            <img src=${results[i].imageURL}>
          </div>
          <div class="card work">
            <div class="activity">
              <span class="activity_type">${results[i].title}</span>
              <span class="ellipsis"><img src="images/icon-ellipsis.svg" alt="ellipsis"></span>
            </div>
            
            <div class="timeDisp">
              <div class="time">${results[i].timeframes.daily.current}hrs</div>
              <div class="history">Yesterday - ${results[i].timeframes.daily.previous}hrs</div>
            </div>
          </div>
        </article>
        </div>
      `;
      
      weeklyOutput += `
        <div class="col">
        <article>
          <div class="image image_1">
            <img src=${results[i].imageURL}>
          </div>
          <div class="card work">
            <div class="activity">
              <span class="activity_type">${results[i].title}</span>
              <span class="ellipsis"><img src="images/icon-ellipsis.svg" alt="ellipsis"></span>
            </div>
            
            <div class="timeDisp">
              <div class="time">${results[i].timeframes.weekly.current}hrs</div>
              <div class="history">Last Week - ${results[i].timeframes.weekly.previous}hrs</div>
            </div>
          </div>
        </article>
        </div>
      `;
      
      monthlyOutput += `
        <div class="col">
        <article>
          <div class="image image_1">
            <img src=${results[i].imageURL}>
          </div>
          <div class="card work">
            <div class="activity">
              <span class="activity_type">${results[i].title}</span>
              <span class="ellipsis"><img src="images/icon-ellipsis.svg" alt="ellipsis"></span>
            </div>
            
            <div class="timeDisp">
              <div class="time">${results[i].timeframes.monthly.current}hrs</div>
              <div class="history">Last Month - ${results[i].timeframes.monthly.previous}hrs</div>
            </div>
          </div>
        </article>
        </div>
      `;
    }
    
    //Default weekly stats
    const grid = document.querySelector('.grid');
    grid.innerHTML = weeklyOutput;
    
    //Daily stats
    dailyLink.addEventListener('click', ()=> {
      grid.innerHTML = dailyOutput;
      
      daily.classList.add('active');
      weekly.classList.remove('active');
      monthly.classList.remove('active');
    });
    
    //Weekly sats
    weeklyLink.addEventListener('click', ()=> {
      grid.innerHTML = weeklyOutput;
      
      daily.classList.remove('active');
      weekly.classList.add('active');
      monthly.classList.remove('active');
    });
    
    //Monthly stats
    monthlyLink.addEventListener('click', ()=> {
      grid.innerHTML = monthlyOutput;
      
      daily.classList.remove('active');
      weekly.classList.remove('active');
      monthly.classList.add('active');
    });
  })
  .catch(err => console.log("Promise rejected", err));

window.onload = fetchData;
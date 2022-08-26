const daily = document.querySelector('#daily');
const weekly = document.querySelector('#weekly');
const monthly = document.querySelector('#monthly');
const card1 = document.querySelector('.work');
const card2 = document.querySelector('.play');
const card3 = document.querySelector('.study');
const card4 = document.querySelector('.exercise');
const card5 = document.querySelector('.social');
const card6 = document.querySelector('.self-care');



daily.addEventListener ('click', fetching)
    function fetching() {
    const daily_stats = async ()=> {

        const response = await fetch('data.json');
        if (response.status !== 200) {
            throw new Error("Data fetch failed")
        }
        const data = await response.json();
    
        let output1 = '';
        let output2 = '';
        let output3 = '';
        let output4 = '';
        let output5 = '';
        let output6 = '';


            output1 += `
            <div class="activity">
                <span class="activity_type">${data[0].title}</span>
                <span class="ellipsis"><img src="images/icon-ellipsis.svg" alt="ellipsis"></span>
            </div>
            <div class="time">${data[0].timeframes.daily.current}hrs</div>
            <div class="history">Yesterday - ${data[0].timeframes.daily.previous}hrs</div>`

            output2 += `
            <div class="activity">
                <span class="activity_type">${data[1].title}</span>
                <span class="ellipsis"><img src="images/icon-ellipsis.svg" alt="ellipsis"></span>
            </div>
            <div class="time">${data[1].timeframes.daily.current}hrs</div>
            <div class="history">Yesterday - ${data[1].timeframes.daily.previous}hrs</div>`

            output3 += `
            <div class="activity">
                <span class="activity_type">${data[2].title}</span>
                <span class="ellipsis"><img src="images/icon-ellipsis.svg" alt="ellipsis"></span>
            </div>
            <div class="time">${data[2].timeframes.daily.current}hrs</div>
            <div class="history">Yesterday - ${data[2].timeframes.daily.previous}hrs</div>`

            output4 += `
            <div class="activity">
                <span class="activity_type">${data[3].title}</span>
                <span class="ellipsis"><img src="images/icon-ellipsis.svg" alt="ellipsis"></span>
            </div>
            <div class="time">${data[3].timeframes.daily.current}hrs</div>
            <div class="history">Yesterday - ${data[3].timeframes.daily.previous}hrs</div>`

            output5 += `
            <div class="activity">
                <span class="activity_type">${data[4].title}</span>
                <span class="ellipsis"><img src="images/icon-ellipsis.svg" alt="ellipsis"></span>
            </div>
            <div class="time">${data[4].timeframes.daily.current}hrs</div>
            <div class="history">Yesterday - ${data[4].timeframes.daily.previous}hrs</div>`

            output6 += `
            <div class="activity">
                <span class="activity_type">${data[5].title}</span>
                <span class="ellipsis"><img src="images/icon-ellipsis.svg" alt="ellipsis"></span>
            </div>
            <div class="time">${data[5].timeframes.daily.current}hrs</div>
            <div class="history">Yesterday - ${data[5].timeframes.daily.previous}hrs</div>`

            card1.innerHTML = output1;
            card2.innerHTML = output2;
            card3.innerHTML = output3;
            card4.innerHTML = output4;
            card5.innerHTML = output5;
            card6.innerHTML = output6;

        return(data);
    };
    daily_stats()
        .then(data => {
            console.log("successfully resolved: ", data);
        })
        .catch(err => {
            console.log("Rejected:", err.message);
        });

    
    daily.classList.add ('active');
    weekly.classList.remove ('active');
    monthly.classList.remove ('active');

}


weekly.addEventListener ('click', getting)
    function getting() {
    const daily_stats = async ()=> {

        const response = await fetch('data.json');
        if (response.status !== 200) {
            throw new Error("Data fetch failed")
        }
        const data = await response.json();
    
        let output1 = '';
        let output2 = '';
        let output3 = '';
        let output4 = '';
        let output5 = '';
        let output6 = '';


            output1 += `
            <div class="activity">
                <span class="activity_type">${data[0].title}</span>
                <span class="ellipsis"><img src="images/icon-ellipsis.svg" alt="ellipsis"></span>
            </div>
            <div class="time">${data[0].timeframes.weekly.current}hrs</div>
            <div class="history">Last Week - ${data[0].timeframes.weekly.previous}hrs</div>`

            output2 += `
            <div class="activity">
                <span class="activity_type">${data[1].title}</span>
                <span class="ellipsis"><img src="images/icon-ellipsis.svg" alt="ellipsis"></span>
            </div>
            <div class="time">${data[1].timeframes.weekly.current}hrs</div>
            <div class="history">Last Week - ${data[1].timeframes.weekly.previous}hrs</div>`

            output3 += `
            <div class="activity">
                <span class="activity_type">${data[2].title}</span>
                <span class="ellipsis"><img src="images/icon-ellipsis.svg" alt="ellipsis"></span>
            </div>
            <div class="time">${data[2].timeframes.weekly.current}hrs</div>
            <div class="history">Last Week - ${data[2].timeframes.weekly.previous}hrs</div>`

            output4 += `
            <div class="activity">
                <span class="activity_type">${data[3].title}</span>
                <span class="ellipsis"><img src="images/icon-ellipsis.svg" alt="ellipsis"></span>
            </div>
            <div class="time">${data[3].timeframes.weekly.current}hrs</div>
            <div class="history">Last Week - ${data[3].timeframes.weekly.previous}hrs</div>`

            output5 += `
            <div class="activity">
                <span class="activity_type">${data[4].title}</span>
                <span class="ellipsis"><img src="images/icon-ellipsis.svg" alt="ellipsis"></span>
            </div>
            <div class="time">${data[4].timeframes.weekly.current}hrs</div>
            <div class="history">Last Week - ${data[4].timeframes.weekly.previous}hrs</div>`

            output6 += `
            <div class="activity">
                <span class="activity_type">${data[5].title}</span>
                <span class="ellipsis"><img src="images/icon-ellipsis.svg" alt="ellipsis"></span>
            </div>
            <div class="time">${data[5].timeframes.weekly.current}hrs</div>
            <div class="history">Last Week - ${data[5].timeframes.weekly.previous}hrs</div>`

            card1.innerHTML = output1;
            card2.innerHTML = output2;
            card3.innerHTML = output3;
            card4.innerHTML = output4;
            card5.innerHTML = output5;
            card6.innerHTML = output6;

        return(data);
    };
    daily_stats()
        .then(data => {
            console.log("successfully resolved: ", data);
        })
        .catch(err => {
            console.log("Rejected:", err.message);
        });


    daily.classList.remove ('active');
    weekly.classList.add ('active');
    monthly.classList.remove ('active');
}


monthly.addEventListener ('click', processing)
    function processing() {
    const daily_stats = async ()=> {

        const response = await fetch('data.json');
        if (response.status !== 200) {
            throw new Error("Data fetch failed")
        }
        const data = await response.json();
    
        let output1 = '';
        let output2 = '';
        let output3 = '';
        let output4 = '';
        let output5 = '';
        let output6 = '';


            output1 += `
            <div class="activity">
                <span class="activity_type">${data[0].title}</span>
                <span class="ellipsis"><img src="images/icon-ellipsis.svg" alt="ellipsis"></span>
            </div>
            <div class="time">${data[0].timeframes.monthly.current}hrs</div>
            <div class="history">Last Month - ${data[0].timeframes.monthly.previous}hrs</div>`

            output2 += `
            <div class="activity">
                <span class="activity_type">${data[1].title}</span>
                <span class="ellipsis"><img src="images/icon-ellipsis.svg" alt="ellipsis"></span>
            </div>
            <div class="time">${data[1].timeframes.monthly.current}hrs</div>
            <div class="history">Last Month - ${data[1].timeframes.monthly.previous}hrs</div>`

            output3 += `
            <div class="activity">
                <span class="activity_type">${data[2].title}</span>
                <span class="ellipsis"><img src="images/icon-ellipsis.svg" alt="ellipsis"></span>
            </div>
            <div class="time">${data[2].timeframes.monthly.current}hrs</div>
            <div class="history">Last Month - ${data[2].timeframes.monthly.previous}hrs</div>`

            output4 += `
            <div class="activity">
                <span class="activity_type">${data[3].title}</span>
                <span class="ellipsis"><img src="images/icon-ellipsis.svg" alt="ellipsis"></span>
            </div>
            <div class="time">${data[3].timeframes.monthly.current}hrs</div>
            <div class="history">Last Month - ${data[3].timeframes.monthly.previous}hrs</div>`

            output5 += `
            <div class="activity">
                <span class="activity_type">${data[4].title}</span>
                <span class="ellipsis"><img src="images/icon-ellipsis.svg" alt="ellipsis"></span>
            </div>
            <div class="time">${data[4].timeframes.monthly.current}hrs</div>
            <div class="history">Last Month - ${data[4].timeframes.monthly.previous}hrs</div>`

            output6 += `
            <div class="activity">
                <span class="activity_type">${data[5].title}</span>
                <span class="ellipsis"><img src="images/icon-ellipsis.svg" alt="ellipsis"></span>
            </div>
            <div class="time">${data[5].timeframes.monthly.current}hrs</div>
            <div class="history">Last Month - ${data[5].timeframes.monthly.previous}hrs</div>`

            card1.innerHTML = output1;
            card2.innerHTML = output2;
            card3.innerHTML = output3;
            card4.innerHTML = output4;
            card5.innerHTML = output5;
            card6.innerHTML = output6;

        return(data);
    };
    daily_stats()
        .then(data => {
            console.log("successfully resolved: ", data);
        })
        .catch(err => {
            console.log("Rejected:", err.message);
        });


    daily.classList.remove ('active');
    weekly.classList.remove ('active');
    monthly.classList.add ('active');
}


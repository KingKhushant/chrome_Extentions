async function getMatchData() {
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=c7041aa9-3da7-443d-b65e-260c204f44fb&offset=0")
        .then(data => data.json())
        .then(data => {
            if(data.status != "success") return;
            const matchesList = data.data;
            if(!matchesList)return [];
            const relevantData = matchesList.filter(match => match.series_id == "a63f79d5-954a-4730-b1bb-8546f1874737").map(match => `${match.name}, ${match.status}`);
            console.log({relevantData});
            document.getElementById("matches").innerHTML=relevantData.map(match => `<li>${match}</li>`).join('');
            return relevantData; 
        })
        .catch(e => console.log(e));
}
getMatchData();
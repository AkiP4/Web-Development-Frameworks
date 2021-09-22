import React from "react";



function App() {
    return (
        <div class="mainFeed">
            <div class="newsContainer">
                <div class="newsContent">
                    <div class="newsCategory"> Koronavirus </div>
                            <img class="newsImage" src="images/stm.png" alt="Testi"/>
                        <div class="statusRed">HS seuraa</div>
                    <h2 class="newsHeadline"><div class="newsHighlight"> Päivittyvä seuranta |</div>STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan </h2>
                    <div class="subNews">
                        <p><b>Koronaviruksen vaikutukset Suomessa</b></p>
                        <table class="newsTable">
                        <tr class="subNewsHeadline">
                            <th class="subNewsHeadlineLeft">Tartunnat yhteensä</th>
                            <th class="subNewsHeadlineRight">Tuoreimmat 14 päivää</th>
                            <th class="subNewsHeadlineRight">Edeltävät 14 päivää</th>
                        </tr>
                        <tr class="subNewsNumbers">
                            <th>7776</th>
                            <th class="subNewsHeadlineRight"><img class="arrowUp" src="images/arrowUp.png"></img>293</th>
                            <th class="subNewsHeadlineRight">132</th>
                        </tr>
                        <tr>
                        <th class="subNewsHeadline">Kuolleet</th>
                        <th></th>
                        <th></th>
                        </tr>
                        <tr class="subNewsNumbers">
                        <th>334</th>
                        <th class="subNewsHeadlineRight"><img class="arrowUp"src="images/arrowUp.png"></img>5</th>
                        <th class="subNewsHeadlineRight">1</th>
                        </tr>
                        <tr>
                        <th class="subNewsHeadline">Sairaalahoidossa</th>
                        </tr>
                        <tr class="subNewsNumbers">
                        <th class="theOrange5">5</th>
                        </tr>
                        </table>
                        <div>
                            <img class="data"src="images/data.png"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div  class="SideSection">
                <div>
                    
                        <div class="SideSectionContent">
                        <div class="sideHead">Luetuimmat</div>
                        <div class="upmostNews"><div class="newsBorder"><h1 class="newsNumber">1</h1><p><b>Rikosepäilyt | </b>EIT-huijaus: Kuolleeksi väitetyn irakilaismiehen tytär calehteli perheen taustoista jo turvapaikkahakemuksessa</p></div></div>
                        <div class="newsBorder"><h1 class="newsNumber">2</h1> <p><b>HS Vantaa | </b>Vantaalle nousi vankilan näköinen päiväkoti, jota pilkataan nyt surutta verkossa</p></div>
                        <div class="newsBorder"><h1 class="newsNumber">3</h1> <p><b>Päivittyvä seuranta | </b>STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan - Ministeriö haluaa varmistaa valmisteiden riittävyyden</p></div>
                        <div class="newsBorder"><h1 class="newsNumber">4</h1> <p><b>Nyt.fi | </b>Harry Styles puki ylleen suomalaisen suunnittelijan neuleen, nyt tätä "mummon tilkkutäkkiä" neulovat kymmenet tuhannet ympäri maailman - Soitimme vaatesuunnittelijalle</p></div>
                        <div class="newsBorder"><h1 class="newsNumber">5</h1> <p><b>Rikosepäilyt | </b>Atte Jääskeläinen sai syytteet liikenneturvallisuuden vaarantamisesta ja vammantuottamuksesta - "Olen myöntänyt syyllisyyteni"</p></div>
                        <div class="newsBorder"><h1 class="newsNumber">6</h1> <p><b>Helsinki | </b>Työryhmän ehdotus julki: Jättimäisestä hiilivoimalasta halutaan täysin uudenlainen tapahtumapaikka kaupungin asukkaille </p></div>
                        </div>
                </div>
            </div>
        </div>


            
        ) 
}


export default App;


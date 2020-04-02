import React, {Component} from "react";



class spec extends Component {

    state = {
        kjønn : "Mann",
        vekt: ' ',
        høyde: ' ',
        mål: "Maintenance",
        alder:'',
        anivå:'',
        aMåltid:''
    }


    onChange = (e) => {
        this.setState({vekt: e.target.value});
    }
    onChange1 = (e) => {
        this.setState({høyde: e.target.value});
    }

    onChangeK = (e) => {
        this.setState({kjønn: e.target.value});
    }
    onChangeM = (e) => {
        this.setState({mål: e.target.value});
    }
    onChangeA = (e) => {
        this.setState({alder: e.target.value});
    }
    onChangeN = (e) => {
        this.setState({anivå: e.target.value});
    }
    onChangeAM = (e) => {
        const valueSelectedByUser = parseInt(e.target.value);
        this.setState({aMåltid: valueSelectedByUser});
    }



    kalkuler = () => {

        var proteinb = 1.8;
        var carbob = 3.0;

        var proteinc = 2.4;
        var carboc = 2.0;

        var proteinm = 1.6;
        var carbom = 2.5;




        var v = this.state.vekt;
        var h = this.state.høyde;
        var m = this.state.mål;
        var a = this.state.alder;
        var n = this.state.anivå;
        var am = this.state.aMåltid;

        if(this.state.kjønn == "Mann") {
        var cals = (88.362+(13.397*v) + (4.799*h) - (5.677*a));
        } else {
            var cals = (447.593+(9.247*v) + (3.098*h) - (4.330*a));
        }
        // Må legge til aktivetsnivå + kjønn for å få den korrekt.
        // også finne en plan for hvor mye du skal øke hver uke osv.
        var c ;
        var p ;

        switch(n){
            case "Lite aktiv":
                cals = cals + 200;
            break;
            case "Aktiv":
                cals = cals + 400;
            break;
            case "Veldig aktiv":
                cals = cals + 600;
            break;
            default:
        }


       switch(m) {
           case "Cut" :
               c = v * carboc;
               p = v * proteinc;
               cals = cals - 200;
               break;
           case "Bulk" :
               c = v * carbob ;
               p = v * proteinb ;
               cals = cals + 500;
               break;
           case "Maintenance" :
              c = v*carbom ;
              p = v*proteinm ;
              break;
           default :
               c = "Feil input";
       }

       console.log(c);



        var fCals = cals*0.30;
        var f = fCals / 9;
        var f = f.toFixed(2);

        cals = cals.toFixed(2);


        document.getElementById("Calories").innerHTML = cals;

        document.getElementById("Carbs").innerHTML = c + " G";
        document.getElementById("Proteiner").innerHTML = p+ " G";

        document.getElementById("Fat").innerHTML = f + " G" ;


        document.getElementById("FatP").innerHTML = (f/am).toFixed(2) + " G";


        document.getElementById("CaloriesP").innerHTML = (cals/am).toFixed(2);

        document.getElementById("CarbsP").innerHTML = (c/am).toFixed(2) + " G";
        document.getElementById("ProteinerP").innerHTML = (p/am).toFixed(2 )+ " G";





        document.getElementById("dag").innerHTML = "Næring pr måltid | " + am + " Måltid dagen";

    }

    render() {
        return (
            <div className="inp">
                <div style={specs}>

                    <input
                        type='number'
                        name='alder'
                        style={{flex: '10', padding: '10px', width:'50px'}}
                        placeholder='Alder'
                        onChange={this.onChangeA}
                    />

                    <input
                        placeholder="Vekt"
                        type="text"
                        name="vekt"
                        style={{flex: '10', padding: '10px'}}
                        onChange={this.onChange}
                    />
                    <input
                        type="text"
                        name="høyde"
                        style={{flex: '10', padding: '10px'}}
                        checked={this.state.checked}
                        placeholder='Høyde'
                        onChange={this.onChange1}

                    />
                    <h2> Kjønn </h2>
                    <div className='kjønn'>
                        <label> <div className="lab">  Mann </div>
                       <input
                        type="radio"
                        name="Kjønn"
                        style={{flex: '10', padding: '10px'}}
                        onChange={this.onChangeK}
                        value="Mann"
                        checked={this.state.kjønn === "Mann"}
                        />
                     <span className="checkmark"> </span>
                     </label>


                        <label> <div className='lab'> Dame </div>
                    <input

                        type="radio"
                        name="Kjønn"
                        style={{flex: '10', padding: '10px'}}
                        placeholder="Dame"
                        value="Dame"
                        onChange={this.onChangeK}
                        checked={this.state.kjønn === "Dame"}
                    />
                            <span className="checkmark"> </span>
                        </label>

                    </div>
                    <h2> Mål </h2>
                    <div className='mål'>
                    <label>   <div className="lab"> Cut </div>
                    <input

                        type="radio"
                        name="Mål"
                        placeholder="Cut"
                        value="Cut"
                        onChange={this.onChangeM}
                        checked={this.state.mål === "Cut"}


                    />
                    <span className="checkmark"> </span>
                   </label>
                    <label> <div className="lab"> Bulk </div>
                    <input

                        type="radio"
                        name="Mål"
                        placeholder="Bulk"
                        value="Bulk"
                        onChange={this.onChangeM}
                        checked={this.state.mål === "Bulk"}
                    />
                    <span className="checkmark"> </span>
                 </label>



                    </div>
                    <h2> Aktivitet </h2>
                    <div className="Aktivitet">
                        <label> <div className="lab"> Lite aktiv </div>
                            <input

                                type="radio"
                                name="anivå"
                                placeholder="Lite aktiv"
                                value="Lite aktiv"
                                onChange={this.onChangeN}
                                checked={this.state.anivå === "Lite aktiv"}
                            />
                            <span className="checkmark"> </span>
                        </label>
                        <label> <div className="lab"> Aktiv </div>
                            <input

                                type="radio"
                                name="anivå"
                                placeholder="Aktiv"
                                value="Aktiv"
                                onChange={this.onChangeN}
                                checked={this.state.anivå === "Aktiv"}
                            />
                            <span className="checkmark"> </span>
                        </label>
                        <label> <div className="lab"> Veldig aktiv </div>
                            <input

                                type="radio"
                                name="anivå"
                                placeholder="Veldig aktiv"
                                value="Veldig aktiv"
                                onChange={this.onChangeN}
                                checked={this.state.anivå === "Veldig aktiv"}
                            />
                            <span className="checkmark"> </span>
                        </label>
                    </div>
                    <label> <div className="am">  Måltid pr dag </div>
                    <select onChange={this.onChangeAM} >
                        <option> 1 </option>
                        <option> 2 </option>
                        <option> 3 </option>
                        <option> 4 </option>
                        <option> 5 </option>
                        <option> 6 </option>
                        <option> 7 </option>
                        <option> 8 </option>
                    </select>
                    </label>
                    <button style={btnStyle} type="button" onMouseOver={btnStyleH} onClick={this.kalkuler}> Regn ut  </button>
                </div>


                <div className='nut' style={nut}>
                <h2 > Næring pr dag </h2>

                <table>
                    <tr>
                        <th> Calories </th>
                    <th> Proteiner </th>
                        <th> Carbs </th>
                        <th> Fat </th>
                    </tr>
                    <tr>
                        <th id="Calories"> 0 </th>
                          <th id="Proteiner">  0 </th>
                        <th id="Carbs"> 0 </th>
                        <th id="Fat" > 0 </th>
                    </tr>



                </table>
                    <h2 id="dag"> Næring pr måltid </h2>
                    <table>
                        <tr>
                            <th> Calories </th>
                            <th> Proteiner </th>
                            <th> Carbs </th>
                            <th> Fat </th>
                        </tr>
                        <tr>
                            <th id="CaloriesP"> 0 </th>
                            <th id="ProteinerP">  0 </th>
                            <th id="CarbsP"> 0 </th>
                            <th id="FatP" > 0 </th>
                        </tr>



                    </table>


                </div>


            </div>
        );
    }

}

export default spec;
const nut = {
    font: 'arial',
    position:'relative',

}


const btnStyle =  {

    color:'black',
    font:"arial",
    background:'smoke-grey',
    border: 'none',
    padding: '10px 15px',
    borderRadius:'50%',
    height: '60px',
    width: '100px',
    cursor: 'pointer'


}
const btnStyleH = {
  background:'grey'
}


const specs = {
    background: 'grey',
    padding:'20px'
}
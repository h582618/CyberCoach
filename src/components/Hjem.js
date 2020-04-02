import React from 'react';

const Hjem  = () => {
return(
      <div>
      <h1> Velkommen til Fitspo </h1>
          <h4> Velg ditt mål </h4>

          <div style={container}>
                  <div style={{background:'blue', width:'50px', height:'50px'}}> 1 </div>
                  <div style={{background:'green',  width:'50px', height:'50px' }}> 2 </div>
                  <div style={{background:'Yellow',  width:'50px', height:'50px'}} > 3 </div>
          </div>
      </div>


    );
};

export default Hjem;

const container = {
    display:'flex',
    alignItems:'center'
}


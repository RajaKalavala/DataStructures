const nemo = ["nemo"];

function findNemo(array : any) {
  for(let i=0; i<array.length; i++){
    if(array[i] === "nemo"){
      console.log('Found Nemo');
    }
  }
}

findNemo(nemo);
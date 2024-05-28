# <---------------useCallback hook------------------>

lets us chache a function definition between re-render.

  const chachefn=useCallback(fn,dependencies);
  it memorizes the content


# React limits the number of renders to prevent an infinite loop.




# <----------------------useEffect hook------------------------------->

        useEffect(fn,[dependencies]);
1.  called at page load.
2.  called if we make changes on dependency array.


# <----------------------useRef hook------------------------------->

        reference hook
        if we want any reference.

        const passwordRef=useRef(default value)




# <-------------------Custom Hooks--------------------------->

import { useEffect,useState } from "react";

 function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch( `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
       .then((res)=>res.json())
       .then((res)=>setData(res[currency]))

       console.log(data);
    },[currency])

    console.log(data);

    return data

 }


 export default useCurrencyInfo;




# <----------------UseID Hook---------------------->

Generating unique IDs that can be passed to accessbility attributes.


const id=useId()



 
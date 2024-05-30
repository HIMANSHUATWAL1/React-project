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



 # <-----------------React-Router-DOM------------------------->


 Link--> used in place of anchor tag,
 because using <a> tag our page will refresh and react haven't any concept .

 (<Link to="/">)

 NavLink---> 




 <Outlet/>   ---->  takes jsx component  as base and it changes dynammically any component with in it. 


 Loader()------->If we want fetch data from any api then with the help of this we can directly call the api from here 



 # <----------------ContextAPI----------------------->


 prop drilling---->

 when we directly access the data /props from the globel object.


 for this we use context api.


 Redux--> Is used for structural state management.


 Libraries for state management---->

 Redux,react-Redux,zustand,Redux-toolkit(RTK)



 # <----------creating userContext------------>

 import React from "react";

const userContext=React.createContext()


export default userContext;

here we use userContext as a "Provider" means using as a wrapper -->
<userContext>
// here every component has access of userContext or every state. 
</userContext>

 
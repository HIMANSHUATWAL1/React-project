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

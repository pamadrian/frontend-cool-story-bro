1 - create component / page
2 - fetch the data I need
2.1 - create a redux slice ( actions, reducer, selectors)
2.2 - create a thunk (action) to do my data fetching
2.3 - back in the page/component, dispatch my new thunk (action)
3 - Server side
3.1 - create the endpoint necessary to get the data from the DB
3.2 - send the results of the query to the frontend ( res.send(......) )
4 - put my response.data into the reducer
4.1 - create an action creator. A function that returns an object with a type and payload
{
type: "WHATEVER_YOU_CALL_IT",
payload: data || null
}
4.2 - dispatch the action creator (dispatch(actionCreator(response.data)))
5 - Reducer
5.1 - create a case to handle our need. Each case has to match the type of an action creator
5.1.1 - check if we are getting here with clg
5.2 - manipulate the data as you need to
5.2.1 - check if the state looks the way we want it to, as in, does it have the data in the right place
5.3 - return a new state
6 - create a selector. Selector select data from the redux state
7 - use the selector in the page/component ( useSelector(SELECTOR) )
8 - RENDER the data

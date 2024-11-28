# Food-ordering-App

npm install --save-dev parcel

let filteredList;
filteredList = mock_restaurants;
// const[filteredList] = useState(mock_restaurants);

    let [restaurants] = useState(mock_restaurants);

    Shimmer=Skeleton

   rm -rf .parcel-cache 

    npm cache clean --force
    npm update parcel

rm -rf node_modules package-lock.json
Lazy loading - to improve performance (laod when we actually need this )

Prop drilling

useContext ,comp render even 1 component change ,u use usecontext in 5 component

Redux:
RTK(newer version) - react toolkit
global( pool) copy of object
unorganize ,loads => overcome
Store(all slices)

---

logical slice (initial value [])
click + button => call(dispatches,triger) an action(add,remove,edit) => triger function which knows as reducer => reducer will update the cart(slice)-complete writing data=>selector (reading data from card object slice)=> update UI
WHOLE PROCESS IS KNOWS AS SUBSCRIBING (TO THE STONE)

card sunscribe to card store

disptach + reducer(write) = RTK
react redux -selector(read)

configureStore (redux js toolkit)=> edit
<Provide> child can access store

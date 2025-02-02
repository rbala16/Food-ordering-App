# Food-ordering-App

npm install --save-dev parcel

git pull --rebase origin main

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

npm init jest@latest

The following questions will help Jest to create a suitable configuration for your project

√ Would you like to use Jest when running "test" script in "package.json"? ... yes
√ Would you like to use Typescript for the configuration file? ... no
× Choose the test environment that will be used for testing » jsdom (browser-like)

Aborting...

bala1@Rajni97 MINGW64 ~/Documents/Pragra/Projects/Food-ordering-App (components)

added 12 packages, and audited 533 packages in 5s

133 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

bala1@Rajni97 MINGW64 ~/Documents/Pragra/Projects/Food-ordering-App (components)
The following questions will help Jest to create a suitable configuration for your project

√ Would you like to use Jest when running "test" script in "package.json"? ... yes
√ Would you like to use Typescript for the configuration file? ... no
√ Choose the test environment that will be used for testing » jsdom (browser-like)
√ Do you want Jest to add coverage reports? ... yes
√ Which provider should be used to instrument code for coverage? » v8
√ Automatically clear mock calls, instances, contexts and results before every test? ... yes





https://bala-food-club.web.app
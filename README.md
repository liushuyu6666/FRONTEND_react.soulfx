### How to start

Runs the app in the development by `npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



### improvements

1. when I found one of the `appid` is unlocked, I debugged the code and correct a bug relevant to the `componentDidMount`
2. In `Home.jsx`, I create a mechanism to handle with error message
3. I found the response of `openweathermap` contains a special attribute named icon which pairs with the icon name it provides, so I fetch that attribute and use this to avoid maintain a map variables.

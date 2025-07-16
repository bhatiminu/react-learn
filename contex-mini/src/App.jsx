import Login from "./components/login"
import Profile from "./components/Profile"
import UserContextProvider from "./contex/UserContextProvider"

function App() {


  return (
    <UserContextProvider>
      <h2>Hello</h2>
 <Login />
 <Profile/>
    </UserContextProvider>
  )
}

export default App

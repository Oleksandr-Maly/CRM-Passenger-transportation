
function App() {

  return (
    <div>
      <h1>Hello world</h1>
      <Routes>
        <Route path='/' element={UserPage} />
        <Route path='/login' element={LoginPage} />
        <Route path='/signup' element={SignUpPage} />
      </Routes>
    </div>
  )
}

export default App

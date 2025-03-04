const renderApp = document.getElementById("render-app")
const reactRoot = ReactDOM.createRoot(renderApp)

reactRoot.render(
  <>
    <Heading />
    <Homepage />
  </>
)
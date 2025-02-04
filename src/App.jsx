import "./App.css";
import MultiSelectDropdown from "./components/dropdown";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "gray", padding: "1rem" }}>
        <a href="https://makyo.co" target="_blank">
          <img
            src="https://makyo.co/wp-content/uploads/2024/03/makyo-logo-reverse-rgb-1059px@72ppi.png"
            className="logo"
            alt="makyo"
          />
        </a>
      </div>
      <h1>Dropdown Test</h1>
      <MultiSelectDropdown
        id="default-dropdown"
        options={[
          "Option 1",
          "Option with icon",
          "Long Long Option 3",
          "Long Long Long Option 4",
          "Long Long Long Long Option 5",
          "Long Long Long Long Long Option 6",
        ]}
        placeholder="Select options..."
        label="Label"
        withSearch={true}
        usePortal={false}
        multiple={true}
      />
    </>
  );
}

export default App;

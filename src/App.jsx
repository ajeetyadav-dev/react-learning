import { useState } from "react";
function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!formData.email.includes("@")) {
        setError("Please enter a valid email address.");
        return;
      }
      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters long.");
        return;
      }
      setError("");
      alert("Form submitted successfully!");
    };
    return (
      <div style={{ width: "350px", margin: "50px auto" }}>
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} style={{ width: "100%", padding: "10px", marginBottom: "15px" }} />
          <input type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} style={{ width: "100%", padding: "10px", marginBottom: "15px" }} />

          {
            error && <p style={{ color: "red" }}>{error}</p>

          }
          <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>Login</button>
        </form>
      </div>
    );
  }
  export default App;
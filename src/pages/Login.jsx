import { useState } from "react";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);

    // Yahan API call karke backend ko bhej sakte ho
  };

// WHEN WE WILL USE BACKEND API THAT TIME IT WILL BE UNCOMMENT AND ABOUVE CODE WILL BE REMOVE
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState(""); // response ke liye

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Form data ko ek object me rakhenge
//     const userData = {
//       username,
//       password,
//     };

//     try {
//       // ✅ API call (example: POST request to http://localhost:5000/login)
//       const response = await fetch("http://localhost:5000/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage("✅ Login successful!");
//         console.log("Response:", data);
//       } else {
//         setMessage("❌ Login failed: " + data.message);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setMessage("❌ Server error, please try again later.");
//     }
//   };


    return (
        <>
        <section>
            <div className="card bg-base-100 w-96 shadow-sm mx-auto mt-6 py-3 px-3">
                <div className="text-center">
                    <figure>
                        <img src="../frontend/images/login.jpg" className=" rounded-2xl mx-auto" />
                    </figure>
                </div>
                <div className="card-body">
                    <div>
                        <h2 className="card-title">Login</h2>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                            <label className="input">
                                <i className="fa-solid fa-user"></i>
                                <input
                                type="text"
                                className="grow"
                                placeholder="Enter Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                />
                            </label>
                            </div>
                            <div className="mt-3">
                            <label className="input">
                                <i className="fa-solid fa-key"></i>
                                <input
                                type="password"
                                className="grow"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                />
                            </label>
                            </div>
                            <div className="mt-3">
                            <button type="submit" className="btn btn-primary w-full">
                                Login
                            </button>
                            </div>
                        </form>
                    </div>          
                </div>
            </div>
        </section>
        </>
    )
}

export default Login;
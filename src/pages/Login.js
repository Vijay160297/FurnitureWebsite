// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for styling
 import bg6 from './images/bg6.jpeg';
// import bg5 from './images/bg5.jpeg';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form submission logic here
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//     <div
//       className="container-fluid d-flex justify-content-center align-items-center"
//       style={{
//         height: '100vh',
//         backgroundImage: {bg6},
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed',
//       }}
//     >
//       <div
//         className="card shadow-sm"
//         style={{ width: '100%', maxWidth: '400px', opacity: 0.9 }}
//       >
//         <div className="card-body">
//           <h3 className="card-title text-center mb-4">Login</h3>

//           {/* Inside Image (e.g., logo or icon) */}
//           <div className="text-center mb-4">
//             <img
//               src={bg5}// Replace with your image URL
//               alt="Logo"
//               className="img-fluid"
//             />
//           </div>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">Email address</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="password" className="form-label">Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="d-grid gap-2">
//               <button type="submit" className="btn btn-primary">Login</button>
//             </div>
//             <div className="mt-3 text-center">
//               <a href="/forgot-password" className="text-decoration-none">Forgot Password?</a>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        height: '100vh',
        backgroundImage: {bg6}, // Replace with your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div
        className="card shadow-sm"
        style={{ width: '100%', maxWidth: '400px', opacity: 0.9 }}
      >
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Login</h3>

          {/* Inside Image (e.g., logo or icon) */}
          <div className="text-center mb-4">
            <img
              src={bg6} // Replace with your image URL
              alt="Logo"
              className="img-fluid"
            />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
            <div className="mt-3 text-center">
              <a href="/forgot-password" className="text-decoration-none">Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

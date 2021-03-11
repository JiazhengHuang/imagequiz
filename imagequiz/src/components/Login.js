import React from "react";

function Login() {
    return (
        <>
            <form>
                <h3>Welcome to the sign in page</h3>
                <p>Enter your email:</p>
                <input type="text" />
                <p>Enter your password:</p>
                <input type="text" />
                <br />
                <button>Sign In</button>
            </form>
        </>
    );
}

export default Login;

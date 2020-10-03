import React, { useEffect, useState } from "react";
import ImageLayout from "../ImageLayout";
import Student from "./Student";
import fire from "../config/fire";

function LoginPage2() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail("");
        setPassword("");
    };

    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    };

    const handleLogin = (e) => {
        e.preventDefault(e);
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((u) => {
                console.log(u);
            })
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                    default:
                        break;
                }
            });
    };

    const handleSignup = () => {
        clearInputs();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((u) => {
                console.log(u);
            })
            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-exists":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                    default:
                        break;
                }
            });
    };

    const handleLogout = () => {
        fire.auth().signOut();
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);

    return (
        <div>
            {user ? (
                <ImageLayout handleLogout={handleLogout} />
            ) : (
                    <Student
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        handleLogin={handleLogin}
                        handleSignup={handleSignup}
                        hasAccount={hasAccount}
                        setHasAccount={setHasAccount}
                        emailError={emailError}
                        passwordError={passwordError}
                    />
                )}
        </div>
    );
}

export default LoginPage2;

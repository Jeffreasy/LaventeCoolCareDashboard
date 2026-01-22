import { SignUp } from "@clerk/clerk-react";
import ConvexAuthProvider from "../ConvexAuthProvider";

export default function SignupPageIsland() {
    return (
        <ConvexAuthProvider>
            <div className="flex justify-center items-center w-full">
                <SignUp signInUrl="/login" forceRedirectUrl="/dashboard" />
            </div>
        </ConvexAuthProvider>
    );
}

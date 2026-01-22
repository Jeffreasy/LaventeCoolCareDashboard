import { SignIn } from "@clerk/clerk-react";
import ConvexAuthProvider from "../ConvexAuthProvider";

export default function LoginPageIsland() {
    return (
        <ConvexAuthProvider>
            <div className="flex justify-center items-center w-full">
                <SignIn signUpUrl="/signup" forceRedirectUrl="/dashboard" />
            </div>
        </ConvexAuthProvider>
    );
}

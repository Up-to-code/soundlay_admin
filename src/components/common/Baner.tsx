"use client";

import { useAuth } from "@/hook/useAuth";
import { Button } from "../ui/button";
import Image from "next/image";

const UserProfile: React.FC = () => {
  const { user, loading, signInWithGoogle, logout } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="text-white flex flex-col justify-center items-center mt-10 gap-8">
      {user ? (
        <>
          {user.photoURL && (
            <Image
              src={user.photoURL}
              width={200}
              height={200}
              alt="me"
              className="rounded-full"
            ></Image>
          )}
          <p className="font-bold text-2xl">Welcome, {user.displayName || user.email}</p>
          <Button onClick={logout}>Logout</Button>
        </>
      ) : (
        <Button onClick={signInWithGoogle}>Sign in with Google</Button>
      )}
    </div>
  );
};

export default UserProfile;

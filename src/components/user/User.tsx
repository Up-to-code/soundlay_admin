'use client'
import { useAuth } from "@/hook/useAuth";
import Image from "next/image";

const UserProfile: React.FC = () => {
  const { user, loading, logout } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {user?.photoURL ? (
        <>
          <Image className="rounded-full" width={40} height={40} src={user?.photoURL} alt="user"></Image>
        </>
      ) : (
        <p>No user</p>
      )}
    </div>
  );
};

export default UserProfile;

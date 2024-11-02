import ProfileForm from "@/components/forms/ProfileForm";

const ProfilePage = () => {
  return (
    <section className="py-10">
      <div className="p-10 space-y-4">
        <h1>Profile</h1>
        <ProfileForm />
      </div>
    </section>
  );
};

export default ProfilePage;

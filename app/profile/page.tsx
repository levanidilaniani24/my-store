async function getUser() {
  const res = await fetch('https://fakestoreapi.com/users/3', { cache: 'no-store' });
  return res.json();
}

export default async function ProfilePage() {
  const user = await getUser();

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg my-10">
      <h1 className="text-2xl font-bold mb-6 border-b pb-2">მომხმარებლის პროფილი</h1>
      <div className="space-y-3 text-gray-700">
        <p><strong>სახელი:</strong> {user?.name?.firstname} {user?.name?.lastname}</p>
        <p><strong>მომხმარებლის სახელი:</strong> {user?.username}</p>
        <p><strong>ელ-ფოსტა:</strong> {user?.email}</p>
        <p><strong>ტელეფონი:</strong> {user?.phone}</p>
        <p><strong>ქალაქი:</strong> {user?.address?.city}</p>
      </div>
    </div>
  );
}
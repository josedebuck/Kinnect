import { useState } from 'react';
import { BiBadgeCheck } from 'react-icons/bi';
import useUsers from '@/hooks/useUsers';
import Avatar from '../Avatar';

const FollowBar = () => {
  const { data: users = [] } = useUsers();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter((user: { name: string; }) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-6 py-4 w-full">
      <div className="bg-neutral-800 rounded-xl p-4 lg:flex-row flex-col-reverse relative">
        <div className="relative">
          <input
            type="text"
            placeholder="Search users"
            className="px-3 py-2 rounded-md bg-neutral-700 text-white w-full border-2 border-gray-700 mx-auto h-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm.length > 0 && (
            <div className="flex gap-6 mt-4 flex-col bg-neutral-800 bg-opacity-95 rounded-xl absolute top-100 left-0 w-full z-10">
              {filteredUsers.map((user: Record<string, any>) => (
                <div key={user.id} className="flex flex-row gap-4 items-center py-2 px-4">
                  <Avatar userId={user.id} />
                  <div className="flex flex-col">
                    <div className="flex flex-row items-center">
                      <p className="text-white font-semibold text-sm">{user.name}</p>
                      {user.verified && (
                        <BiBadgeCheck className="text-white ml-1" size={16} />
                      )}
                    </div>
                    <p className="text-neutral-400 text-sm">@{user.username}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-6 mt-4 flex-col bg-neutral-300 bg-opacity-60 rounded-xl w-full">
          {/* aquí va el contenido que no quieres que se modifique */}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;

import { FC } from 'react';

interface LogEntry {
  id: number;
  action: 'login' | 'logout';
  timestamp: string;
  user_email: string;
  user_timezone?: string;
}

// Dummy data
const dummyLogs: LogEntry[] = [
  {
    id: 1,
    action: 'login',
    timestamp: '2024-02-11T08:30:00Z',
    user_email: 'Yukmari@gmail.com',
    user_timezone: 'Asia/Jakarta'
  },
  {
    id: 2,
    action: 'logout',
    timestamp: '2024-02-11T12:45:00Z',
    user_email: 'Yukmari@gmail.com',
    user_timezone: 'Asia/Jakarta'
  },
  {
    id: 3,
    action: 'login',
    timestamp: '2024-02-11T14:15:00Z',
    user_email: 'Yukmari@gmail.com',
    user_timezone: 'Asia/Jakarta'
  },
  {
    id: 4,
    action: 'logout',
    timestamp: '2024-02-11T17:30:00Z',
    user_email: 'Yukmari@gmail.com',
    user_timezone: 'Asia/Jakarta'
  }
];

const Logs: FC = () => {
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('id-ID', {
      timeZone: userTimezone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  return (
    <div className="p-6 mt-5 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Logs</h2>
      <p className="text-sm text-gray-600 mb-4">Timezone: {userTimezone}</p>
      {dummyLogs.length === 0 ? (
        <p className="text-gray-500">No logs found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
                <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pengguna
                </th>
                <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Catatan Waktu
                </th>
                <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Zona waktu
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {dummyLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap capitalize">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      log.action === 'login' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {log.action}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{log.user_email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {formatTimestamp(log.timestamp)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {log.user_timezone || userTimezone}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Logs;
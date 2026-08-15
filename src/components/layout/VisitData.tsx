'use client';

import { useEffect, useState } from 'react';
import { Eye } from '@phosphor-icons/react';

type VisitStats = {
  totalUV: string;
  dailyUV: string;
}

export default function VisitData() {
  const [stats, setStats] = useState<VisitStats>({
    totalUV: '-',
    dailyUV: '-',
  });

  useEffect(() => {
    const fetchVisitStats = async () => {
      try {
        const response = await fetch('/api/visit-stats');
        if (!response.ok) return;
        const data = await response.json();
        setStats(data);
      } catch {
        return;
      }
    };

    fetchVisitStats();
    const interval = setInterval(fetchVisitStats, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row items-center justify-center gap-2 text-sm text-gray-500 mt-2">
      <Eye size={16} weight="duotone" />
      总访问: {stats.totalUV} · 今日访问: {stats.dailyUV}
    </div>
  );
}
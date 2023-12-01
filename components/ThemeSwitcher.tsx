'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SunIcon, MoonIcon, Monitor } from 'lucide-react';

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <Tabs defaultValue="theme">
      <TabsList className="border">
        <TabsTrigger value="light" onClick={() => setTheme('light')}>
          <SunIcon />
        </TabsTrigger>
        <TabsTrigger value="dark" onClick={() => setTheme('dark')}>
          <MoonIcon />
        </TabsTrigger>
        <TabsTrigger value="system" onClick={() => setTheme('system')}>
          <Monitor />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default ThemeSwitcher;

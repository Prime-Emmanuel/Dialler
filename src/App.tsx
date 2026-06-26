/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone } from 'lucide-react';

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <a
        href="tel:%23123%23"
        className="group flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-xl font-medium text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl active:scale-95"
      >
        <Phone className="h-6 w-6 transition-transform group-hover:rotate-12" />
        Dial #123#
      </a>
    </div>
  );
}

import AdminSidebar from '@/components/admin/AdminSidebar';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Admin Control Center | ELYRION Fragrances',
  description: 'Manage products, note families, bundles, staff users, and customer orders.',
};

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#F5F2EB] text-elyrion-charcoal">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}


import { Suspense } from 'react';
import { CardSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { Metadata } from 'next';

export const metaData: Metadata = {
  title: "Dashboard"
}
export default async function Page() {
  
  return (
    <>
      <p>Dashboard</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback = {<CardSkeleton />}>
          <CardWrapper  />
        </Suspense>
      </div>
      <div className="grid mt-4 gap-6 grid-cols-1  md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback = {<RevenueChartSkeleton />}>
           <RevenueChart />
        </Suspense>
        <Suspense fallback = {<LatestInvoicesSkeleton />}>
          <LatestInvoices  />
        </Suspense>
      </div>
    </>
  );
}

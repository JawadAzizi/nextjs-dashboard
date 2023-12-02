import { fetchCardData, fetchLatestInvoices, fetchRevenue } from '../lib/data';
import CardWrapper, { Card } from '../ui/dashboard/cards';
import LatestInvoices from '../ui/dashboard/latest-invoices';
import NavLinks from '../ui/dashboard/nav-links';
import RevenueChart from '../ui/dashboard/revenue-chart';

export default async function Page() {

  const cardData = await  fetchCardData().then((res) => res);
  const revenue = await  fetchRevenue().then((res) => res);
  const latestInvoices = await  fetchLatestInvoices().then((res) => res);
  
  return (
    <>
      <p>Dashboard</p>
      <div className="flex justify-stretch gap-2">
        <CardWrapper cardData={cardData} />
      </div>
      <div className="flex">
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </>
  );
}
